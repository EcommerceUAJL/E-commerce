import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './DTOs/Product.dto';
import { EditProductDTO } from './DTOs/editProduct.dto';
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

  async updateProduct(id: string, body: EditProductDTO) {
    const productsDB = await fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => data.products);
    let productUpdated = productsDB.find((p: any) => p.id === parseInt(id, 10));

    productUpdated = {
      title: body.title ? body.title : productUpdated.title,
      description: body.description
        ? body.description
        : productUpdated.description,
      price: body.price ? body.price : productUpdated.price,
      stock: body.stock ? body.stock : productUpdated.stock,
      brand: body.brand ? body.brand : productUpdated.brand,
      category: body.category ? body.category : productUpdated.category,
      thumbnail: body.thumbnail ? body.thumbnail : productUpdated.thumbnail,
      images: body.images ? body.images : productUpdated.images,
    };

    return {
      message: 'Succes Product updated',
      newProduct: { ...productUpdated },
    };
  }

  // async getProductById(id: string) {
  //   const product = await fetch('https://dummyjson.com/products')
  //     .then((response) => response.json())
  //     .then((data) => data.products.find((product: any) => product.id === id));
  //   return product;
  // }
}
