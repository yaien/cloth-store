import { Props } from "react";

export const Container = (props: Props<{}>) => (
  <div className="container">
    {props.children}

    <style jsx>{`
      .container {
        margin-top: 1rem;
        padding: 0.25rem;
      }
    `}</style>
  </div>
);

export default Container;
