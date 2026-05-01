import { Document } from 'mongoose';
export declare class Product extends Document {
    pName: string;
    pPrice: number;
    pDescription: string;
    pCategory: string;
    pImage: string;
    pStock: number;
    pRating: number;
    pBrand: string;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product, any, {}> & Product & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Product> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
