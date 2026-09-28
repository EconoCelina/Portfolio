/**
 * ==========================================================================
 * PORTFOLIO PROFESIONAL - JAVASCRIPT NATIVO (VANILLA ES6+)
 * Funcionalidades: Theme Toggle, Mobile Nav, Smooth Scroll, Projects Filter,
 * Form Validation & Toast Notification, Dynamic Year.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de componentes
  initThemeToggle();
  initMobileMenu();
  initSmoothScrollAndActiveNav();
  initProjectFilters();
  initContactForm();
  initDynamicYear();
  initProjectModals();
});

/* --------------------------------------------------------------------------
   1. CAMBIO DE TEMA (DARK / LIGHT MODE) CON LOCALSTORAGE
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const rootElement = document.documentElement;
  const STORAGE_KEY = 'portfolio_theme';

  // 1. Obtener tema guardado o preferencia del sistema
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  // Aplicar tema inicial
  applyTheme(currentTheme);

  // 2. Escuchar evento de clic en el botón de tema
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
      localStorage.setItem(STORAGE_KEY, currentTheme);
    });
  }

  function applyTheme(theme) {
    rootElement.setAttribute('data-theme', theme);
    const ariaLabelText = theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', ariaLabelText);
      themeToggleBtn.setAttribute('title', ariaLabelText);
    }
  }
}

/* --------------------------------------------------------------------------
   2. MENÚ HAMBURGUESA RESPONSIVE PARA MÓVILES
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburgerBtn || !navMenu) return;

  // Toggle Menú
  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    toggleMenu(!isExpanded);
  });

  // Cerrar menú al hacer clic en cualquier enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Cerrar menú al hacer clic fuera de él
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-active') && !navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Cerrar menú al presionar la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
      toggleMenu(false);
    }
  });

  function toggleMenu(open) {
    hamburgerBtn.classList.toggle('is-active', open);
    navMenu.classList.toggle('is-active', open);
    hamburgerBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
}

/* --------------------------------------------------------------------------
   3. SCROLL SUAVE Y NAVEGACIÓN ACTIVA (INTERSECTION OBSERVER)
   -------------------------------------------------------------------------- */
