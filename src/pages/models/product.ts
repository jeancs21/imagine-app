import { Company } from "./company";

export interface Product {
    id: number,
    name: string,
    quantity: number,
    price: string,
    description: string,
    company: string
}