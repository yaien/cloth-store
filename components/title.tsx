import { Props } from "react";

export const Title = (props: Props<{}>) => {
  return (
    <h1 className="title">
      {props.children}
      <style jsx>{`
        .title {
          text-align: center;
          padding: 0.5rem 0rem;
          font-size: 1.4rem;
          font-weight: 100;
          letter-spacing: 0.2rem;
          text-transform: uppercase;
        }
      `}</style>
    </h1>
  );
};

export default Title;
