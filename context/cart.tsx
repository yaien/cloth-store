import { createContext, useState, ReactNode, useCallback } from "react";
import items from "../core/items";

export const CartContext = createContext<{
  guest: API.Guest;
  cart: API.Cart | null;
  add: (item: API.CartItem) => Promise<void>;
  remove: (item: API.CartItem) => Promise<void>;
}>(null as any);

export interface CartProps {
  children?: ReactNode;
  guest: API.Guest;
}

export const Cart = ({ guest, children }: CartProps) => {
  const [cart, setCart] = useState(guest.cart);

  const add = useCallback(
    async (item: API.CartItem) => {
      setCart(await items.add(guest.id, item));
    },
    [guest.id]
  );

  const remove = useCallback(
    async (item: API.CartItem) => {
      setCart(await items.remove(guest.id, item.id));
    },
    [guest.id]
  );

  const value = { guest, cart, add, remove };

  console.log(children);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
