import Select from "./select";
import { useState, FormEvent, ChangeEvent, useMemo } from "react";
import Input from "./input";
import Button from "./button";
import { Item, Size } from "chillhood";

export interface ShopFormProps {
  item: Item;
  onSubmit?(data: ShopFormData): void
}

export interface ShopFormData {
  size: string;
  quantity: number;
  item: Item
}

const ShopForm = ({ item, onSubmit }: ShopFormProps) => {
  const [size, setSize] = useState<Size>(item.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const onSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const size = item.sizes.find(s => s.label === e.target.value);
    if(size) {
      setSize(size);
      setQuantity(1);
    }
  };

  const onQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if(onSubmit) onSubmit({ item, quantity, size: size?.label })
  };

  const total = useMemo(() => {
    let value = item.price * quantity;
    return `CO$${value.toLocaleString()}`;
  }, [item, quantity]);

  return (
    <form onSubmit={submit} className="margin-bottom">
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
      <div className="margin-top">
      <Button type="submit" block>
        Añadir al carrito
      </Button>
      </div>
      
        <style jsx>{`
        .margin-bottom {
          margin-bottom: 1rem;
        }

        .margin-top {
          margin-top: 1rem;
        }
        `}</style>
    </form>
  );
};

export default ShopForm;
