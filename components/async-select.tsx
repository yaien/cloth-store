import { OptionTypeBase, Styles, Theme } from "react-select";
import Async, { Props } from "react-select/async";

export interface AsyncSelectProps<OptionType extends OptionTypeBase>
  extends Props<OptionType> {
  label?: string;
}

const styles: Partial<Styles> = {
  container: (provided, state) => ({
    ...provided,
    flexGrow: 1,
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: "0 0.25rem 0.25rem 0",
    fontWeight: 500,
    fontSize: "1rem",
    color: "#555",
  }),
};

const theme = (th: Theme): Theme => ({
  ...th,
  colors: {
    ...th.colors,
    primary25: "#ddd",
    primary: "#a00",
    primary50: "#c88",
  },
});

export function AsyncSelect(props: AsyncSelectProps<any>) {
  return (
    <div className="select">
      <label htmlFor={props.name}>{props.label}</label>
      <Async {...props} styles={styles} theme={theme}></Async>
      <style jsx>{`
        .select {
          margin: 0.25rem;
          border-radius: 0.25rem;
          display: flex;
          text-overflow: clip;
        }

        .select label {
          color: #555;
          font-weight: 500;
          padding: 0.5rem;
          background-color: #ddd;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
