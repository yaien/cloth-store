import { OptionTypeBase, Styles, Theme } from "react-select";
import Async, { Props } from "react-select/async";

export interface AsyncSelectProps<OptionType extends OptionTypeBase>
  extends Props<OptionType, false> {
  label?: string;
}

const styles: Partial<Styles<OptionTypeBase, false>> = {
  container: (provided, state) => ({
    ...provided,
    flexGrow: 1,
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: "0 var(--border-radius) var(--border-radius) 0",
    fontWeight: 500,
    fontSize: "1rem",
    color: "var(--text-secondary)",
  }),
};

const theme = (th: Theme): Theme => ({
  ...th,
  colors: {
    ...th.colors,
    primary: "var(--text-primary)",
    primary25: "var(--bg-hover-light)",
    primary75: "var(--bg-hover-light)",
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
          border-radius: var(--border-radius);
          display: flex;
          text-overflow: clip;
        }

        .select label {
          color: var(--text-light);
          font-weight: 500;
          padding: 0.5rem;
          background-color: var(--bg-primary);
          text-align: center;
          border-radius: var(--border-radius) 0 0 var(--border-radius);
        }
      `}</style>
    </div>
  );
}
