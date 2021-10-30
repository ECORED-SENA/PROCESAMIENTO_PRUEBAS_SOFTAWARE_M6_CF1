<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Conceptos de aplicación de pruebas
    Separador
   
    #t_5_1.titulo-segundo
      h2 5.1 Feature
    Separador

    #t_5_2.titulo-segundo
      h2 5.2 Issues
    Separador

    #t_5_3.titulo-segundo
      h2 5.3 Hotfix
    Separador

    #t_5_4.titulo-segundo
      h2 5.4 Bug
    Separador

</template>

<script>
export default {
  name: 'Tema5',
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
