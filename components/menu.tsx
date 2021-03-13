import { FC } from "react";
import cs from "classnames";
import Link from "next/link";

export interface MenuProps {
  open?: boolean;
  onToggle?(): void;
}

export const Menu: FC<MenuProps> = ({ open, onToggle }) => {
  return (
    <>
      <aside className={cs("sidebar", { open })}>
        <a className="sidebar-link">buscar</a>
        <Link href="/invoices">
          <a className="sidebar-link">Consulta tu orden</a>
        </Link>
      </aside>

      <style jsx>{`
        .sidebar {
          position: fixed;
          height: calc(100% - 73px);
          width: 0;
          z-index: 150;
          background-color: var(--bg-light);
          box-shadow: 2px 0px 0 0 rgba(0, 0, 0, 0.125);
          transition: all 0.5s ease-in-out;
          top: 73px;
          left: 0;
          overflow-x: hidden;
        }

        .sidebar-link {
          display: block;
          text-transform: uppercase;
          color: var(--text-dark);
          text-align: center;
          border-top: 1px solid var(--border-light);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.8rem;
          padding: 1rem;
          letter-spacing: 0.15rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .sidebar-link :last-child {
          border-bottom: 1px solid var(--border-light);
        }

        .sidebar.open {
          width: 100%;
        }

        @media (min-width: 640px) {
          .sidebar {
            max-width: 340px;
          }
        }
      `}</style>
    </>
  );
};

export default Menu;
