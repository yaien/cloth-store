import { FC, useState } from "react";
import { useGuest } from "../context/guest";
import { CartItem, Shipping } from "chillhood";
import Content from "../components/content";
import Head from "../components/head";
import CartSummary from "../components/cart-summary";
import Container from "../components/container";
import Title from "../components/title";
import { CheckoutForm } from "../components/checkout-form";
import useSettings from "../context/hooks/use-settings";
import { Row, Col } from "../components/layout";

const CartDetail: FC = () => {
  const guest = useGuest();
  const settings = useSettings();
  const [shipment, setShipment] = useState(0);

  const onDelete = async (item: CartItem) => {
    await guest.cart.remove(item.id);
  };

  const onSubmit = async (shipping: Shipping) => {
    if (!guest.cart.data) return;
    const invoice = await guest.invoice.create(shipping, guest.cart.data.items);
    await settings.epayco?.checkout(invoice);
  };

  const onShipmentSelected = (shipment: number) => {
    setShipment(shipment);
  };

  return (
    <Content>
      <Head title="Carrito" />
      <Container>
        <Title>CARRITO DE COMPRAS - PRODUCTOS CHILLHOOD</Title>
        <Container>
          {guest.cart.data && guest.cart.data.items.length ? (
            <>
              <Row>
                <Col md={1} lg={2} xl={2.5}>
                  <CartSummary
                    cart={guest.cart.data}
                    onDelete={onDelete}
                    shipping={shipment}
                  />
                </Col>
                <Col md={1} lg={2} xl={2.5}>
                  <CheckoutForm
                    onSubmit={onSubmit}
                    onShipmentSelected={onShipmentSelected}
                  />
                </Col>
              </Row>
            </>
          ) : (
            <div className="text-center">
              Aún no has agregado productos al carrito
            </div>
          )}
        </Container>
      </Container>
      <style jsx>{`
        .text-center {
          text-align: center;
        }
      `}</style>
    </Content>
  );
};

export default CartDetail;
