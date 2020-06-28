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
  sm?: number;
}

export const Col = (props: ColProps) => (
  <div className="col">
    {props.children}
    <style jsx>{`
      .col {
        width: calc(90% / ${props.sm || 1});
      }

      @media (min-width: 768px) {
        .col {
          width: calc(100% / ${props.md || 1});
        }
      }
    `}</style>
  </div>
);

Col.defaultProps = {
  md: 1,
} as ColProps;
