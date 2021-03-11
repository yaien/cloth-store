import { FC } from "react";
import { InvoiceStatus as Status } from "chillhood";

export interface InvoiceInfoProps {
  reference: string;
  status: Status;
}

const msg = (status: Status) => {
  switch (status) {
    case Status.Accepted:
      return { text: "el pago ha sido recibido!", color: "green" };
    case Status.Rejected:
      return { text: "el pago no se recibió", color: "darkred" };
    case Status.Pending:
      return { text: "el pago aún esta pendiente", color: "darkgray" };
    default:
      return { text: "", color: "" };
  }
};
export const InvoiceInfo: FC<InvoiceInfoProps> = (props) => {
  const message = msg(props.status);
  return (
    <>
      <div className="info">
        <div className="ref">
          Ref. <span>{props.reference}</span>
        </div>
        <span className="status">{message.text}</span>
      </div>
      <style jsx>{`
        .info {
          margin: 1rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .ref {
          font-weight: 600;
          text-transform: uppercase;
          font-size: 1.2rem;
        }
        .ref span {
          color: var(--text-primary);
          text-transform: uppercase;
        }
        .status {
          font-size: 1.4rem;
          color: ${message.color};
          text-transform: lowercase;
        }
      `}</style>
    </>
  );
};

export default InvoiceInfo;
