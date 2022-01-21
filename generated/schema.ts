// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class TreasuryIssuedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("treasuryId", Value.fromBigInt(BigInt.zero()));
    this.set("maxAmount", Value.fromBigInt(BigInt.zero()));
    this.set("rate", Value.fromBigInt(BigInt.zero()));
    this.set("dateStarted", Value.fromBigInt(BigInt.zero()));
    this.set("purchasedAmount", Value.fromBigInt(BigInt.zero()));
    this.set("duration", Value.fromBigInt(BigInt.zero()));
    this.set("endVoteCount", Value.fromBigInt(BigInt.zero()));
    this.set("endVoteCountRecorded", Value.fromBoolean(false));
    this.set("totalLocked", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TreasuryIssuedEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TreasuryIssuedEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TreasuryIssuedEntity", id.toString(), this);
    }
  }

  static load(id: string): TreasuryIssuedEntity | null {
    return changetype<TreasuryIssuedEntity | null>(
      store.get("TreasuryIssuedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get treasuryId(): BigInt {
    let value = this.get("treasuryId");
    return value!.toBigInt();
  }

  set treasuryId(value: BigInt) {
    this.set("treasuryId", Value.fromBigInt(value));
  }

  get maxAmount(): BigInt {
    let value = this.get("maxAmount");
    return value!.toBigInt();
  }

  set maxAmount(value: BigInt) {
    this.set("maxAmount", Value.fromBigInt(value));
  }

  get rate(): BigInt {
    let value = this.get("rate");
    return value!.toBigInt();
  }

  set rate(value: BigInt) {
    this.set("rate", Value.fromBigInt(value));
  }

  get dateStarted(): BigInt {
    let value = this.get("dateStarted");
    return value!.toBigInt();
  }

  set dateStarted(value: BigInt) {
    this.set("dateStarted", Value.fromBigInt(value));
  }

  get purchasedAmount(): BigInt {
    let value = this.get("purchasedAmount");
    return value!.toBigInt();
  }

  set purchasedAmount(value: BigInt) {
    this.set("purchasedAmount", Value.fromBigInt(value));
  }

  get duration(): BigInt {
    let value = this.get("duration");
    return value!.toBigInt();
  }

  set duration(value: BigInt) {
    this.set("duration", Value.fromBigInt(value));
  }

  get endVoteCount(): BigInt {
    let value = this.get("endVoteCount");
    return value!.toBigInt();
  }

  set endVoteCount(value: BigInt) {
    this.set("endVoteCount", Value.fromBigInt(value));
  }

  get endVoteCountRecorded(): boolean {
    let value = this.get("endVoteCountRecorded");
    return value!.toBoolean();
  }

  set endVoteCountRecorded(value: boolean) {
    this.set("endVoteCountRecorded", Value.fromBoolean(value));
  }

  get totalLocked(): BigInt {
    let value = this.get("totalLocked");
    return value!.toBigInt();
  }

  set totalLocked(value: BigInt) {
    this.set("totalLocked", Value.fromBigInt(value));
  }
}

export class TreasuryPaidEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("investor", Value.fromBytes(Bytes.empty()));
    this.set("amountPaid", Value.fromBigInt(BigInt.zero()));
    this.set("totalLocked", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("dateStarted", Value.fromBigInt(BigInt.zero()));
    this.set("maxAmount", Value.fromBigInt(BigInt.zero()));
    this.set("rate", Value.fromBigInt(BigInt.zero()));
    this.set("purchasedAmount", Value.fromBigInt(BigInt.zero()));
    this.set("duration", Value.fromBigInt(BigInt.zero()));
    this.set("endVoteCount", Value.fromBigInt(BigInt.zero()));
    this.set("endVoteCountRecorded", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TreasuryPaidEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TreasuryPaidEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TreasuryPaidEntity", id.toString(), this);
    }
  }

  static load(id: string): TreasuryPaidEntity | null {
    return changetype<TreasuryPaidEntity | null>(
      store.get("TreasuryPaidEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get investor(): Bytes {
    let value = this.get("investor");
    return value!.toBytes();
  }

  set investor(value: Bytes) {
    this.set("investor", Value.fromBytes(value));
  }

  get amountPaid(): BigInt {
    let value = this.get("amountPaid");
    return value!.toBigInt();
  }

  set amountPaid(value: BigInt) {
    this.set("amountPaid", Value.fromBigInt(value));
  }

  get totalLocked(): BigInt {
    let value = this.get("totalLocked");
    return value!.toBigInt();
  }

  set totalLocked(value: BigInt) {
    this.set("totalLocked", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get dateStarted(): BigInt {
    let value = this.get("dateStarted");
    return value!.toBigInt();
  }

  set dateStarted(value: BigInt) {
    this.set("dateStarted", Value.fromBigInt(value));
  }

  get maxAmount(): BigInt {
    let value = this.get("maxAmount");
    return value!.toBigInt();
  }

  set maxAmount(value: BigInt) {
    this.set("maxAmount", Value.fromBigInt(value));
  }

  get rate(): BigInt {
    let value = this.get("rate");
    return value!.toBigInt();
  }

  set rate(value: BigInt) {
    this.set("rate", Value.fromBigInt(value));
  }

  get purchasedAmount(): BigInt {
    let value = this.get("purchasedAmount");
    return value!.toBigInt();
  }

  set purchasedAmount(value: BigInt) {
    this.set("purchasedAmount", Value.fromBigInt(value));
  }

  get duration(): BigInt {
    let value = this.get("duration");
    return value!.toBigInt();
  }

  set duration(value: BigInt) {
    this.set("duration", Value.fromBigInt(value));
  }

  get endVoteCount(): BigInt {
    let value = this.get("endVoteCount");
    return value!.toBigInt();
  }

  set endVoteCount(value: BigInt) {
    this.set("endVoteCount", Value.fromBigInt(value));
  }

  get endVoteCountRecorded(): boolean {
    let value = this.get("endVoteCountRecorded");
    return value!.toBoolean();
  }

  set endVoteCountRecorded(value: boolean) {
    this.set("endVoteCountRecorded", Value.fromBoolean(value));
  }
}

export class TreasuryPurchasedEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("investor", Value.fromBytes(Bytes.empty()));
    this.set("amountBought", Value.fromBigInt(BigInt.zero()));
    this.set("totalLocked", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("dateStarted", Value.fromBigInt(BigInt.zero()));
    this.set("maxAmount", Value.fromBigInt(BigInt.zero()));
    this.set("rate", Value.fromBigInt(BigInt.zero()));
    this.set("purchasedAmount", Value.fromBigInt(BigInt.zero()));
    this.set("duration", Value.fromBigInt(BigInt.zero()));
    this.set("endVoteCount", Value.fromBigInt(BigInt.zero()));
    this.set("endVoteCountRecorded", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save TreasuryPurchasedEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TreasuryPurchasedEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TreasuryPurchasedEntity", id.toString(), this);
    }
  }

  static load(id: string): TreasuryPurchasedEntity | null {
    return changetype<TreasuryPurchasedEntity | null>(
      store.get("TreasuryPurchasedEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get investor(): Bytes {
    let value = this.get("investor");
    return value!.toBytes();
  }

  set investor(value: Bytes) {
    this.set("investor", Value.fromBytes(value));
  }

  get amountBought(): BigInt {
    let value = this.get("amountBought");
    return value!.toBigInt();
  }

  set amountBought(value: BigInt) {
    this.set("amountBought", Value.fromBigInt(value));
  }

  get totalLocked(): BigInt {
    let value = this.get("totalLocked");
    return value!.toBigInt();
  }

  set totalLocked(value: BigInt) {
    this.set("totalLocked", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get dateStarted(): BigInt {
    let value = this.get("dateStarted");
    return value!.toBigInt();
  }

  set dateStarted(value: BigInt) {
    this.set("dateStarted", Value.fromBigInt(value));
  }

  get maxAmount(): BigInt {
    let value = this.get("maxAmount");
    return value!.toBigInt();
  }

  set maxAmount(value: BigInt) {
    this.set("maxAmount", Value.fromBigInt(value));
  }

  get rate(): BigInt {
    let value = this.get("rate");
    return value!.toBigInt();
  }

  set rate(value: BigInt) {
    this.set("rate", Value.fromBigInt(value));
  }

  get purchasedAmount(): BigInt {
    let value = this.get("purchasedAmount");
    return value!.toBigInt();
  }

  set purchasedAmount(value: BigInt) {
    this.set("purchasedAmount", Value.fromBigInt(value));
  }

  get duration(): BigInt {
    let value = this.get("duration");
    return value!.toBigInt();
  }

  set duration(value: BigInt) {
    this.set("duration", Value.fromBigInt(value));
  }

  get endVoteCount(): BigInt {
    let value = this.get("endVoteCount");
    return value!.toBigInt();
  }

  set endVoteCount(value: BigInt) {
    this.set("endVoteCount", Value.fromBigInt(value));
  }

  get endVoteCountRecorded(): boolean {
    let value = this.get("endVoteCountRecorded");
    return value!.toBoolean();
  }

  set endVoteCountRecorded(value: boolean) {
    this.set("endVoteCountRecorded", Value.fromBoolean(value));
  }
}
