import { Shipping } from "chillhood";
import { FC } from "react";

export interface ShippingDetailProps {
  shipping: Shipping;
}

export const ShippingDetail: FC<ShippingDetailProps> = ({ shipping }) => (
  <>
    <div className="detail">
      <div className="item">
        <div className="name">Nombre</div>
        <div className="value">{shipping.name}</div>
      </div>
      <div className="item">
        <div className="name">Telefono Movil</div>
        <div className="value">{shipping.phone}</div>
      </div>
      <div className="item">
        <div className="name">Correo</div>
        <div className="value">{shipping.email}</div>
      </div>
      <div className="item">
        <div className="name">Departamento</div>
        <div className="value">{shipping.province}</div>
      </div>
      <div className="item">
        <div className="name">Ciudad</div>
        <div className="value">{shipping.city}</div>
      </div>
      <div className="item">
        <div className="name">Dirección</div>
        <div className="value">{shipping.address}</div>
      </div>
    </div>
    <style jsx>{`
      .detail {
        margin: 0.5rem;
        width: 100%;
        text-align: left;
      }
      .item {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #eee;
      }
      .name {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.1rem;
        margin: 0.5rem;
        width: 100%;
      }
      .value {
        font-size: 1.1rem;
        margin: 0.5rem;
      }

      @media (min-width: 640px) {
        .name {
          width: 40%;
        }
      }
    `}</style>
  </>
);

export default ShippingDetail;
