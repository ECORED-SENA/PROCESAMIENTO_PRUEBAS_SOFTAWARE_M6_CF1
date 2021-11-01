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
   
    #t_2_1.titulo-segundo
      h2 2.1 Metodología cascada
    p.mb-5 Es un proceso lineal, donde se separan los procesos del desarrollo de <i>software</i> en diferentes fases, que son sucesivas en el contexto de la ejecución del proyecto. A diferencia de los modelos iterativos, cada una de las fases se ejecuta una sola vez y el resultado de cada fase es un insumo para la siguiente. 
    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/img01.png') 
      .col-lg-7.d-flex.align-items-center
        div(style="position:relative")
          h3(style="position:relative; left:-14%") Esta metodología es usada especialmente<br>en el proceso de desarrollo de <i>software</i>.
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
        figure
          img(src='@/assets/curso/tema2/img03.svg') 
    Separador

    #t_2_2.titulo-segundo
      h2 2.2 Metodología ágil

    p.mb-5 La vertiente ágil en el desarrollo de <i>software</i> pretende distribuir de forma permanente y continua el proceso de desarrollo en iteraciones rápidas. Sin embargo, el término “metodología ágil” es engañoso, dado que implica que el enfoque ágil es la única manera de abordar el desarrollo de <i>software</i>. En esta vertiente no se define una serie de pasos o de indicaciones sobre qué hacer en el proceso de desarrollo de <i>software</i>; por el contrario, se trata de una forma de pensar en colaboración los flujos de trabajo, en la cual se definen una serie de valores que orientan las decisiones respecto a lo que se hace y la forma en que se hace.

    .row.justify-content-center.mb-5
      .col-lg-5
        .cajon.color-primario.p-5
          p.mb-0 Las metodologías ágiles buscan generar una serie de piezas que agregan valor y satisfacción al cliente; en estas se implementan enfoques flexibles y de trabajo en equipo para mejorar el desempeño del proceso, con la finalidad de ofrecer mejoras constantes. 
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img04.svg') 
    p.mb-5 En la siguiente figura se puede observar el flujo de trabajo de una iteración en la metodología ágil, dado que el ciclo de vida de la construcción de un producto <i>software</i> está compuesto por muchas iteraciones que, a su vez, son pequeñas, medibles y alcanzables. Básicamente, consiste en dividir el proyecto en entregables pequeños, los cuales se diseñan, desarrollan, certifican, despliegan y entregan al cliente, lo que permite que, a medida que el producto va creciendo, los nuevos features que se van agregando son probados y certificados con calidad y se recibe un feedback del cliente de forma rápida. Este tipo de metodologías son denominadas iterativas incrementales, dado que con cada ciclo el producto va creciendo. 

    .row.justify-content-center.mb-5
      .col-lg-6.p-5(style="background-color: #F8EAFF")
        div.BorTit.mb-2 
          p.mb-0 <b>Figura 3</b>
          i Representación de una iteración en la implementación de una metodología ágil
        figure
          img(src='@/assets/curso/tema2/img05.png') 
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
            | El <i>software</i> en funcionamiento antes que la documentación exhaustiva. 
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
