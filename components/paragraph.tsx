import { FC } from "react";

export const Paragraph: FC = (props) => (
  <p>
    {props.children}
    <style jsx>{`
      p {
        font-size: 0.8rem;
        padding: 0.5rem;
      }
    `}</style>
  </p>
);

export default Paragraph;
