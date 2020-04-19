import { Props } from "react";

export const Container = (props: Props<{}>) => (
  <div className="container">
    {props.children}

    <style jsx>{`
      .container {
        padding: 0.25rem;
        background: white;
      }
    `}</style>
  </div>
);

export default Container;
