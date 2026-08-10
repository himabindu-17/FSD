import { tax, deliveryFee } from "./products";

export function total(price: number): number {
    return price + price * tax + deliveryFee;
}