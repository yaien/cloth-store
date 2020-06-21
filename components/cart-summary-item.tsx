import { FC } from "react";
import { CartItem } from "chillhood";
import useSettings from "../context/hooks/use-settings";

export interface CartSummaryItemProps {
  item: CartItem;
  onDelete?(item: CartItem): void;
}

export const CartSummaryItem: FC<CartSummaryItemProps> = ({
  item,
  onDelete,
}) => {
  const settings = useSettings();
  const total = item.price * item.quantity;
  const picture = settings.cloudinary?.url(item.picture.reference, {
    width: 120,
    height: 120,
    crop: "thumb",
  });

  return (
    <>
      <div className="item">
        <div className="thumbnail">
          <img src={picture} alt="" />
        </div>
        <div className="content">
          <div className="info">
            <div className="detail">
              <div className="name">{item.name}</div>
            </div>
            <div className="summary">
              <div className="field">
                <div className="label">Talla</div>
                <div className="value">{item.size}</div>
              </div>
              <div className="field">
                <div className="label">Cantidad</div>
                <div className="value">{item.quantity}</div>
              </div>
              <div className="field">
                <div className="label">Precio</div>
                <div className="value">$ {total.toLocaleString()}</div>
              </div>
            </div>
          </div>
          <div className="actions">
            <button
              type="button"
              className="btn"
              onClick={onDelete && onDelete.bind(null, item)}
            >
              <i className="material-icons">clear</i>
              Eliminar producto
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .item {
          padding: 0.5rem;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
        }
        .thumbnail {
          min-width: 120px;
          min-height: 120px;
          max-width: 120px;
          max-height: 120px;
          background-color: #eee;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
        }

        .content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
          flex-wrap: wrap;
        }

        .info {
          flex-grow: 1;
          margin: 0 1rem;
          display: flex;
          justify-content: space-between;
        }

        .detail {
          margin: 0 0.5rem;
        }

        .name {
          font-weight: 700;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .btn {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          margin: 0;
          padding: 0;
          cursor: pointer;
        }

        .btn:hover {
          color: #555;
        }

        .summary {
          margin: 0 1rem;
        }

        .actions {
          margin: 0.5rem 1rem;
          display: flex;
        }

        .field {
          margin: 0.25rem;
          display: flex;
          justify-content: space-between;
        }
        .field .label {
          font-weight: 700;
          margin-right: 0.5rem;
        }
        @media (max-width: 460px) {
          .info {
            flex-direction: column;
            align-items: center;
          }
          .actions {
            justify-content: center;
          }
          .detail {
            text-align: center;
          }
          .name {
            margin-bottom: 0.8rem;
          }
          .summary {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default CartSummaryItem;
