import React from "react";
import Link from "next/link";
import ShoppingButton from "./shopping-button";

const Nav = () => (
  <nav>
    <div className="nav-content">
      <div className="nav-logo">
        <Link href="/">
          <img src="/static/logo-512.png" height="100%"></img>
        </Link>
      </div>
      <div className="grow"></div>
      <ShoppingButton items={1} />
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

      .grow {
        flex-grow: 1;
      }
    `}</style>
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
  </nav>
);

export default Nav;
