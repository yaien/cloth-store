import session from "../core/session";
import useCart from "./hooks/use-cart";
import useInvoice from "./hooks/use-invoice";
import { createContext, useState, useEffect, Props, useContext } from "react";
import { NextPageContext } from "next";
import { Guest } from "chillhood";

interface GuestContext {
  data?: Guest;
  cart: ReturnType<typeof useCart>;
  invoice: ReturnType<typeof useInvoice>;
}

export const GuestContext = createContext<GuestContext>(null as any);

export const GuestSession = (props: Props<{}>) => {
  const [guest, setGuest] = useState<Guest>();
  const cart = useCart(guest);
  const invoice = useInvoice(guest);

  const init = async () => {
    if (process.browser) {
      setGuest(await session.guest());
    }
  };

  useEffect(() => {
    init();
  }, []);

  if (!guest) {
    return null;
  }

  return (
    <GuestContext.Provider value={{ cart, invoice, data: guest }}>
      {props.children}
    </GuestContext.Provider>
  );
};

GuestSession.getInitialProps = async (ctx: NextPageContext) => {
  let guest: Guest | null = null;
  if (!process.browser) {
    guest = await session.guest(ctx);
  }
  return { guest };
};

export default GuestSession;

export const useGuest = () => useContext(GuestContext);
