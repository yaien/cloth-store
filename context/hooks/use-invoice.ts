import { Guest, Shipping, CartItem } from "chillhood";
import store from "../../core/store";

export function useInvoice(guest?: Guest) {
  return {
    create(shipping: Shipping, items: CartItem[]) {
      if (!guest) throw Error("missing guest");
      return store.guests.invoices.create(guest.id, shipping, items);
    },
    check(epaycoRef: string) {
      return store.invoices.check(epaycoRef);
    },
    get(ref: string) {
      return store.invoices.get(ref);
    },
  };
}

export default useInvoice;
