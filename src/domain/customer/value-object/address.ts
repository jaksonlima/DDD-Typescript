export class Address {
  _street: string;
  _number: number = 0;
  _zip: string;
  _city: string;

  constructor(street: string, zip: string, city: string) {
    this._street = street;
    this._zip = zip;
    this._city = city;

    this.validate();
  }

  validate(): void {
    if (!this._street) {
      throw new Error("Street is required");
    }
    if (!this._zip) {
      throw new Error("Zip is required");
    }
    if (!this._city) {
      throw new Error("City is required");
    }
    if (!/^[0-9]{8}$/.test(this._zip)) {
      throw new Error("Zip must be 5 digits");
    }
  }

  toString(): string {
    return `${this._street}, ${this._zip}, ${this._number}, ${this._city}`;
  }
}
