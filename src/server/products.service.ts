import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './DTOs/createProduct.dto';
@Injectable()
export class ProductsService {
  async getProductsHome() {
    const products = await fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) =>
        data.products.sort((a: any, b: any) => {
          if (a.rating < b.rating) return 1;

          if (a.rating > b.rating) return -1;

          return 0;
        }),
      );

    return products.slice(0, 15);
  }

  async createProduct(body: CreateProductDTO) {
    const products = await fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => data.products);
    console.log(body);
    products.push(body);
    return {
      message: 'producto creado',
      data: { ...products },
    };
  }
}
