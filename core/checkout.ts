import { EpaycoSettings, Invoice } from "chillhood";

declare var ePayco: any;

export class Epayco {
  private loaded: boolean;

  constructor(private settings: EpaycoSettings) {}

  private load() {
    return new Promise<any>((resolve) => {
      let script = document.createElement("script");
      script.src = "https://checkout.epayco.co/checkout.js";
      script.type = "text/javascript";
      script.async = false;
      script.onload = () => {
        this.loaded = true;
        resolve(ePayco);
      };
      document.body.appendChild(script);
    });
  }

  private async handler() {
    if (!this.loaded) {
      await this.load();
    }
    return ePayco.checkout.configure({
      key: this.settings.key,
      test: this.settings.test,
    });
  }

  async checkout(invoice: Invoice) {
    const handler = await this.handler();
    const redirect = window.location.origin + "/payment/response";
    let data = {
      name: "compra de chillhood",
      invoice: invoice.ref,
      currency: "COP",
      amount: invoice.cart.total,
      country: "co",
      external: "true",
      confirmation: this.settings.confirmation,
      response: this.settings.response,
      extra1: redirect,
      name_billing: invoice.shipping.name,
      email_billing: invoice.shipping.email,
      mobilephone_billing: invoice.shipping.phone,
    };
    handler.open(data);
  }
}
