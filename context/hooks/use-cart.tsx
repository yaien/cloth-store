import { useState, useMemo } from "react";
import { CartItem, Guest } from "chillhood";
import store from "../../core/store";

export const useCart = (guest?: Guest) => {
  const [data, setData] = useState(guest?.cart);

  const actions = useMemo(() => {
    if (!guest) return null;
    return {
      async add(item: CartItem) {
        setData(await store.guests.items.add(guest.id, item));
      },
      async remove(item: CartItem) {
        setData(await store.guests.items.remove(guest.id, item.id));
      }
    };
  }, [guest]);

  return { data, ...actions };
};

export default useCart;
