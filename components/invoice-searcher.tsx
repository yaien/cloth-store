import { FC, FormEvent, useEffect } from "react";
import useForm from "../context/hooks/use-form";
import Input from "./input";
import Button from "./button";

export interface InvoiceSearcherProps {
  onQuery?(ref: string): void;
  reference?: string;
}

export const InvoiceSearcher: FC<InvoiceSearcherProps> = (props) => {
  const form = useForm<{ ref: string }>();

  useEffect(() => {
    form.setState({ ref: props.reference || "" });
  }, [props.reference]);

  function onSumbit(e: FormEvent) {
    e.preventDefault();
    if (props.onQuery) {
      props.onQuery(form.get("ref") || "");
    }
  }

  return (
    <form onSubmit={onSumbit}>
      <Input
        name="ref"
        label="Referencia"
        required
        onChange={form.input("ref")}
        value={form.get("ref")}
      />
      <Button type="submit" block>
        CONSULTAR
      </Button>
    </form>
  );
};

export default InvoiceSearcher;
