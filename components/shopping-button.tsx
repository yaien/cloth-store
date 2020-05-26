import Link from "next/link";

export interface ShoppingButtonProps
  extends React.HTMLProps<HTMLButtonElement> {
  items: number;
}

const ShoppingButton = (props: ShoppingButtonProps) => (
  <>
    <Link href="/cart">
      <button onClick={props.onClick}>
        <i className="material-icons">shopping_cart</i>
        {props.items ? <span>{props.items}</span> : null}
      </button>
    </Link>
    <style jsx>
      {`
        button {
          background: none;
          border: none;
          margin: 1em;
          cursor: pointer;
          transition: all 0.5s ease;
          outline: none;
          box-sizing: border-box;
        }
        button:hover {
          color: #aaa;
        }

        span {
          background-color: #bd1e1e;
          padding: 0.25em 0.6em;
          border-radius: 1em;
          color: white;
          font-weight: bold;
          font-size: 0.8rem;
          text-align: center;
          vertical-align: center;
          position: relative;
          left: -10px;
          top: -15px;
          transition: all 0.5s ease;
        }

        button:hover span {
          background-color: #ff9191;
        }
      `}
    </style>
  </>
);

export default ShoppingButton;
