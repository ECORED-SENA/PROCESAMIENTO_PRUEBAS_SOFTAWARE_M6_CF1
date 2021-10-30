<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 Se invita a revisar el siguiente video para que comprenda algunas indicaciones iniciales del proceso de aprendizaje y los elementos de abordaje acerca de la planeación de pruebas y sus generalidades.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.imagen-fondo(:style="{'background-image': `url(${require('@/assets/curso/introduccion/img02.svg')})`}")
      .col-lg-5.d-flex.align-items-center
        p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en preparación de pruebas, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del procesamiento de pruebas de software.
      .col-lg-3 
        figure
          img(src='@/assets/curso/introduccion/img01.svg')            
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
