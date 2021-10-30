<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Marcos de referencia
    Separador
   
    #t_3_1.titulo-segundo
      h2 3.1 Estándares en pruebas de software
    Separador

    #t_3_2.titulo-segundo
      h2 3.2 Test Driven Development
    Separador

    #t_3_3.titulo-segundo
      h2 3.3 Documentación de la aplicación de prueba de software
    Separador

    #t_3_4.titulo-segundo
      h2 3.4 Criterio de manejo de lecciones aprendidas
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
