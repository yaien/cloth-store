import { FC } from "react";

export interface CartSummaryInfoProps {
  subtotal: number;
  shipping: number;
}

export const CartSummaryInfo: FC<CartSummaryInfoProps> = (props) => {
  const { shipping, subtotal } = props;
  const total = shipping + subtotal;
  return (
    <>
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

      <style jsx>{`
        .summary {
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

export default CartSummaryInfo;
