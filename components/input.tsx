export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export const Input = (props: InputProps) => (
  <>
    <div className="field">
      <label htmlFor={props.name}>{props.label}</label>
      <input {...props} />
    </div>
    <style jsx>{`
      .field {
        margin: 0.25rem;
        border-radius: var(--border-radius);
        overflow: hidden;
        border: 1px solid #d1d1d1;
        display: flex;
        text-overflow: clip;
      }

      .field label {
        color: var(--text-light);
        font-weight: 500;
        padding: 0.5rem;
        background-color: var(--bg-primary);
        border-right: 1px solid #d1d1d1;
        text-align: center;
      }

      .field input {
        color: var(--text-dark);
        border: none;
        padding: 0.5rem;
        font-weight: 500;
        font-size: 1rem;
        flex-grow: 1;
        box-sizing: border-box;
      }

      .field input:focus {
        box-shadow: 1 0 0 0 rgba(255, 0, 0, 0.125),
          0 1 1 0 rgba(255, 0, 0, 0.125);
        outline-color: var(--border-primary);
        border: 1px solid var(--border-primary);
      }
    `}</style>
  </>
);

export default Input;
