// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class TokenLock extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenLock entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenLock entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenLock", id.toString(), this);
  }

  static load(id: string): TokenLock | null {
    return store.get("TokenLock", id) as TokenLock | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes | null {
    let value = this.get("tokenAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tokenAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("tokenAddress");
    } else {
      this.set("tokenAddress", Value.fromBytes(value as Bytes));
    }
  }

  get sharesDeposited(): BigInt | null {
    let value = this.get("sharesDeposited");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sharesDeposited(value: BigInt | null) {
    if (value === null) {
      this.unset("sharesDeposited");
    } else {
      this.set("sharesDeposited", Value.fromBigInt(value as BigInt));
    }
  }

  get sharesWithdrawn(): BigInt | null {
    let value = this.get("sharesWithdrawn");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sharesWithdrawn(value: BigInt | null) {
    if (value === null) {
      this.unset("sharesWithdrawn");
    } else {
      this.set("sharesWithdrawn", Value.fromBigInt(value as BigInt));
    }
  }

  get startEmission(): BigInt {
    let value = this.get("startEmission");
    return value.toBigInt();
  }

  set startEmission(value: BigInt) {
    this.set("startEmission", Value.fromBigInt(value));
  }

  get endEmission(): BigInt {
    let value = this.get("endEmission");
    return value.toBigInt();
  }

  set endEmission(value: BigInt) {
    this.set("endEmission", Value.fromBigInt(value));
  }

  get lockId(): BigInt {
    let value = this.get("lockId");
    return value.toBigInt();
  }

  set lockId(value: BigInt) {
    this.set("lockId", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get condition(): Bytes | null {
    let value = this.get("condition");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set condition(value: Bytes | null) {
    if (value === null) {
      this.unset("condition");
    } else {
      this.set("condition", Value.fromBytes(value as Bytes));
    }
  }
}
