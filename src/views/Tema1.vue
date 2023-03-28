<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Modelado de bases de datos para la analítica

    p El modelado de datos, en tanto proceso creativo para definir sistemas de recopilación y gestión de información, es una herramienta clave para soporte y ayuda en cualquier organización. 

    p Comience por visualizar el video que se muestra a continuación, e introdúzcase conceptualmente en todo lo relacionado con este proceso:


    figure.my-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9D0h9ZfgN34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    
    h3(data-aos='fade-right') Diseño de bases de datos
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Es un proceso fundamental cuando se modelan los conjuntos de datos y se definen las operaciones que se realizan sobre ellos. Dado que los datos son el activo más importante en la empresa, una base de datos que esté bien diseñada influye en la eficiencia que se obtenga a la hora de almacenar, recuperar y analizar los datos. (Giménez, 2019).
        p Dentro de las ventajas en el diseño de la base de datos están:
        ul.lista-ul
          li
            i.fas.fa-angle-right
            p.mb-0 Ahorro de espacio utilizando un diseño optimizado y sin duplicidad de datos.
          li
            i.fas.fa-angle-right
            p.mb-0 Preservación e integridad de los datos para evitar pérdidas de información.
          li
            i.fas.fa-angle-right
            p.mb-0 Agilizar el acceso y el procesamiento de los datos.
      .col-lg-5.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img1-1.png', alt='Base de datos')

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img1-2.svg" alt="Carpeta con documentos")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Fases para el funcionamiento de bases de datos
                  p Para realizar el diseño de una base de datos, es necesario seguir las distintas fases que garanticen el buen funcionamiento de la misma.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/CF8_Anexo_1_fases.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    h3(data-aos='fade-right') Restricciones en el esquema de la base de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1-3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p En la restricción de dominio, se especifican cada uno de los valores de cada atributo, que debe ser un valor atómico de su dominio. Los tipos de datos asociados, suelen incluir los tipos numéricos para enteros y reales; también, pueden ser especificados por conjuntos explícitos, donde se tienen las restricciones de clave y nulos; en el esquema de la base de datos relacional, se debe tener definida una clave primaria. La clave de una relación está determinada por el significado de los atributos y es una propiedad que no varía con el tiempo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-botones.p-4.mb-4
          p Otra de las restricciones sobre atributos, especifica si se permiten valores nulos o no, si toda tupla de una relación debe tener un valor válido y no nulo para el atributo. Este tendrá la restricción de no ser nulo (Mosquera, et al., 2017). La restricción de integridad establece que ningún valor de clave primaria puede ser nulo, porque el valor de la llave primaria funciona para identificar las tuplas de una relación; si la llave primaria tiene valores nulos, no podríamos identificar algunas tuplas.

    h3(data-aos='fade-right') Normalización de bases de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/img1-4.svg" alt="Estante de servidores")
      .col-lg-8(data-aos="fade-left")
        p Normalización se refiere al proceso que organiza una base de datos. Para esto, se debe tener en cuenta la creación de tablas y reglas que se utilizan para definir las relaciones que garantizan la protección de los datos, dando flexibilidad para eliminar redundancias; normalizando una base de datos, se puede asegurar que, en un futuro, se realicen consultas que sean no necesariamente complejas.
        p.mb-0 Los datos redundantes desperdician espacio en los equipos y generan problemas de mantenimiento entonces la normalización ayuda con este problema. Algunas de sus ventajas son evitar la redundancia de datos, facilitar el acceso a los datos, optimizar el espacio de almacenamiento, proteger la integridad de los datos y, finalmente, evitar problemas en la actualización de los datos en las tablas.

    p.mb-5(data-aos="fade-right") Existen varias formas de normalizar; entre ellas, se encuentran las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="zoom-in")
        TabsA.color-acento-botones
          .tarjeta.color-primario1.p-4(titulo="La primera forma<br> normal")
            p En esta, se eliminan los grupos que se repiten dentro de las tablas que son individuales. Se hace necesario crear una tabla que esté separada para cada grupo de los datos relacionados e identificar cada grupo de datos, relacionados con una llave primaria.
          .tarjeta.color-primario1.p-4(titulo="Segunda forma<br> normal")
            p Implica tener la primera forma normal y, adicionalmente, se crean tablas separadas para aquellos grupos de datos donde se le aplican a varios registros; también requiere relacionar las tablas mediante una llave externa.
          .tarjeta.color-primario1.p-4(titulo="Tercera forma<br> normal")
            p Luego de utilizar la segunda forma normal, se deben eliminar los campos que no dependan de las llaves. Ninguna columna puede depender de una columna que no tenga una clave, tampoco puede haber datos derivados.
      .col-lg-3.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/img1-5.png" alt="Normalización")

    h3(data-aos='fade-right') Modelo ACID en bases de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema1/img1-6.svg" alt="Modelo ACID")
      .col-lg-9(data-aos="fade-left")
        p Se refiere a diferentes propiedades que se deben mantener de forma conjunta en una base de datos. El objetivo es garantizar la seguridad de las transacciones, que son operaciones lógicas, donde su ejecución da forma a una unidad de trabajo.
        p ACID es el acrónimo de atomicidad, consistencia, aislamiento y durabilidad. 
        p.mb-0 A continuación, se explican las respectivas definiciones:        

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        PasosA.color-acento-botones(tipo="l")
          .row.justify-content-center.align-items-center(titulo="A")
            .col-md-7.mb-4.mb-md-0
              h4 Atomicidad
              p Define la manera en que el sistema permite llevar a cabo las operaciones atómicas; es conocido como el todo o nada de la transacción porque, en el caso que se completen las transacciones, se obtendrán las modificaciones requeridas en la base de datos. Si una parte de la transacción tiene un fallo, esto hará que todas las operaciones también fallen y, como consecuencia, la base de datos no sufrirá cambios.
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema1/img1-7.svg" alt="Atomicidad")
          .row(titulo="B")
            .col-md-5.mb-sm-4
              figure
                img(src="@/assets/curso/temas/tema1/img1-8.svg" alt="Consistencia")
            .col-md-7.mb-4.mb-md-0
              h4 Consistencia
              p Consiste en la capacidad que tiene el sistema para iniciar operaciones que se pueden concluir, lo que permitirá que se ejecuten transacciones que no incumplan con las reglas. Se relaciona con la atomicidad.
          .row.justify-content-center.align-items-center(titulo="C")
            .col-md-7.mb-4.mb-md-0
              h4 Aislamiento
              p Se refiere a la manera y el momento en que los cambios que resultan de una operación se hacen notorios para las operaciones concurrentes. Una operación no debería de afectar a otra, debido a que cada una de las transacciones se deben ejecutar en aislamiento total.
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema1/img1-9.svg" alt="Aislamiento")
          .row(titulo="D")
            .col-md-5.mb-sm-4
              figure
                img(src="@/assets/curso/temas/tema1/img1-10.svg" alt="Durabilidad")
            .col-md-7.mb-4.mb-md-0
              h4 Durabilidad
              p Es la capacidad de persistir y que las operaciones no puedan ser desechas, aún si el sistema presenta fallas o contingencias; durabilidad significa que se confirmó una transacción, un ejemplo de esto es cuando se almacenan datos en modelos relacionales o cuando se ejecutan sentencias de código SQL.

    h3(data-aos='fade-right') Herramientas de fuente abierta para bases de datos orientadas a la analítica

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Gracias al desarrollo de Internet y de la tecnología de la información, se ha generado mucha información en el mundo, desde datos creados por empresas, hasta datos generados a través de la navegación y el comportamiento de los usuarios en la Internet. Estos datos cubren una amplia gama de información que es útil para la toma de decisiones, dando como resultado la importancia en la analítica.
        p Existen varias técnicas analíticas para diferentes propósitos que van desde la reducción de la dimensionalidad hasta la clasificación y predicción del comportamiento.
        p.mb-0 Entre las herramientas de código abierto se encuentran las siguientes:
      .col-lg-4.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema1/img1-11.svg" alt="Código")

    .row.justify-content-center.mb-5
      .col-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img1-12.png", alt="Código")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center Knime
            p.text-center.mb-0 Es una herramienta para analítica, reporte e integración de información.
      .col-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img1-13.png", alt="Código")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center H20.ai
            p.text-center.mb-0 API de Machine Learning de código abierto y de fácil escalabilidad, para análisis predictivos.
    .row.justify-content-center.mb-5            
      .col-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img1-14.png", alt="Código")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center Anaconda
            p.text-center.mb-0 Es una plataforma de código abierto alimentada por Python; es de fácil uso y posee las siguientes ventajas: analítica avanzada, análisis de interacción y despliegue analítico.
      .col-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img1-15.png", alt="Código")
          .crd_hover_txt--body.w-100
            h4.mb-3.text-center Orange
            p.text-center.mb-0 herramienta de código abierto para el análisis y visualización de los datos, cuenta con componentes para Machine Learning.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
