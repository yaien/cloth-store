import Input from "./input";
import Button from "./button";
import useForm from "../context/hooks/use-form";
import { FC, FormEvent } from "react";
import { Shipping } from "chillhood";
import { Col, Row } from "./layout";
import { Subtitle } from "./title";

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
    <>
      <Subtitle>Información de contacto y envio</Subtitle>
      <form onSubmit={onSubmit} className="form">
        <Row>
          <Col md={2}>
            <Input
              name="name"
              label="Nombre Completo"
              required
              onChange={form.input("name")}
            />
          </Col>
          <Col md={2}>
            <Input
              name="email"
              label="Correo"
              type="email"
              required
              value={form.get("email")}
              onChange={form.input("email")}
            />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Input
              name="province"
              label="Departamento"
              required
              value={form.get("province")}
              onChange={form.input("province")}
            />
          </Col>
          <Col md={2}>
            <Input
              name="city"
              label="Ciudad"
              required
              value={form.get("city")}
              onChange={form.input("city")}
            />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Input
              name="address"
              label="Dirección"
              required
              value={form.get("address")}
              onChange={form.input("address")}
            />
          </Col>
          <Col md={2}>
            <Input
              name="phone"
              label="Telefono"
              type="tel"
              required
              value={form.get("phone")}
              onChange={form.input("phone")}
            />
          </Col>
        </Row>
        <Button type="submit" block>
          Proceder al pago
        </Button>
      </form>
      <style jsx>{`
        .form {
          margin: 1rem;
        }
      `}</style>
    </>
  );
};

export default CheckoutFormProps;
