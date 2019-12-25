import { Props } from "react";

export const Row = (props: Props<{}>) => (
  <div className="row">
    {props.children}
    <style jsx>{`
      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}</style>
  </div>
);

export interface ColProps extends Props<{}> {
  md?: number;
}

export const Col = (props: ColProps) => (
  <div className="col">
    {props.children}
    <style jsx>{`
      @media (min-width: 768px) {
        .col {
          width: calc(100% / ${props.md});
        }
      }
    `}</style>
  </div>
);

Col.defaultProps = {
  md: 1
} as ColProps;
