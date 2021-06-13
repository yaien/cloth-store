export interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  empty?: boolean;
}

export interface Option<T> {
  label: string;
  value: string;
  source: T;
}

export const Select = (props: SelectProps) => (
  <>
    <div className="field">
      <label htmlFor={props.name}>{props.label}</label>
      <select {...props}>
        {props.empty && <option />}
        {props.children}
      </select>
    </div>
    <style jsx>{`
      .field {
        margin: 0.25rem;
        border-radius: 0.25rem;
        overflow: hidden;
        display: flex;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 0.8rem;
      }

      .field label {
        color: var(--text-primary);
        font-weight: 500;
        padding: 0.5rem;
        text-align: left;
        width: 65px;
      }

      .field select {
        color: var(--text-dark);
        appearance: none;
        border: none;
        padding: 0.45rem;
        flex-grow: 1;
        font-weight: 500;
        font-size: 1rem;
        background: var(--bg-light);
        margin: 0px;
        border-bottom: 1px solid var(--border-secondary);
      }

      select:active, select:focus {
        outline: none;
        border-bottom: 1px solid var(--border-secondary);
      }
    `}</style>
  </>
);

export default Select;
