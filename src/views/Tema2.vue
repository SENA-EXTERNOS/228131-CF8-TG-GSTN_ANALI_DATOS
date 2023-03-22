<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Validación de la arquitectura de la base de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Se conoce como el proceso en el que se evita ingresar datos incorrectos en una base de datos, por tal motivo, se restringe el tipo de información que se puede ingresar. Además, esto permite brindar instrucciones al usuario de cómo se debe ingresar la información.
        p Dentro de las ventajas que ofrece la validación de la arquitectura de datos está la detección de agujeros de seguridad y de la corrupción de datos. La validación de datos es esencial en el procesamiento de los mismos; de esta manera, se optimizan tiempos de trabajo, ya que solo se realizan revisiones periódicas y se asegura la validez de la información.
        p.mb-0 Por lo siguiente, se deben tener controles y reglas de validación. Algunos de los métodos de validación más usados son:
      .col-lg-5.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/img2-1.png" alt="Validación de código")

    .tarjeta.tarjeta--lt1.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-acento-botones
        .row.justify-content-center.align-items-center(titulo="Formato de verificación")
          .col-md-6.mb-4.mb-md-0
            p Permite comprobar si los datos que se ingresan siguen un patrón que se ha establecido previamente; un ejemplo puede ser, los números telefónicos.
          .col-md-4
            figure
              img(src="@/assets/curso/temas/tema2/img2-2.svg" alt="Verificación")
        .row.justify-content-center.align-items-center(titulo="Comprobación de longitud")
          .col-md-6.mb-4.mb-md-0
            p Mediante la cantidad de caracteres se asegura que lo que se ingrese a la base de datos cumpla con la longitud requerida; ejemplo, la exigencia de longitud de contraseñas.
          .col-md-4
            figure
              img(src="@/assets/curso/temas/tema2/img2-3.svg" alt="Contraseña")
        .row.justify-content-center.align-items-center(titulo="Comprobación de presencia")
          .col-md-6.mb-4.mb-md-0
            p Verifica que el usuario ingrese algún dato en el campo y no deje campos vacíos que alteren el comportamiento de los datos.
          .col-md-4
            figure
              img(src="@/assets/curso/temas/tema2/img2-4.svg" alt="Lista de chequeo")
        .row.justify-content-center.align-items-center(titulo="Verificación de tipo")
          .col-md-6.mb-4.mb-md-0
            p Asegura que los datos introducidos sean de algún tipo en específico; por ejemplo, que cuando se ingrese una fecha no permite ingresar letras.
          .col-md-4
            figure
              img(src="@/assets/curso/temas/tema2/img2-5.svg" alt="Verificaciones")
        .row.justify-content-center.align-items-center(titulo="Cuadro desplegable")
          .col-md-6.mb-4.mb-md-0
            p Reduce las posibilidades de errores ya que parametriza las respuestas y sugiere automáticamente opciones que se encuentran preestablecidas, ayudando a evitar respuestas no deseadas o incoherentes.
          .col-md-4
            figure
              img(src="@/assets/curso/temas/tema2/img2-6.svg" alt="Cuadro desplegable")
        .row.justify-content-center.align-items-center(titulo="Verificación de rango")
          .col-md-6.mb-4.mb-md-0
            p Establece límites entre un valor mínimo y un valor máximo. Se utiliza para aceptar valores o datos permitidos en la base de datos.
          .col-md-4
            figure
              img(src="@/assets/curso/temas/tema2/img2-7.svg" alt="Marca de verificación")
        .row.justify-content-center.align-items-center(titulo="Identificador único")
          .col-md-6.mb-4.mb-md-0
            p Garantiza que los datos que se ingresen sean únicos, evitando la duplicidad de la información dentro de la base de datos.
          .col-md-4
            figure
              img(src="@/assets/curso/temas/tema2/img2-8.svg" alt="Identificador")

    h3(data-aos='fade-right') Inteligencia de negocios (
      em business intelligence
        |)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema2/img2-9.svg" alt="Reunión de trabajo")
      .col-lg-7(data-aos="fade-left")
        p La inteligencia de negocios genera una combinación entre el análisis de negocios, minería de datos, herramientas e infraestructura de datos, permitiendo la toma de decisiones a través de los datos, ayudando a la organización a mejorar sus procesos. Se tiene una inteligencia de negocios cuando se diseña un objetivo integral de los datos en la empresa y se utiliza para generar un cambio, mejorar la eficiencia y la adaptación en el mercado.
        p.mb-0 La BI muestra datos actuales e históricos, para que las empresas tomen las mejores decisiones dentro de su contexto empresarial; por esto, los analistas pueden aprovechar mediante los puntos de referencia en rendimientos, para que la organización funcione de manera fluida. Dentro de las ventajas están: identificar el comportamiento de las ganancias, analizar el comportamiento del cliente, comparar datos con los competidores, optimizar operaciones, predecir el éxito, entre otras.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 El funcionamiento de la BI dependerá de las preguntas y objetivos empresariales; para el desarrollo de estas preguntas se debe primero recopilar los datos necesarios, analizarlos y determinar qué acciones deberán hacerse para alcanzar los objetivos (Mosquera, et al., 2017).

    h3(data-aos='fade-right') Bodega de datos (
      em data warehouse
        |)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema2/img2-10.svg" alt="Bodega de datos")
      .col-lg-10.col-sm-10(data-aos="fade-left")
        p Repositorio donde se unifican datos que recogen diversos sistemas de una empresa. Este puede ser físico o lógico, cuya finalidad es obtener información de diversas fuentes para fines analíticos. Normalmente una bodega de datos es almacenada en un servidor local o en la nube, los datos se extraen selectivamente para su uso utilizando aplicaciones analíticas.
        p.mb-0 El funcionamiento de la BI dependerá de las preguntas y objetivos empresariales; para el desarrollo de estas preguntas se debe primero recopilar los datos necesarios, analizarlos y determinar qué acciones deberán hacerse para alcanzar los objetivos (Mosquera, et al., 2017).

    .row.justify-content-center.mb-5
      .col-lg-7.col-sm-9(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema2/img2-11.svg" alt="Tipos de bodegas de datos")

    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="zoom-in")
        TabsA.color-acento-botones
          .tarjeta.color-primario1.p-4(titulo="Sencilla")
            p Todas las bodegas comparten un diseño básico, los datos que no son procesados se guardan en un repositorio central que se alimenta de fuentes de datos permitiendo que los usuarios ingresen para las tareas de análisis.
          .tarjeta.color-primario1.p-4(titulo="Sencilla con zona<br> de preparación")
            p Antes de colocar los datos en un almacén, se hace necesario limpiarlos y procesarlos, con ayuda de la programación.
          .tarjeta.color-primario1.p-4(titulo="Radial")
            p Cuando se añade data marts entre el repositorio central y los usuarios finales, las empresas pueden personalizar sus bodegas de datos para atender varias áreas. Cabe resaltar que los data mart son versiones específicas (subconjuntos) de las bodegas de datos.
          .tarjeta.color-primario1.p-4(titulo="Entornos de<br> prueba")
            p llamados <i>sandbox</i>, son zonas seguras, privadas y protegidas donde las organizaciones pueden profundizar, de forma rápida, nuevos conjuntos de datos o mejores formas de analizarlos, sin tener que cumplir con las reglas y los protocolos de una bodega de datos.
      .col-lg-3.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema2/img2-12.png" alt="Persona con computador portátil")

    h3(data-aos='fade-right') Procesamiento analítico en línea (OLAP) para las consultas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema2/img2-13.svg" alt="OLAP para consultas")
      .col-lg-7(data-aos="fade-left")
        p Es un método informático que permite extraer y consultar datos a los usuarios -de manera selectiva- para hacer un análisis desde diferentes puntos de vista. Esta tecnología permite la organización de las bases de datos empresariales, dando como resultado un análisis complejo.
        p.mb-0 Las consultas del OLAP ayudan al análisis de tendencias, informes financieros, presupuestos y otros propósitos. Estos sistemas funcionan de la siguiente manera: primero los datos son guardados en almacenes de datos, cada cubo OLAP contiene categorías por dimensiones, como son los clientes, las ventas y el periodo de tiempo; luego, las dimensiones se completan con miembros, como nombres de los clientes, países y meses, debidamente organizados. 

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 El método OLAP es utilizado en la minería de datos o descubrimiento de relaciones desconocidas entre elementos de datos; no necesita que la base de datos sea extensa, como un almacén de datos, porque no todos los datos transaccionales son necesarios para el análisis.

    p.mb-5(data-aos="fade-right") Los sistemas OLAP se dividen generalmente en tres tipos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="flip-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img2-14.svg', alt='MOLAP')
          .tarjeta--boton.color-acento-botones.p-4
            .text-center.mt-4
              br
              br
              h5 OLAP multidimensional (MOLAP)
              p.text-center Indexa directamente en una base de datos multidimensional.
      .col-lg-4.mb-sm-4(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img2-15.svg', alt='ROLAP')
          .tarjeta--boton.color-acento-botones.p-4
            .text-center.mt-4
              br
              br
              h5 OLAP relacional (ROLAP)
              p.text-center Permite realizar un análisis multidimensional de forma dinámica, de los datos almacenados en una BD relacional.
      .col-lg-4.mb-sm-4(data-aos="flip-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img2-16.svg', alt='OLAP híbrido')
          .tarjeta--boton.color-acento-botones.p-4
            .text-center.mt-4
              br
              br
              h5 OLAP híbrido
              p.text-center Combina el ROLAP y MOLAP y desarrolla más capacidad de datos con un procesamiento superior a la MOLAP.

    h3(data-aos='fade-right') Niveles de abstracción de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-20.svg', alt='Abstración de datos')
      .col-lg-10.col-sm-10(data-aos="fade-left")
        p Los niveles de abstracción de datos están relacionados directamente con la arquitectura de las bases de datos que se enfocan en cómo se muestran los datos al usuario y la forma en que el usuario los aprecia. Existen varias formas de clasificar los niveles, esto dependerá del detalle de las estructuras de datos complejas, en la relación que existan en los datos que muestra y cómo el usuario interactúa con la información presentada.
        p.mb-0 Combina el ROLAP y MOLAP y desarrolla más capacidad de datos con un procesamiento superior a la MOLAP.

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Nivel interno o físico")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            p Es el primero de los niveles y el menos abstracto; está más cerca al almacenamiento real y físico de los datos, donde se explican de manera específica las estructuras de datos complejas de bajo nivel.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-21.svg', alt='Nivel físico')
      .py-4.py-md-5(titulo="Nivel conceptual o lógico")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            p Es el más abstracto, también llamado nivel lógico. Estipula qué datos se almacenan en la base de datos y sus relaciones. En este nivel solo desarrolla el administrador de la base de datos.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-22.svg', alt='Nivel lógico')
      .py-4.py-md-5(titulo="Nivel externo o de vistas")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            p Es el nivel de las vistas y es más simple su interacción con los usuarios, dado que les compete a los usuarios finales y es el nivel más alto de abstracción. El objetivo es la simplificación entre el usuario y la base de datos. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-23.svg', alt='Nivel de vistas')

    h3(data-aos='fade-right') Conceptos de almacenamiento de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-24.png', alt='Pantalla táctil')
      .col-lg-7(data-aos="fade-left")
        p El almacenamiento de datos consiste en conservar la información, utilizando una tecnología para mantenerlos y a su vez permitir disponibilidad cada vez que sea necesario acceder. El almacenamiento de datos especifica el uso de los medios de grabación para conservar la información. La manera generalmente utilizada es el almacenamiento de archivos, el de bloques y de objetos, con un objetivo diferente.
        p.mb-0 Para el almacenamiento de la información, esta se guarda en archivos y carpetas que se pueden encontrar generalmente, en discos duros. Ahora bien, el almacenamiento de objetos es diferente, porque se almacenan en forma de objeto con metadatos e identificadores que son únicos; generalmente, es económico almacenar datos de esta manera y es útil cuando se quiere almacenar datos que no requieren ser editados. Finalmente, el almacenamiento por bloques es mucho más costoso y complejo, es ideal para los datos de acceso y ediciones frecuentes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Existen diversos repositorios, tantos físicos como digitales, que se pueden utilizar para garantizar la confidencialidad, integridad y accesibilidad. El almacenamiento de datos cobija métodos y tecnologías de retención de información, permitiendo operaciones en todas las fases del ciclo de vida de los datos, iniciando en el almacenamiento y finalizando en su eliminación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-sm-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-20.svg', alt='Abstración de datos')
      .col-lg-10.col-sm-10(data-aos="fade-left")
        p El avance tecnológico ha generado sistemas de almacenamiento escalables y seguros que incluyen un alto rendimiento, infraestructuras convergentes, almacenamientos (NAS), entre otras plataformas.  Los medios de almacenamiento de datos tienen diferentes niveles de capacidad y velocidad:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario2.p-4
        .row.justify-content-center.align-items-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img2-25.svg', alt='Memoria RAM')(style="height: 144.2px")
        h5.text-center Memoria RAM
      .tarjeta.color-primario2.p-4
        .row.justify-content-center.align-items-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img2-26.svg', alt='Memoria Caché')(style="height: 144.2px")
        h5.text-center Memoria Caché
      .tarjeta.color-primario2.p-4
        .row.justify-content-center.align-items-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img2-27.svg', alt='Discos magnéticos')(style="height: 144.2px")
        h5.text-center Discos magnéticos
      .tarjeta.color-primario2.p-4
        .row.justify-content-center.align-items-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img2-28.svg', alt='Discos ópticos')(style="height: 144.2px")
        h5.text-center Discos ópticos como CD/DVD
      .tarjeta.color-primario2.p-4
        .row.justify-content-center.align-items-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img2-29.svg', alt='Memorias USB')(style="height: 144.2px")
        h5.text-center Memorias USB
      .tarjeta.color-primario2.p-4
        .row.justify-content-center.align-items-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img2-30.svg', alt='Discos externos')(style="height: 144.2px")
        h5.text-center Discos externos, entre otras formas de almacenamiento, en la memoria heredada de los dispositivos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-4 Por otro lado, las computadoras tienen un tipo de almacenamiento no volátil que se usa solo para lectura, como lo es la ROM, lo que significa que no se puede guardar información.
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="flip-up")
          p.mb-0 Los SSD utilizan el método de almacenamiento en <i>chips</i> de memoria; la diferencia de las unidades de disco rígido HDD y los SSD es que los SSD no tienen partes mecánicas móviles, lo que permite una velocidad superior en el acceso a la información, menor latencia y persistencia de datos en memoria. También es importante resaltar que los sistemas de almacenamiento que utilizan discos requieren de un sistema de respaldo de batería para mantener los datos persistentes. (Martin, 2018).
      .col-lg-5.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema2/img2-31.png', alt='Disco duro')

    p.mb-5 Dentro de las arquitecturas de almacenamiento se encuentran las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-32.png', alt='Almacenamiento')
      .col-lg-8(data-aos="zoom-in")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="<em>Network Attached Storage</em> (NAS)")
            .col-md-12.mb-4.mb-md-0
              p Permite la centralización de la información y gestiona la seguridad aprobando el acceso a usuarios autorizados; es administrada desde un navegador y trabaja desde una conexión de red. Está dedicada a compartir la capacidad de almacenamiento de un ordenador.
          .row(titulo="<em>Direct Attached Storage</em> (DAS)")
            .col-md-12.mb-4.mb-md-0
              p Es un método tradicional de almacenamiento, se realiza con el disco rígido interno de un computador; también se puede decir que es un grupo de unidades en un servidor, que se conectan directamente con él.
          .row(titulo="<em>Storage Area Network</em> (SAN)")
            .col-md-12.mb-4.mb-md-0
              p Es una red de almacenamiento integral que se basa en unidades conectadas a una unidad de control que está a su vez conectada a un servidor mediante un canal de fibra o iSCSI.

</template>

<script>
export default {
  name: 'Tema2',
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
