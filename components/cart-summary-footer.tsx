import { FC } from "react";
import Card from "./card";

export interface CartSummaryFooterProps {
  subtotal: number;
  shipping: number;
}

export const CartSummaryFooter: FC<CartSummaryFooterProps> = (props) => {
  const { shipping, subtotal } = props;
  const total = shipping + subtotal;
  return (
    <>
      <Card>
        <div className="footer">
          <div className="options">
            <div className="option">
              <div className="label">Costo de envio</div>
              <div className="help">Selecciona una de las opciones</div>
              <select placeholder="departamento" name="area">
                <option>Medellín</option>
              </select>
            </div>
          </div>
          <div className="summary">
            <div className="field">
              <div className="label">Subtotal</div>
              <div className="value">$ {subtotal.toLocaleString()}</div>
            </div>
            <div className="field">
              <div className="label">Costo de envio</div>
              <div className="value">$ {shipping.toLocaleString()}</div>
            </div>
            <div className="field title">
              <div className="label">Total</div>
              <div className="value">$ {total.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </Card>
      <style jsx>{`
        .footer {
        }
      `}</style>
    </>
  );
};

export default CartSummaryFooter;
