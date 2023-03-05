import { Order } from "./order";
import { OrderItem } from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const order = new Order("", "1", []);
    }).toThrow("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      const order = new Order("0", "", []);
    }).toThrow("CustomerId is required");
  });

  it("should throw error when item is empty", () => {
    expect(() => {
      const order = new Order("0", "1", []);
    }).toThrow("Items is required");
  });

  it("should total items", () => {
    const item1 = new OrderItem("1", "01", "item1", 500, 1);
    const item2 = new OrderItem("2", "02", "item2", 500, 2);

    const order = new Order("1", "2", [item1, item2]);

    expect(order.totalItems()).toBe(1500);
  });

  it("should throw erro total items price must be greater than zero", () => {
    expect(() => {
      const item1 = new OrderItem("1", "01", "item1", 0, 1);

      const order = new Order("1", "2", [item1]);
    }).toThrow("price must be greater than zero");
  });
});
