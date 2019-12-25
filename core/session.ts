import nookies from "nookies";
import guests from "./guests";
import { AppContext } from "next/app";
import { NextPageContext } from "next";

export default {
  async guest(ctx: NextPageContext): Promise<API.Guest> {
    const cookies = nookies.get(ctx);
    let guest: API.Guest;
    try {
      if (!cookies.guest) throw Error();
      guest = await guests.get(cookies.guest);
    } catch {
      guest = await guests.create();
      nookies.set(ctx, "guest", guest.id, {
        path: "/",
        sameSite: true,
        maxAge: 60 * 24 * 60 * 60,
        httpOnly: true
      });
    } finally {
    }

    return guest;
  }
};
