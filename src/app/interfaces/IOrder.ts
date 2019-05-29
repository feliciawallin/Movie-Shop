export interface IOrder{
    id: number; //ska vara en 0
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: IOrderRow[];
 }

 export interface IOrderRow{
    productId: number;
    Amount: number;
 }