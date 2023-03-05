import { Address } from "../value-object/address";

export class Custumer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = true;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;

    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  set address(address: Address) {
    this._address = address;
  }

  validate(): void {
    if (!this._id) {
      throw new Error("Id is required");
    }
    if (!this._name) {
      throw new Error("Name is required");
    }
  }

  changeName(name: string) {
    this._name = name;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  isActive(): boolean {
    return this._active;
  }

  activate() {
    if (!this._address) {
      throw new Error("Address is mandatory to active a customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}
