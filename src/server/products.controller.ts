import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './DTOs/createProduct.dto';
@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  // @Render('index')
  home() {
    return this.productsService.getProductsHome();
  }

  @Post('/create')
  create(@Body() body: CreateProductDTO) {
    return this.productsService.createProduct(body);
  }
}
