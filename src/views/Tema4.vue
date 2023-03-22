<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Infraestructura de TI (Tecnologías de la Información)

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.img4-1(data-aos="zoom-in")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Es un conjunto de módulos tecnológicos que son la base de un servicio de TI y su principal objetivo es el de habilitar herramientas que soporten la operación de las organizaciones. Cuando la tecnología se utiliza correctamente se puede optimizar la comunicación y aumentar la productividad, por lo tanto, si una infraestructura TI es flexible, segura y brinda confiabilidad, aporta a una organización en el cumplimiento de las metas u objetivos y permite la competitividad empresarial. Si una infraestructura TI no es implementada de manera adecuada, las empresas podrán tener problemas de conectividad, seguridad y productividad, dando como resultado interrupciones y daños en el sistema. 

    p.mb-5 Ventajas más comunes a la hora de implementar una infraestructura TI:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-sm-4(data-aos="flip-left")
        .tarjeta-avatar.h-101
          img(src='@/assets/curso/temas/tema4/img4-2.svg', alt='Experiencias positivas')
          .tarjeta.cfta4.w-100
            .text-center.mt-4
              h4 Ofrecer experiencias positivas.
      .col-lg-3.mb-sm-4(data-aos="flip-left")
        .tarjeta-avatar.h-101
          img(src='@/assets/curso/temas/tema4/img4-3.svg', alt='Comercialización')
          .tarjeta.cfta4.w-100
            .text-center.mt-4
              h4 Comercialización rápida.
      .col-lg-3.mb-sm-4(data-aos="flip-right")
        .tarjeta-avatar.h-101
          img(src='@/assets/curso/temas/tema4/img4-4.svg', alt='Análisis')
          .tarjeta.cfta4.w-100
            .text-center.mt-4
              h4 Análisis de datos
      .col-lg-3.mb-sm-4(data-aos="flip-right")
        .tarjeta-avatar.h-101
          img(src='@/assets/curso/temas/tema4/img4-5.svg', alt='Productividad')
          .tarjeta.cfta4.w-100
            .text-center.mt-4
              h4 Mejor productividad.

    p.mb-5 Para el desarrollo de la Infraestructura TI, se tiene en cuenta lo siguiente:

    .row.justify-content-center.mb-5
      .col-lg-8.col-sm-8
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img4-6.svg', alt='Infraestructura TI')

    h3(data-aos='fade-right') Infraestructura TI necesaria para alcanzar los objetivos del negocio

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Las nuevas tecnologías tienen un potente impacto en las estrategias de negocio y brindan un soporte definido de trabajo. Todos los servicios de tecnologías, desde App móvil hasta aplicativos empresariales, requieren de una infraestructura TI como pilar de su eficacia. Esta infraestructura sirve en las estrategias de negocios.
        p.mb-4 El objetivo es lograr la efectividad general de los procesos de TI, implementar las políticas apropiadas, el correcto manejo de los datos, optimizar el recurso humano; la infraestructura TI es fundamental, porque permite la toma de decisiones más inteligentes, monitorear el entorno tecnológico y detectar cuando existen cambios o actualizaciones de los sistemas, posibilitando ideas de cuándo y cómo se deben mitigar los riesgos.

        .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-up")
          p De igual manera, se pueden limitar los posibles desastres y reducir el impacto de daños haciendo uso de <i>software</i> de monitoreo para identificar las amenazas de forma oportuna, desencadenando como resultante, la reducción de costos, tiempos de inactividades y pérdida de datos, entre otros. 

      .col-lg-5.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img4-7.png', alt='Software')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9(data-aos="zoom-in")
        TabsA.color-acento-botones
          .tarjeta.color-primario1.p-4(titulo="Infraestructura<br> tradicional")
            p Está conformada por el 
              em hardware 
              |y 
              em software
              |, centros de datos, servidores y computadoras de red; generalmente, requiere más energía, espacio y dinero que otras infraestructuras.
          .tarjeta.color-primario1.p-4(titulo="Infraestructura<br> en la nube")
            p Similar a la anterior, la diferencia es que los usuarios finales pueden ingresar a través de Internet y se tiene la capacidad de virtualizar para ocupar menos recursos informáticos.
      .col-lg-3.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/img4-8.svg' alt='Infraestructura')

    h3(data-aos='fade-right') Gestión de la infraestructura TI

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img4-9.png' alt='Manos en computador portátil')
      .col-lg-7(data-aos="fade-left")
        p La infraestructura TI es un sistema robusto que se compone de infraestructura física, como los servidores, equilibradores de carga, <i>firewall</i>, componentes virtuales como Hyper-V, VMware, entre otros. Así como la modernización de la infraestructura progresa, los administradores TI deben actualizarse día a día para mantener sus redes e infraestructura de manera eficiente; es aquí donde se obtienen beneficios de una estrategia que esté dedicada a gestionar la infraestructura TI.
        p La gestión de infraestructura TI (ITIM) es un proceso donde se supervisan muchos componentes, como lo son el <i>hardware</i>, el <i>software</i>, redes y aquellos que implican en la infraestructura TI y así poder mejorar el monitoreo, reducir costos y ofrecer soluciones empresariales. 
        p.mb-0 Gracias a la implementación del ITIM, se desprenden varios desafíos como los siguientes: 
    .row.justify-content-center.mb-5
      .col-lg-8.col-sm-9(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema4/img4-10.svg' alt='ITIM Implementation')

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img4-11.png' alt='Persona pensando')
      .col-lg-8(data-aos="zoom-in")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Desafíos de monitoreo y salud")
            .col-md-12.mb-4.mb-md-0
              p La infraestructura TI garantiza la disponibilidad y la integridad de los dispositivos.
          .row(titulo="Desafíos de rendimiento, procesos y nivel de servicio")
            .col-md-12.mb-4.mb-md-0
              p Se monitorean las métricas de rendimiento, se da prioridad a determinados dispositivos, la infraestructura debe ser eficiente, así como su capacidad de ofrecer soluciones que brindan a sus clientes disponibilidad de servicios y de los dispositivos.
          .row(titulo="Desafíos de la gestión de la configuración")
            .col-md-12.mb-4.mb-md-0
              p Cada vez que se genera un cambio en la configuración de los dispositivos, existe la probabilidad de producir un fallo en ellos o tiempos de inactividad; por tal motivo, los errores de configuración humana pueden afectar los procesos, no solo hay que establecer políticas de recuperación ante contingencias sino también se debe supervisar y mantener informes de cambios de configuración.
          .row(titulo="Desafíos de ancho de banda")
            .col-md-12.mb-4.mb-md-0
              p La idea fundamental es garantizar el suficiente ancho de banda para el 
                em software 
                |del negocio y establecerlo de forma efectiva.
          .row(titulo="Desafíos de cumplimiento")
            .col-md-12.mb-4.mb-md-0
              p Garantizar el cumplimiento de diversas políticas (SOX, HIPPA, dSS, SANS, etc.) para el óptimo funcionamiento de los procesos.
          .row(titulo="Desafíos de seguridad")
            .col-md-12.mb-4.mb-md-0
              p La seguridad es efectiva en la infraestructura TI cuando se utilizan adecuadamente los estándares vigentes de seguridad; de igual manera, es necesario analizar posibles amenazas y monitorear el uso del Internet.

    h3(data-aos='fade-right') Características dinámicas de la infraestructura TI

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema4/img4-12.png' alt='Infraestructura TI')
      .col-lg-8(data-aos="fade-left")
        p Las infraestructuras dinámicas se refieren al conjunto de dispositivos como centros de datos, computación, redes y almacenamiento; estos se pueden ajustar automáticamente en la medida que cambian las demandas de la carga de trabajo y, de igual manera, los administradores pueden configurar manualmente los dispositivos, la infraestructura dinámica se basa principalmente en el <i>software</i> que permite identificar, virtualizar, clasificar y rastrear.
        p.mb-4 Gracias a los dispositivos, los equipos TI pueden establecer y monitorear múltiples niveles de servicios y así garantizar que, de manera automática, los dispositivos sean asignados según sus cargas; es por eso que el 
          em software 
          |da valor agregado al grupo cuando las demandas disminuyen en un proceso conocido como equilibrio de la carga de trabajo.

        .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-up")
          p.mb-0 La infraestructura ayuda a alinear el uso de TI con las políticas comerciales, maximizando el uso de los dispositivos y reduciendo los costos en las organizaciones.
    p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
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
