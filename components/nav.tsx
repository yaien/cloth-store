import React, { useState } from "react";
import Link from "next/link";
import ShoppingButton from "./shopping-button";
import Menu from "./menu";
import { useGuest } from "../context/guest";

export interface NavProps {}

const Nav = (props: NavProps) => {
  const guest = useGuest();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav>
      <div className="nav-content">
        <button className="menu-toggle-button" onClick={toggleMenu}>
          <i className="material-icons-outlined">menu</i>
        </button>

        <div className="nav-logo">
          <Link href="/">
            <h1>Chillhood</h1>
          </Link>
        </div>
        <div className="grow"></div>
        <div className="nav-links">
          <button className="nav-link">buscar</button>
          <Link href="/invoices">
            <a className="nav-link">Consulta tu orden</a>
          </Link>
        </div>
        <ShoppingButton items={guest.cart.data?.items.length ?? 0} />
      </div>
      <Menu open={menuOpen} onToggle={toggleMenu}></Menu>
      <style jsx>{`
        nav {
          height: 60px;
          width: 100%;
          position: fixed;
        }
        .nav-content {
          box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
          padding: 0.5rem;
          display: flex;
          align-items: center;
          background-color: #ededed;
          z-index: 50;
          justify-content: space-between;
        }

        .menu-toggle-button {
          padding: 0;
          margin: 0;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
        }

        .menu-toggle-button:active,
        .menu-toggle-button:focus {
          outline: none;
          border: none;
        }

        .nav-links {
          display: none;
        }

        .nav-logo {
          height: 100%;
          width: auto;
          margin: 0px;
          cursor: pointer;
        }

        .nav-logo h1 {
          font-family: "Grenze Gotisch", sans-serif, cursive;
          margin: auto 0;
          font-size: 2.5em;
        }

        .nav-link {
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          font-size: 0.8rem;
          color: #555;
          margin: 0 0.8rem;
          letter-spacing: 0.125rem;
        }
        .nav-link:hover {
          color: black;
        }
        .nav-link:visited {
          color: initial;
        }

        button.nav-link {
          border: none;
          outline: none;
          font-weight: 300;
        }

        .grow {
          flex-grow: 1;
          display: none;
        }

        @media screen and (min-width: 640px) {
          .menu-toggle-button {
            display: none;
          }
          .nav-links {
            display: inline;
          }
          .nav-content {
          }
          .grow {
            display: inline;
          }
        }
      `}</style>
    </nav>
  );
};
export default Nav;
