import { Product } from "../entity/product";

export class ProductService {
  static increasePrice(products: Product[], percentage: number): void {
    products.forEach((product) => {
      const price = product.price;

      product.changePrice(price + price * (percentage / 100));
    });
  }
}
