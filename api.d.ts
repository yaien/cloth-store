declare namespace API {
  export interface Size {
    label: string;
    existence: number;
  }

  export interface Item {
    id: string;
    name: string;
    slug: string;
    price: number;
    active: boolean;
    tags: string[];
    pictures?: any;
    description: string;
    createdAt: number;
    sizes: Size[];
  }

  export interface Guest {
    id: string;
    cart: Cart | null;
  }

  export interface Cart {
    shipping: number;
    subtotal: number;
    total: number;
    items: CartItem[];
  }

  export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
  }
}
