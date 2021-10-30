<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de las pruebas de software    
      Separador

    #t_1_1.titulo-segundo
      h2 1.1 Justificación
    Separador

    #t_1_2.titulo-segundo
      h2 1.2 Alcance
    Separador

    #t_1_3.titulo-segundo
      h2 1.3 Objetivos de las pruebas de software
    Separador

    #t_1_4.titulo-segundo
      h2 1.4 Ciclo de ejecución de las pruebas de software
    Separador

    #t_1_5.titulo-segundo
      h2 1.5 Casos de pruebas y escenarios
    Separador

    #t_1_6.titulo-segundo
      h2 1.6 Criterios de aceptación
    Separador

    #t_1_7.titulo-segundo
      h2 1.7 Niveles de aplicación de las pruebas de software
    Separador

    #t_1_8.titulo-segundo
      h2 1.8 Tipos de pruebas
    Separador

    #t_1_9.titulo-segundo
      h2 1.9 Herramientas y soportes de las pruebas de software
    Separador

</template>

<script>
export default {
  name: 'Tema1',
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
