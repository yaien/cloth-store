import { FC } from "react";
import Select from "./select";

export interface CartSummaryFooterProps {
  subtotal: number;
  shipping: number;
}

export const CartSummaryFooter: FC<CartSummaryFooterProps> = (props) => {
  const { shipping, subtotal } = props;
  const total = shipping + subtotal;
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
        <div className="summary">
          <div className="field">
            <label>Subtotal</label>
            <span>$ {subtotal.toLocaleString()}</span>
          </div>
          <div className="field">
            <label>Costo de envio</label>
            <span>$ {shipping.toLocaleString()}</span>
          </div>
          <div className="field title">
            <label>Total</label>
            <span>$ {total.toLocaleString()}</span>
          </div>
        </div>
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
        .summary {
          margin-top: 1rem;
        }
        .field:first {
          border-top: 1px solid #bbb;
        }
        .field {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #bbb;
          padding: 0.5rem;
        }
        .field label {
          font-size: 1rem;
          font-weight: 600;
        }
        .field span {
          color: darkred;
          font-weight: bold;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
};

export default CartSummaryFooter;
