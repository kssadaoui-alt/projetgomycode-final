import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from '../../dtos/product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProduct(createProductDto: CreateProductDto): Promise<{
        message: string;
        product: import("mongoose").Document<unknown, {}, import("../../schemas/product.schema").Product, {}, {}> & import("../../schemas/product.schema").Product & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    getAllProducts(): Promise<(import("mongoose").Document<unknown, {}, import("../../schemas/product.schema").Product, {}, {}> & import("../../schemas/product.schema").Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getProductsByCategory(category: string): Promise<(import("mongoose").Document<unknown, {}, import("../../schemas/product.schema").Product, {}, {}> & import("../../schemas/product.schema").Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
    getProductById(pId: string): Promise<import("mongoose").Document<unknown, {}, import("../../schemas/product.schema").Product, {}, {}> & import("../../schemas/product.schema").Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    updateProduct(pId: string, updateProductDto: UpdateProductDto): Promise<{
        message: string;
        product: import("mongoose").Document<unknown, {}, import("../../schemas/product.schema").Product, {}, {}> & import("../../schemas/product.schema").Product & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
    }>;
    deleteProduct(pId: string): Promise<{
        message: string;
    }>;
}
