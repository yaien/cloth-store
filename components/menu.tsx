import { FC } from "react";
import cs from "classnames";

export interface MenuProps {
  open?: boolean;
  onToggle?(): void;
}

export const Menu: FC<MenuProps> = ({ open, onToggle }) => {
  return (
    <>
      <aside className={cs("sidebar", { open })}></aside>

      <style jsx>{`
        .sidebar {
          position: fixed;
          height: 100%;
          width: 0;
          z-index: 100;
          background-color: #ededed;
          box-shadow: 2px 0px 0 0 rgba(0, 0, 0, 0.125);
          transition: all 0.5s ease-in-out;
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
