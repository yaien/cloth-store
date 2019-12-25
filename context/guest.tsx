import guests from "../core/guests";
import { createContext, useState, ReactNode } from "react";

export const GuestContext = createContext<{
  guest?: API.Guest;
}>(null as any);

export interface GuestProps {
  children?: ReactNode;
  guest: API.Guest;
}

export const Guest = (props: GuestProps) => {
  const [guest, setGuest] = useState<API.Guest>(props.guest);

  const value = { guest };

  return (
    <GuestContext.Provider value={value}>
      {props.children}
    </GuestContext.Provider>
  );
};
