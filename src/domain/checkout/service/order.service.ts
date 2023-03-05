import { v4 as uuid } from "uuid";
import { Custumer } from "../../customer/entity/custumer";

import { Order } from "../entity/order";
import { OrderItem } from "../entity/order_item";

export class OrderService {
  static total(orders: Order[]): number {
    return orders.reduce((total, order) => total + order.totalItems(), 0);
  }

  static placeOrder(custumer: Custumer, orderItem: OrderItem[]): Order {
    if (orderItem.length <= 0) {
      throw new Error("No order items");
    }

    const order = new Order(uuid(), custumer.id, orderItem);

    custumer.addRewardPoints(order.totalItems() / 2);

    return order;
  }
}
