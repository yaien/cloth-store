import Nav from "./nav";
import { FC } from "react";

const Content: FC = (props) => {
  return (
    <>
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
            font-family: "Open Sans", sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default Content;
