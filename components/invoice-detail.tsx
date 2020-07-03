import { FC } from "react";
import { Invoice } from "chillhood";
import ShippingDetail from "./shipping-detail";
import CartSummaryItem from "./cart-summary-item";
import CartSummaryInfo from "./cart-summary-info";
import InvoiceInfo from "./invoice-info";

export interface InvoiceDetailProps {
  invoice: Invoice;
}

export const InvoiceDetail: FC<InvoiceDetailProps> = ({ invoice }) => {
  return (
    <div className="invoice">
      <InvoiceInfo reference={invoice.ref} status={invoice.status} />
      <ShippingDetail shipping={invoice.shipping}></ShippingDetail>
      <div className="items">
        {invoice.cart.items.map((item) => (
          <CartSummaryItem item={item} key={item.id} />
        ))}
      </div>
      <div className="margin-top">
        <CartSummaryInfo
          subtotal={invoice.cart.subtotal}
          shipping={invoice.cart.shipping}
        />
      </div>
      <style jsx>{`
        .margin-top {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default InvoiceDetail;
