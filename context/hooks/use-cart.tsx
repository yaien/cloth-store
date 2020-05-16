import { useState, useMemo } from "react";
import items from "../../core/items";
import { CartItem, Guest } from "chillhood";

export const useCart = (guest?: Guest) => {
  const [data, setData] = useState(guest?.cart);

  const actions = useMemo(() => {
    if (!guest) return null;
    return {
      async add(item: CartItem) {
        setData(await items.add(guest.id, item));
      },
      async remove(item: CartItem) {
        setData(await items.remove(guest.id, item.id));
      }
    };
  }, [guest]);

  return { data, ...actions };
};

export default useCart;
