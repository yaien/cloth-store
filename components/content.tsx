import Nav from "./nav";
import GuestSession from "../context/guest";

const Content = (props: React.Props<{}>) => (
  <GuestSession>
    <Nav />
    <main>{props.children}</main>
    <style jsx>
      {`
        main {
          padding-top: 60px;
        }
      `}
    </style>
    <style global jsx>
      {`
        body,
        html {
          margin: 0px;
          background-color: #f7f7f7;
          height: 100%;
          font-family: "Raleway", sans-serif;
        }
      `}
    </style>
  </GuestSession>
);

export default Content;
