import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './DTOs/Product.dto';
import { EditProductDTO } from './DTOs/editProduct.dto';
@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  // @Render('index')
  homeProductsBestRankeds() {
    return this.productsService.getProductsHome();
  }

  // @Get(':id')
  // getProductById(@Param('id') Id: string) {
  //   return this.productsService.getProductById(Id);
  // }

  @Put(':id')
  editProductById(@Param('id') Id: string, @Body() body: EditProductDTO) {
    return this.productsService.updateProduct(Id, body);
  }

  @Post('/create')
  createProduct(@Body() body: CreateProductDTO) {
    return this.productsService.createProduct(body);
  }
}
