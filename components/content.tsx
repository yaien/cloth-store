import Nav from "./nav";
import { FC, useState } from "react";
import Menu from "./menu";
import { Theme } from "./theme";
import Footer from "./footer";

const Content: FC = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <Theme />
      <Nav onMenuToggle={toggleMenu} />
      <Menu open={menuOpen} onToggle={toggleMenu} />
      <main>{props.children}</main>
      <Footer/>
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
            background-color: var(--bg-light);
            height: 100%;
            font-family: var(--font-family);
            font-weight: var(--font-weight);
          }
        `}
      </style>
    </>
  );
};

export default Content;
