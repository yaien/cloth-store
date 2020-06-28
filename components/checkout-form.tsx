import Input from "./input";
import Button from "./button";
import useForm from "../context/hooks/use-form";
import { FC, FormEvent } from "react";
import { Shipping } from "chillhood";
import { Col, Row } from "./layout";

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
      <h3 className="title">Información de contacto y envio</h3>
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
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        .title {
          text-transform: uppercase;
          font-weight: 500;
          text-align: center;
          letter-spacing: 0.2rem;
        }
      `}</style>
    </>
  );
};

export default CheckoutFormProps;
