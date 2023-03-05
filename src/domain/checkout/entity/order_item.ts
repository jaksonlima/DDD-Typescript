export class OrderItem {
  private _id: string;
  private _productId: string;
  private _name: string;
  private _price: number;
  private _quantity: number;

  constructor(
    id: string,
    productId: string,
    name: string,
    price: number,
    quantity: number
  ) {
    this._id = id;
    this._productId = productId;
    this._name = name;
    this._price = price;
    this._quantity = quantity;

    this.validate();
  }

  validate(): void {
    if (!this._id) {
      throw new Error("id is required");
    }
    if (!this._productId) {
      throw new Error("productId is required");
    }
    if (!this._name) {
      throw new Error("name is required");
    }
    if (this?._quantity <= 0) {
      throw new Error("quantity must be greater than zero");
    }
    if (this?._price <= 0) {
      throw new Error("price must be greater than zero");
    }
  }

  total(): number {
    return this._price * this._quantity;
  }
}
