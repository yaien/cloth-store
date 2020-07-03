import { Props } from "react";

export const Container = (props: Props<{}>) => (
  <div className="container">
    {props.children}

    <style jsx>{`
      .container {
        margin-top: 1rem;
        padding: 1rem;
      }
    `}</style>
  </div>
);

export default Container;
