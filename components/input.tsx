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
        border-radius: 0.25rem;
        overflow: hidden;
        border: 1px solid #d1d1d1;
        display: flex;
        text-overflow: clip;
      }

      .field label {
        color: #555;
        font-weight: 500;
        padding: 0.5rem;
        background-color: #ddd;
        border-right: 1px solid #d1d1d1;
        text-align: center;
      }

      .field input {
        color: #555;
        appearance: none;
        border: none;
        padding: 0.5rem;
        width: 75%;
        font-weight: 500;
        font-size: 1rem;
      }
    `}</style>
  </>
);

export default Input;
