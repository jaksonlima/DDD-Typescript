import { Custumer } from "../../customer/entity/custumer";
import { Order } from "../entity/order";
import { OrderItem } from "../entity/order_item";
import { OrderService } from "./order.service";

describe("OrderService unit tests", () => {
  it("should get total of all orders", () => {
    const orderItem1 = new OrderItem("1", "11", "item1", 100, 1);
    const orderItem2 = new OrderItem("2", "22", "item2", 200, 2);

    const order1 = new Order("3", "33", [orderItem1]);
    const order2 = new Order("4", "44", [orderItem2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(500);
  });

  it("should place an order", () => {
    const customer = new Custumer("1", "01");

    const orderItem = new OrderItem("1", "productId-1", "name-1", 10, 1);

    const order = OrderService.placeOrder(customer, [orderItem]);

    expect(customer.rewardPoints).toBe(5);
    expect(order.totalItems()).toBe(10);
  });

  it("should add reward poits", () => {
    const customer = new Custumer("1", "01");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
