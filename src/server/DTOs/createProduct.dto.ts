export class CreateProductDTO {
  title: string;
  description: string;
  price: number;
  stock: number;
  brand?: string;
  category: string;
  thumbnail: string;
  images?: string[];
}
