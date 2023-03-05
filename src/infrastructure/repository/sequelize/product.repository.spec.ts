import { Sequelize } from "sequelize-typescript";
import { v4 as uuid } from "uuid";
import { Product } from "../../../domain/product/entity/product";
import { ProductModel } from "./model/product.model";
import { ProductRepository } from "./product.repository";

describe("Product repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const expectedId = uuid();

    const productRepository = new ProductRepository();
    const product = new Product(expectedId, "produto 1", 1000);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({
      where: { id: expectedId },
    });

    expect(productModel.toJSON()).toStrictEqual({
      id: expectedId,
      name: "produto 1",
      price: 1000,
    });
  });

  it("should update a product", async () => {
    const expectedId = uuid();

    const productRepository = new ProductRepository();
    const product = new Product(expectedId, "produto 1", 1000);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({
      where: { id: expectedId },
    });

    expect(productModel.toJSON()).toStrictEqual({
      id: expectedId,
      name: "produto 1",
      price: 1000,
    });

    product.changeName("produto 2");
    product.changePrice(200);

    await productRepository.update(product);

    const productModel2 = await ProductModel.findOne({
      where: { id: expectedId },
    });

    expect(productModel2.toJSON()).toStrictEqual({
      id: expectedId,
      name: "produto 2",
      price: 200,
    });
  });

  it("should find product", async () => {
    const expectedId = uuid();

    const productRepository = new ProductRepository();
    const product = new Product(expectedId, "produto 1", 1000);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({
      where: { id: expectedId },
    });

    const foundProduct = await productRepository.find(expectedId);

    expect(productModel.toJSON()).toStrictEqual({
      id: foundProduct.id,
      name: foundProduct.name,
      price: foundProduct.price,
    });
  });

  it("should find all products", async () => {
    const productRepository = new ProductRepository();

    const product1 = new Product(uuid(), "produto 1", 1000);
    await productRepository.create(product1);

    const product2 = new Product(uuid(), "produto 2", 200);
    await productRepository.create(product2);

    const foundProducts = await productRepository.findAll();

    expect([product1, product2]).toEqual(foundProducts);
  });
});
