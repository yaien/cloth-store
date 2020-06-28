import { FC } from "react";
import Select from "./select";
import CartSummaryInfo from "./cart-summary-info";

export interface CartSummaryFooterProps {
  subtotal: number;
  shipping: number;
}

export const CartSummaryFooter: FC<CartSummaryFooterProps> = (props) => {
  const { shipping, subtotal } = props;
  return (
    <>
      <div className="footer">
        <div className="options">
          <div className="option">
            <label>Costo de envio</label>
            <span>Selecciona una de las opciones</span>
            <Select placeholder="departamento" name="area">
              <option>Medellín</option>
            </Select>
          </div>
        </div>
        <CartSummaryInfo shipping={shipping} subtotal={subtotal} />
      </div>
      <style jsx>{`
        .footer {
          padding: 0.5rem;
        }
        .option label {
          font-weight: 600;
          font-size: 1.25rem;
          display: block;
        }
        .option span {
          font-weight: bold;
          font-size: 0.8rem;
          color: #777;
          display: block;
        }
      `}</style>
    </>
  );
};

export default CartSummaryFooter;
