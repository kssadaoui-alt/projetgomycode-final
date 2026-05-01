import { Controller, Post, Get, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from '../../dtos/product.dto';

@Controller('api/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productService.createProduct(createProductDto);
  }

  @Get()
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  @Get('category/:category')
  async getProductsByCategory(@Param('category') category: string) {
    return await this.productService.getProductsByCategory(category);
  }

  @Get(':pId')
  async getProductById(@Param('pId') pId: string) {
    return await this.productService.getProductById(pId);
  }

  @Put(':pId')
  async updateProduct(
    @Param('pId') pId: string,
    @Body() updateProductDto: UpdateProductDto
  ) {
    return await this.productService.updateProduct(pId, updateProductDto);
  }

  @Delete(':pId')
  async deleteProduct(@Param('pId') pId: string) {
    return await this.productService.deleteProduct(pId);
  }
}
