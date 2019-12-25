import cs from "classnames";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { block: boolean };

const Button = (props: ButtonProps) => {
  const classes = cs({ block: props.block });
  return (
    <button {...props} className={classes}>
      {props.children}
      <style jsx>{`
        button {
          padding: 0.5rem;
          background-color: #a00;
          border: none;
          border-radius: 0.25rem;
          box-sizing: border-box;
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.125);
          font-size: 0.8rem;
          font-weight: 500;
          color: #f1f1f1;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.5s;
        }

        button:hover {
          background-color: #b00;
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
        }

        button.block {
          margin: auto;
          width: 99%;
          display: block;
        }
      `}</style>
    </button>
  );
};
export default Button;
