<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Plan de pruebas

    p.mb-4 El plan de pruebas de <i>software</i> se establece con la finalidad de atender los objetivos de calidad en el marco del desarrollo de <i>software</i>, definiendo los aspectos relacionados con los módulos o funcionalidades a verificación, tipos de prueba, ambientes, recursos asignados, entre otros aspectos necesarios en el proceso de prueba. Presenta el enfoque para realizar la verificación de los componentes del producto. Como se ha mencionado previamente, todo proceso de desarrollo de <i>software</i> es importante que cuente con la implementación de la fase de pruebas. 
    p.mb-5 El personal que se dedica a ejecutar pruebas de <i>software</i> requiere de un plan de pruebas de <i>software</i>, el cual tiene como objetivo:
    
    .row.justify-content-center.mb-5
      .col-lg-6.d-flex.align-items-center(style="position:relative")
        div(style="position:relative; left:8%; z-index:10000")
          p.mb-0 <b>Comunicar a todos los involucrados del proyecto los entregables, ítems a ser certificados, criterios de aprobación y fallos, criterios de suspensión y reanudación, las necesidades de ambiente, las capacitaciones necesarias para los integrantes del equipo, riesgos y el laboratorio de usabilidad.</b>
          .row.justify-content-start
            .col-lg-8
              p.mb-0 El plan se puede aplicar a todo el proyecto y se ajusta a las necesidades de cada empresa, teniendo en cuenta el tamaño del proyecto, el tiempo, el costo, el ciclo de vida del <i>software</i> y los involucrados. 
      .col-lg-5(style="position:relative")
        figure(style="position:relative; left:-10%")
          img(src='@/assets/curso/tema6/img01.png') 

    p.mb-5 Cada entidad puede definir su propio plan de pruebas basado en buenas prácticas:
    
    .row.justify-content-center.mb-5.position-relative
      .col-lg-1
      .col-lg-3.col-sm-5   
        figure.position-relative.mb-3   
          img(src='@/assets/curso/tema6/img02.svg')  
          div.position-absolute(style="width:18%; height:15%; top:1%; left:37%" autofocus v-on:click="clickBoton(1)")
          div.position-absolute(style="width:18%; height:15%; top:46%; left:77%" autofocus v-on:click="clickBoton(2)")
          div.position-absolute(style="width:18%; height:15%; top:80%; left:47%" autofocus v-on:click="clickBoton(3)")
      .col-lg-6.d-flex.align-items-center
        div.t6-div1.p-4(v-if="mostrardiv==1")
          h4.mb-2  El plan de prueba
          p.mb-4 Denota todos los procedimientos y métodos que serán empleados para la certificación del <i>software</i>, determinando si este cumple con las especificaciones presentadas en los requisitos y dadas por el cliente. 
          p.mb-0 Este incluye los objetivos de calidad, los recursos, cronograma, asignaciones, métodos, entre otros.

        div.t6-div1.p-4(v-if="mostrardiv==2")
          h4.mb-2  Casos de prueba
          p.mb-0 Lista los ítems que serán certificados y describe detalladamente los pasos que serán ejecutados para evaluar la verificación de las funcionalidades del producto software.

        div.t6-div1.p-4(v-if="mostrardiv==3")
          h4.mb-2 Reporte de prueba
          p.mb-0 Describe los fallos encontrados en el proceso de ejecución de pruebas y las pruebas exitosas.
      .col-lg-2
    h3 Formatos 
    p.mb-5 Recordemos que el estándar ISO/IEC/IEEE 29119-3:2013 nos provee de una serie de artefactos validados a nivel internacional por las organizaciones a la vanguardia del proceso de desarrollo de <i>software</i> y, a su vez, al margen de la ejecución de pruebas de <i>software</i>. 
    
    div.BorTit2.mb-2 
      p.mb-0 <b>Formatos</b>
          
    .tabla-a.color-primario
      table      
        thead
          tr
            th Documentación de proceso de pruebas<br>(a escala) organizacional 
            th Documentación del proceso<br>de gestión de pruebas
            th Documentación del proceso<br>de pruebas dinámicas           
        tbody
          tr
            td.px-5(style="vertical-align: top") 
              p.mb-3 Política de pruebas
              p.mb-3 Estrategia organizacional de pruebas
            td.px-5(style="vertical-align: top") 
              p.mb-3 Plan de pruebas (incluyendo una estrategia de pruebas)
              p.mb-3 Reporte de estado de prueba
              p.mb-3 Reporte de compleción de pruebas
            td.px-5(style="vertical-align: top") 
              p.mb-3 Especificación de diseño de prueba 
              p.mb-3 Especificación de caso de prueba
              p.mb-3 Especificación de procedimiento de prueba
              p.mb-3 Requerimientos de datos de prueba
              p.mb-3 Reporte de preparación de datos de prueba
              p.mb-3 Requerimientos de entorno de prueba
              p.mb-3 Reporte de preparación de entorno de prueba
              p.mb-3 Resultados reales - Resultados de prueba
              p.mb-3 Registro de ejecución de prueba
              p.mb-3 Reporte de incidentes de prueba  
    Separador

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    mostrardiv: 1,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    clickBoton: function(capa) {
      this.mostrardiv = capa
    },
  },
}
</script>

<style lang="sass"></style>
