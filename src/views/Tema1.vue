<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de las pruebas de <i>software</i>    

    .row.justify-content-center.mb-5
      .col-lg-6
        p.mb-0 Las pruebas de <i>software</i> se definen como una actividad en la cual un sistema, o uno de sus componentes se ejecuta en circunstancias previamente especificadas, los resultados se observan, se registran y se realiza una evaluación de algún aspecto. Hacen parte de una fase primordial en el proceso de desarrollo de <i>software</i>; en muchos casos, se definen como el método y proceso para la verificación y validación de las funcionalidades del <i>software</i>. Estas pruebas son requeridas en el control de calidad y mantenimiento de <i>software</i>, para certificar la calidad y el aseguramiento; por lo general, se acompañan de otras técnicas, como supervisiones, comprobaciones de pares o procesos automatizados, revisión de documentación de las primeras fases o formatos que no son ejecutables.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img01.png')      

    .row.justify-content-center.mb-5
      .col-lg-10      
        .cajon.color-primario.p-5
          p.mb-4 Aplicar pruebas de <i>software</i> permitirá encontrar o identificar <i>bugs</i>, errores o incidencias, en etapas tempranas del ciclo de desarrollo, con el fin de tomar acción rápidamente, detectando niveles inadecuados de calidad o diferencias con lo establecido en su definición funcional, para así aplicar un proceso de mejora.
          p.mb-0 En el proceso de pruebas, se revisa e inspecciona el producto bajo condiciones definidas específicamente, y eventualmente se puede hacer uso de <i>software</i> especializado (CAST- <i>Computer</i> <i>Aided</i> <i>Software</i> <i>Testing</i>) como apoyo.
    
    p.mb-4 El proceso de pruebas de <i>software</i> se debe destacar por el orden y disciplina al momento de planear y ejecutar, con indicadores, métricas y objetivos establecidos de tal manera que permitan determinar una evaluación correcta del producto; el resultado de estas actividades son los reportes que documentan la interacción entre el producto y el usuario, y hace énfasis especial en las fallas encontradas. Este proceso puede verse como una secuencia de actividades, donde cada una de sus etapas permite generar productos, artefactos, insumos asociados, recursos, e involucra distintos actores y diferentes roles.
    p.mb-5 Un primer esquema del proceso de una prueba de caja negra podría ser el siguiente:
    
    .row.justify-content-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img02.svg')  

    p.mb-5 Con lo que conlleva el siguiente esquema de acción: 

    .row.justify-content-center.mb-5
      .col-lg-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img03.svg', alt='Texto que describa la imagen')              

          .tarjeta.color-acento-contenido.p-3(x="15.5%" y="24%" numero=" ")
            .h5.mb-2 Diseñar casos de prueba.
          .tarjeta.color-acento-contenido.p-3(x="40.5%" y="11.5%" numero=" ")
            .h5.mb-2 Aplicar casos de prueba.
          .tarjeta.color-acento-contenido.p-3(x="47.5%" y="49%" numero=" ")
            .h5.mb-2 Reportar métricas y dar seguimiento.
          .tarjeta.color-acento-contenido.p-3(x="63%" y="24%" numero=" ")
            .h5.mb-2 Reportar análisis de resultados.
          .tarjeta.color-acento-contenido.p-3(x="78.5%" y="52%" numero=" ")
            .h5.mb-2 Mientras no se cumplan los criterios de aceptación, continuar con la validación.
          .tarjeta.color-acento-contenido.p-3(x="94%" y="77%" numero=" ")
            .h5.mb-2 Hacer el cierre del proyecto y certificar la calidad del producto.
  
    p.mb-5 Referente a los casos de prueba, es requerido que contengan las siguientes características:
  
    .row.justify-content-center
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop') 
          .t1.tarjeta.color-acento-contenido.w-100
            .p-4.pt-5
              h4.mb-1 Ortogonalidad
              p.mb-0 No tener casos que dependan de funcionalidades u otros escenarios.
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')          
          .t1.tarjeta.color-primario.w-100
            .p-4.pt-5
              h4.mb-1 Efectividad
              p.mb-0 Permitir la definición de elementos de entrada que permitan determinar diferentes fallos.
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')          
          .t1.tarjeta.color-acento-contenido.w-100
            .p-4.pt-5
              h4.mb-1 Ejemplaridad
              p.mb-0 Que “con poco se pruebe mucho”.
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')          
          .t1.tarjeta.color-primario.w-100
            .p-4.pt-5
              h4.mb-1 Claridad
              p.mb-0 Que permita revelar fallas de manera clara.  

    Separador

    #t_1_1.titulo-segundo
      h2 1.1 Justificación

    .row.justify-content-center.mb-5
      .col-lg-6
        p.mb-0 <b>En las pruebas de <i>software</i> es necesario contar con altos estándares de calidad, con el fin de cumplir a cabalidad las necesidades establecidas en los requisitos funcionales y los no funcionales dadas por el cliente, y poder entregar la documentación requerida.</b>
      .col-lg-6
        p.mb-0 Cualquier error en el <i>software</i> derivará en una falla que debe ser detectada a tiempo, por lo cual las pruebas deben certificar que se cuenta con el resultado esperado en la ejecución, o de lo contrario reportarlo para su corrección. Los principales objetivos que se buscan con la fase de prueba de <i>software</i> son:
    
    TabsA.color-acento-contenido.mb-5
      .tarjeta.t1-tab1.p-4(titulo="Establecer nivel de calidad")
        h4 Establecer nivel de calidad
        p.mb-0 Establecer el nivel de calidad del producto <i>software</i>.
      .tarjeta.t1-tab1.p-4(titulo="Determinar planes de mejora")
        h4 Determinar planes de mejora
        p.mb-0 Determinar planes de mejora o refactorizaciones para solucionar problemas encontrados, y gestionar adecuadamente el tiempo de construcción.
      .tarjeta.t1-tab1.p-4(titulo="Adquirir producto con estado de madurez")
        h4 Adquirir producto con estado de madurez
        p.mb-0 No realizar la adquisición de un producto <i>software</i> hasta que tenga un estado de madurez y estabilidad alto, con la finalidad de minimizar riesgos. 
      .tarjeta.t1-tab1.p-4(titulo="Minimizar los riesgos")
        h4 Minimizar los riesgos
        p.mb-4 Minimizar el riesgo de dar soporte a usuarios insatisfechos, tal cosa es secuela de liberar un producto inmaduro e inestable. Esto es un riesgo considerable, dado que afecta la imagen de la entidad desarrolladora y la del producto, perdiendo credibilidad. 
      .tarjeta.t1-tab1.p-4(titulo="Minimizar los costos")
        h4 Minimizar los costos
        p.mb-0 Minimizar costos de mantenimiento. Las pruebas de <i>software</i> en fases tempranas permiten identificar oportunamente fallos, por lo cual se podrá determinar un plan de correctivos de forma rápida. 
      .tarjeta.t1-tab1.p-4(titulo="Reconocer lecciones aprendidas")
        h4 Reconocer lecciones aprendidas
        p.mb-0 Las pruebas de <i>software</i> generan una serie de lecciones aprendidas, las cuales permiten emplearse como apoyo para la mejora de procesos y desarrollo de los diferentes productos. 

    p.mb-0 En conclusión, es posible decir que entre más pronto se apliquen mecanismos de prueba en el proceso de desarrollo, más fácilmente podrá evitarse que el proyecto se salga del tiempo y presupuesto planeado, pues se podrán detectar los problemas originados en las fases tempranas del proceso, que son los que menor impacto tienen, se debe recordar que a mayor tiempo de desarrollo, mayor impacto al realizar ajustes o cambios. 
    Separador

    #t_1_2.titulo-segundo
      h2 1.2 Alcance
    
    p.mb-5 La prueba de <i>software</i> tiene limitaciones, tanto teóricas como prácticas. Desde el punto de vista teórico, la prueba se reconoce como un problema llamado no-decidible; esto significa que no se puede escribir un programa que pruebe completamente los programas sin intervención humana. Sin embargo, algunas pruebas pueden ser automatizables y apoyarse en herramientas para maximizar la búsqueda de fallas o errores importantes con los recursos asignados. 

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          .row.justify-content-center
            .col-lg-2
              figure
                img(src='@/assets/curso/tema1/img08.svg') 
            .col-lg-9.d-flex.align-items-center
              p.mb-0 La cantidad de probabilidades o escenarios a probar en un sistema puede volverse incontrolable, por lo cual es necesario utilizar las técnicas adecuadas, pues cada método que se utilice para detectar defectos deja un residuo de defectos más sutiles contra los cuales este método es ineficaz y a esto se llama la “Paradoja del Pesticida”. 
          
    Separador

    #t_1_3.titulo-segundo
      h2 1.3 Objetivos de las pruebas de <i>software</i>

    p.mb-5 La prueba de <i>software</i> es un recurso fundamental para la garantía del correcto funcionamiento del <i>software</i>, entre sus objetivos, se busca garantizar los siguientes aspectos:

    ol.lista-ol--cuadro.lista-ol--separador
      li 
        .t1.lista-ol--cuadro__vineta
          span 1
        p.mb-0 Detectar errores o defectos en el <i>software</i>.
      li 
        .t1.lista-ol--cuadro__vineta
          span 2
        | Comprobar la integración adecuada de los componentes.
      li 
        .t1.lista-ol--cuadro__vineta
          span 3
        | Comprobar que todos los requisitos o reglas de negocio fueron implementados correctamente, de acuerdo con lo especificado por el cliente.
      li 
        .t1.lista-ol--cuadro__vineta
          span 4
        p.mb-0 Generar un seguimiento y asegurar que los defectos encontrados se han corregido antes de liberar el <i>software</i> al cliente.
      li 
        .t1.lista-ol--cuadro__vineta
          span 5
        | Diseñar casos de prueba que sistemáticamente identifiquen diferentes tipos de errores o excepciones, optimizando el tiempo y el esfuerzo. 
    Separador

    #t_1_4.titulo-segundo
      h2 1.4 Ciclo de ejecución de las pruebas de <i>software</i>

    p.mb-5 La ejecución de pruebas de software está compuesta por diversas actividades, cada una con sus artefactos y ejecutores, con lo cual se busca completar el ciclo de pruebas, las cuales son

    .tarjeta--gris(style="border-radius: 10px").p-4 
      LineaTiempoC.color-secundario(text-small)
        .row.justify-content-center(titulo="Definición")
          .col-lg-3
            figure
              img(src='@/assets/curso/tema1/img09.svg') 
          .col-lg-6
            p.mb-0 Los procedimientos se deben definir a partir de los casos de prueba, buscando reflejar en su ejecución. 
        .row.justify-content-center(titulo="Automatización")
          .col-lg-3
            figure
              img(src='@/assets/curso/tema1/img10.svg') 
          .col-lg-6
            p.mb-0 Se debe generar la automatización de procedimientos y procesos mediante la creación de componentes y/o elementos de prueba. 
        .row.justify-content-center(titulo="Creación del plan de prueba")
          .col-lg-3
            figure
              img(src='@/assets/curso/tema1/img11.svg') 
          .col-lg-6
            p.mb-0 Con el cual se definen estrategias, recursos, elementos y componentes necesarios para la ejecución de las pruebas. 
        .row.justify-content-center(titulo="Resultados")
          .col-lg-3
            figure
              img(src='@/assets/curso/tema1/img12.svg') 
          .col-lg-6
            p.mb-0 Por último, como resultado se obtienen los defectos, errores u omisiones detectadas en la ejecución de las pruebas o, en caso contrario, las pruebas exitosas a las cuales se puede certificar su nivel de calidad y satisfacción.
    Separador

    #t_1_5.titulo-segundo
      h2 1.5 Casos de pruebas y escenarios
    p.mb-5 Los casos de uso tienen un papel fundamental en la construcción de los casos de prueba y escenarios, dado que de ellos se derivan los artefactos y las condiciones necesarias en las cuales serán ejecutadas las pruebas (escenarios); esto permite validar, verificar y/o certificar que se han implementado a cabalidad y con calidad los requisitos funcionales que componen el producto <i>software</i>. 
    
    .row.justify-content-center.mb-5
      .col-lg-5.p-5.d-flex.align-items-center.t1-div1
        p.mb-0.px-0 Al momento de ejecutar las pruebas, se realizan validaciones de integración para funcionalidad desarrollada, con la cual se contrastan las interacciones con los demás componentes del sistema. Posteriormente, se deben realizar pruebas del sistema, con lo cual se comprueba la interacción entre los actores y el sistema como tal. 
      .col-lg-5.px-0
        figure
          img(src='@/assets/curso/tema1/img13.png') 

    p.mb-5 Se pueden identificar dos tipos de casos de prueba:

    .row.justify-content-center.mb-5
      .col-lg-6.d-flex
        div.t1-div2-1.p-3
          p.mb-0 <b>Basados en casos de uso</b>
          p.mb-0 Son pruebas del sistema, de tal manera que se realizan pruebas de caja negra, comprobando con esto el comportamiento del sistema hacia el usuario de forma externa.
      .col-lg-6.d-flex
        div.t1-div2-2.p-3
          p.mb-0 <b>Basados en las realizaciones de los casos de uso del diseño</b>
          p.mb-0 Corresponden a pruebas de integración, en lo cual se prueba el sistema como caja blanca, verificando cómo interactúan los componentes de forma interna.  
    
    AcordionA.t1-acordion(tipo="b" clase-tarjeta="tarjeta")
      .row(titulo="Escenarios")
        .col-lg-12
          p.mb-4 Los escenarios son una instancia o una representación de un caso de uso, de tal manera que permiten ejecutar un flujo completo de eventos de la funcionalidad descrita. El flujo básico de un caso de uso se define como un escenario, y este por lo general representa un <i>happy path</i>, entre otros. Cada flujo alterno se define como un escenario alterno, que puede llegar a ser un <i>happy path</i> o un <i>error path</i>. Se puede llegar a la conclusión que un caso de uso describe diferentes escenarios de uso y estos pueden definirse de la siguiente manera:

          p.mb-0 <b>a.</b> Escenarios correspondientes al flujo básico del caso de uso o <i>happy path</i>. 
          p.mb-0 <b>b.</b> Escenarios que incluyen, por lo menos, un flujo alterno al escenario básico del caso de uso.
          p.mb-4 <b>c.</b> Escenarios que reproducen al menos una excepción o error. 
          
          p.mb-0 Estos escenarios determinan los lineamientos y bases para la creación de los casos de prueba. 
      .row(titulo="Generación de casos de prueba")
        .col-lg-12
          p.mb-4 Un caso de prueba define qué probar y verificar en el sistema, está conformado además de un título, una descripción, que puede ser opcional, un conjunto de ítems de entrada de prueba y unos resultados esperados teniendo en cuenta las entradas proporcionadas. Se debe recordar que esto se realiza con el objetivo de probar y validar que las funcionalidades están implementadas de acuerdo con los requisitos de <i>software</i> especificados en los casos de uso. En el caso de prueba de sistema, donde se busca realizar la prueba como un todo, las metas u objetivos pueden cambiar, correspondiendo al tipo de prueba que se ejecuta, que puede ser de configuración, negativa, de instalación, entre otras. 
          p.mb-4 Ivan Jacobson dio los primeros pasos basado en los casos de uso, proponiendo el siguiente flujo:

          p.mb-0 <b>a.</b> Pruebas correspondientes al flujo básico del caso de uso o el <i>happy path</i>. 
          p.mb-0 <b>b.</b> Pruebas correspondientes a flujos alternos.
          p.mb-0 <b>c.</b> Pruebas específicas que surgen de requerimientos específicos para una instancia del caso de uso. 
          p.mb-4 <b>d.</b> Pruebas asociadas a las características descritas en documento asociado al caso de uso.  

          p.mb-4 Más adelante, en el 2001, Jim Heuman, trabajador de <i>Rational SW Corporation</i>, publica un artículo en el cual se describe y define el procedimiento con el cual generar casos de prueba a partir de casos de uso; dicho proceso basado en RUP, el cual consta de tres pasos:

          p.mb-0 <b>a.</b> Determinar el conjunto de escenarios, para cada caso de uso. 
          p.mb-0 <b>b.</b> Identificar al menos un solo caso de prueba y las condiciones en las cuales será ejecutado, para cada escenario.
          p.mb-0 <b>c.</b> Determinar los valores de entrada que serán usados, para cada caso de prueba.  
      .row(titulo="Generación de los escenarios")
        .col-lg-12
          p.mb-0 Este paso se debe realizar con la mayor profundidad posible, dado que, al definir buenos escenarios de caso de uso, se estarán garantizando posteriormente buenos escenarios de prueba, con lo cual, para poder definir de manera asertiva los escenarios de prueba, debe estar totalmente clara y detallada la descripción del caso de uso, de tal manera que permita identificar la combinación del flujo básico y los flujos alternos. Hay que tener presente que estos flujos son aquellos que constituyen los escenarios. 
      .row(titulo="Identificación de los casos de prueba")
        .col-lg-12
          p.mb-0 Dado que ya se tienen planteados todos los escenarios de los casos de uso, se procede a obtener los casos de prueba, con lo cual se debe analizar cada uno de los escenarios y, al mismo tiempo, referenciarse en la descripción detallada de los casos de uso, para despejar dudas o aclarar detalles. Debe generarse como mínimo un caso de prueba para cada escenario, pero la generalidad es que se definan más. Si el caso de uso no contiene la información requerida para dar detalles del comportamiento o funcionalidad específica, dado que se hayan omitido datos importantes, para lograr que las pruebas tengan la calidad necesaria para una certificación exitosa, será necesario aclarar dicha descripción y buscar completar la información que sea requerida para que sea considerada como completa. 
      .row(titulo="Identificación de los datos de entrada")
        .col-lg-12
          p.mb-0 Cuando ya se tengan definidos todos los casos de prueba, estos deberán ser revisados y validados para asegurar su precisión, y así identificar los casos de prueba redundantes u aquellos que posiblemente hayan sido omitidos. Luego, se utilizarán los datos de entrada reales de la prueba y se reemplazarán en la definición del caso de prueba. Estos datos deberán corresponder a datos reales usados en el proceso de ejecución de pruebas. 
    Separador

    #t_1_6.titulo-segundo
      h2 1.6 Criterios de aceptación
    p.mb-4 Los criterios de aceptación definen los requisitos del cliente, indicando cómo debe comportarse el producto <i>software</i> para una determinada acción que se pueda llevar a cabo, generalmente por una acción desencadenada por un usuario de la aplicación, respondiendo si se ha construido correctamente el producto o si se ha construido el producto correcto. 
    p.mb-5 Deben describir un contexto, una acción o evento y una consecuencia o respuesta esperada del sistema. La forma más utilizada para describir los criterios de aceptación es la conocida como <i>Given-When-Then</i>. Aquí un ejemplo:
    
    .row.justify-content-center.mb-5
      .col-lg-4.d-flex
        div.t1-div3.p-3
          .row
            .col-lg-1
              p.mb-0 1
            .col-lg-11.px-0
              p.mb-0 <b>Dado</b> un usuario que no ha iniciado sesión en el sistema.
      .col-lg-4.d-flex      
        div.t1-div3.p-3
          .row
            .col-lg-1
              p.mb-0 2
            .col-lg-11.px-0
              p.mb-0 <b>Cuando</b> intenta ingresar a alguna funcionalidad reservada o privada.
      .col-lg-4.d-flex
         div.t1-div3.p-3
          .row
            .col-lg-1
              p.mb-0 3
            .col-lg-11.px-0
              p.mb-0 <b>Entonces</b> el sistema debe redireccionar automáticamente a la página de inicio de sesión para que pueda ingresar.
    
    p.mb-4 Aunque expresan el comportamiento del producto <i>software</i>, siempre es utilizado un lenguaje de negocio, no técnico. En el anterior ejemplo, se usó <b>“Cuando intenta ingresar a alguna funcionalidad reservada o privada”</b> y no <b>“Cuando hace clic en alguna de las opciones del menú que están restringidas por el inicio de sesión”</b>. La precisión en la definición de los criterios de aceptación depende de la madurez y experiencia del equipo de desarrollo. 
    p.mb-0 Recuerde: hacer uso de los criterios de aceptación en la definición de requisitos de <i>software</i> o historias de usuario, dependiendo de la metodología empleada, permitirá tener claro el alcance de la implementación y cuándo finaliza, la funcionalidad de lo construido es lo que el cliente requería y, además, lo que el usuario necesita.   
    Separador

    #t_1_7.titulo-segundo
      h2 1.7 Niveles de aplicación de las pruebas de <i>software</i>
    .row.justify-content-center.mb-5
      .col-lg-5
        h4 Los niveles de pruebas están categorizados por las fases de diseño, teniendo en cuenta la planificación de los requisitos funcionales, hasta las pruebas anteriores a la puesta en producción.
      .col-lg-7
        p.mb-4 Cada fase en el proceso de desarrollo de pruebas está asociada a una de las etapas de construcción de <i>software</i>. Aunque no es estricto que ambas fases trabajen en paralelo, sí deberán estar en constante comunicación y mutua colaboración. 
        p.mb-0 En la siguiente figura, se presenta el modelo V que se aplica al proceso de desarrollo de pruebas de <i>software</i>:
    
    .row.justify-content-center.mb-5
      .col-lg-8.p-5(style="background-color: #F8EAFF")
        div.BorTit.mb-2 
          p.mb-0 <b>Figura 1</b>
          i Modelo en V en asignación de tipos de pruebas

        figure
          img(src='@/assets/curso/tema1/img14.svg') 
          figcaption Nota. Adaptada de Amrani (2019).
    
    p.mb-0 Es una representación de los diferentes tipos de pruebas. En la base de la pirámide, están las pruebas unitarias, que cubren la mayor parte del código de forma aislada, permitiendo la prueba por unidades o módulos independientes; su implementación se da de manera sencilla e instantánea. Mientras que en la punta de la pirámide, se ubican las pruebas de aceptación, que requieren de la integración de todos los elementos que conforman el programa; su implementación es más compleja y su ejecución requiere más tiempo.

    Separador

    #t_1_8.titulo-segundo
      h2 1.8 Tipos de pruebas

    p.mb-5 Las pruebas de <i>software</i> se pueden clasificar en dos tipos principalmente: 
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/tema1/img15.svg') 
    p.mb-5 Teniendo en cuenta los diferentes frentes y aspectos de un producto <i>software</i>, con lo cual se requerirán diferentes tipos de pruebas, tales como: pruebas unitarias, pruebas de integración, pruebas de estrés, pruebas de rendimiento, pruebas de escalabilidad, entre otras. Cada uno de estos tipos de pruebas de <i>software</i> determina la visibilidad de la aplicación, desde el código fuente hasta la interacción y experiencia con el usuario. Entrando en detalles, algunos de los tipos de pruebas más comunes son: 

    TabsC.color-acento-contenido.mb-5 
      .py-3.py-md-4(titulo="Pruebas funcionales")
        .row.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema1/img16.svg') 
          .col-lg-6
            h4 Pruebas funcionales
            p.mb-0 Se llevan a cabo para verificar las características esenciales para el negocio, la funcionalidad y la usabilidad. Estas garantizan que las características y funciones del <i>software</i> operan y se comportan según lo esperado, sin problemas. Valida toda la aplicación respecto  a las especificaciones definidas en el documento de requisitos de <i>software</i> (SRS). En estas pruebas, se incluyen las pruebas unitarias, pruebas de regresión, pruebas de interfaz, entre otras. 
      .py-3.py-md-4(titulo="Pruebas unitarias")
        .row.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema1/img17.svg') 
          .col-lg-6
            h4 Pruebas unitarias
            p.mb-0 Estas pruebas se enfocan en validar elementos de un producto <i>software</i>, como componentes/unidades/piezas, de forma individual e independiente, dado el principio SDLC. Cualquier bloque de código, sea procedimiento, función, método, constructor, clase o módulo, puede ser una unidad y deberá ser considerado y sometido a pruebas unitarias, con lo cual se podrá determinar su comportamiento y validarlo versus el resultado esperado. Estas pruebas deben ser las primeras que se lleven a cabo en la fase de desarrollo y las deberán implementar los desarrolladores.
      .py-3.py-md-4(titulo="Pruebas de integración - <i>Perfomance Testing</i>")
        .row.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema1/img18.svg') 
          .col-lg-6
            h4 Pruebas de integración - <i>Perfomance Testing</i>
            p.mb-0 Estas pruebas se enfocan en validar diferentes módulos o componentes de un producto <i>software</i> de tal manera que se valide como un grupo funcional. Una aplicación de <i>software</i>, un sistema de información o una aplicación <i>web</i>, entre otros productos <i>software</i>, están compuestos por diferentes componentes, módulos y submódulos distribuidos en diferentes niveles y capas, que trabajan juntos y se orquestan en diferentes funcionalidades. La finalidad de estas pruebas es validar que la integración entre estos componentes sea correcta y encontrar posibles problemas o errores relacionados con la sinergia y comunicación entre ellos. 
      .py-3.py-md-4(titulo="Pruebas no funcionales")
        .row.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema1/img19.svg') 
          .col-lg-6
            h4 Pruebas no funcionales
            p.mb-0 Estas pruebas son como las pruebas funcionales, con la diferencia que se prueban bajo carga de rendimiento para poder establecer la fiabilidad, usabilidad, escalabilidad, instalación, confiabilidad, seguridad. Estas pruebas generalmente se ejecutan por medio de herramientas o soluciones automatizadas. 
      .py-3.py-md-4(titulo="Pruebas de rendimiento")
        .row.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema1/img20.svg') 
          .col-lg-6
            h4 Pruebas de rendimiento
            p.mb-0 Son un tipo de pruebas no funcionales, las cuales se realizan con la finalidad de determinar la estabilidad, escalabilidad y velocidad de una funcionalidad en el producto <i>software</i>. El objetivo de este tipo de pruebas es verificar el comportamiento de la aplicación teniendo en cuenta diferentes puntos de referencia del sistema y de la red, tales como la <i>CPU</i>, la velocidad de renderizado o carga de la página, el control de tráfico, la concurrencia, el consumo de recursos de servidor, entre otros. En esta categoría podemos encontrar las pruebas de carga y de esfuerzo. 

    p.mb-0 En conclusión, es posible decir que las pruebas de rendimiento son útiles para verificar el rendimiento del producto <i>software</i>; las pruebas funcionales se aplican para verificar que las funcionalidades están de acuerdo con lo establecido en el documento de requisitos funcionales y hacen lo que en los casos de uso está especificado; las pruebas de integración sirven para verificar la sinergia e integración entre los diferentes componentes y módulos descritos en un producto <i>software</i>; y las pruebas unitarias se definen para comprobar si son correctos los elementos como las clases, funciones, módulos o componentes que son tratados como una unidad. 
    Separador

    #t_1_9.titulo-segundo
      h2 1.9 Herramientas y soportes de las pruebas de <i>software</i>
    
    .row.justify-content-center.mb-5
      .col-lg-6
        p.mb-0 Son llamados <i>“testers”</i> aquellas personas encargadas de poner a prueba la calidad y el correcto funcionamiento de un producto <i>software</i>; esto se ejecuta por medio de una planificación previa, con la finalidad de mantenerse dentro de los tiempos establecidos y el presupuesto disponible. 
      .col-lg-6
        p.mb-0 <b>Para realizar este rol, es necesario establecer los objetivos y la planeación, con el fin de simplificar, automatizar y agilizar las pruebas que se llevarán a cabo en los ciclos de desarrollo. </b>
    figure.mb-5 
      img(src='@/assets/curso/tema1/img21.png') 
    p.mb-4 Es posible encontrar diversidad de herramientas que dan soporte, trazabilidad y control a las pruebas de <i>software</i>, y que apoyan el ciclo de vida de la construcción del producto <i>software</i> (conocido como SDLC); estas ayudan a la administración de la documentación, automatización, soporte y los artefactos requeridos para la última etapa, conocida como pruebas de regresión. Todo esto permite un adecuado control del proceso y seguimiento de los avances, gestión de errores, <i>bugs</i> e incidencias, y la generación de informes de acuerdo con las pruebas realizadas. Las herramientas usadas en el proceso de pruebas de <i>software</i> se clasifican teniendo en cuenta la etapa en la cual se encuentra el proyecto. 
    p.mb-5 En el siguiente recurso de aprendizaje, se mencionan algunas:
    SlyderB.mb-5(:datos="datosSlyder")
    p.mb-0 El uso de estas herramientas también puede generar riesgos, dado que se está limitado a la calidad de estas y dado que, si presentan algún error, pueden generar una validación errónea en la verificación del producto <i>software</i>. Sin embargo, la mayor ventaja es la optimización de tareas y el incremento en la calidad de las pruebas, con lo que se potencializa la certificación del producto y el control del proceso. 
    Separador

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Herramientas unitarias',
        texto:
          'Permiten la cobertura de una tarea en particular y paquetes de herramientas que permiten dar soporte a varias tareas, siendo estas un conjunto de herramientas unitarias.',
        imagen: require('@/assets/curso/tema1/img22.png'),
      },
      {
        titulo: 'Herramientas intrusivas',
        texto:
          'Interfieren en la ejecución del objeto de prueba y desencadenan acciones diferentes en el producto dado en un entorno real, con esto se puede incluir puntos de corte, alteración del flujo por medio de interrupciones en el proceso de depuración.',
        imagen: require('@/assets/curso/tema1/img23.png'),
      },
      {
        titulo:
          'Herramientas de gestión de incidencias, <i>bugs</i> o defectos',
        texto:
          'Generalmente, utilizan un registro que permite su categorización y seguimiento de estado. Por medio de estas, se puede asignar, priorizar y cambiar de estado, evaluando las métricas que indican el porcentaje de desarrollo de las pruebas, dadas las funcionalidades implementadas en el producto <i>software</i>. Con las herramientas de gestión, es posible hacer un seguimiento de los cambios y versiones del código fuente.<br><br>En la categoría de herramientas de gestión, existen generadores de datos ligados a la base de datos. Estas herramientas no pueden evaluar funcionalidades, dado que solo pueden generar datos de prueba según el código fuente proporcionado. ',
        imagen: require('@/assets/curso/tema1/img24.png'),
      },
      {
        titulo: 'Herramientas de proceso',
        texto:
          'Existen otras herramientas con las cuales se puede documentar el proceso de revisión, documentar los resultados, evaluar los resultados y suministrar una lista de chequeo.',
        imagen: require('@/assets/curso/tema1/img25.png'),
      },
      {
        titulo: 'Herramientas para la especificación de pruebas',
        texto:
          'De estas, existen dos tipos: la primera genera datos con base en una interfaz, la segunda genera datos de prueba basados en las especificaciones de los requisitos de <i>software</i>.',
        imagen: require('@/assets/curso/tema1/img26.png'),
      },
      {
        titulo: 'Herramientas para la ejecución de pruebas',
        texto:
          'Como los <i>drivers</i>, nos dan el acceso al objeto de prueba cuando las interfaces todavía no han sido construidas, permitiendo regular la entrada y salida de datos, con la restricción que solo registran los resultados para un objeto específico de prueba.',
        imagen: require('@/assets/curso/tema1/img27.png'),
      },
      {
        titulo: 'Los <i>stubs</i> y los <i>mocks</i>',
        texto:
          'Recrean y simulan el comportamiento y funcionalidad de un componente que es llamado.<br><br>Son usados cuando las condiciones del ambiente de desarrollo o del escenario en el cual está desplegado no permiten el uso de entornos productivos o certificados, por lo cual se opta por tener una réplica simulada; frecuentemente son usados en las pruebas de integración.<br><br>En la siguiente figura, se muestra que el <i>mock</i> server emula la funcionalidad del servicio 1, servicio 2 y servicio 3, pero en realidad es una prueba aislada, dado que ese componente está diseñado para dar las respuestas propuestas en el <i>test</i>. ',
        imagen: require('@/assets/curso/tema1/img28.svg'),
      },
      {
        titulo: 'Herramientas para el análisis de prueba y objetos de prueba',
        texto:
          'Evalúan los resultados esperados versus los resultados reales.<br><br>En esta categoría están las herramientas de análisis de cobertura, que contienen contadores que registran el acceso al código fuente evaluado y determinan qué tanto porcentaje del sistema está cubierto con pruebas automatizadas. Adicionalmente a eso, tienen la facultad de medir el código estático, previniendo así el código duplicado o prácticas no contempladas, como, por ejemplo, utilizar caracteres no permitidos en los nombres de variables, métodos, objetos, entre otros. ',
        imagen: require('@/assets/curso/tema1/img29.png'),
      },
      {
        titulo: 'Herramientas para medir pruebas de carga y rendimiento',
        texto:
          'Estas herramientas miden las pruebas no funcionales, con las cuales se puede determinar el comportamiento en tiempo real del producto <i>software</i> o de alguna funcionalidad en específico, recreando distintas situaciones; y se complementan con las herramientas que supervisan, analizan, verifican y documentan el uso de los recursos de sistema, como la <i>CPU</i>, la <i>RAM</i> y el almacenamiento. ',
        imagen: require('@/assets/curso/tema1/img30.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
