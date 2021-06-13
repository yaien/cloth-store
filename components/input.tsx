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
        display: flex;
        text-overflow: clip;
        font-size: 0.8rem;
        font-weight: 400;
      }

      .field label {
        color: var(--text-primary);
        font-weight: 500;
        padding: 0.5rem;
        text-align: left;
        text-transform: uppercase;
        width: 65px;
      }

      .field input {
        color: var(--text-dark);
        border: none;
        padding: 0.5rem;
        font-weight: 500;
        font-size: 1rem;
        flex-grow: 1;
        box-sizing: border-box;
        border-bottom: 1px solid var(--border-secondary);
      }

      input:disabled, input[disabled] {
        background-color: var(--bg-light);
      }

      input:focus, input:active {
        outline: none;
        border-bottom: 1px solid var(--border-primary);
      }
    `}</style>
  </>
);

export default Input;
