import CartSummaryItem from "./cart-summary-item";
import { Row, Col } from "./layout";
import { FC } from "react";
import { Cart, CartItem } from "chillhood";


export interface CartProps {
  cart: Cart;
  onDelete?(item: CartItem): void
}

const CartSummary: FC<CartProps> = ({ cart, onDelete }) => {
  return (
    <Row>
      <Col md={1}>
        {cart.items.map((item) => (
          <CartSummaryItem key={item.id} item={item} onDelete={onDelete} />
        ))}
      </Col>
    </Row>
  );
};

export default CartSummary;
