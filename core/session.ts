import nookies from "nookies";
import { NextPageContext } from "next";
import { Guest } from "chillhood";
import store from "../core/store";

export default {
  async guest(ctx?: NextPageContext): Promise<Guest> {
    const cookies = nookies.get(ctx);
    let guest: Guest;
    try {
      if (!cookies.guest) throw Error();
      guest = await store.guests.get(cookies.guest);
    } catch {
      guest = await store.guests.create();
      nookies.set(ctx, "guest", guest.id, {
        path: "/",
        sameSite: true,
      });
    }

    return guest;
  }
};
