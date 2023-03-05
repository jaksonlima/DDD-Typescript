import { Address } from "../value-object/address";
import { Custumer } from "./custumer";

describe("Custumer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const customer = new Custumer("", "Jakc");
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      const customer = new Custumer("0", "");
    }).toThrowError("Name is required");
  });

  it("should change name", () => {
    // Arrange
    const customer = new Custumer("0", "Jakc");

    // Act
    customer.changeName("Lima");

    //Assert
    expect(customer.name).toBe("Lima");
  });

  it("should activate customer", () => {
    const customer = new Custumer("0", "Constumer 1");
    const address = new Address("Rua maria", "85814350", "Cascavel");

    customer.address = address;
    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("should deactivate customer", () => {
    const customer = new Custumer("0", "Constumer 1");
    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });

  it("should throw error when address is undefined", () => {
    expect(() => {
      const customer = new Custumer("0", "Constumer 1");
      customer.activate();
    }).toThrow("Address is mandatory to active a customer");
  });
});
