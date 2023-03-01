<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Definición de arquitectura y metodología en desarrollo de <i>software</i>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p La arquitectura basada en el desarrollo de <i>software</i>, se refiere a una planificación que se basa en modelos, patrones y abstracciones teóricas, cuando se desarrolla una pieza de <i>software</i> de mucha complejidad.
        p.mb-0 Permite priorizar y escoger el mejor conjunto de herramientas para el desarrollo de los proyectos tecnológicos, por lo tanto, antes de programar hay que determinar el ritmo del desarrollo, costos y talento humano. De tal manera, se hace necesario determinar ciertas características fundamentales que se muestran a continuación.
      .col-lg-5.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img3-1.png', alt='Persona trabajando en computador')

    .row.justify-content-center.align-items-center.mb-5
      .col-4
        .crd3_hover_txt(data-aos="flip-left")
          .crd3_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img3-2.png", alt="Costo")
          .crd3_hover_txt--body.w-100
            h4.mb-3.text-center Costo
            p.text-center.mb-0 Se refiere a cuánto se va a invertir en el mantenimiento. Es importante saber cuánto vale la aplicación en la que se va a invertir y el costo en la infraestructura.
      .col-4
        .crd3_hover_txt(data-aos="flip-left")
          .crd3_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img3-3.png", alt="Tiempo")
          .crd3_hover_txt--body.w-100
            h4.mb-3.text-center Tiempo de desarrollo
            p.text-center.mb-0 Se planea cuánto tardará el proyecto en ser ejecutado.
    .row.justify-content-center.align-items-center.mb-5            
      .col-4
        .crd3_hover_txt(data-aos="flip-left")
          .crd3_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img3-4.png", alt="Usuarios")
          .crd3_hover_txt--body.w-100
            h4.mb-3.text-center Número de usuarios
            p.text-center.mb-0 ¿cuántos usuarios soportará la aplicación y su funcionalidad, ya sea en escritorio o entornos web?
      .col-4
        .crd3_hover_txt(data-aos="flip-left")
          .crd3_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img3-5.png", alt="Persona trabajando en computador")
          .crd3_hover_txt--body.w-100
            h4.mb-3.text-center Nivel de aislamiento
            p.text-center.mb-0 Asegura que el producto se encuentre aislado del resto de productos de los usuarios.

    p.mb-5 A continuación, se visualizan los puntos a tener en cuenta en el desarrollo de 
      em software.

    .row.justify-content-center.mb-5
      .col-lg-10.col-sm-8(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img3-6.svg', alt='Desarrollo de software')
          .tarjeta.color-secundario.p-3(x="50%" y="18%" numero="")
            p Es una estructura aplicada al desarrollo de un producto de 
              em software
              |; también denominado ciclo de vida del desarrollo de 
              em software.
          .tarjeta.color-secundario.p-3(x="25%" y="61%" numero="")
            p Es un modelo conceptual donde se define un vocabulario en común.
          .tarjeta.color-acento-contenido.p-3(x="43%" y="61%" numero="")
            p Está basado en una visión periférica como núcleo de cualquier diseño y estrategia digital.
          .tarjeta.color-acento-contenido.p-3(x="59%" y="61%" numero="")
            p Técnicas donde se pueden resolver problemas frecuentes en el desarrollo del 
              em software
              |. Entre otros ámbitos referentes al diseño, como lo es la interacción o las interfaces.
          .tarjeta.color-primario.p-3(x="92%" y="61%" numero="")
            p Realizado generalmente luego que se lanza el producto; incluye la mejora del 
              em software
              |, la corrección de errores, 
              em bugs 
              |y mejoras de rendimiento.
          .tarjeta.color-acento-botones.p-3(x="76%" y="61%" numero="")
            p Grupo de procesos de comprobación y análisis donde se asegura que todas las especificaciones y necesidades estén desarrolladas en el 
              em software.
          .tarjeta.color-secundario.p-3(x="18%" y="75%" numero="")
            p Una arquitectura de 
              em software 
              |es un conjunto de decisiones sobre la organización de un sistema de 
              em software 
              |que, a su vez, se enfoca en principios tales como los componentes del sistema, responsabilidad y cómo se interrelacionan.
          .tarjeta.color-secundario.p-3(x="18%" y="94%" numero="")
            p La evaluación de arquitecturas permite medir las propiedades del sistema con base en las especificaciones abstractas. Estas mediciones se realizan sobre una arquitectura de 
              em software.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .cajon.color-acento-botones.p-4
          p.mb-0 Las metodologías tradicionales se enmarcaron en definir total y rígidamente los requisitos al inicio de un proyecto de <i>software</i>, los ciclos eran poco flexibles y no permitían cambios en estos. Además, los procesos se definían de manera lineal y no se podía volver hacia atrás. Por eso, las metodologías ágiles han mejorado la forma en el desarrollo de proyectos complejos, haciendo más dinámicas las funciones entre el equipo de trabajo.

    h3(data-aos='fade-right') Introducción y evaluación de arquitecturas de 
      em software

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Una arquitectura de <i>software</i> es un conjunto de decisiones sobre la organización de un sistema que, a su vez, se enfoca en principios tales como los componentes del sistema, responsabilidad y cómo se interrelacionan. Una buena arquitectura es capaz de tomar decisiones de diseño significativas, logrando evitar riesgos de cambios a futuro. Ahora bien, ¿qué es la evaluación? Se define como un estudio de factibilidad para así saber si los requerimientos, atributos de calidad y restricciones, cumplen con las necesidades (Garcés & Egas, 12012).
        p.mb-0 La evaluación de arquitecturas permite medir las propiedades del sistema con base en las especificaciones abstractas. Estas mediciones se realizan sobre una arquitectura de 
          em software 
          |y pueden tener varios objetivos, todo depende de la aplicabilidad de las técnicas que se utilicen. Algunos de estos objetivos son: cualitativos, cuantitativos, mínimos y máximos teóricos.
      .col-lg-4.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img3-8.svg', alt='Arquitectura de software')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2.mb-sm-4(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema3/img3-9.svg', alt='Monitor y rueda dentada')
      .col-lg-8.col-sm-10(data-aos="flip-right")
        ul.lista-ul
          li
            i.fas.fa-angle-right
            p.mb-0 La medición cualitativa compara las arquitecturas candidatas y brinda mejores respuestas sin mayor nivel de detalle.
          li
            i.fas.fa-angle-right
            p.mb-0 La medición cuantitativa busca obtener valores que permitan tomar decisiones en temas de calidad de la arquitectura, requerimientos de desempeño y así establecer el grado de cumplimiento.
          li
            i.fas.fa-angle-right
            p.mb-0 La medición de mínimo y máximo define valores teóricos para la comparación de la medición, permitiendo establecer el grado de cumplimiento en temas de calidad.

    h3(data-aos='fade-right') Patrones y estilos de arquitecturas

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.img3-10(data-aos="flip-up")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Un estilo de arquitectura se refiere a un grupo de decisiones de diseño arquitectural; estos son aplicables en el desarrollo restringiendo decisiones en el diseño de un 
                  em software 
                  |y planteando objetivos de ciertos atributos para el sistema resultante.
                p.mb-0 Un patrón es un conjunto de decisiones aplicables a un problema de diseño que es recurrente y se puede estandarizar en varios contextos donde el problema aparece.

    h3(data-aos='fade-right') Arquitectura 
      em Agile

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-11.png', alt='Persona trabajando en computador')
      .col-lg-7.recuadroid3(data-aos="fade-left")
        p La arquitectura Agile está basada en una visión periférica como núcleo de cualquier diseño y estrategia digital. La arquitectura a nivel organizacional se apoya en temas estratégicos. De igual manera, la arquitectura se basa en un conjunto de decisiones, la selección de componentes estructurales, su comportamiento, composición y el estilo arquitectónico que guía a la organización. Pero también enmarca el uso, funcionalidad, rendimiento, capacidad de adaptación, capacidad de comprensión, entre otras. 
        p.mb-4 Una arquitectura Agile permite indicar, en la medida que genere un cambio, que se haga de forma eficaz y eficiente. Dado que las empresas modernas crecen y se desarrollan de manera rápida, es necesario desarrollar la capacidad de reaccionar y adaptarse al cambio (Ramos, et al., 2022).

    p.mb-5(data-aos="fade-down") Los roles de la arquitectura Agile tienen relación con el arquitecto de la empresa, el arquitecto de soluciones y el arquitecto de sistemas. Dentro de los diferentes beneficios de la arquitectura Agile se encuentran los siguientes:

    SlyderF.mb-5.slyder-100(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar.h-100
        img(src='@/assets/curso/temas/tema3/img3-12.svg' alt='Clientes')
        .tarjeta.w-100(style="background-color: rgba(19, 138, 248, .25)")
          .text-center.p-4
            p Enfoque centrado en el cliente.
      .tarjeta-avatar.h-100
        img(src='@/assets/curso/temas/tema3/img3-13.svg' alt='Estrategia')
        .tarjeta.w-100(style="background-color: rgba(19, 138, 248, .25)")
          .text-center.p-4
            p Se ocupan de la estrategia, la entrega y ejecución.
      .tarjeta-avatar.h-100
        img(src='@/assets/curso/temas/tema3/img3-14.svg' alt='Diseños')
        .tarjeta.w-100(style="background-color: rgba(19, 138, 248, .25)")
          .text-center.p-4
            p Permiten acelerar los diseños.
      .tarjeta-avatar.h-100
        img(src='@/assets/curso/temas/tema3/img3-15.svg' alt='Equipos')
        .tarjeta(style="background-color: rgba(19, 138, 248, .25)")
          .text-center.p-4
            p Permiten a los arquitectos formar parte de los equipos 
              em Agile.

    h3(data-aos='fade-right') Patrones de diseño del 
      em software
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-16.svg' alt='Patrones de diseño de software')
      .col-lg-10.col-sm-10(data-aos="fade-left")
        p Se definen como técnicas donde se pueden resolver problemas frecuentes en el desarrollo del 
          em software
          |, entre otros ámbitos referentes al diseño como la interacción o interfaces.
        p.mb-0 Dentro de los tipos de patrones se encuentran tres categorías principales: creacionales, estructurales y de comportamiento:

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--blanca")
          .row(titulo="Patrones creacionales")
            .col-md-12.mb-4.mb-md-0
              p Aumentan la flexibilidad y la reutilización del código en la situación que lo requiera.
          .row(titulo="Patrones estructurales")
            .col-md-12.mb-4.mb-md-0
              p Facilitan soluciones y estándares con respecto a composiciones de clase. El concepto de herencia se utiliza para componer interfaces.
          .row(titulo="Patrones de comportamiento")
            .col-md-12.mb-4.mb-md-0
              p Se ocupan de la comunicación entre objetos de clase y, también, son utilizados para detectar la presencia de patrones de comunicación.
      .col-lg-5.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img3-17.svg' alt='Tipos de patrones')

    h3(data-aos='fade-right') Verificación del 
      em software

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-18.png' alt='Verificación de software')
      .col-lg-7(data-aos="fade-left")
        p Abarca un grupo de procesos de comprobación y análisis donde se asegura que todas las especificaciones y necesidades estén desarrolladas en el <i>software</i>. Dentro de los objetivos están valorar y mejorar la calidad del <i>software</i> desarrollado; los atributos de la calidad deben ser la corrección, perfección, consistencia, confiabilidad, estandarización y eficacia de costos.
        p.mb-4 Existen dos tipos de verificación, la formal y la del ciclo de vida. La verificación formal es demostrable matemáticamente en la concordancia del código fuente con sus especificaciones; la verificación del ciclo de vida es un proceso en donde se plantean fases que cumplen con las especificaciones establecidas.

        .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-up")
          p.mb-0 La validación es la evaluación del 
            em software 
            |al final del proceso del desarrollo de este. Se enfoca en el proceso de evaluación de componentes, permitiendo establecer si los productos en las fases satisfacen los requerimientos.

    p.mb-5(data-aos="fade-left") Para el desarrollo de una verificación se debe tener en cuenta la consistencia, donde se vigila que la información sea coherente y precisa. Dentro de los métodos de verificación más utilizados están:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="zoom-in")
        TabsA.color-acento-botones
          .tarjeta.color-primario1.p-4(titulo="Aserciones E/S")
            p Se especifica mediante aserciones donde se relacionan las entradas y salidas del programa, se garantiza si la entrada satisface los requerimientos y la salida satisface sus restricciones.
          .tarjeta.color-primario1.p-4(titulo="Precondición<br> más débil")
            p Consiste en encontrar un operando hacia atrás.
          .tarjeta.color-primario1.p-4(titulo="Inducción<br> estructural")
            p Es una técnica de verificación que se basa en el principio de inducción matemática.
      .col-lg-5.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img3-19.svg' alt='Aprobación')

    h3(data-aos='fade-right') Mantenimiento del 
      em software

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img3-20.svg' alt='Mantenimiento')
      .col-lg-8.recuadroid32(data-aos="fade-left")
        p El cambio, modificación y actualización de un <i>software</i> que cumpla con las necesidades y requerimientos del cliente, se llama mantenimiento del <i>software</i>; se realiza generalmente, luego de lanzado el producto e incluye la mejora del <i>software</i>, la corrección de errores, <i>bugs</i> y mejoras de rendimiento.
        p.mb-4 Dentro del ciclo de 
          em software 
          |el mantenimiento es un pilar fundamental. Antes de lanzarlo al mercado se debe corregir y mejorar constantemente, para poder ser competitivo; por lo tanto, el uso de técnicas y estrategias correctas de mantenimiento son importantes para cualquier 
          em software 
          |en ejecución durante un periodo de tiempo largo. Un 
          em software 
          |debe mantenerse actualizado porque la tecnología avanza a pasos agigantados. Dentro de los tipos de mantenimiento existe el correctivo, preventivo, perfectivo y adaptable.

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
