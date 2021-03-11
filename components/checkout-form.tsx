import Input from "./input";
import Button from "./button";
import useForm from "../context/hooks/use-form";
import { FC, FormEvent } from "react";
import { City, Shipping } from "chillhood";
import { Col, Row } from "./layout";
import { Subtitle } from "./title";
import store from "../core/store";
import { Option } from "./select";
import { AsyncSelect } from "./async-select";

export interface CheckoutFormProps {
  onSubmit?(data: any): void;
  onShipmentSelected?(shipment: number): void;
}

export const CheckoutForm: FC<CheckoutFormProps> = (props) => {
  const form = useForm<Shipping>();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    props.onSubmit && props.onSubmit(form.state);
  }

  async function onCitySearch(query: string): Promise<Option<City>[]> {
    const cities = await store.cities.find({ name: query });
    return cities.map((city) => ({
      label: `${city.name}, ${city.province.name}`,
      value: city.id,
      source: city,
    }));
  }

  function onCityChange(option: Option<City>) {
    form.set({
      city: option.source.name,
      province: option.source.province.name,
    });
    if (props.onShipmentSelected) {
      props.onShipmentSelected(option.source.shipment);
    }
  }

  return (
    <>
      <Subtitle>Información de contacto y envio</Subtitle>
      <form onSubmit={onSubmit} className="form">
        <Row>
          <Col md={2}>
            <Input
              name="name"
              label="Nombre"
              required
              value={form.get("name")}
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
            <AsyncSelect
              label="Ciudad"
              name="city"
              defaultOptions
              loadOptions={onCitySearch}
              onChange={onCityChange}
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
