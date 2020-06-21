import Card from "./card";
import Input from "./input";
import Button from "./button";
import useForm from "../context/hooks/use-form";
import { FC, FormEvent } from "react";
import { Shipping } from "chillhood";

export interface CheckoutFormProps {
  onSubmit?(data: any): void;
}

export const CheckoutForm: FC<CheckoutFormProps> = (props) => {
  const form = useForm<Shipping>();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    props.onSubmit && props.onSubmit(form.state);
  }

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <Input
          name="name"
          label="Nombre Completo"
          required
          onChange={form.input("name")}
        />
        <Input
          name="email"
          label="Correo"
          type="email"
          required
          value={form.get("email")}
          onChange={form.input("email")}
        />
        <Input
          name="phone"
          label="Telefono"
          type="tel"
          required
          value={form.get("phone")}
          onChange={form.input("phone")}
        />
        <Input
          name="province"
          label="Departamento"
          required
          value={form.get("province")}
          onChange={form.input("province")}
        />
        <Input
          name="city"
          label="Ciudad"
          required
          value={form.get("city")}
          onChange={form.input("city")}
        />
        <Input
          name="address"
          label="Dirección"
          required
          value={form.get("address")}
          onChange={form.input("address")}
        />
        <Button type="submit" block>
          Proceder al pago
        </Button>
      </form>
    </Card>
  );
};

export default CheckoutFormProps;
