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
}
