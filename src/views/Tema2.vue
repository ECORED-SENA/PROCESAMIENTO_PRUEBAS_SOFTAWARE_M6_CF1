<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Metodologías de desarrollo de proyectos

    p.mb-0 Son aquellas que indican qué métodos y técnicas hay que usar en cada fase del ciclo de vida de desarrollo del proyecto; básicamente, son un marco de trabajo usado para planificar, estructurar y controlar los procesos, a medida que va avanzando el proyecto. 
    Separador
   
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Metodología cascada
    p.mb-5 Es un proceso lineal, donde se separan los procesos del desarrollo de <i>software</i> en diferentes fases, que son sucesivas en el contexto de la ejecución del proyecto. A diferencia de los modelos iterativos, cada una de las fases se ejecuta una sola vez y el resultado de cada fase es un insumo para la siguiente. 
    
    div.position-relative.mb-5.d-none.d-lg-block
      .row.justify-content-start
        .col-lg-5
          figure
            img(src='@/assets/curso/tema2/img01.png') 

      div.position-absolute.top-0.start-0.d-flex.h-100.align-items-center      
        div
          .row.justify-content-start.mb-0
            .col-lg-4
            .col-lg-7
              h3 Esta metodología es usada especialmente<br>en el proceso de desarrollo de <i>software</i>.            
          .row.justify-content-center
            .col-lg-5
            .col-lg-7
              p.mb-0 El modelo es atribuido al teórico de la informática <i>Winston W. <i>Royce</i></i>, aunque <i>Royce</i> no es el creador de este modelo; al contrario, en su ensayo de 1970 titulado <i>Managing the Development of Large <i>Software</i> Systems</i>, el teórico proporciona una reflexión constructiva acerca de los procedimientos lineales y, a modo de alternativa, presenta un modelo iterativo incremental en el que cada una de las fases se basa en el resultado de la fase anterior y valida los resultados de esta.             
    
    div.mb-5.d-block.d-lg-none
      .row.justify-content-center
        .col-sm-6
          figure
            img(src='@/assets/curso/tema2/img01.png') 
      div   
        div
          .row.justify-content-start.mb-0
            .col-lg-4
            .col-lg-7
              h3 Esta metodología es usada especialmente<br>en el proceso de desarrollo de <i>software</i>.            
          .row.justify-content-center
            .col-lg-5
            .col-lg-7
              p.mb-0 El modelo es atribuido al teórico de la informática <i>Winston W. <i>Royce</i></i>, aunque <i>Royce</i> no es el creador de este modelo; al contrario, en su ensayo de 1970 titulado <i>Managing the Development of Large <i>Software</i> Systems</i>, el teórico proporciona una reflexión constructiva acerca de los procedimientos lineales y, a modo de alternativa, presenta un modelo iterativo incremental en el que cada una de las fases se basa en el resultado de la fase anterior y valida los resultados de esta.             
    
    .row.justify-content-center.mb-5
      .col-lg-10.p-5(style="background-color:#F8EAFF")
        div.BorTit.mb-2 
          p.mb-0 <b>Figura 2</b>
          i Representación de implementación de metodología en cascada
        figure
          img(src='@/assets/curso/tema2/img02.svg') 
          figcaption Nota. Adaptada de Romero (2018).
    p.mb-5 En esta imagen, se presenta la metodología en cascada, con cada una de sus fases o etapas, dado que no es posible acceder a la fase de diseño si no se ha terminado la fase de requisitos, por lo cual son de naturaleza bloqueante. Este tipo de metodologías también son conocidas como tradicionales, porque fueron los primeros modelos que se incorporaron en el proceso de desarrollo de <i>software</i>, aunque con el tiempo se identificaron las problemáticas, al necesitar obtener productos a corto plazo.<br>Amplíe la información sobre cada una de las fases de la metodología en cascada:
    .row.justify-content-center
      .col-lg-8
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
               img(src='@/assets/curso/tema2/img03.svg')               

          .tarjeta.tarjeta--gris.p-3(x="15.5%" y="60%" numero=" ")
            .h5.mb-2 Análisis
            p.mb-4 Todo proyecto de <i>software</i> inicia con una fase de análisis, en la cual se determina la viabilidad y la definición de requisitos funcionales y no funcionales en el documento de especificación de requisitos de <i>software</i>. En la viabilidad, se evalúa la rentabilidad, factibilidad y los costos de la construcción; con este estudio, se define un pliego de condiciones, un plan y una estimación financiera, también la propuesta para el cliente, de ser necesario. 
            p.mb-0 Posteriormente, se realiza la definición detallada de los requisitos, incluyendo con ello el análisis de la situación de salida y un concepto. Los análisis de salida definen la problemática, y el concepto define qué funciones y características debe ofrecer el producto <i>software</i> para satisfacer las necesidades del cliente. 

          .tarjeta.tarjeta--gris.p-3(x="22%" y="23.5%" numero=" ")
            .h5.mb-2 Diseño
            p.mb-4 En esta fase, se formula una solución específica para la problemática definida en los requisitos. En esta fase, los desarrolladores de <i>software</i> se encargarán de construir un diseño de la arquitectura del sistema, así como el plan de diseño, enfocados en los componentes, interfaces, entornos de trabajo y bibliotecas. 
            p.mb-0 Esta fase da como resultado un estimado del plan de diseño y los planes de prueba para los diferentes componentes. 

          .tarjeta.tarjeta--gris.p-3(x="49.5%" y="7.8%" numero=" ")
            .h5.mb-2 Implementación
            p.mb-4 La arquitectura estipulada en la fase de diseño se desarrolla en la fase de implementación, se construye el código fuente que representa dicha arquitectura en un lenguaje de programación, y se incluye la búsqueda de errores y pruebas unitarias. 
            p.mb-0 Esta fase genera como resultado un producto <i>software</i> que se despliega por primera vez como insumo de la siguiente fase. 
         
          .tarjeta.tarjeta--gris.p-3(x="75%" y="23.5%" numero=" ")
            .h5.mb-2 Prueba
            p.mb-4 Esta fase incluye el proceso de integración y despliegue del producto <i>software</i> en el entorno seleccionado. Por lo general, se prueba y envía con una serie de usuarios finales seleccionados. Se aplican las pruebas de aceptación incluidas en la fase de análisis y con ello se puede determinar si el <i>software</i> cumple o no con las necesidades definidas. Los productos que superan estas pruebas, son aquellos que pueden continuar hacia el proceso de liberación hacia el público en general o su target específico. 

          .tarjeta.tarjeta--gris.p-3(x="84.2%" y="60%" numero=" ")
            .h5.mb-2 Servicio
            p.mb-4 Después de que la fase de prueba haya finalizado con éxito, se autoriza para que la aplicación pase a un ambiente productivo. En esta última etapa, se incluye la entrega, mantenimiento, garantía y mejoras del producto <i>software</i>. 
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Metodología ágil

    p.mb-5 La vertiente ágil en el desarrollo de <i>software</i> pretende distribuir de forma permanente y continua el proceso de desarrollo en iteraciones rápidas. Sin embargo, el término “metodología ágil” es engañoso, dado que implica que el enfoque ágil es la única manera de abordar el desarrollo de <i>software</i>. En esta vertiente no se define una serie de pasos o de indicaciones sobre qué hacer en el proceso de desarrollo de <i>software</i>; por el contrario, se trata de una forma de pensar en colaboración los flujos de trabajo, en la cual se definen una serie de valores que orientan las decisiones respecto a lo que se hace y la forma en que se hace.

    .row.justify-content-center.mb-5
      .col-lg-5
        .cajon.color-primario.p-5
          p.mb-0 Las metodologías ágiles buscan generar una serie de piezas que agregan valor y satisfacción al cliente; en estas se implementan enfoques flexibles y de trabajo en equipo para mejorar el desempeño del proceso, con la finalidad de ofrecer mejoras constantes. 
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img04.svg') 
    p.mb-5 En la siguiente figura se puede observar el flujo de trabajo de una iteración en la metodología ágil, dado que el ciclo de vida de la construcción de un producto <i>software</i> está compuesto por muchas iteraciones que, a su vez, son pequeñas, medibles y alcanzables. Básicamente, consiste en dividir el proyecto en entregables pequeños, los cuales se diseñan, desarrollan, certifican, despliegan y entregan al cliente, lo que permite que, a medida que el producto va creciendo, los nuevos <i><i>features</i></i> que se van agregando son probados y certificados con calidad y se recibe un <i>feedback</i> del cliente de forma rápida. Este tipo de metodologías son denominadas iterativas incrementales, dado que con cada ciclo el producto va creciendo. 

    .row.justify-content-center.mb-5
      .col-lg-6.p-5(style="background-color: #F8EAFF")
        div.BorTit.mb-2 
          p.mb-0 <b>Figura 3</b>
          i Representación de una iteración en la implementación de una metodología ágil
        figure
          img(src='@/assets/curso/tema2/img05.svg') 
          figcaption Nota. Adaptada de Cognodata (2019). 

    p.mb-5 La metodología ágil nació aproximadamente en el año 2001, dando respuesta a los proyectos gestionados por medio de metodologías en cascada, por lo cual una serie de desarrolladores redactó el manifiesto ágil. En este manifiesto se describieron cuatro características principales, las cuales se deberían priorizar por encima de cualquier otra cosa. Es así como los equipos que trabajan bajo esta vertiente deben valorar lo siguiente: 
    
    .row.justify-content-start
      .col-lg-6
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .t1.lista-ol--cuadro__vineta
              span a
            | Las personas y las interacciones antes que los procesos y las herramientas.
          li 
            .t1.lista-ol--cuadro__vineta
              span b
            p.mb-0 El <i>software</i> en funcionamiento antes que la documentación exhaustiva. 
          li 
            .t1.lista-ol--cuadro__vineta
              span c
            | La colaboración con el cliente antes que la negociación contractual.
          li 
            .t1.lista-ol--cuadro__vineta
              span d
            | La respuesta ante el cambio antes que el apego a un plan.  
    Separador

</template>

<script>
export default {
  name: 'Tema2',
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
