import { AppProps } from "next/app"
import GuestSession from "../context/guest"
import { NextPage } from "next"

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <GuestSession>
    <Component {...pageProps} />
  </GuestSession>
)



export default App