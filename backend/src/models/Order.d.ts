import mongoose, { Document } from 'mongoose';
export interface IOrder extends Document {
    user: mongoose.Schema.Types.ObjectId;
    orderItems: any[];
    shippingAddress: any;
    paymentMethod: string;
    totalPrice: number;
    isPaid: boolean;
    paidAt?: Date;
    isDelivered: boolean;
    deliveredAt?: Date;
}
declare const _default: mongoose.Model<IOrder, {}, {}, {}, mongoose.Document<unknown, {}, IOrder, {}, mongoose.DefaultSchemaOptions> & IOrder & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IOrder>;
export default _default;
//# sourceMappingURL=Order.d.ts.map