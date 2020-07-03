import CartSummaryItem from "./cart-summary-item";
import { Row, Col } from "./layout";
import { FC } from "react";
import { Cart, CartItem } from "chillhood";
import { Subtitle } from "./title";
import CartSummaryInfo from "./cart-summary-info";

export interface CartProps {
  cart: Cart;
  onDelete?(item: CartItem): void;
}

const CartSummary: FC<CartProps> = ({ cart, onDelete }) => {
  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  return (
    <Row>
      <Subtitle>Información de compra</Subtitle>
      <Col md={1.5}>
        {cart.items.map((item) => (
          <CartSummaryItem key={item.id} item={item} onDelete={onDelete} />
        ))}
      </Col>
      <Col md={4} sm={1}>
        <CartSummaryInfo shipping={0} subtotal={subtotal} />
      </Col>
    </Row>
  );
};

export default CartSummary;