function initSmoothScrollAndActiveNav() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll Suave mediante JS (para compatibilidad consistente)
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // IntersectionObserver para marcar la sección activa en el menú
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   4. FILTRO DE PROYECTOS (TODOS / DESARROLLO WEB / ANÁLISIS DE DATOS / LIMPIEZA DE DATOS)  
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Activar botón seleccionado
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. VALIDACIÓN DE FORMULARIO DE CONTACTO & NOTIFICACIÓN TOAST
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toast-title');
  const toastDesc = document.getElementById('toast-desc');

  if (!form) return;

  const fields = {
    name: { el: document.getElementById('name'), errorEl: document.getElementById('name-error') },
    email: { el: document.getElementById('email'), errorEl: document.getElementById('email-error') },
    subject: { el: document.getElementById('subject'), errorEl: document.getElementById('subject-error') },
    message: { el: document.getElementById('message'), errorEl: document.getElementById('message-error') }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset mensajes de error
    Object.values(fields).forEach(f => {
      if (f.errorEl) f.errorEl.textContent = '';
      if (f.el) f.el.style.borderColor = '';
    });

    // Validar Nombre
    if (!fields.name.el.value.trim()) {
      showFieldError(fields.name, 'Por favor, ingresa tu nombre');
      isValid = false;
    }

    // Validar Email
    const emailValue = fields.email.el.value.trim();
    if (!emailValue) {
      showFieldError(fields.email, 'Por favor, ingresa tu correo');
      isValid = false;
    } else if (!validateEmail(emailValue)) {
      showFieldError(fields.email, 'Por favor, ingresa un correo electrónico válido');
      isValid = false;
    }

    // Validar Asunto
    if (!fields.subject.el.value.trim()) {
      showFieldError(fields.subject, 'Por favor, ingresa el asunto');
      isValid = false;
    }

    // Validar Mensaje
    if (!fields.message.el.value.trim()) {
      showFieldError(fields.message, 'Por favor, escribe un mensaje');
      isValid = false;
    }

    if (isValid) {
      const submitBtn = document.getElementById('submit-btn');
      const originalText = submitBtn.innerHTML;

      // Estado de carga en el botón
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Enviando...</span>`;

      // Simulación de envío de formulario (API call mock)
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        showToast('¡Mensaje Enviado con Éxito!', 'Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
      }, 1000);
    }
  });

  function showFieldError(field, message) {
    if (field.errorEl) field.errorEl.textContent = message;
    if (field.el) field.el.style.borderColor = '#ef4444';
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showToast(title, desc) {
    if (!toast) return;
    toastTitle.textContent = title;
    toastDesc.textContent = desc;

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

/* --------------------------------------------------------------------------
   6. AÑO ACTUAL DINÁMICO EN FOOTER
   -------------------------------------------------------------------------- */
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   7. MODAL DETALLADO DE PROYECTO 5 (SISTEMA DE SANITIZACIÓN & NORMALIZACIÓN)
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const openBtn = document.getElementById('open-project-5-btn');
  const modal = document.getElementById('project-5-modal');
  const closeBtnHeader = document.getElementById('close-modal-p5');
  const closeBtnFooter = document.getElementById('close-modal-p5-footer');
  const copyBtn = document.getElementById('copy-code-p5');

  if (!modal) return;

  function openModal() {
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtnHeader) closeBtnHeader.focus();
  }

  function closeModal() {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (openBtn) openBtn.focus();
  }

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (closeBtnHeader) closeBtnHeader.addEventListener('click', closeModal);
  if (closeBtnFooter) closeBtnFooter.addEventListener('click', closeModal);

  // Cerrar al hacer clic en el backdrop fuera del contenedor
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Cerrar con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });

  // Funcionalidad de copiar código Python al portapapeles (Helper reutilizable)
  function setupCopyButton(buttonId, codeText) {
    const btn = document.getElementById(buttonId);
    if (!btn) return;

    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeText).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>¡Copiado!</span>
        `;
        btn.style.background = 'rgba(16, 185, 129, 0.25)';
        btn.style.color = 'var(--emerald)';
        btn.style.borderColor = 'rgba(16, 185, 129, 0.5)';

        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.style.background = '';
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2500);
      }).catch(err => {
        console.error('Error al copiar código:', err);
      });
    });
  }

  // Configurar copia para Bloque A
  const codeBlockA = `# --- Procesamiento y unificación de archivos Excel ---
archivos = [f"{i}.xlsx" for i in range(1, 82)]
bases_filtradas = []

for archivo in archivos:
    try:
        expos = pd.read_excel(archivo)
        expos["Localidad"] = expos["Localidad"].astype(str).str.upper()
        expos["Localidad"] = expos["Localidad"].replace(mapeo_localidades)
        expos_filtrado = expos[expos["Localidad"].isin(localidades_validas)]
        bases_filtradas.append(expos_filtrado)
    except Exception as e:
        print(f"⚠ Error con {archivo}: {e}")

base_final = pd.concat(bases_filtradas, ignore_index=True)
base_final.to_excel("Base_Unificada.xlsx", index=False)`;
  setupCopyButton('copy-code-p5-a', codeBlockA);

  // Configurar copia para Bloque B
  const codeBlockB = `# --- Clasificación automatizada de productos según NCM ---
def clasificar_producto(ncm):
    try:
        limpio = ''.join(filter(str.isdigit, str(ncm)))
        if limpio.startswith(("01", "02", "03", "07", "08", "10", "12", "13", "25", "5201")):  
            return "Primario"
        elif limpio.startswith(("28","29","30","31","32","33","34","35","36","38","39","40","42","43","44","45","47","48","49","56","57","58","59","61","62","63","65","68","69","70","71","72","73","74","76","80","81","82","83","84","85","86","87","90","92","94","95","96","97")):
            return "MOI"
        elif limpio.startswith(("04","05","09","11","15","16","17","18","19","20","21","22","23","41","5202","5205")):
            return "MOA"
        elif limpio.startswith("27"):
            return "Energía"
        else:
            return None
    except:
        return None

Exportaciones_2025["Sector"] = Exportaciones_2025["NCM-SIM"].apply(clasificar_producto)`;
  setupCopyButton('copy-code-p5-b', codeBlockB);
}
