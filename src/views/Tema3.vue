<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Marcos de referencia

    .row.justify-content-center.mb-0
      .col-lg-6
        figure
          img(src='@/assets/curso/tema3/img01.svg') 
      .col-lg-6.d-flex.align-items-center
        p.mb-0 Estos aportan a la mejora de los procesos, entregando recomendaciones de mejores prácticas, teorías y lineamientos aplicables a un contexto determinado, para las pruebas de software también se cuentan con estándares que sirven como guía y referencia.
    Separador
   
    #t_3_1.titulo-segundo
      h2 3.1 Estándares en pruebas de software
    p.mb-4 El objetivo de trabajar bajo un marco de estándares es hacer uso de documentos, artefactos y métodos que han sido validados previamente por entidades y organizaciones a nivel internacional. Entre estos es posible destacar el estándar IEEE-829 de 2008, que posteriormente fue reemplazado por la ISO/IEC/IEEE 29119-3:2013,  la cual será reemplazada por la ISO/IEC/IEEE FDIS 29119-3; esta última está actualmente en desarrollo. 
    p.mb-4 En la actualidad podemos hacer referencia a la ISO/IEC/IEEE 29119-3:2013, en la cual se han definido una serie de ítems acordados internacionalmente para la aplicación y ejecución de pruebas de software para cualquier organización, incluye plantillas y admite las pruebas dinámicas, pruebas funcionales, no funcionales, pruebas manuales, pruebas automatizadas, pruebas con y sin secuencias de comandos. Los artefactos definidos en la ISO/IEC/IEEE 29119-3:2013 se pueden utilizar en cualquier momento del ciclo de vida del desarrollo de software. 
    p.mb-5 La ISO/IEC/IEEE 29119-3:2013 está compuesta de 5 partes:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador

    #t_3_2.titulo-segundo
      h2 3.2 Test Driven Development
    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-4 Es el desarrollo dirigido por pruebas (TDD por sus siglas en inglés), es un proceso de desarrollo relativamente nuevo, que está comenzando a ganar terreno y a ser conocido en el ámbito del desarrollo de software en las organizaciones a nivel mundial. Se basa en evidencias anecdóticas y en una serie de evaluaciones empíricas. Hablando del desarrollo tradicional, las pruebas se usan para validar y verificar la calidad del software, y su creación se realiza después de que existe la funcionalidad. 
        p.mb-4 En TDD, las pruebas, adicionalmente al tema de validación y verificación, se usan con fines de especificación, donde primero se desarrolla la prueba y posteriormente la funcionalidad. Esto permite que la calidad del software aumente y la productividad del desarrollador mejore, dado que se lleva un mejor esfuerzo en depurar y se avanza rápidamente con el progreso del producto software. 
        p.mb-0 En el siguiente recurso de aprendizaje se presentan los beneficios del desarrollo guiado por pruebas (TDD):
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/img02.svg') 
    figure.mb-5 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 Ahora que ya conoce los beneficios que implica aplicar TDD, observe el ciclo completo del proceso, revisando cada uno de sus pasos. En la siguiente figura se puede observar el flujo de manera gráfica: 

    .row.justify-content-center.mb-5
      .col-lg-7.p-5(style="background-color:#F8EAFF")
        div.BorTit.mb-2 
          p.mb-0 <b>Figura 3</b>
          i Flujo de TDD
        figure
          img(src='@/assets/curso/tema3/img03.png') 

    p.mb-5 Amplíe la información sobre cada uno de los pasos del TDD.

    .row.justify-content-center
      .col-lg-10
        LineaTiempoD.color-acento-contenido
          .row.justify-content-center(numero="1" titulo="Crear el test")
            .col-lg-3
              figure
                img(src='@/assets/curso/tema3/img05.svg') 
            .col-lg-7
              p.mb-4 En primera instancia, se deben crear las pruebas, las cuales deben atender cada una de las nuevas funcionalidades o características definidas en los requisitos de software. 
              p.mb-4 En este primer paso, es muy importante que el desarrollador comprenda a la perfección la especificación de requisitos, dado que la discrepancia entre lo que entendió y lo que el producto software requiere impactará la calidad de la prueba y asimismo la calidad del producto. 
              p.mb-0 Cabe resaltar que la diferencia de estas pruebas con las pruebas unitarias es que estas últimas se hacen observando el código cuando la funcionalidad ya se encuentra implementada. Por otro lado, en el TDD, el enfoque se pone en los requisitos, porque el código aún no se ha creado.
          .row.justify-content-center(numero="2" titulo="Ejecutar las pruebas y comprobar en qué fallan")
            .col-lg-3
              figure
                img(src='@/assets/curso/tema3/img06.svg') 
            .col-lg-7
              p.mb-4 En este paso, se realiza la verificación de que los tests funcionan correctamente, por lo cual, detectarán errores cuando haya un problema en el código.
              p.mb-4 Uno de los principales aportes de este paso es la confianza que el desarrollador adquiere al momento de desarrollar nuevas pruebas, lo que se verá reflejado en la calidad del código.
              p.mb-0 Cabe resaltar que en este paso la funcionalidad aún no se ha implementado, por lo cual, al hacer la verificación de las pruebas, deberán arrojar error. 
          .row.justify-content-center.p-3(numero="3" titulo="Escribir el código de la aplicación")
            .col-lg-3
              figure
                img(src='@/assets/curso/tema3/img04.svg') 
            .col-lg-7
              p.mb-4 En este paso, se procede a escribir el código fuente de la funcionalidad. El objetivo es que la prueba escrita para esta funcionalidad pase como exitosa.
              p.mb-0 Es probable que el código no esté perfecto y no cumpla todavía con estándares, pero posteriormente hay un paso que nos permite realizar este tipo de ajustes, donde ya se tiene una visión más amplia del desarrollo en general y se puede proceder a optimizarlo. 
          .row.justify-content-center(numero="4" titulo="Refactorizar el código")
            .col-lg-3
              figure
                img(src='@/assets/curso/tema3/img07.svg') 
            .col-lg-7
              p.mb-4 En este paso, ya se dispone de un código fuente con calidad, dado que se pasaron todas las pruebas, y se procederá a realizar un análisis de un mejoramiento en el mismo. 
              p.mb-4 Recordemos que en el paso de escribir el código, el objetivo era que las pruebas definidas en el paso inicial fueran exitosas. Por otro lado, en este paso el objetivo es mejorar la escritura para que se pueda interpretar mejor la estructura y reducir la cantidad de líneas, optimizar el nombrado de variables, constantes y clases. Lo importante en este punto es poder mejorar el código de tal manera que no altere los resultados. 
              p.mb-0 Por otro lado, la creación continua del código determina la necesidad de revisarlo periódicamente, porque, con una visión más amplia de todo el proyecto, se podrán realizar mejoras y evitar malas prácticas, como código duplicado o funciones redundantes.
          .row.justify-content-center(numero="5" titulo="Repetir")       
            .col-lg-3
              figure
                img(src='@/assets/curso/tema3/img08.svg') 
            .col-lg-7
              p.mb-0   Cuando se haya completado el ciclo para una funcionalidad, requisito o historia de usuario, se deberá proceder a repetir todo el proceso.
    Separador

    #t_3_3.titulo-segundo
      h2 3.3 Documentación de la aplicación de prueba de software
    p.mb-4 La documentación de productos de software son artefactos importantes, que permiten transferir y comunicar aspectos que, al revisar o inspeccionar un sistema, no se pueden entender rápidamente y suelen ser complicados.
    p.mb-5 Esta se puede categorizar en función de las personas, roles o grupos a los cuales está dirigida:
    
    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Documentación para los desarrolladores" :icono="require('@/assets/curso/tema3/img09.svg')")        
        .row.justify-content-center
          .col-lg-7
            h4 Documentación para los desarrolladores
            p.mb-4 Es usada para la implementación del producto de software y principalmente para su futuro mantenimiento. Con este tipo de documentación, se busca hacer transferencia de la arquitectura, estructura, el comportamiento que tiene el producto, los componentes, las partes, los frameworks y las librerías. Esto conlleva comprender rápidamente el mismo y que la curva de aprendizaje del proyecto y del negocio, al momento de integrar un nuevo desarrollador al proyecto o que alguien asuma la responsabilidad de un desarrollo previamente construido, no sea muy pronunciada. Cabe resaltar que entre más grande es el proyecto, más importante es el manejo adecuado de la documentación. 
            p.mb-0 Recordemos que la documentación debe estar incluida en todas las fases del desarrollo de software, desde los requerimientos, análisis, diseño, programación, pruebas, etc.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/img12.svg') 
      .py-4.py-md-5(titulo="Documentación para los usuarios" :icono="require('@/assets/curso/tema3/img10.svg')")
        .row.justify-content-center
          .col-lg-7
            h4 Documentación para los usuarios
            p.mb-4 Es toda aquella que necesita el usuario para la instalación, el despliegue, el aprendizaje y el uso del producto software.  Este tipo de información se puede constituir por guías de instalación, manuales de usuario, manuales de producto, guías de mensajes, manuales de referencia.
            p.mb-0 En caso de que los usuarios sean desarrolladores, los documentos mencionados anteriormente van acompañados de ejemplos de integración, uso de bibliotecas o efectos no evidentes en las implementaciones y que pueden alterar el performance. 
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/img13.svg')
      .py-4.py-md-5(titulo="Documentación para los administradores o soporte técnico" :icono="require('@/assets/curso/tema3/img11.svg')")
        .row.justify-content-center
          .col-lg-7
            h4 Documentación para los administradores o soporte técnico
            p.mb-0 Denominado también manual de operaciones, este tipo de documentos contiene la información del producto software de la que no hace uso el usuario final, donde se puede encontrar una lista de errores, procedimientos de recuperación, problemas de compatibilidad, entre otras anotaciones que sean importantes y que pueden variar con la evolución de las tecnologías.  
          .col-lg-3
            figure
              img(src='@/assets/curso/tema3/img14.svg')
    Separador

    #t_3_4.titulo-segundo
      h2 3.4 Criterio de manejo de lecciones aprendidas
        
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-5
          .row.justify-content-center
            .col-lg-8.d-flex.align-items-center
              p.mb-0 Las lecciones aprendidas son el conocimiento adquirido sobre una actividad, tema o proceso por el cual se vivieron diferentes experiencias, reflexiones y análisis, que permiten tener un concepto crítico sobre los aspectos que pudieron afectar positiva o negativamente la situación evaluada. 
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img15.svg')
    p.mb-0 Estas reflexiones, por lo general, dan una ventaja competitiva entre actores que compiten en una misma industria, además permiten capturar las evidencias para identificar tendencias, relación entre causa y efecto, están delimitadas a un contexto en particular, sugieren recomendaciones, prácticas, utilidades para la aplicación o replicación del nuevo conocimiento en diferentes contextos; se busca tener resultados similares a los experimentados previamente. 
    Separador


</template>

<script>
export default {
  name: 'Tema3',
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
