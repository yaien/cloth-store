import React from "react";
import Link from "next/link";
import ShoppingButton from "./shopping-button";
import { useGuest } from "../context/guest";

const Nav = () => {
  const guest = useGuest();
  return (
    <nav>
      <div className="nav-content">
        <div className="nav-logo">
          <Link href="/">
            <img src="/static/logo-512.png" height="100%"></img>
          </Link>
        </div>
        <div className="grow"></div>
        <Link href="/invoices">
          <a className="nav-link">Consulta tu orden</a>
        </Link>
        <ShoppingButton items={guest.cart.data?.items.length ?? 0} />
      </div>
      <style jsx>{`
        .nav-content {
          height: 60px;
          width: 100%;
          position: fixed;
          box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
          padding: 0.5rem;
          display: flex;
          align-items: center;
          background-color: #ededed;
          z-index: 50;
        }

        .nav-logo {
          height: 100%;
          width: auto;
          margin: 0px;
          cursor: pointer;
        }

        .nav-link {
          text-transform: uppercase;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
        }
        .nav-link:hover {
          color: darkred;
        }
        .nav-link:visited {
          color: black;
        }

        .grow {
          flex-grow: 1;
        }
      `}</style>
    </nav>
  );
};
export default Nav;
