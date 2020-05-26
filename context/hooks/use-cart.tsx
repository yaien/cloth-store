import { useState, useMemo, useEffect } from "react";
import { Guest, CartItemBase } from "chillhood";
import store from "../../core/store";

export const useCart = (guest?: Guest) => {
  const [data, setData] = useState(guest?.cart);

  useEffect(() => {
    setData(guest?.cart)
  }, [guest?.cart])

  const actions = useMemo(() => {
    return {
      async add(item: CartItemBase) {
        if(!guest) return
        setData(await store.guests.items.add(guest.id, item));
      },
      async remove(itemId: string) {
        if(!guest) return
        setData(await store.guests.items.remove(guest.id, itemId));
      }
    };
  }, [guest]);

  return { data, ...actions };
};

export default useCart;
