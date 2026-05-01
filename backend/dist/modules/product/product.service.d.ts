import { Model } from 'mongoose';
import { Product } from '../../schemas/product.schema';
import { CreateProductDto, UpdateProductDto } from '../../dtos/product.dto';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<Product>);
    createProduct(createProductDto: CreateProductDto): Promise<{
        message: string;
        product: import("mongoose").Document<unknown, {}, Product, {}, {}> & Product & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    getAllProducts(): Promise<(import("mongoose").Document<unknown, {}, Product, {}, {}> & Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getProductById(pId: string): Promise<import("mongoose").Document<unknown, {}, Product, {}, {}> & Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    updateProduct(pId: string, updateProductDto: UpdateProductDto): Promise<{
        message: string;
        product: import("mongoose").Document<unknown, {}, Product, {}, {}> & Product & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    deleteProduct(pId: string): Promise<{
        message: string;
    }>;
    getProductsByCategory(category: string): Promise<(import("mongoose").Document<unknown, {}, Product, {}, {}> & Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
}
