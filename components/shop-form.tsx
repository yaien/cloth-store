import Select from "./select";
import { useState, FormEvent, ChangeEvent, useMemo } from "react";
import Input from "./input";
import Button from "./button";

export interface ShopFormProps {
  item: API.Item;
}

export interface ShopFormData {
  size?: string;
  quantity?: number;
}

const ShopForm = ({ item }: ShopFormProps) => {
  const [size, setSize] = useState<API.Size | undefined>(item.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const onSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const size = item.sizes.find(s => s.label === e.target.value);
    setSize(size);
    setQuantity(1);
  };

  const onQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const total = useMemo(() => {
    let value = item.price * quantity;
    return `CO$${value.toLocaleString()}`;
  }, [item, quantity]);

  return (
    <form onSubmit={onSubmit}>
      <Select
        label="Talla"
        name="size"
        required
        onChange={onSizeChange}
        value={size?.label}
      >
        {item.sizes.map(size => (
          <option key={size.label}>{size.label}</option>
        ))}
      </Select>
      <Input
        label="Cantidad"
        name="quantity"
        type="number"
        min={0}
        max={size?.existence}
        required
        value={quantity}
        onChange={onQuantityChange}
      />
      <Input label="Total" value={total} disabled />
      <Button type="submit" block>
        Añadir al carrito
      </Button>
    </form>
  );
};

export default ShopForm;
