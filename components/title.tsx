import { FC } from "react";
import cs from "classnames"

export interface TitleProps {
  small?: boolean;
  left?: boolean
}

export const Title: FC<TitleProps> = (props) => {
  return (
    <h1 className={cs({ left: props.left })}>
      {props.children}
      <style jsx>{`
        h1 {
          text-align: center;
          padding: 0.5rem 0rem;
          font-size: 1.4rem;
          font-weight: 100;
          letter-spacing: 0.2rem;
          text-transform: uppercase;
        }

        h1.left {
          text-align: left;
        }
      `}</style>
    </h1>
  );
};

export const Subtitle: FC = (props) => {
  return (
    <>
      <h3>{props.children}</h3>
      <style jsx>{`
        h3 {
          text-transform: uppercase;
          font-weight: 500;
          text-align: center;
          letter-spacing: 0.2rem;
        }
      `}</style>
    </>
  );
};

export default Title;
