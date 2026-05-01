import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../../schemas/product.schema';
import { CreateProductDto, UpdateProductDto } from '../../dtos/product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async createProduct(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel(createProductDto);
    await newProduct.save();
    return { message: 'Product created successfully', product: newProduct };
  }

  async getAllProducts() {
    const products = await this.productModel.find({});
    if (products.length === 0) {
      throw new NotFoundException('No products found');
    }
    return products;
  }

  async getProductById(pId: string) {
    const product = await this.productModel.findById(pId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async updateProduct(pId: string, updateProductDto: UpdateProductDto) {
    const product = await this.productModel.findByIdAndUpdate(
      pId,
      updateProductDto,
      { new: true }
    );
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return { message: 'Product updated successfully', product };
  }

  async deleteProduct(pId: string) {
    const product = await this.productModel.findByIdAndDelete(pId);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return { message: 'Product deleted successfully' };
  }

  async getProductsByCategory(category: string) {
    const products = await this.productModel.find({ pCategory: category });
    if (products.length === 0) {
      throw new NotFoundException('No products found for this category');
    }
    return products;
  }
}
