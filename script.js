/**
 * ==========================================================================
 * PORTFOLIO PROFESIONAL - JAVASCRIPT NATIVO (VANILLA ES6+)
 * Funcionalidades: Language Toggle (ES/EN), Theme Toggle, Mobile Nav,
 * Smooth Scroll, Projects Filter, Form Validation & Toast Notification,
 * Dynamic Year, Modal & Clipboard.
 * ==========================================================================
 */

/* --------------------------------------------------------------------------
   DICCIONARIO DE TRADUCCIONES (ESPAÑOL / INGLÉS)
   -------------------------------------------------------------------------- */
const i18nTranslations = {
  es: {
    meta_description: "Portfolio profesional de Analista de Datos. Proyectos, habilidades y contacto.",
    doc_title: "Portfolio Profesional | Data Analyst",
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    aria_logo: "Ir al inicio",
    aria_nav: "Navegación principal",
    aria_hamburger: "Abrir menú de navegación",
    aria_github: "Perfil de GitHub",
    aria_linkedin: "Perfil de LinkedIn",
    aria_email: "Enviar Email Directo",
    aria_modal_close: "Cerrar ventana de detalles",

    // Hero Section
    hero_badge: "Disponible para nuevos proyectos",
    hero_title: 'Data Analyst <br><span class="gradient-text">& Economista</span>',
    hero_desc: "Analista de Datos con base en Economía y capacidades de Desarrollo Frontend. Combino el análisis cuantitativo, la modelación de datos y el desarrollo web para crear productos digitales con impacto de negocio.",
    hero_cta_projects: "Ver Proyectos",
    hero_cta_contact: "Contactarme",
    hero_stat_1_label: "Años de Experiencia",
    hero_stat_2_label: "Vanilla JS & Clean Code",
    hero_stat_3_label: "Python & SQL",
    code_card_role: "Economista, Data Analyst & Frontend Developer",
    code_card_passion: "Construir la web inteligente",
    code_card_comment: "// Ejecutar transformación de datos a valor",

    // About Section
    about_subtitle: "Trayectoria & Enfoque",
    about_title: "Sobre Mí",
    about_card1_title: "Perspectiva Económica",
    about_card1_desc: "Mi formación en Economía me permite interpretar los datos dentro del contexto en el que se generan, incorporando una perspectiva micro y macroeconómica, modelos cuantitativos y una comprensión de los incentivos y relaciones que existen detrás de los números.",
    about_card2_title: "Data & Business Intelligence",
    about_card2_desc: "A partir de herramientas como Python, SQL, R y Power BI, transformo datos en información útil mediante procesos de limpieza, análisis, visualización y construcción de KPIs, buscando responder preguntas concretas y facilitar la toma de decisiones.",
    about_card3_title: "Tecnología",
    about_card3_desc: "Me interesa especialmente cómo los avances tecnológicos están transformando la forma en que recopilamos, analizamos e interpretamos información, y cómo estas herramientas pueden potenciar el análisis económico.",

    // Skills Section
    skills_subtitle: "Stack Tecnológico",
    skills_title: "Mis Habilidades",
    skills_cat1_title: "Data Analytics & Science",
    skills_item_py_desc: 'Data Cleaning <span class="skill-desc-bullet">·</span> Exploratory Analysis <span class="skill-desc-bullet">·</span> ETL',
    skills_item_vis_title: "Visualización de Datos",
    skills_item_vis_desc: 'Matplotlib <span class="skill-desc-bullet">·</span> Seaborn <span class="skill-desc-bullet">·</span> Dashboards',
    skills_cat2_title: "Bases de Datos & SQL",
    skills_item_sql_desc: 'Consultas Complejas <span class="skill-desc-bullet">·</span> Joins & Aggregations <span class="skill-desc-bullet">·</span> Normalización',
    skills_item_git_title: "Git & Control de Versiones",
    skills_item_git_desc: 'Flujo de Ramas <span class="skill-desc-bullet">·</span> Commits <span class="skill-desc-bullet">·</span> Repositorios GitHub',
    skills_cat3_title: "Economía & BI",
    skills_item_econ_title: "Análisis Económico",
    skills_item_econ_desc: 'Modelos Cuantitativos <span class="skill-desc-bullet">·</span> Interpretación de KPIs <span class="skill-desc-bullet">·</span> Toma de Decisiones',
    skills_item_bi_desc: 'Power BI <span class="skill-desc-bullet">·</span> Reportes Financieros <span class="skill-desc-bullet">·</span> Indicadores Clave',
    skills_cat4_title: "Frontend Development",
    skills_item_fe_desc: 'Responsive Design <span class="skill-desc-bullet">·</span> Web Layouts <span class="skill-desc-bullet">·</span> UI Development',
    skills_item_js_desc: 'DOM Manipulation <span class="skill-desc-bullet">·</span> Interactive Interfaces',
    skills_badges_title: "Tecnologías Principales",

    // Projects Section
    projects_subtitle: "Portafolio de Trabajos",
    projects_title: "Proyectos Destacados",
    filter_all: "Todos",
    filter_web: "Desarrollo Web",
    filter_data: "Análisis de Datos",
    filter_cleaning: "Limpieza de Datos",
    tag_cleaning: "Limpieza de Datos",
    tag_data: "Análisis de Datos",
    tag_data_bi: "Análisis de Datos & BI",
    tag_econometrics: "Análisis Econométrico",
    tag_web: "Desarrollo Web",
    btn_view_project: "Ver Proyecto",
    btn_github: "Código en GitHub",
    demo_alert: "Demostración interactiva en línea",

    p1_title: "Limpieza & Normalización de Datasets",
    p1_desc: "Pipeline automatizado para depuración, detección de valores nulos/anómalos, reconocimiento de localidades y empresas utilizando Python (Pandas y Numpy).",
    p2_title: "Análisis de la Industria Hidrocarburífera en Argentina (Petróleo & Gas)",
    p2_desc: "Estudio econométrico y visualización interactiva sobre la evolución de la producción de gas y petróleo en Argentina, enfocado en el impacto de Vaca Muerta y el perfil de las principales cuencas y empresas operadoras.",
    p3_title: "E-Commerce Web Application (Vanilla JS)",
    p3_desc: "Tienda en línea completa construida sin frameworks. Incluye catálogo interactivo, filtro dinámico por productos, carrito de compras con persistencia en localStorage.",
    p4_title: "Pipeline ETL & Análisis de Tendencias de Mercado",
    p4_desc: "Solución automatizada de extracción y limpieza de datos con Python SQL alchemy, análisis estadístico multivariable e informes dinámicos de proyección.",
    p5_title: "SaaS Product Landing & Analytics Interface",
    p5_desc: "Página de aterrizaje de alto rendimiento optimizada para conversión y SEO. Diseño responsive moderno con glassmorphism y animaciones suaves en CSS/JS.",

    // Contact Section
    contact_subtitle: "¿Tienes un proyecto en mente?",
    contact_title: "Hablemos y Hagámoslo Realidad",
    contact_info_subtitle: "Información de Contacto",
    contact_info_text: "Estoy abierto a oportunidades laborales, proyectos freelance o colaboraciones de ciencia/análisis de datos.",
    contact_email_label: "Correo Electrónico",
    contact_location_label: "Ubicación",
    contact_location_val: "Disponible Presencial / Remoto / Híbrido",
    contact_avail_label: "Disponibilidad",
    contact_avail_val: "Respuesta en < 24 Horas",
    social_title: "Sígueme en Redes",

    label_name: "Nombre Completo",
    placeholder_name: "Tu nombre o empresa",
    err_name: "Por favor, ingresa tu nombre",
    label_email: "Correo Electrónico",
    placeholder_email: "ejemplo@correo.com",
    err_email_req: "Por favor, ingresa tu correo",
    err_email_invalid: "Por favor, ingresa un correo electrónico válido",
    label_subject: "Asunto",
    placeholder_subject: "Idea de proyecto / Consulta",
    err_subject: "Por favor, ingresa el asunto",
    label_message: "Mensaje",
    placeholder_message: "Describe brevemente tus requerimientos...",
    err_message: "Por favor, escribe un mensaje",
    btn_submit: "Enviar Mensaje",
    btn_sending: "Enviando...",

    // Toast & Footer
    toast_title: "¡Mensaje Enviado!",
    toast_desc: "Gracias por contactarte. Te responderé pronto.",
    footer_rights: "Todos los derechos reservados. Diseñado & desarrollado con Vanilla Web Stack.",

    // Modal Project 5
    modal_tag: "Limpieza & Transformación de Datos",
    modal_status: "Caso Real & Production-Ready",
    modal_main_title: 'Limpieza & Transformación de Datos: <br><span class="gradient-text-emerald">Perfil Exportador de Empresas Santafesinas</span>',
    modal_tagline: "Sistema de Sanitización, Normalización y Consolidación de Datasets de Comercio Exterior",
    modal_kpi1_label: "Archivos Procesados",
    modal_kpi1_sub: "Datasets Excel de origen (Softrade)",
    modal_kpi2_label: "Rol en el Proyecto",
    modal_kpi2_sub: "Limpieza, Transformación e Integración",
    modal_kpi3_label: "Resultado Consolidado",
    modal_kpi3_sub: '"Fuente de Verdad" lista para Power BI',
    modal_sec1_title: "Contexto del Negocio & Objetivo",
    modal_sec1_context_sub: "Contexto",
    modal_sec1_context_p: "Preparación y transformación de datos de comercio exterior para construir una base confiable de exportaciones de empresas de la provincia de Santa Fe a partir de reportes descargados de Softrade con inconsistencias, problemas de codificación y tildes.",
    modal_sec1_obj_sub: "Objetivo del Proyecto",
    modal_sec1_obj_p: "Construir una base consolidada, limpia y consistente aplicando procesos reproducibles de filtrado, validación y transformación.",
    modal_bq_title: "Pregunta de Negocio",
    modal_bq_p: "¿Cuál es el perfil exportador de las empresas santafesinas y qué características de sus exportaciones pueden identificarse a partir de la información de comercio exterior?",
    modal_sec2_title: "Proceso de Trabajo (Paso a Paso)",
    modal_step1_badge: "Paso 1",
    modal_step1_title: "Preparación de Datos",
    modal_step1_desc: "Ejecución de 2 notebooks de Python en VS Code con <code>pandas</code>, <code>unidecode</code> y <code>openpyxl</code>.",
    modal_step2_badge: "Paso 2",
    modal_step2_title: "Filtrado por Localidad",
    modal_step2_desc: "Conversión a mayúsculas, mapeo de variantes de escritura y consolidación de 81 archivos en <code>Base_Unificada.xlsx</code>.",
    modal_step3_badge: "Paso 3",
    modal_step3_title: "Corrección de Localidades",
    modal_step3_desc: "Uso de archivo auxiliar <code>Empresas modificadas.xlsx</code> para resolver casos con casas matrices en otras provincias.",
    modal_step4_badge: "Paso 4",
    modal_step4_title: "Filtrado por Empresa",
    modal_step4_desc: "Lista manual validada de exportadores con variantes de razón social y errores tipográficos.",
    modal_step5_badge: "Paso 5",
    modal_step5_title: "Cruce, Validación y Control de Duplicados",
    modal_step5_desc: "Comparación de salidas de localidad y empresa para evitar duplicación de registros.",
    modal_step6_badge: "Paso 6",
    modal_step6_title: "Transformación y Clasificación NCM",
    modal_step6_desc: "Clasificación automatizada en Primario, MOA, MOI y Energía mediante el Nomenclador Mercosur.",
    modal_sec3_title: "Snippets de Código Python",
    modal_blockA_subtitle: "Bloque A: Algoritmo de Filtrado y Unificación de 81 Archivos Excel",
    modal_blockA_intro: "Procesamiento iterativo de datasets descargados de Softrade, depuración de localidades y consolidación masiva:",
    modal_copyA_btn: "Copiar Bloque A",
    modal_blockB_subtitle: "Bloque B: Función de Clasificación por Sector según NCM (Primario, MOA, MOI, Energía)",
    modal_blockB_intro: "Clasificación automatizada de productos según posición arancelaria NCM-SIM:",
    modal_copyB_btn: "Copiar Bloque B",
    modal_close_footer: "Cerrar Vista",
    copied_text: "¡Copiado!",

    // Modal Petroleum & Gas
    modal_petro_tag: "Análisis de Datos & Business Intelligence",
    modal_petro_main_title: 'Análisis Integral de Producción de Petróleo y Gas en Argentina <br><span class="gradient-text">Evolución Hidrocarburífera & Vaca Muerta</span>',
    modal_petro_tagline: "Proyecto de Data Analytics & Business Intelligence (Data-analyst-Herrera-Sosa)",
    modal_petro_sec_dashboard: "Dashboard Interactivo de Producción de Gas en Argentina",
    modal_petro_dashboard_caption: "Dashboard interactivo desarrollado en Power BI para explorar las tendencias de producción no convencional (Shale & Tight Gas vs. Convencional), la participación de mercado por cuenca (Neuquina, Golfo San Jorge, Austral) y el ranking de las principales empresas operadoras (YPF, Tecpetrol, Pan American Energy, entre otras).",
    modal_petro_sec_bq: "Pregunta de Negocio & Objetivos",
    modal_petro_bq_title: "Preguntas Clave del Análisis",
    modal_petro_bq_1: "¿Cómo ha evolucionado la matriz energética no convencional en Argentina a partir del desarrollo de Vaca Muerta?",
    modal_petro_bq_2: "¿Cuáles son las cuencas clave que impulsan el crecimiento de la oferta de gas natural y petróleo?",
    modal_petro_bq_3: "¿Qué operadoras lideran la extracción y cómo varían las curvas de declinación por yacimiento?",
    modal_petro_sec_pipeline: "Pipeline & Metodología de Datos",
    modal_petro_step1_badge: "Paso 1",
    modal_petro_step1_title: "Ingesta de Datos",
    modal_petro_step1_desc: "Extracción de series históricas oficiales del Capítulo IV de la Secretaría de Energía de la Nación.",
    modal_petro_step2_badge: "Paso 2",
    modal_petro_step2_title: "Limpieza & ETL en Python",
    modal_petro_step2_desc: "Normalización de nombres de yacimientos, tratamiento de registros nulos, estandarización de unidades de medida (Mm3/día para gas y m3/día para petróleo).",
    modal_petro_step3_badge: "Paso 3",
    modal_petro_step3_title: "Modelado de Datos",
    modal_petro_step3_desc: "Estructuración de esquemas en estrella (Star Schema) en Power BI uniendo tablas de Hechos (Producción mensual) con Dimensiones (Empresas, Cuencas, Yacimientos, Ubicación Geográfica).",
    modal_petro_step4_badge: "Paso 4",
    modal_petro_step4_title: "Métricas DAX",
    modal_petro_step4_desc: "Creación de medidas dinámicas para calcular variaciones interanuales (YoY), acumulados anuales (YTD) y porcentaje de participación no convencional.",
    modal_petro_sec_value: "Valor para el Negocio & Conclusiones",
    modal_petro_val1_title: "Impacto en Soberanía Energética",
    modal_petro_val1_desc: "Permite evaluar el impacto de las inversiones estratégicas en Vaca Muerta sobre la soberanía energética y la balanza comercial de combustibles.",
    modal_petro_val2_title: "Análisis Comparativo de Operadoras",
    modal_petro_val2_desc: "Facilita el análisis comparativo del rendimiento entre empresas públicas y privadas en el sector hidrocarburífero argentino."
  },
  en: {
    meta_description: "Professional Data Analyst Portfolio. Projects, skills, and contact information.",
    doc_title: "Professional Portfolio | Data Analyst",
    nav_home: "Home",
    nav_about: "About me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    aria_logo: "Go to home",
    aria_nav: "Main navigation",
    aria_hamburger: "Open navigation menu",
    aria_github: "GitHub Profile",
    aria_linkedin: "LinkedIn Profile",
    aria_email: "Send Direct Email",
    aria_modal_close: "Close details window",

    // Hero Section
    hero_badge: "Available for new projects",
    hero_title: 'Data Analyst <br><span class="gradient-text">& Economist</span>',
    hero_desc: "Data Analyst with an Economics background and Frontend Development capabilities. I combine quantitative analysis, data modeling, and web development to build digital products with business impact.",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Contact Me",
    hero_stat_1_label: "Years of Experience",
    hero_stat_2_label: "Vanilla JS & Clean Code",
    hero_stat_3_label: "Python & SQL",
    code_card_role: "Economist, Data Analyst & Frontend Developer",
    code_card_passion: "Building the intelligent web",
    code_card_comment: "// Execute data-to-value transformation",

    // About Section
    about_subtitle: "Career & Focus",
    about_title: "About Me",
    about_card1_title: "Economic Perspective",
    about_card1_desc: "My background in Economics enables me to interpret data within the context in which it is generated, incorporating micro and macroeconomic perspectives, quantitative models, and an understanding of the incentives behind the numbers.",
    about_card2_title: "Data & Business Intelligence",
    about_card2_desc: "Using tools like Python, SQL, R, and Power BI, I transform data into actionable insights through cleaning, exploratory analysis, visualization, and KPI metrics to support data-driven decision making.",
    about_card3_title: "Technology",
    about_card3_desc: "I am particularly interested in how technological advancements are transforming data collection, analysis, and interpretation, and how these tools can enhance economic research.",

    // Skills Section
    skills_subtitle: "Tech Stack",
    skills_title: "My Skills",
    skills_cat1_title: "Data Analytics & Science",
    skills_item_py_desc: 'Data Cleaning <span class="skill-desc-bullet">·</span> Exploratory Analysis <span class="skill-desc-bullet">·</span> ETL',
    skills_item_vis_title: "Data Visualization",
    skills_item_vis_desc: 'Matplotlib <span class="skill-desc-bullet">·</span> Seaborn <span class="skill-desc-bullet">·</span> Dashboards',
    skills_cat2_title: "Databases & SQL",
    skills_item_sql_desc: 'Complex Queries <span class="skill-desc-bullet">·</span> Joins & Aggregations <span class="skill-desc-bullet">·</span> Normalization',
    skills_item_git_title: "Git & Version Control",
    skills_item_git_desc: 'Branching Workflows <span class="skill-desc-bullet">·</span> Commits <span class="skill-desc-bullet">·</span> GitHub Repositories',
    skills_cat3_title: "Economics & BI",
    skills_item_econ_title: "Economic Analysis",
    skills_item_econ_desc: 'Quantitative Models <span class="skill-desc-bullet">·</span> KPI Interpretation <span class="skill-desc-bullet">·</span> Decision Making',
    skills_item_bi_desc: 'Power BI <span class="skill-desc-bullet">·</span> Financial Reports <span class="skill-desc-bullet">·</span> Key Metrics',
    skills_cat4_title: "Frontend Development",
    skills_item_fe_desc: 'Responsive Design <span class="skill-desc-bullet">·</span> Web Layouts <span class="skill-desc-bullet">·</span> UI Development',
    skills_item_js_desc: 'DOM Manipulation <span class="skill-desc-bullet">·</span> Interactive Interfaces',
    skills_badges_title: "Core Technologies",

    // Projects Section
    projects_subtitle: "Portfolio of Work",
    projects_title: "Featured Projects",
    filter_all: "All",
    filter_web: "Web Development",
    filter_data: "Data Analytics",
    filter_cleaning: "Data Cleaning",
    tag_cleaning: "Data Cleaning",
    tag_data: "Data Analytics",
    tag_data_bi: "Data Analytics & BI",
    tag_econometrics: "Econometric Analysis",
    tag_web: "Web Development",
    btn_view_project: "View Project",
    btn_github: "GitHub Code",
    demo_alert: "Online interactive demonstration",

    p1_title: "Dataset Cleaning & Normalization",
    p1_desc: "Automated pipeline for data scrubbing, null/outlier detection, city and company entity recognition using Python (Pandas & NumPy).",
    p2_title: "Hydrocarbon Industry Analysis in Argentina (Oil & Gas)",
    p2_desc: "Econometric study and interactive visualization on natural gas and crude oil production trends in Argentina, focusing on Vaca Muerta and top basins & operators.",
    p3_title: "E-Commerce Web Application (Vanilla JS)",
    p3_desc: "Full-featured online store built without frameworks. Includes interactive catalog, dynamic product filtering, and shopping cart persisted in localStorage.",
    p4_title: "ETL Pipeline & Market Trend Analysis",
    p4_desc: "Automated extraction and data cleaning solution using Python SQLAlchemy, multivariable statistical analysis, and dynamic forecast reports.",
    p5_title: "SaaS Product Landing & Analytics Interface",
    p5_desc: "High-performance landing page optimized for conversion and SEO. Modern responsive design featuring glassmorphism and smooth CSS/JS animations.",

    // Contact Section
    contact_subtitle: "Have a project in mind?",
    contact_title: "Let's Talk & Make It Happen",
    contact_info_subtitle: "Contact Information",
    contact_info_text: "I am open to job opportunities, freelance projects, or data science & analytics collaborations.",
    contact_email_label: "Email Address",
    contact_location_label: "Location",
    contact_location_val: "Available On-site / Remote / Hybrid",
    contact_avail_label: "Availability",
    contact_avail_val: "Response in < 24 Hours",
    social_title: "Follow Me",

    label_name: "Full Name",
    placeholder_name: "Your name or company",
    err_name: "Please enter your name",
    label_email: "Email Address",
    placeholder_email: "example@email.com",
    err_email_req: "Please enter your email",
    err_email_invalid: "Please enter a valid email address",
    label_subject: "Subject",
    placeholder_subject: "Project idea / Inquiry",
    err_subject: "Please enter the subject",
    label_message: "Message",
    placeholder_message: "Briefly describe your requirements...",
    err_message: "Please write a message",
    btn_submit: "Send Message",
    btn_sending: "Sending...",

    // Toast & Footer
    toast_title: "Message Sent!",
    toast_desc: "Thank you for reaching out. I'll get back to you soon.",
    footer_rights: "All rights reserved. Designed & developed with Vanilla Web Stack.",

    // Modal Project 5
    modal_tag: "Data Cleaning & Transformation",
    modal_status: "Real-world Case & Production-Ready",
    modal_main_title: 'Data Cleaning & Transformation: <br><span class="gradient-text-emerald">Exporter Profile of Santa Fe Companies</span>',
    modal_tagline: "Sanitization, Normalization, and Consolidation System for Foreign Trade Datasets",
    modal_kpi1_label: "Files Processed",
    modal_kpi1_sub: "Source Excel Datasets (Softrade)",
    modal_kpi2_label: "Role in Project",
    modal_kpi2_sub: "Cleaning, Transformation & Integration",
    modal_kpi3_label: "Consolidated Result",
    modal_kpi3_sub: '"Single Source of Truth" ready for Power BI',
    modal_sec1_title: "Business Context & Objective",
    modal_sec1_context_sub: "Context",
    modal_sec1_context_p: "Preparation and transformation of foreign trade data to build a reliable export database for companies in Santa Fe province, starting from Softrade reports affected by encoding issues, typos, and accents.",
    modal_sec1_obj_sub: "Project Objective",
    modal_sec1_obj_p: "Build a consolidated, clean, and consistent database by applying reproducible filtering, validation, and transformation pipelines.",
    modal_bq_title: "Business Question",
    modal_bq_p: "What is the exporter profile of Santa Fe companies and what key export characteristics can be identified from foreign trade datasets?",
    modal_sec2_title: "Workflow Process (Step by Step)",
    modal_step1_badge: "Step 1",
    modal_step1_title: "Data Preparation",
    modal_step1_desc: "Execution of 2 Python notebooks in VS Code using <code>pandas</code>, <code>unidecode</code>, and <code>openpyxl</code>.",
    modal_step2_badge: "Step 2",
    modal_step2_title: "City Filtering",
    modal_step2_desc: "Uppercase conversion, mapping spelling variations, and consolidating 81 Excel files into <code>Base_Unificada.xlsx</code>.",
    modal_step3_badge: "Step 3",
    modal_step3_title: "City Correction",
    modal_step3_desc: "Using auxiliary reference file <code>Empresas modificadas.xlsx</code> to resolve headquarters located in other provinces.",
    modal_step4_badge: "Step 4",
    modal_step4_title: "Company Filtering",
    modal_step4_desc: "Validated manual list of exporters handling legal entity name variations and typographical errors.",
    modal_step5_badge: "Step 5",
    modal_step5_title: "Cross-matching, Validation & Deduplication",
    modal_step5_desc: "Comparing city and company outputs to prevent record duplication.",
    modal_step6_badge: "Step 6",
    modal_step6_title: "NCM Classification & Transformation",
    modal_step6_desc: "Automated classification into Primary Goods, MOA (Agricultural Manufactures), MOI (Industrial Manufactures), and Energy via Mercosur Nomenclature.",
    modal_sec3_title: "Python Code Snippets",
    modal_blockA_subtitle: "Block A: Filtering Algorithm and 81 Excel File Consolidation",
    modal_blockA_intro: "Iterative processing of Softrade datasets, city sanitization, and bulk consolidation:",
    modal_copyA_btn: "Copy Block A",
    modal_blockB_subtitle: "Block B: Sector Classification Function by NCM (Primary, MOA, MOI, Energy)",
    modal_blockB_intro: "Automated product classification based on NCM-SIM tariff code:",
    modal_copyB_btn: "Copy Block B",
    modal_close_footer: "Close View",
    copied_text: "Copied!",

    // Modal Petroleum & Gas
    modal_petro_tag: "Data Analytics & Business Intelligence",
    modal_petro_main_title: 'Comprehensive Oil & Gas Production Analysis in Argentina <br><span class="gradient-text">Hydrocarbon Trends & Vaca Muerta</span>',
    modal_petro_tagline: "Data Analytics & Business Intelligence Project (Data-analyst-Herrera-Sosa)",
    modal_petro_sec_dashboard: "Interactive Gas Production Dashboard in Argentina",
    modal_petro_dashboard_caption: "Interactive dashboard built in Power BI to analyze unconventional production trends (Shale & Tight Gas vs. Conventional), basin market share (Neuquina, Golfo San Jorge, Austral), and ranking of top operator companies (YPF, Tecpetrol, Pan American Energy, among others).",
    modal_petro_sec_bq: "Business Questions & Objectives",
    modal_petro_bq_title: "Key Analytical Questions",
    modal_petro_bq_1: "How has the unconventional energy matrix in Argentina evolved following the development of Vaca Muerta?",
    modal_petro_bq_2: "Which key basins drive the growth of natural gas and crude oil supply?",
    modal_petro_bq_3: "Which operators lead extraction and how do decline curves vary by field?",
    modal_petro_sec_pipeline: "Data Pipeline & Methodology",
    modal_petro_step1_badge: "Step 1",
    modal_petro_step1_title: "Data Ingestion",
    modal_petro_step1_desc: "Extraction of official historical time series from Chapter IV of the Secretariat of Energy of Argentina.",
    modal_petro_step2_badge: "Step 2",
    modal_petro_step2_title: "Cleaning & ETL in Python",
    modal_petro_step2_desc: "Normalization of field names, null values handling, standardization of measurement units (Mm3/day for gas and m3/day for oil).",
    modal_petro_step3_badge: "Step 3",
    modal_petro_step3_title: "Data Modeling",
    modal_petro_step3_desc: "Star Schema modeling in Power BI connecting Fact tables (Monthly Production) with Dimension tables (Companies, Basins, Fields, Geographic Location).",
    modal_petro_step4_badge: "Step 4",
    modal_petro_step4_title: "DAX Measures",
    modal_petro_step4_desc: "Creation of dynamic DAX measures for Year-over-Year (YoY) variations, Year-to-Date (YTD) metrics, and unconventional market share percentages.",
    modal_petro_sec_value: "Business Value & Conclusions",
    modal_petro_val1_title: "Energy Sovereignty Impact",
    modal_petro_val1_desc: "Provides evaluation of strategic investments in Vaca Muerta regarding energy sovereignty and fuel trade balance.",
    modal_petro_val2_title: "Operators Comparative Analysis",
    modal_petro_val2_desc: "Enables comparative performance benchmarking between state-owned and private corporations in the Argentine hydrocarbon sector."
  }
};

