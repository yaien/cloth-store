import session from "../core/session";
import useCart from "./hooks/use-cart";
import { createContext, useState, useEffect, Props } from "react";
import { NextPageContext } from "next";

interface GuestContext {
  cart: ReturnType<typeof useCart>;
}

export const GuestContext = createContext<GuestContext>(null as any);

export const Guest = (props: Props<{}>) => {
  const [guest, setGuest] = useState();
  const cart = useCart(guest);

  const init = async () => {
    if (process.browser) {
      setGuest(await session.guest());
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <GuestContext.Provider value={{ cart }}>
      {props.children}
    </GuestContext.Provider>
  );
};

Guest.getInitialProps = async (ctx: NextPageContext) => {
  let guest: API.Guest | null = null;
  if (!process.browser) {
    guest = await session.guest(ctx);
  }
  return { guest };
};

export default Guest;
