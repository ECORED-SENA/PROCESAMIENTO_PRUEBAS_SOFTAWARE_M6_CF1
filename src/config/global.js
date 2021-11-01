export default {
  global: {
    componenteFormativo: 'Preparación de las pruebas',
    descripcionCurso:
      'En este módulo el aprendiz comprenderá los conceptos fundamentales del plan de pruebas de <i>software</i>, cuáles son los tipos de pruebas, tipos de incidentes, errores, <i>bugs</i> y escenarios. Con esta información, el aprendiz será capaz de identificar los diferentes escenarios y componentes de <i>software</i> para establecer el plan de pruebas. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Generalidades de las pruebas de <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Justificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Alcance',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Objetivos de las pruebas de <i>software</i>',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ciclo de ejecución de las pruebas de <i>software</i>',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Casos de pruebas y escenarios',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Criterios de aceptación',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Niveles de aplicación de las pruebas de <i>software</i>',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Tipos de pruebas',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Herramientas y soportes de las pruebas de <i>software</i>',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodologías de desarrollo de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Metodología cascada',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Metodología ágil',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Marcos de referencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estándares en pruebas de <i>software</i>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<i>Test Driven Development</i>',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Documentación de la aplicación de prueba de <i>software</i>',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Criterio de manejo de lecciones aprendidas',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Tipos de técnicas de pruebas de <i>software</i> y herramientas para su aplicación',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Conceptos de aplicación de pruebasa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Feature',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Issues',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Hotfix',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: '<i>Bug</i>',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Plan de pruebas',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia: 'Alarcón, C. (2019). Pruebas de <i>software</i>. EcuRed.',
      link:
        'https://www.ecured.cu/index.php?title=Pruebas_de_software&oldid=3536813',
    },
    {
      referencia:
        'Amrani, D. (2019). Niveles de pruebas de <i>software</i>. La región vulnerable.',
      link:
        'https://medium.com/la-region-vulnerable/niveles-de-pruebas-de-software-ac9a888311f7',
    },
    {
      referencia:
        'Cognodata. (2019). 12 principios de la metodología <i>agile</i> en el desarrollo de proyectos. ',
      link:
        'https://www.cognodata.com/blog/principios-metodologia-agile-desarrollo-proyectos',
    },
    {
      referencia:
        'Díaz, D. (2013). TDD, BDD & Test de aceptación. Adictos al trabajo. ',
      link:
        'https://www.adictosaltrabajo.com/2013/05/27/tdd-bdd-test-de-aceptacion/',
    },
    {
      referencia:
        'Garay, G. (2013). Téc D P - Técnicas basadas en la estructura o técnicas de caja blanca (K4). Scrum-QA. ',
      link:
        'http://scrum-qa.blogspot.com/2013/04/tecnicas-de-diseno-de-pruebas-tecnicas_12.html',
    },
    {
      referencia: 'PMOinformatica. (2016). Pruebas de caja negra ISTQB. ',
      link:
        'http://www.pmoinformatica.com/2016/04/pruebas-caja-negra-istqb.html',
    },
    {
      referencia:
        'Romero, E. (2018). Actividades del desarrollo de <i>software</i> en el modelo de cascada. ResearchGate. ',
      link:
        'https://www.researchgate.net/figure/Figura-1-Actividades-del-desarrollo-de-software-en-el-modelo-de-cascada_fig1_320935254',
    },
  ],
  glosario: [
    {
      termino: 'Automatización',
      significado:
        'proceso en el cual se utilizan herramientas tecnológicas casi sin la necesidad de la intervención de personas. ',
    },
    {
      termino: 'CAST',
      significado:
        'significa “prueba de <i>software</i> asistida por computadora”, es la herramienta que se usa para aplicar las pruebas.',
    },
    {
      termino: 'Caso de uso',
      significado:
        'es una herramienta en la cual se define un flujo con una serie de secuencias que dan paso a un resultado de valor observable. ',
    },
    {
      termino: 'Escenario',
      significado:
        'lugar con una serie de condiciones y variables, en el cual se desarrolla un suceso o acción. ',
    },
    {
      termino: '<i>Framework</i>',
      significado:
        'es un marco de trabajo, representa un conjunto de conceptos, funciones, prácticas y criterios que están regulados y estandarizados. Generalmente, orientados a resolver temas en particular y que sirven para resolver problemáticas con características similares.',
    },
    {
      termino: '<i>Happy path</i>',
      significado:
        'es un anglicismo y es usado para expresar el escenario ideal de un producto software o una funcionalidad, representa un escenario donde todo ocurre según las especificaciones técnicas y nada sale mal, logrando de esta manera el objetivo esperado.',
    },
    {
      termino: 'Módulo',
      significado:
        'es una parte de un producto <i>software</i>, de las muchas cosas que debe realizar un programa para cumplir con funciones o tareas. ',
    },
    {
      termino: '<i>Mock</i>',
      significado:
        'son recursos y objetos que están preprogramados para que cumplan con una expectativa en específico, dado esto, siempre retornan un valor estático para una invocación puntual. ',
    },
    {
      termino: '<i>Plugin</i>',
      significado:
        'es un componente o aplicación que presenta una integración o sinergia con otra, generalmente se usan para agregar una nueva función. ',
    },
    {
      termino: 'Requisito',
      significado:
        'atributo, cualidad, circunstancia, cosa o comportamiento que es necesario para algo. ',
    },
    {
      termino: 'SUT',
      significado:
        'el Sistema Bajo Prueba (SUT) es el producto software que representa todos los actores, en sí, clases, paquetes, módulos. ',
    },
  ],
  complementario: [
    {
      texto:
        'Bolaños, D., Sierra, A. y Alarcón, M. (2007). Pruebas de software y JUnit. Un análisis en profundidad y ejemplos prácticos. Pearson Prentice Hall.',
      tipo:
        'Libro - Capítulo 1: Fundamentos de las pruebas de software (p. 21 - 32).',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4716&pg=21',
    },
    {
      texto:
        'Contreras, M., Herrera, M. y Gallardo, O. Capítulo III Pruebas Automáticas para Evaluar Cursos de Programación de Computadores. Tecnológico de Antioquia.',
      tipo:
        'Libro - Capítulo I análisis de las metodologías ágiles para el desarrollo de software',
      link:
        'https://dspace.tdea.edu.co/bitstream/handle/tdea/1251/INGENIERIA%20VOLUMEN%203%20FINAL.pdf?sequence=1&isAllowed=y#page=30',
    },
    {
      texto:
        'Pérez, Y., Gallegos, J., Zapata, S., Ccama, D. y Choque, R. (2020). Design Thinking en la Planificación de Pruebas de Software. Innovación y Software. Revista Innovación y Software, 1(2), p. 40-51. ',
      tipo: 'Artículo',
      link: 'https://revistas.ulasalle.edu.pe/innosoft/article/view/24/13',
    },
    {
      texto:
        'Uribe, C. (2020). Desarrollo de aplicaciones web y pruebas de software. Tecnológico de Antioquia.',
      tipo: 'Documento',
      link:
        'https://dspace.tdea.edu.co/bitstream/handle/tdea/1081/INFORME%20FINAL.pdf?sequence=1&isAllowed=y',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