let currentLang = 'es';

function getCurrentLang() {
  return currentLang;
}

function triggerDemoAlert() {
  const dict = i18nTranslations[currentLang] || i18nTranslations.es;
  alert(dict.demo_alert || 'Demostración interactiva en línea');
}

/* --------------------------------------------------------------------------
   FUNCIONES GLOBALES DE CONTROL DE MODALES (OPEN / CLOSE)
   -------------------------------------------------------------------------- */
function openProjectModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('is-active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const closeBtn = modal.querySelector('.modal-close-btn');
  if (closeBtn) closeBtn.focus();
}

function closeProjectModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('is-active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de componentes
  initLanguageToggle();
  initThemeToggle();
  initMobileMenu();
  initSmoothScrollAndActiveNav();
  initProjectFilters();
  initContactForm();
  initDynamicYear();
  initProjectModals();
});

/* --------------------------------------------------------------------------
   0. CAMBIO DE IDIOMA (ESPAÑOL / INGLÉS) CON LOCALSTORAGE E I18N
   -------------------------------------------------------------------------- */
function initLanguageToggle() {
  const langToggleBtn = document.getElementById('lang-toggle');
  const STORAGE_KEY = 'portfolio_lang';

  // 1. Obtener idioma guardado o preferencia del navegador
  const savedLang = localStorage.getItem(STORAGE_KEY);
  const browserLang = navigator.language && navigator.language.startsWith('en') ? 'en' : 'es';

  currentLang = savedLang || browserLang;

  // Aplicar idioma inicial
  applyLanguage(currentLang);

  // 2. Escuchar evento de clic en el botón de idioma
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      applyLanguage(currentLang);
      localStorage.setItem(STORAGE_KEY, currentLang);
    });
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    // Actualizar estilo visual del botón ES / EN
    const esOption = document.querySelector('.lang-option.lang-es');
    const enOption = document.querySelector('.lang-option.lang-en');
    if (esOption && enOption) {
      esOption.classList.toggle('active', lang === 'es');
      enOption.classList.toggle('active', lang === 'en');
    }

    if (langToggleBtn) {
      const toggleLabel = lang === 'es' ? 'Switch to English' : 'Cambiar a español';
      langToggleBtn.setAttribute('aria-label', toggleLabel);
      langToggleBtn.setAttribute('title', toggleLabel);
    }

    const dict = i18nTranslations[lang];
    if (!dict) return;

    // Actualizar elementos de texto (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Actualizar elementos con contenido HTML (data-i18n-html)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Actualizar placeholders (data-i18n-placeholder)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // Actualizar títulos (data-i18n-title)
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.title = dict[key];
      }
    });

    // Actualizar meta content (data-i18n-content)
    document.querySelectorAll('[data-i18n-content]').forEach(el => {
      const key = el.getAttribute('data-i18n-content');
      if (dict[key] !== undefined) {
        el.setAttribute('content', dict[key]);
      }
    });

    // Actualizar aria-label (data-i18n-aria)
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // Actualizar strings dinámicos de la tarjeta de código Hero
    const codeRole = document.getElementById('code-card-role');
    const codePassion = document.getElementById('code-card-passion');
    const codeComment = document.getElementById('code-card-comment');
    if (codeRole) codeRole.textContent = `"${dict.code_card_role}"`;
    if (codePassion) codePassion.textContent = `"${dict.code_card_passion}"`;
    if (codeComment) codeComment.textContent = dict.code_card_comment;
  }
}

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

  // Scroll Suave mediante JS
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
   5. VALIDACIÓN DE FORMULARIO DE CONTACTO & NOTIFICACIÓN TOAST (BILINGÜE)
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
    const dict = i18nTranslations[currentLang] || i18nTranslations.es;

    // Reset mensajes de error
    Object.values(fields).forEach(f => {
      if (f.errorEl) f.errorEl.textContent = '';
      if (f.el) f.el.style.borderColor = '';
    });

    // Validar Nombre
    if (!fields.name.el.value.trim()) {
      showFieldError(fields.name, dict.err_name);
      isValid = false;
    }

    // Validar Email
    const emailValue = fields.email.el.value.trim();
    if (!emailValue) {
      showFieldError(fields.email, dict.err_email_req);
      isValid = false;
    } else if (!validateEmail(emailValue)) {
      showFieldError(fields.email, dict.err_email_invalid);
      isValid = false;
    }

    // Validar Asunto
    if (!fields.subject.el.value.trim()) {
      showFieldError(fields.subject, dict.err_subject);
      isValid = false;
    }

    // Validar Mensaje
    if (!fields.message.el.value.trim()) {
      showFieldError(fields.message, dict.err_message);
      isValid = false;
    }

    if (isValid) {
      const submitBtn = document.getElementById('submit-btn');
      const originalText = submitBtn.innerHTML;

      // Estado de carga en el botón
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>${dict.btn_sending}</span>`;

      // Simulación de envío de formulario
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        showToast(dict.toast_title, dict.toast_desc);
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
   7. MODALES Y EVENT LISTENERS (PROYECTO 5 & PROYECTO PETRÓLEO Y GAS)
   -------------------------------------------------------------------------- */
function initProjectModals() {
  const openBtnP5 = document.getElementById('open-project-5-btn');
  const closeBtnP5Header = document.getElementById('close-modal-p5');
  const closeBtnP5Footer = document.getElementById('close-modal-p5-footer');

  if (openBtnP5) {
    openBtnP5.addEventListener('click', (e) => {
      e.preventDefault();
      openProjectModal('project-5-modal');
    });
  }

  if (closeBtnP5Header) {
    closeBtnP5Header.addEventListener('click', () => closeProjectModal('project-5-modal'));
  }
  if (closeBtnP5Footer) {
    closeBtnP5Footer.addEventListener('click', () => closeProjectModal('project-5-modal'));
  }

  // Cerrar al hacer clic en el backdrop fuera del contenedor para cualquier modal
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeProjectModal(e.target.id);
    }
  });

  // Cerrar cualquier modal con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-overlay.is-active');
      if (activeModal) {
        closeProjectModal(activeModal.id);
      }
    }
  });

  // Funcionalidad de copiar código Python al portapapeles
  function setupCopyButton(buttonId, codeText) {
    const btn = document.getElementById(buttonId);
    if (!btn) return;

    btn.addEventListener('click', () => {
      const dict = i18nTranslations[currentLang] || i18nTranslations.es;
      const copiedStr = dict.copied_text || '¡Copiado!';

      navigator.clipboard.writeText(codeText).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${copiedStr}</span>
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
