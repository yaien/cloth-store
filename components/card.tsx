import { Props } from "react";

const Card = (props: Props<{}>) => {
  return (
    <div className="card">
      {props.children}
      <style jsx>{`
        .card {
          overflow: hidden;
          border-radius: 0.25rem;
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

Card.Body = (props: Props<{}>) => (
  <div className="card-body">
    {props.children}
    <style jsx>{`
      .card-body {
        padding: 0.25rem;
      }
    `}</style>
  </div>
);

export default Card;
