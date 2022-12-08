export default {
  global: {
    componenteFormativo: 'Arquitectura del sistema',
    descripcionCurso:
      'En este módulo, se aborda la importancia de la modelación de la base de datos, modelos relacionales, arquitecturas y metodologías para el desarrollo del <em>software</em>. Es fundamental definir conceptos en la infraestructura TI, para poder determinar mejoras en las organizaciones mediante el uso de herramientas que garanticen la seguridad y la disponibilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/bp-decorativo-1.svg'),
      },
      {
        clases: ['animation-size-1'],
        imagen: require('@/assets/curso/portada/bp-decorativo-2.svg'),
      },
      {
        clases: ['animation-size-2'],
        imagen: require('@/assets/curso/portada/bp-decorativo-3.svg'),
      },
      {
        clases: ['animation-size-3'],
        imagen: require('@/assets/curso/portada/bp-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Modelado de bases de datos para la analítica y su metodología de diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Diseño de bases de datos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Definición de restricciones en el esquema de la base de datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Normalización de bases de datos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Modelo ACID en bases de datos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Herramientas de fuente abierta para bases de datos orientadas a la analítica',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Validación de la arquitectura de la base de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Inteligencia de negocios (<em>business intelligence</em>)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Bodega de datos (<em>data warehouse</em>)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Procesamiento analítico en línea (OLAP) para las consultas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Niveles de abstracción de datos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Conceptos de almacenamiento de datos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Definición de arquitectura y metodología en desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Introducción y evaluación de arquitecturas de <em>software</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Patrones y estilos de arquitecturas',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Arquitectura <em>Agile</em>',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Patrones de diseño del <em>software</em>',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Verificación del <em>software</em>',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Mantenimiento del <em>software</em>',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Infraestructura de TI (Tecnologías de la Información)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Infraestructura TI necesaria para alcanzar los objetivos del negocio',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de infraestructuras TI',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Gestión de la infraestructura TI',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Características dinámicas de la infraestructura TI',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<em>Windows Server 2008:</em> los servicios de red TCP/IP',
      referencia:
        'Freddi, P. (2010). <em>Windows Server 2008: los servicios de red TCP/IP.</em> ENI Ediciones.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniRIT08TCP',
    },
    {
      tema:
        'Sistemas de gestión de relaciones con clientes en las empresas (CRM)',
      referencia:
        'Fernández, M. & Navarro, M. (2014). <em>Sistemas de gestión de relaciones con clientes en las empresas (CRM).</em> Editorial Universidad de Alcalá.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB42931',
    },
    {
      tema:
        'Servicios de autenticación y autorización orientados a internet de las cosas',
      referencia:
        'Parra, M. y Guillén, E. (2019). Servicios de autenticación y autorización orientados a internet de las cosas. <em>Telemática</em>, 17 (2), p. 42–51.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_fe2fd93ea30149c5ac6bd70d267159f7',
    },
    {
      tema: 'Seguridad informática',
      referencia:
        'Scolnik, H. (2016). <em>Qué es la seguridad informática.</em> Editorial Planeta.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000094337',
    },
  ],
  glosario: [
    {
      termino: 'Analítica de datos',
      significado:
        'análisis computacional sistemático de datos o estadísticas. Se utiliza para el descubrimiento, interpretación y comunicación de patrones significativos en los datos.',
    },
    {
      termino: 'ANSI',
      significado:
        'sigla que corresponde al nombre del Instituto Nacional Estadounidense de Estándares, organización sin fines de lucro que supervisa el desarrollo de estándares para productos, servicios, procesos y sistemas en los Estados Unidos.',
    },
    {
      termino: 'API',
      significado: 'interfaz de programación de aplicaciones.',
    },
    {
      termino: 'Metodología',
      significado:
        'hace referencia al conjunto de procedimientos racionales utilizados para alcanzar el objetivo o la gama de objetivos que rige una investigación científica, una exposición doctrinal o tareas que requieran habilidades, conocimientos o cuidados específicos.',
    },
    {
      termino: '<em>MongoBD</em>',
      significado:
        'sistema de base de datos NoSQL, orientado a documentos y de código abierto.',
    },
    {
      termino: 'Normalización',
      significado:
        'proceso de elaborar, aplicar y mejorar las normas que se emplean en distintas actividades científicas, industriales o económicas, con el fin de ordenarlas y mejorarlas.',
    },
    {
      termino: '<em>Oracle Corporation</em>',
      significado:
        'compañía especializada en el desarrollo de soluciones de nube y locales.',
    },
    {
      termino: '<em>PostgreSQL</em>',
      significado:
        'sistema de gestión de bases de datos relacional orientado a objetos y de código abierto.',
    },
    {
      termino: '<em>SPARC</em>',
      significado:
        'es una arquitectura <em>RISC big-endian</em>. Es decir, una arquitectura con un conjunto de instrucciones reducidas.',
    },
    {
      termino: 'TI',
      significado: 'tecnología de la información.',
    },
  ],
  referencias: [
    {
      referencia:
        'Díaz, B., Rodríguez, M. & Espinosa, J. (10 de enero de 2019).  Modelo de capacidad en tecnologías de información en Mipymes colombianas. <em>Innovar</em> 29 (74), p. 45-56.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_3cc3068084034406b6a0427715aaad8b',
    },
    {
      referencia:
        'Garcés, L. & Egas, L. (12 de diciembre de 2012). Evolución de las metodologías de desarrollo de la ingeniería de <em>software</em> en el proceso. La ingeniería de sistemas <em>software</em>. <em>Revista científica y tecnológica UPSE</em> 1(3).',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_crossref_primary_10_26423_rctu_v1i3_29',
    },
    {
      referencia:
        'García, M., Sepúlveda, J. & Montoya, L. (2018). Metodologías ágiles de desarrollo un caso de aplicación Medellín – Colombia 2016 - 2017. <em>Lampsakos</em> 1(18).',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001283884',
    },
    {
      referencia:
        'Giménez, J. (2019). Buenas prácticas en el diseño de bases de datos. <em>ARANDU UTIC</em>, 6(1).',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001367765',
    },
    {
      referencia:
        'Martin, R. (2018). <em>Arquitectura limpia: guía para especialistas en la estructura y el diseño de software.</em> Anaya Multimedia.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000090995',
    },
    {
      referencia:
        'Mosquera, D., Rivas, E. & Wanumen, L. (2017). <em>Bases de datos en SQL Server.</em> Ecoe ediciones.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_ebooks000132',
    },
    {
      referencia:
        'Orbegozo, B. (2019). Gestión de bases de datos con SQL, <em>MySQL</em> y <em>Access</em>. Editorial Altaria.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000105669',
    },
    {
      referencia:
        'Peña, M. & Calderón, C. (2020). Modelo para la gestión de infraestructuras de tecnologías de la información. <em>TecnoLógicas</em>, 23(48).',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_c13e240992d94cafb52557ec6d96f979',
    },
    {
      referencia:
        'Prieto, R. (2014). <em>SGBD e instalación. Administración de bases de datos (UF1469).</em> IC Editorial.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB44145',
    },
    {
      referencia:
        'Ramos, A., Pérez, H., Nava, S. & Martínez, F. (2022). <em>Mic-agile</em>: metodología ágil para micro-equipos de desarrollo de <em>software</em>. <em>Revista Ingenio</em>, 19(1), p. 1-8.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_e7f326ffff1f4ce291157fd79b01b679',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
