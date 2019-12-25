import { useState, useMemo } from "react";
import items from "../../core/items";

export const useCart = (guest?: API.Guest) => {
  const [data, setData] = useState(guest?.cart);

  const actions = useMemo(() => {
    if (!guest) return null;
    return {
      async add(item: API.CartItem) {
        setData(await items.add(guest.id, item));
      },
      async remove(item: API.CartItem) {
        setData(await items.remove(guest.id, item.id));
      }
    };
  }, [guest]);

  return { data, ...actions };
};

export default useCart;
