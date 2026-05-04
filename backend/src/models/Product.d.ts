import mongoose, { Document } from 'mongoose';
export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    stock: number;
    images: string[];
    ratings: number;
    numReviews: number;
    reviews: any[];
    isFeatured: boolean;
    createdAt: Date;
}
declare const _default: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct, {}, mongoose.DefaultSchemaOptions> & IProduct & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IProduct>;
export default _default;
//# sourceMappingURL=Product.d.ts.map