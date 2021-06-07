import { FC } from "react";

export const Paragraph: FC = (props) => (
  <p>
    {props.children}
    <style jsx>{`
      p {
        font-size: 0.8rem;
        margin: 0;
      }
    `}</style>
  </p>
);

export default Paragraph;
