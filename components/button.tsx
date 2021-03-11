import cs from "classnames";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { block: boolean };

const Button = ({ block, ...props }: ButtonProps) => {
  const classes = cs({ block: block });
  return (
    <button {...props} className={classes}>
      {props.children}
      <style jsx>{`
        button {
          padding: 0.5rem;
          background-color: var(--bg-primary);
          border: none;
          border-radius: 0.25rem;
          box-sizing: border-box;
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.125);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-light);
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.5s;
          letter-spacing: 0.15rem;
          appearance: none;
          outline: none;
        }

        button:hover {
          color: var(--text-hover-primary);
          background-color: var(--bg-hover-light);
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
        }

        button:active {
          outline: none;
          border: none;
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
