import React from "react";
import Link from "next/link";
import ShoppingButton from "./shopping-button";
import { useGuest } from "../context/guest";

export interface NavProps {
  onMenuToggle?(): void;
}

const Nav = (props: NavProps) => {
  const guest = useGuest();

  return (
    <nav>
      <div className="nav-content">
        <button className="menu-toggle-button" onClick={props.onMenuToggle}>
          <i className="material-icons-outlined">menu</i>
        </button>

        <div className="nav-logo">
          <Link href="/">
            <img height="54px" src="/static/logo.png" alt="Chillhood"></img>
          </Link>
        </div>
        <div className="grow"></div>
        <div className="nav-links">
          <a className="nav-link" href="#items">comprar</a>
          <Link href="/invoices">
            <a className="nav-link">Consulta tu orden</a>
          </Link>
        </div>
        <ShoppingButton items={guest.cart.data?.items.length ?? 0} />
      </div>
      <style jsx>{`
        nav {
          height: 60px;
          width: 100%;
          position: fixed;
          z-index: 100;
        }
        .nav-content {
          padding: 0.5rem;
          display: flex;
          align-items: center;
          background-color: var(--bg-light);
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
          background-color: transparent;
          color: var(--text-dark);
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
          color: var(--text-dark);
          margin: 0 0.8rem;
          letter-spacing: 0.125rem;
        }
        .nav-link:hover {
          color: var(--text-hover-light);
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
