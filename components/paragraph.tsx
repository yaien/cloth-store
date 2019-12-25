import { Props } from "react";

export const Paragraph = (props: Props<{}>) => (
  <p>
    {props.children}
    <style jsx>{`
      p {
        padding: 0.25rem;
      }
    `}</style>
  </p>
);

export default Paragraph;
