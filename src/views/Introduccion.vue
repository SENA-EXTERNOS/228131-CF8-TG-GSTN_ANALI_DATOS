<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/intro/intro.svg', alt='Arquitectura del sistema')
      .col-lg-8.recuadroid(data-aos="fade-left")
        p Estimado aprendiz, una cordial bienvenida a este componente formativo basado en la temática de la modelación de bases de datos, validación de la arquitectura, definición de la misma, metodologías de desarrollo y conceptos de infraestructura TI.
        p Para la elaboración de este componente, se abordaron varios autores conocidos en temas relacionados, de quienes se han citado y referenciado conceptos para los fines educativos de esta competencia, se espera que este documento sea útil para los aprendices y lectores en general.
        p.mb-0 Antes de empezar, se sugiere mirar el siguiente video para identificar el contexto de aprendizaje.

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
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
