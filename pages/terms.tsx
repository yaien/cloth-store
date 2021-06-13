import Content from "../components/content";
import Head from "../components/head";
import Container from "../components/container";
import Title from "../components/title";
import Paragraph from "../components/paragraph";

const Terms = () => {
  return (
    <Content>
      <Head title="Términos y condiciones" />
      <Container>
        <Title>TÉRMINOS Y CONDICIONES</Title>
        <div className="content">
          <h4>Compras</h4>
          <Paragraph>
            A continuación se establecen los términos y condiciones relacionados
            con las compras en la tienda online de Chillhood Apparel.
          </Paragraph>
          <div className="space"></div>
          <Paragraph>
            Estos términos y condiciones constituyen un contrato jurídicamente
            vinculante entre nuestros compradores y Chillhood Apparel. Al
            adquirir nuestros productos se estarán aceptando los términos y
            condiciones aquí estipulados.
          </Paragraph>
          <div className="space"></div>
          <Paragraph>
            Para comprar mediante nuestra página web chillhoodapparel.com
            deberás seleccionar la prenda que deseas comprar, talla y cantidad y
            agregarla al carrito de compras, una vez hayas terminado tus
            pedidos, debes ir al carrito de compras y dar click en finalizar
            compra, allí podrás seleccionar los diferentes métodos de pago.
          </Paragraph>
          <div className="space"></div>
          <Paragraph>
            Para adquirir nuestras prendas a través de nuestro perfil de
            Instagram o Whatsapp debes escribirnos para confirmar la
            disponibilidad y precio del producto. Luego de confirmar la
            disponibilidad del mismo, se deberá concretar la compra de la
            siguiente manera:
          </Paragraph>
          <h4>Pasarela de Pagos ePayco</h4>
          <Paragraph>
            Recibimos tus pagos de cualquier tarjeta de crédito, débito o
            efectivo (Efecty, Gana, Baloto) a través de ePayco. Realiza tu
            compra en la tienda virtual de Chillhood Apparel y selecciona como
            método de pago PAYU. Completa el pago a través de la plataforma,
            cuando termines recibirás un correo con la confirmación de tu pedido
            y una actualización una vez esté creada la guía del despacho del
            producto.
            <div className="space"></div>
            <b>
              Nuestros envíos demoran de 1 a 4 días hábiles para ciudades
              principales, y de 3 a 8 días a ciudades secundarias y poblaciones
              terciarias.
            </b>
          </Paragraph>
          <h4>Envíos</h4>
          <Paragraph>
            Todos los envíos se realizan desde la ciudad de Medellín. Las
            ciudades principales se demoran entre 2 a 5 días hábiles en llegar,
            las ciudades secundarias pueden demorar hasta 8 días hábiles. La
            transportadora con la cual trabajamos es Coordinadora. En caso tal
            de que la empresa no llegue a tu ubicación, podemos hacer el envío
            por medios o empresas alternativas sugeridas por el usuario.
          </Paragraph>
          <h4>Política de devoluciones y reembolsos</h4>
          <Paragraph>
            Puedes devolver tu compra realizada en nuestra tienda online o
            física, en un plazo de 30 días desde la fecha de recepción del
            paquete y te reembolsaremos el valor total.
          </Paragraph>
          <h4>Política de cambios y grantías</h4>
          <Paragraph>
            Se podrán realizar cambios de talla o artículo tanto de manera
            presencial en nuestra tienda o a través de Servicio al Cliente por
            whatsapp, en un plazo máximo de 20 días desde la fecha de recepción
            del paquete. Se puede elegir cualquier artículo de cambio, si es de
            menor valor se devuelve la diferencia, si es de mayor valor, el
            cliente deberá pagar el excedente. Los costos de envíos para cambios
            y devoluciones deberán ser asumidos por el cliente.
          </Paragraph>
          <div className="space"></div>
          <Paragraph>
            Los cambios por talla o producto están sujetos a la disponibilidad
            del mismo en el momento de la petición, en caso de no estar
            disponible el producto requerido, realizaremos el reembolso del
            dinero en el momento en el que Chillhood reciba la devolución del
            artículo.
          </Paragraph>
        </div>
      </Container>
      <style jsx>
        {`
          .space {
            height: 10px;
          }
          .content {
            padding-left: 5%;
            padding-right: 5%;
            text-align: justify;
          }
          h4 {
            margin-bottom: 0.5rem;
            text-decoration: underline;
          }

          @media (min-width: 640px) {
            .content {
              padding-left: 5%;
              padding-right: 5%;
            }
          }
        `}
      </style>
    </Content>
  );
};

export default Terms;
