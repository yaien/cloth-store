import { FC } from "react";
import { useGuest } from "../context/guest";
import { CartItem, Shipping } from "chillhood";
import Content from "../components/content";
import Head from "../components/head";
import CartSummary from "../components/cart-summary";
import Container from "../components/container";
import Title from "../components/title";
import { CheckoutForm } from "../components/checkout-form";
import useSettings from "../context/hooks/use-settings";

const CartDetail: FC = () => {
  const guest = useGuest();
  const settings = useSettings();

  const onDelete = async (item: CartItem) => {
    await guest.cart.remove(item.id);
  };

  const onSubmit = async (shipping: Shipping) => {
    if (!guest.cart.data) return;
    const invoice = await guest.invoice.create(shipping, guest.cart.data.items);
    await settings.epayco?.checkout(invoice);
  };

  return (
    <Content>
      <Head title="Carrito" />
      <Container>
        <Title>CARRITO DE COMPRAS - PRODUCTOS CHILLHOOD</Title>
        <Container>
          {guest.cart.data ? (
            <>
              <CartSummary cart={guest.cart.data} onDelete={onDelete} />
              <CheckoutForm onSubmit={onSubmit} />
            </>
          ) : (
            "aun no has agregado productos al carrito"
          )}
        </Container>
      </Container>
    </Content>
  );
};

export default CartDetail;
