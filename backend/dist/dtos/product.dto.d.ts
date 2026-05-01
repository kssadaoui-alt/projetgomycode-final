export declare class CreateProductDto {
    pName: string;
    pPrice: number;
    pDescription: string;
    pCategory: string;
    pImage?: string;
    pStock?: number;
    pBrand?: string;
}
export declare class UpdateProductDto {
    pName?: string;
    pPrice?: number;
    pDescription?: string;
    pCategory?: string;
    pImage?: string;
    pStock?: number;
    pBrand?: string;
}
