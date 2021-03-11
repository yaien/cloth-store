import Nav from "./nav";
import { FC, useState } from "react";
import Menu from "./menu";

const Content: FC = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <Nav onMenuToggle={toggleMenu} />
      <Menu open={menuOpen} onToggle={toggleMenu} />
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
