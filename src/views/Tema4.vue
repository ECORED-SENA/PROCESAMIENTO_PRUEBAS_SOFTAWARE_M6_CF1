<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tipos de técnicas de pruebas de <i>software</i> y herramientas para su aplicación

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema4/img01.png')
      .col-lg-6.d-flex.align-items-center
        p.mb-0 Estas técnicas y herramientas permiten evaluar el <i>software</i> de acuerdo con los requerimientos y necesidades de los usuarios, por esto es necesario conocer los tipos, enfoques y particularidades.
    
    AcordionA(tipo="b" clase-tarjeta="tarjeta")
      .row.justify-content-center.tarjeta--gris.p-5(titulo="Caja negra")
        .col-lg-11
          h4 Caja negra
          p.mb-4 Partición de equivalencia: se establecen objetivos de cobertura teniendo en cuenta las entradas y las salidas. Las entradas pueden ser manuales, vía interfaces, o parámetros de interfaz en las pruebas de integración. 
          p.mb-4 En esta técnica es importante identificar las clases de equivalencia, por ejemplo, la suma entre 2 y 4, es decir que cualquier valor diferente a 6 será un valor no válido. Luego se generan los casos de prueba con diferentes valores, para asegurar que la funcionalidad que se está verificando solo acepte los valores de 2 y 4 que retorna como resultado el valor de 6. 
          .row.justify-content-center
            .col-lg-8.d-flex.align-items-center
              p.mb-0 En la siguiente figura podemos observar que, en el caso de las pruebas de caja negra, no es necesario conocer qué hay dentro de la caja (código fuente del producto <i>software</i>), como se explicó previamente, solo interesa lo que ingresa y lo que sale de dicha funcionalidad, en la imagen representado con las flechas. 
            .col-lg-4
              figure
                img(src='@/assets/curso/tema4/img03.svg')
      .row.justify-content-center.tarjeta--gris.p-5(titulo="Caja blanca")
        .col-lg-11
          h4 Caja blanca
          p.mb-4 Estos tipos de pruebas se basan en una estructura identificada dentro del producto <i>software</i>, según unos niveles específicos, que son: 
          ul.lista-ul.mb-4
            li 
              i.lista-ul__vineta
              p.mb-0 <b>Nivel de componente:</b> evalúa la estructura de un componente <i>software</i>, por ejemplo: sentencias, condiciones, flujos alternos.
            li 
              i.lista-ul__vineta
              p.mb-0 <b>Nivel de integración:</b> evalúa la estructura en un árbol de llamadas y se basa en el diagrama en el que se especifica cómo un módulo llama a los otros módulos.
            li 
              i.lista-ul__vineta
              p.mb-0 <b>Nivel de sistema:</b> evalúa aspectos que van de cara al usuario, por ejemplo, la estructura de un menú, si este permite conectar con el hipervínculo definido o si está estructurado de tal manera que representa un ítem del menú. 
            li 
              i.lista-ul__vineta
              p.mb-0 <b>Basadas en el flujo de control:</b> se cubren todos los bloques o sentencias de código en el producto <i>software</i>, así como las combinaciones definidas en ellas, de tal manera que se puede medir en porcentaje; se obtiene una cobertura del 100% cuando todo el código fuente del producto <i>software</i> pasó por lo menos una vez por alguna de las pruebas. 
          .row.justify-content-center
            .col-lg-8
              p.mb-0 En la figura, se puede observar la representación de las pruebas de caja blanca. En este caso, a diferencia de las pruebas de caja negra, sí interesa cuál es el contenido de la caja, pues este tipo de pruebas busca inspeccionar cómo está definida la funcionalidad para obtener los resultados teniendo en cuenta los datos de entrada. En esta parte es importante resaltar que se tienen en cuenta las buenas prácticas de desarrollo, optimización y reutilización de código, adecuado uso de nomenclaturas, entre otros.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema4/img02.png')

      .row.justify-content-center.tarjeta--gris.p-5(titulo="Pruebas de rendimiento")
        .col-lg-11
          h4 Pruebas de rendimiento
          p.mb-0 Permiten determinar el comportamiento de un sistema en términos de estabilidad y respuesta con respecto a un escenario en particular, referente a la carga de trabajo, concurrencia, ancho de banda, características particulares de equipos o servidores, como <i>RAM</i>, <i>CPU</i>. También permiten identificar, medir, investigar, validar o verificar otros aspectos de calidad, tales como la seguridad, escalabilidad y el consumo de recursos. Estas pruebas constituyen unos estándares de ejecución en la implementación, diseño y arquitectura de un producto <i>software</i>, algunas herramientas de pruebas de rendimiento que puede tomar como referencia son: <i>Jmeter y Gatling</i>.
      .row.justify-content-center.tarjeta--gris.p-5(titulo="Pruebas de seguridad")
        .col-lg-11
          h4 Pruebas de seguridad
          p.mb-4 Son la serie de actividades que son ejecutadas para encontrar fallas y vulnerabilidades, con la finalidad de minimizar el impacto de ataques, acceso a información susceptible y la pérdida de información. 
          p.mb-0 Estas pruebas son primordiales dado que los productos <i>software</i> deben asegurar siempre la confidencialidad, disponibilidad e integridad de los datos y funcionalidades que maneja el producto. Es importante denotar lo crítico que sería la pérdida o corrupción de esta información en el contexto empresarial; por este motivo, estas pruebas deben ir de la mano y ejecución en todas las fases del proyecto. 
      .row.justify-content-center.tarjeta--gris.p-5(titulo="Pruebas de fiabilidad")
        .col-lg-11
          h4 Pruebas de fiabilidad
          p.mb-0 Cada producto <i>software</i>, dependiendo del contexto de negocio, deberá estar disponible 24/7; dar soporte a la sobrecarga de concurrencia, por ejemplo, en un <i>cyberday</i>; que una entidad financiera esté disponible en las fechas de pagos, como quincenas o fines de mes; entre otros ejemplos. 
          p.mb-0 En estos escenarios, las pruebas de fiabilidad permiten verificar la tolerancia a fallos de sistema, disponibilidad, escalabilidad. Todas estas pruebas se realizan para verificar los requerimientos de infraestructura, que son los que soportan el producto <i>software</i>. 
          p.mb-0 Las pruebas se aplican principalmente a los componentes de infraestructura, tales como redes, servidores y <i>software</i> de soporte, al producto <i>software</i>, a las integraciones con segundos o terceros, y no menos importante, a los procesos masivos y críticos del sistema. 
      .row.justify-content-center.tarjeta--gris.p-5(titulo="Pruebas unitarias")
        .col-lg-11
          h4 Pruebas unitarias 
          p.mb-4 Se aplican en los elementos más pequeños de un producto <i>software</i> y son considerados como una unidad, sin tener en cuenta la interacción entre otros componentes; cada componente es probado para verificar su correcto funcionamiento, donde se desarrolla una única función cohesiva. El objetivo de la prueba unitaria es analizar y verificar cada pequeña parte y certificar que funciona correctamente.
          p.mb-4 Este tipo de pruebas son usadas comúnmente por desarrolladores que están en la vertiente ágil, especialmente programadores extremos, los partidarios de TDD. Actualmente, se han vuelto muy populares y requeridas por las empresas, por lo cual más desarrolladores se están incorporando a la práctica de crear pruebas unitarias en sus desarrollos. 
          p.mb-0 Las herramientas para realizar pruebas unitarias son: <i>Junit, Phpunit, Mocha, Mockito, Chai, Sinon, Jasmine, Jest, Ava y TestNG, Powermock, XCTest</i>
      .row.justify-content-center.tarjeta--gris.p-5(titulo="Pruebas de integración")
        .col-lg-11
          h4 Pruebas de integración 
          p.mb-4 Son una extensión de las pruebas unitarias. Dos o más unidades que ya han sido probadas, conjugadas en un componente y sus interfaces interactúan entre ellas. El objetivo de estas pruebas es certificar la funcionalidad y la seguridad de la comunicación entre las unidades, componentes y paquetes que componen el producto <i>software</i>. Esto es beneficioso, dado que permite determinar la eficiencia de las pruebas en trabajo conjunto, pues no importa cómo está definida cada prueba unitaria si los componentes entre sí no están integrados, y conlleva una falla del sistema. 
          p.mb-0 Las herramientas para realizar pruebas de integración son: <i>Mocha, Jasmine, Jest y Ava</i>
      .row.justify-content-center.tarjeta.tarjeta--gris.p-5(titulo="Pruebas de estrés")
        .col-lg-11
          h4 Pruebas de estrés
          p.mb-0 Estas pruebas se implementan para validar el comportamiento del <i>software</i> en situaciones críticas y poco usuales, por ejemplo, una saturación de memoria, el llenado del almacenamiento provisto para el sistema, restricción en el acceso a los recursos, caídas inesperadas de la conexión a Internet, sobrecarga de funciones o peticiones de procesamiento. 
        
    Separador 

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
