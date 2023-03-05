import { Product } from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const product = new Product("", "product1", 526);
    }).toThrow("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      const product = new Product("0", "", 526);
    }).toThrow("Name is required");
  });

  it("should throw error when price is empty", () => {
    expect(() => {
      const product = new Product("1", "produc", 0);
    }).toThrow("Price is required and must be greater than 0");
  });

  it("should change name", () => {
    const product = new Product("1", "product", 50);
    product.changeName("product1");

    expect(product.name).toBe("product1");
  });

  it("should change name", () => {
    const product = new Product("1", "product", 50);
    product.changeName("product1");

    expect(product.name).toBe("product1");
  });

  it("should change prica", () => {
    const product = new Product("1", "product", 50);
    product.changePrice(100);

    expect(product.price).toBe(100);
  });
});
