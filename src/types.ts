export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
}