import { Props } from "react";

const Card = (props: Props<{}>) => {
  return (
    <div className="card">
      {props.children}
      <style jsx>{`
        .card {
          margin: 1rem;
          overflow: hidden;
          border-radius: 0.25rem;
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
          background: white;
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
        padding: 1rem;
      }
    `}</style>
  </div>
);

export default Card;
