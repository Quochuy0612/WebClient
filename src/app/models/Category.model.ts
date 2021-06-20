import { Product } from 'app/models/Product';
export class Category {
    _id: string;
    id: string;
    products: Product[];
    name: string;
}