import nookies from "nookies";
import NextApp, { AppContext } from "next/app";
import { Guest } from "../context/guest";
import session from "../core/session";

class App extends NextApp<{ guest: API.Guest }> {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps(app: AppContext): Promise<any> {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const props = await NextApp.getInitialProps(app);
    const guest = await session.guest(app.ctx);
    return { ...props, guest };
  }

  render() {
    const { Component, pageProps, guest } = this.props;
    return (
      <Guest guest={guest}>
        <Component {...pageProps} />
      </Guest>
    );
  }
}

export default App;
