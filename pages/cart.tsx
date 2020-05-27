import { FC } from "react";
import { useGuest } from "../context/guest";
import { CartItem } from "chillhood"
import Content from "../components/content";
import Head from "../components/head";
import CartSummary from "../components/cart-summary";
import Container from "../components/container";
import Title from "../components/title";

const CartDetail: FC = () => {
  const guest = useGuest();

  const onDelete = async (item: CartItem) => {
    await guest.cart.remove(item.id)
  }

  return (
    <Content>
      <Head title="Carrito" />
      <Container>
        <Title>CARRITO DE COMPRAS - PRODUCTOS CHILLHOOD</Title>
        <Container>
          {guest.cart.data ? (
            <CartSummary cart={guest.cart.data} onDelete={onDelete}/>
          ) : (
            "aun no has agregado productos al carrito"
          )}
        </Container>
      </Container>
    </Content>
  );
};

export default CartDetail;
