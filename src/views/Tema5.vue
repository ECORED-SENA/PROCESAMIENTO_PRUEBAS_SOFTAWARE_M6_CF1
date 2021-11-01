<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Conceptos de aplicación de pruebas

    .row.justify-content-center
      .col-lg-2
      .col-lg-5.d-flex.align-items-center
        p.mb-0 Es importante reconocer los diferentes conceptos que se usan para la aplicación de prueba de software, con el fin de que pueda familiarizarse con estos términos técnicos.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema5/img01.svg')
    Separador
   
    #t_5_1.titulo-segundo
      h2 5.1 Feature
    .row.justify-content-center.mb-5
      .col-lg-5
        p.mb-0 FOSD es un paradigma en el desarrollo de software orientado a Features, éste sirve para la construcción de sistemas basados en características propias.
      .col-lg-7
        h4 Una feature (característica) es una unidad del producto software que da respuesta a un requisito funcional, la cual puede generar una opción de implementación y representa una decisión de diseño. 
    figure.mb-5
      img(src='@/assets/curso/tema5/img02.png')
    p.mb-5 Se utiliza este tipo de modelos para definir funciones comunes y las variantes de una serie de categorías de productos de software. Los modelos de features son usados para describir las propiedades, funcionalidades, alternativas u opcionales dentro de un dominio. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-5
          p.mb-0 El objetivo de trabajar bajo este paradigma es organizar el producto software en módulos de feature, los cuales representan características o funcionalidades comunes que discrepan de otras features, y a este conjunto de features se le denomina Línea de Productos de Software (SPL). Por lo cual, una SPL es una familia de funcionalidades relacionadas con un dominio en particular, en la que los artefactos de implementación son compartidos.  
    p.mb-5 Para la implementación de una SPL, es necesario analizar el dominio y las diferencias que existen entre otras features. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-5
          h4.mb-0 Programación Orientada a Features (FOP)
          p.mb-0 Es una forma de trabajo en la programación que permite la representación de las características similares y las variaciones de un producto de software, donde el concepto principal está basado en features, y en la que, partiendo de un grupo de características, se pueden generar muchos sistemas de software que compartan características comunes y difieran en otras. 
    p.mb-0 Este tipo de programación nace a partir de las limitaciones que la programación orientada a objetos posee en relación con la implementación de una SPL. 
    Separador

    #t_5_2.titulo-segundo
      h2 5.2 Issues
    p.mb-5 En el ámbito del desarrollo de software, un issue se constituye en una unidad de trabajo. Puede ser una tarea que busca:
    .row.justify-content-center.mb-5
      .col-lg-2        
          .row.justify-content-center.imagen-fondo2.text-small.p-3(:style="{'background-image': `url(${require('@/assets/curso/tema5/img03.svg')})`}")
            .col-lg-1.p-0 
              p.mb-0 1
            .col-lg-11.p-0
              p.mb-0 Solucionar un fallo.
      .col-lg-2
        .row.justify-content-center.imagen-fondo2.text-small.p-3(:style="{'background-image': `url(${require('@/assets/curso/tema5/img03.svg')})`}")
          .col-lg-1.p-0 
            p.mb-0 2
          .col-lg-11.p-0
            p.mb-0 Una característica solicitada.
      .col-lg-2
        .row.justify-content-center.imagen-fondo2.text-small.p-3(:style="{'background-image': `url(${require('@/assets/curso/tema5/img03.svg')})`}")
          .col-lg-1.p-0 
            p.mb-0 3
          .col-lg-11.p-0
            p.mb-0 La solicitud de una documentación específica.
      .col-lg-2
        .row.justify-content-center.imagen-fondo2.text-small.p-3(:style="{'background-image': `url(${require('@/assets/curso/tema5/img03.svg')})`}")
          .col-lg-1.p-0 
            p.mb-0 4
          .col-lg-11.p-0
            p.mb-0 Otro tipo de solicitud al equipo de desarrollo. 
    p.mb-4 Una de las características principales de los issues es que manejan un ID único, que se utiliza principalmente para la trazabilidad, es decir, para poder hacer seguimiento del estado y poder relacionar con otros issues del proyecto. 
    p.mb-5 A continuación, conozca los diferentes tipos de relaciones que es posible encontrar entre los issues.
    TabsC.color-acento-contenido.mb-5 
      .py-3.py-md-4(titulo="Duplicates<br>(Duplicates/is a duplicate of)")
        .row.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema5/img04.svg') 
          .col-lg-6
            h4 Duplicates (Duplicates/is a duplicate of)
            p.mb-4 Esta relación se genera cuando una falla es reportada y ya existía un elemento anterior con la misma problemática. Se indica entonces que el segundo duplica el primero. 
            p.mb-4 En general, se marca como resuelto “duplicate”, con una indicación al original, aunque el original no se haya resuelto aún. 
            p.mb-0 Esto se le indica a quien haya reportado, y debe seguir con el defecto original en lugar del segundo. 
      .py-3.py-md-4(titulo="Dependencias (Depends on)")
        .row.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema5/img05.svg') 
          .col-lg-6.d-flex.align-items-center
            div
              h4 Dependencias (Depends on)
              p.mb-0 Cuando existe un issue con la relación de dependencia, implica que primero se debe resolver, de tal forma que las dependientes se liberen para ser resueltas.<br>Cuando se habla de errores, no es común ver este tipo de relaciones.
      .py-3.py-md-4(titulo="Bloqueos<br>(Blocks/Is bocked by)")
        .row.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema5/img06.svg') 
          .col-lg-6.d-flex.align-items-center
            div
              h4 Bloqueos (Blocks/ is blocked by)
              p.mb-0 Cuando contamos con los casos de prueba como un tipo de issue, es posible que alguna de las funcionalidades no se pueda ejecutar dado que se encontró una falla.<br>Entonces el issue se debe categorizar como blocked by por un error o defecto en particular. Dado el caso que se solucione el defecto, se procederá a continuar con la tarea bloqueada. 
      .py-3.py-md-4(titulo="Causas<br>(Causes/is caused by)")
        .row.justify-content-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema5/img07.svg') 
          .col-lg-6.d-flex.align-items-center
            div
              h4 Causas (Is caused by)
              p.mb-0 En el proceso de prueba se pueden encontrar defectos que en realidad son causados por escenarios no contemplados, los cuales se derivan de la misma causa, el desarrollador puede marcar estos issues cómo generados por causa de otro escenario. Así, podemos decir que, al arreglar el defecto x, se debería solucionar el defecto. 
    .row.justify-content-center.mb-5
      .col-lg-7
        h4 Como se especificó anteriormente, un issue, en realidad, es una generalización de tareas que no solo se relaciona con defectos, sino que también hace referencia a cualquier tipo de actividad o elemento en el escenario de desarrollo. 
      .col-lg-5
        p.mb-0 En la siguiente imagen, se presentan algunos ejemplos, los cuales se pueden adecuar a las necesidades del proyecto u organización.
    
    .row.justify-content-center.mb-5
      .col-lg-8.p-5(style="background-color:#F8EAFF")
        div.BorTit.mb-2 
          p.mb-0 <b>Figura 5</b>
          i Ejemplo de tipos de issues
        figure
          img(src='@/assets/curso/tema5/img08.png') 
    
    p.mb-5 Ahora, los issues se pueden categorizar de la siguiente forma:

    .row.justify-content-center.mb-5
      .col-lg-5
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/img09.svg', alt='Texto que describa la imagen')              

          .tarjeta.color-acento-contenido.p-3(x="67%" y="10%" numero=" ")
            p.mb-2 <b>Defectos</b>
            p.mb-0 Este es el caso más común y forma por defecto de las herramientas usadas específicamente para hacer seguimiento a bugs.
          .tarjeta.color-acento-contenido.p-3(x="84%" y="43%" numero=" ")
            p.mb-2 <b>Tareas</b>
            p.mb-0 Explícitamente se usa para la gestión de las tareas de desarrollo, aunque esto depende directamente de la metodología que se esté aplicando en el proceso.
          .tarjeta.color-acento-contenido.p-3(x="67%" y="80%" numero=" ")
            p.mb-2 <b>Pruebas</b>
            p.mb-0 Hace referencia a las pruebas manuales, donde se realiza la gestión de la creación, modificaciones y ejecución

    p.mb-0  Cada categoría maneja su propio flujo de trabajo, dado que los tipos no son iguales y posiblemente no manejen los mismos estados.
    Separador

    #t_5_3.titulo-segundo
      h2 5.3 Hotfix

    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/tema5/img10.svg') 
      .col-lg-6.d-flex.align-items-center(style="position:relative")
        p.mb-5(style="position:relative; left:-10%") El hotfix hace referencia a una solución rápida, conocida como un parche rápido o un parche en caliente. Estos, por lo regular, se aplican en productos software que están operando en producción y que atienden a reportes de fallas o defectos de cara al usuario final, por lo cual no se aplican en los equipos de desarrollo. Para el desarrollador implica que el cambio se debe generar rápidamente y fuera del proceso y ciclo normal de la implementación de software. Esto puede aumentar el costo al tener que requerir un desarrollo ágil, que posiblemente se deba ejecutar en horas extra y tomando medidas urgentes. 

    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-5
          h4 Tenga en cuenta
          p.mb-0 Lanzar un hotfix es una solución arriesgada y la menos indicada para solucionar un problema, dado que esto puede generar una pérdida inmediata del servicio y, dependiendo de la urgencia y la complejidad, se deberá tomar la decisión de crear un issue para resolver el problema y posponer el hotfix. 
    
    Separador

    #t_5_4.titulo-segundo
      h2 5.4 Bug

    .row.justify-content-center.mb-5
      .col-lg-6.d-flex.align-items-center(style="position:relative")
        p.mb-5(style="position:relative; left:10%; z-index:10000") Los bugs representan una falla o un error en el producto software, se tratan de una inconsistencia en la ejecución de alguna funcionalidad y desencadenan con ello un resultado inesperado o un resultado no deseado. En ese caso, se realiza el apoyo de programas especializados para encontrar estas fallas y con ello brindar la solución pertinente; a esas herramientas se les denomina depuradores. 
      .col-lg-5(style="position:relative")
        figure(style="position:relative; left:-10%")
          img(src='@/assets/curso/tema5/img11.svg') 
      
    p.mb-5 Un bug informático se puede establecer desde la programación o el diseño de software, e implica que en algún momento se manifestará hacia el usuario. Algunos ejemplos de estas fallas pueden ser, entre otros:

    .row.justify-content-center.mb-5
      .col-lg-2.d-flex
        div.t5-div1.px-3.py-5
          .row.justify-content-start.mb-4
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img12.svg') 
          h4.mb-1 01
          p.mb-0 Objetos o variables que no fueron inicializadas.
      .col-lg-2.d-flex
        div.t5-div2.px-3.py-5
          .row.justify-content-start.mb-4
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img12.svg') 
          h4.mb-1 02
          p.mb-0 No indexación de las bases de datos.
      .col-lg-2.d-flex
        div.t5-div1.px-3.py-5
          .row.justify-content-start.mb-4
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/img12.svg') 
          h4.mb-1 03
          p.mb-0 Un ciclo que no tiene delimitador y se convierte en un ciclo infinito. 

    p.mb-0 La regla es que en el momento de ejecución y compilación del producto software, los entornos de desarrollo organicen e identifiquen en primera instancia los bugs, para que se realice su correctivo antes de pasar a algún ambiente. 
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
