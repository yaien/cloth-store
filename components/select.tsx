export interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  empty?: boolean;
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
        color: #555;
        font-weight: 500;
        padding: 0.5rem;
        background-color: #ddd;
        border-right: 1px solid #d1d1d1;
        text-align: center;
      }

      .field select {
        color: #555;
        appearance: none;
        border: none;
        padding: 0.45rem;
        width: 75%;
        font-weight: 500;
        font-size: 1rem;
        background: white;
        margin: 0px;
      }
    `}</style>
  </>
);

export default Select;
