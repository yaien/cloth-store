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
        border: 1px solid #d1d1d1;
        display: flex;
      }

      .field label {
        color: var(--text-light);
        font-weight: 500;
        padding: 0.5rem;
        background-color: var(--bg-primary);
        border-right: 1px solid var(--border-primary);
        text-align: center;
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
      }
    `}</style>
  </>
);

export default Select;
