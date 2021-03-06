// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class onLock extends ethereum.Event {
  get params(): onLock__Params {
    return new onLock__Params(this);
  }
}

export class onLock__Params {
  _event: onLock;

  constructor(event: onLock) {
    this._event = event;
  }

  get lockID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amountInTokens(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get startEmission(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get endEmission(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class onMigrate extends ethereum.Event {
  get params(): onMigrate__Params {
    return new onMigrate__Params(this);
  }
}

export class onMigrate__Params {
  _event: onMigrate;

  constructor(event: onMigrate) {
    this._event = event;
  }

  get lockID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amountInTokens(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class onRelock extends ethereum.Event {
  get params(): onRelock__Params {
    return new onRelock__Params(this);
  }
}

export class onRelock__Params {
  _event: onRelock;

  constructor(event: onRelock) {
    this._event = event;
  }

  get lockID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get unlockDate(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class onSplitLock extends ethereum.Event {
  get params(): onSplitLock__Params {
    return new onSplitLock__Params(this);
  }
}

export class onSplitLock__Params {
  _event: onSplitLock;

  constructor(event: onSplitLock) {
    this._event = event;
  }

  get fromLockID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get toLockID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amountInTokens(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class onTransferLock extends ethereum.Event {
  get params(): onTransferLock__Params {
    return new onTransferLock__Params(this);
  }
}

export class onTransferLock__Params {
  _event: onTransferLock;

  constructor(event: onTransferLock) {
    this._event = event;
  }

  get lockIDFrom(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get lockIDto(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get oldOwner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class onWithdraw extends ethereum.Event {
  get params(): onWithdraw__Params {
    return new onWithdraw__Params(this);
  }
}

export class onWithdraw__Params {
  _event: onWithdraw;

  constructor(event: onWithdraw) {
    this._event = event;
  }

  get lpToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amountInTokens(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class token_vesting__FEESResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: Address,
    value3: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    return map;
  }
}

export class token_vesting__LOCKSResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: Address;
  value7: Address;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: Address,
    value7: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    return map;
  }
}

export class token_vesting__getLockResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: Address;
  value9: Address;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: Address,
    value9: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    map.set("value9", ethereum.Value.fromAddress(this.value9));
    return map;
  }
}

export class token_vesting extends ethereum.SmartContract {
  static bind(address: Address): token_vesting {
    return new token_vesting("token_vesting", address);
  }

  BLACKLIST(): Address {
    let result = super.call("BLACKLIST", "BLACKLIST():(address)", []);

    return result[0].toAddress();
  }

  try_BLACKLIST(): ethereum.CallResult<Address> {
    let result = super.tryCall("BLACKLIST", "BLACKLIST():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  FEES(): token_vesting__FEESResult {
    let result = super.call(
      "FEES",
      "FEES():(uint256,uint256,address,address)",
      []
    );

    return new token_vesting__FEESResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toAddress()
    );
  }

  try_FEES(): ethereum.CallResult<token_vesting__FEESResult> {
    let result = super.tryCall(
      "FEES",
      "FEES():(uint256,uint256,address,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new token_vesting__FEESResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toAddress()
      )
    );
  }

  LOCKS(param0: BigInt): token_vesting__LOCKSResult {
    let result = super.call(
      "LOCKS",
      "LOCKS(uint256):(address,uint256,uint256,uint256,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new token_vesting__LOCKSResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toAddress(),
      result[7].toAddress()
    );
  }

  try_LOCKS(param0: BigInt): ethereum.CallResult<token_vesting__LOCKSResult> {
    let result = super.tryCall(
      "LOCKS",
      "LOCKS(uint256):(address,uint256,uint256,uint256,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new token_vesting__LOCKSResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toAddress(),
        value[7].toAddress()
      )
    );
  }

  MIGRATOR(): Address {
    let result = super.call("MIGRATOR", "MIGRATOR():(address)", []);

    return result[0].toAddress();
  }

  try_MIGRATOR(): ethereum.CallResult<Address> {
    let result = super.tryCall("MIGRATOR", "MIGRATOR():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  MINIMUM_DEPOSIT(): BigInt {
    let result = super.call(
      "MINIMUM_DEPOSIT",
      "MINIMUM_DEPOSIT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MINIMUM_DEPOSIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MINIMUM_DEPOSIT",
      "MINIMUM_DEPOSIT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  NONCE(): BigInt {
    let result = super.call("NONCE", "NONCE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_NONCE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("NONCE", "NONCE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  SHARES(param0: Address): BigInt {
    let result = super.call("SHARES", "SHARES(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_SHARES(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("SHARES", "SHARES(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  convertSharesToTokens(_token: Address, _shares: BigInt): BigInt {
    let result = super.call(
      "convertSharesToTokens",
      "convertSharesToTokens(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_shares)
      ]
    );

    return result[0].toBigInt();
  }

  try_convertSharesToTokens(
    _token: Address,
    _shares: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "convertSharesToTokens",
      "convertSharesToTokens(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_shares)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  convertTokensToShares(_token: Address, _tokens: BigInt): BigInt {
    let result = super.call(
      "convertTokensToShares",
      "convertTokensToShares(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_tokens)
      ]
    );

    return result[0].toBigInt();
  }

  try_convertTokensToShares(
    _token: Address,
    _tokens: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "convertTokensToShares",
      "convertTokensToShares(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_tokens)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLock(_lockID: BigInt): token_vesting__getLockResult {
    let result = super.call(
      "getLock",
      "getLock(uint256):(uint256,address,uint256,uint256,uint256,uint256,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(_lockID)]
    );

    return new token_vesting__getLockResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toAddress(),
      result[9].toAddress()
    );
  }

  try_getLock(
    _lockID: BigInt
  ): ethereum.CallResult<token_vesting__getLockResult> {
    let result = super.tryCall(
      "getLock",
      "getLock(uint256):(uint256,address,uint256,uint256,uint256,uint256,uint256,uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(_lockID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new token_vesting__getLockResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toAddress(),
        value[9].toAddress()
      )
    );
  }

  getNumLockedTokens(): BigInt {
    let result = super.call(
      "getNumLockedTokens",
      "getNumLockedTokens():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNumLockedTokens(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNumLockedTokens",
      "getNumLockedTokens():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenAtIndex(_index: BigInt): Address {
    let result = super.call(
      "getTokenAtIndex",
      "getTokenAtIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_index)]
    );

    return result[0].toAddress();
  }

  try_getTokenAtIndex(_index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTokenAtIndex",
      "getTokenAtIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTokenLockIDAtIndex(_token: Address, _index: BigInt): BigInt {
    let result = super.call(
      "getTokenLockIDAtIndex",
      "getTokenLockIDAtIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );

    return result[0].toBigInt();
  }

  try_getTokenLockIDAtIndex(
    _token: Address,
    _index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenLockIDAtIndex",
      "getTokenLockIDAtIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenLocksLength(_token: Address): BigInt {
    let result = super.call(
      "getTokenLocksLength",
      "getTokenLocksLength(address):(uint256)",
      [ethereum.Value.fromAddress(_token)]
    );

    return result[0].toBigInt();
  }

  try_getTokenLocksLength(_token: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenLocksLength",
      "getTokenLocksLength(address):(uint256)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenWhitelisterAtIndex(_index: BigInt): Address {
    let result = super.call(
      "getTokenWhitelisterAtIndex",
      "getTokenWhitelisterAtIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_index)]
    );

    return result[0].toAddress();
  }

  try_getTokenWhitelisterAtIndex(_index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTokenWhitelisterAtIndex",
      "getTokenWhitelisterAtIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTokenWhitelisterLength(): BigInt {
    let result = super.call(
      "getTokenWhitelisterLength",
      "getTokenWhitelisterLength():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTokenWhitelisterLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenWhitelisterLength",
      "getTokenWhitelisterLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenWhitelisterStatus(_user: Address): boolean {
    let result = super.call(
      "getTokenWhitelisterStatus",
      "getTokenWhitelisterStatus(address):(bool)",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBoolean();
  }

  try_getTokenWhitelisterStatus(_user: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getTokenWhitelisterStatus",
      "getTokenWhitelisterStatus(address):(bool)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getUserLockIDForTokenAtIndex(
    _user: Address,
    _token: Address,
    _index: BigInt
  ): BigInt {
    let result = super.call(
      "getUserLockIDForTokenAtIndex",
      "getUserLockIDForTokenAtIndex(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );

    return result[0].toBigInt();
  }

  try_getUserLockIDForTokenAtIndex(
    _user: Address,
    _token: Address,
    _index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserLockIDForTokenAtIndex",
      "getUserLockIDForTokenAtIndex(address,address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUserLockedTokenAtIndex(_user: Address, _index: BigInt): Address {
    let result = super.call(
      "getUserLockedTokenAtIndex",
      "getUserLockedTokenAtIndex(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );

    return result[0].toAddress();
  }

  try_getUserLockedTokenAtIndex(
    _user: Address,
    _index: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getUserLockedTokenAtIndex",
      "getUserLockedTokenAtIndex(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getUserLockedTokensLength(_user: Address): BigInt {
    let result = super.call(
      "getUserLockedTokensLength",
      "getUserLockedTokensLength(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_getUserLockedTokensLength(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserLockedTokensLength",
      "getUserLockedTokensLength(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUserLocksForTokenLength(_user: Address, _token: Address): BigInt {
    let result = super.call(
      "getUserLocksForTokenLength",
      "getUserLocksForTokenLength(address,address):(uint256)",
      [ethereum.Value.fromAddress(_user), ethereum.Value.fromAddress(_token)]
    );

    return result[0].toBigInt();
  }

  try_getUserLocksForTokenLength(
    _user: Address,
    _token: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserLocksForTokenLength",
      "getUserLocksForTokenLength(address,address):(uint256)",
      [ethereum.Value.fromAddress(_user), ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getWithdrawableShares(_lockID: BigInt): BigInt {
    let result = super.call(
      "getWithdrawableShares",
      "getWithdrawableShares(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_lockID)]
    );

    return result[0].toBigInt();
  }

  try_getWithdrawableShares(_lockID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getWithdrawableShares",
      "getWithdrawableShares(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_lockID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getWithdrawableTokens(_lockID: BigInt): BigInt {
    let result = super.call(
      "getWithdrawableTokens",
      "getWithdrawableTokens(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_lockID)]
    );

    return result[0].toBigInt();
  }

  try_getWithdrawableTokens(_lockID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getWithdrawableTokens",
      "getWithdrawableTokens(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_lockID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getZeroFeeTokenAtIndex(_index: BigInt): Address {
    let result = super.call(
      "getZeroFeeTokenAtIndex",
      "getZeroFeeTokenAtIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_index)]
    );

    return result[0].toAddress();
  }

  try_getZeroFeeTokenAtIndex(_index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getZeroFeeTokenAtIndex",
      "getZeroFeeTokenAtIndex(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getZeroFeeTokensLength(): BigInt {
    let result = super.call(
      "getZeroFeeTokensLength",
      "getZeroFeeTokensLength():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getZeroFeeTokensLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getZeroFeeTokensLength",
      "getZeroFeeTokensLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  testCondition(condition: Address): boolean {
    let result = super.call("testCondition", "testCondition(address):(bool)", [
      ethereum.Value.fromAddress(condition)
    ]);

    return result[0].toBoolean();
  }

  try_testCondition(condition: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "testCondition",
      "testCondition(address):(bool)",
      [ethereum.Value.fromAddress(condition)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokenOnZeroFeeWhitelist(_token: Address): boolean {
    let result = super.call(
      "tokenOnZeroFeeWhitelist",
      "tokenOnZeroFeeWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(_token)]
    );

    return result[0].toBoolean();
  }

  try_tokenOnZeroFeeWhitelist(_token: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "tokenOnZeroFeeWhitelist",
      "tokenOnZeroFeeWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _uncxAdmins(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AdminSetWhitelisterCall extends ethereum.Call {
  get inputs(): AdminSetWhitelisterCall__Inputs {
    return new AdminSetWhitelisterCall__Inputs(this);
  }

  get outputs(): AdminSetWhitelisterCall__Outputs {
    return new AdminSetWhitelisterCall__Outputs(this);
  }
}

export class AdminSetWhitelisterCall__Inputs {
  _call: AdminSetWhitelisterCall;

  constructor(call: AdminSetWhitelisterCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _add(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class AdminSetWhitelisterCall__Outputs {
  _call: AdminSetWhitelisterCall;

  constructor(call: AdminSetWhitelisterCall) {
    this._call = call;
  }
}

export class EditZeroFeeWhitelistCall extends ethereum.Call {
  get inputs(): EditZeroFeeWhitelistCall__Inputs {
    return new EditZeroFeeWhitelistCall__Inputs(this);
  }

  get outputs(): EditZeroFeeWhitelistCall__Outputs {
    return new EditZeroFeeWhitelistCall__Outputs(this);
  }
}

export class EditZeroFeeWhitelistCall__Inputs {
  _call: EditZeroFeeWhitelistCall;

  constructor(call: EditZeroFeeWhitelistCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _add(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class EditZeroFeeWhitelistCall__Outputs {
  _call: EditZeroFeeWhitelistCall;

  constructor(call: EditZeroFeeWhitelistCall) {
    this._call = call;
  }
}

export class IncrementLockCall extends ethereum.Call {
  get inputs(): IncrementLockCall__Inputs {
    return new IncrementLockCall__Inputs(this);
  }

  get outputs(): IncrementLockCall__Outputs {
    return new IncrementLockCall__Outputs(this);
  }
}

export class IncrementLockCall__Inputs {
  _call: IncrementLockCall;

  constructor(call: IncrementLockCall) {
    this._call = call;
  }

  get _lockID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncrementLockCall__Outputs {
  _call: IncrementLockCall;

  constructor(call: IncrementLockCall) {
    this._call = call;
  }
}

export class LockCall extends ethereum.Call {
  get inputs(): LockCall__Inputs {
    return new LockCall__Inputs(this);
  }

  get outputs(): LockCall__Outputs {
    return new LockCall__Outputs(this);
  }
}

export class LockCall__Inputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _lock_params(): Array<LockCall_lock_paramsStruct> {
    return this._call.inputValues[1].value.toTupleArray<
      LockCall_lock_paramsStruct
    >();
  }
}

export class LockCall__Outputs {
  _call: LockCall;

  constructor(call: LockCall) {
    this._call = call;
  }
}

export class LockCall_lock_paramsStruct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get startEmission(): BigInt {
    return this[2].toBigInt();
  }

  get endEmission(): BigInt {
    return this[3].toBigInt();
  }

  get condition(): Address {
    return this[4].toAddress();
  }
}

export class MigrateCall extends ethereum.Call {
  get inputs(): MigrateCall__Inputs {
    return new MigrateCall__Inputs(this);
  }

  get outputs(): MigrateCall__Outputs {
    return new MigrateCall__Outputs(this);
  }
}

export class MigrateCall__Inputs {
  _call: MigrateCall;

  constructor(call: MigrateCall) {
    this._call = call;
  }

  get _lockID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _option(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MigrateCall__Outputs {
  _call: MigrateCall;

  constructor(call: MigrateCall) {
    this._call = call;
  }
}

export class PayForFreeTokenLocksCall extends ethereum.Call {
  get inputs(): PayForFreeTokenLocksCall__Inputs {
    return new PayForFreeTokenLocksCall__Inputs(this);
  }

  get outputs(): PayForFreeTokenLocksCall__Outputs {
    return new PayForFreeTokenLocksCall__Outputs(this);
  }
}

export class PayForFreeTokenLocksCall__Inputs {
  _call: PayForFreeTokenLocksCall;

  constructor(call: PayForFreeTokenLocksCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class PayForFreeTokenLocksCall__Outputs {
  _call: PayForFreeTokenLocksCall;

  constructor(call: PayForFreeTokenLocksCall) {
    this._call = call;
  }
}

export class RelockCall extends ethereum.Call {
  get inputs(): RelockCall__Inputs {
    return new RelockCall__Inputs(this);
  }

  get outputs(): RelockCall__Outputs {
    return new RelockCall__Outputs(this);
  }
}

export class RelockCall__Inputs {
  _call: RelockCall;

  constructor(call: RelockCall) {
    this._call = call;
  }

  get _lockID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _unlock_date(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RelockCall__Outputs {
  _call: RelockCall;

  constructor(call: RelockCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RevokeConditionCall extends ethereum.Call {
  get inputs(): RevokeConditionCall__Inputs {
    return new RevokeConditionCall__Inputs(this);
  }

  get outputs(): RevokeConditionCall__Outputs {
    return new RevokeConditionCall__Outputs(this);
  }
}

export class RevokeConditionCall__Inputs {
  _call: RevokeConditionCall;

  constructor(call: RevokeConditionCall) {
    this._call = call;
  }

  get _lockID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RevokeConditionCall__Outputs {
  _call: RevokeConditionCall;

  constructor(call: RevokeConditionCall) {
    this._call = call;
  }
}

export class SetBlacklistContractCall extends ethereum.Call {
  get inputs(): SetBlacklistContractCall__Inputs {
    return new SetBlacklistContractCall__Inputs(this);
  }

  get outputs(): SetBlacklistContractCall__Outputs {
    return new SetBlacklistContractCall__Outputs(this);
  }
}

export class SetBlacklistContractCall__Inputs {
  _call: SetBlacklistContractCall;

  constructor(call: SetBlacklistContractCall) {
    this._call = call;
  }

  get _contract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBlacklistContractCall__Outputs {
  _call: SetBlacklistContractCall;

  constructor(call: SetBlacklistContractCall) {
    this._call = call;
  }
}

export class SetFeesCall extends ethereum.Call {
  get inputs(): SetFeesCall__Inputs {
    return new SetFeesCall__Inputs(this);
  }

  get outputs(): SetFeesCall__Outputs {
    return new SetFeesCall__Outputs(this);
  }
}

export class SetFeesCall__Inputs {
  _call: SetFeesCall;

  constructor(call: SetFeesCall) {
    this._call = call;
  }

  get _tokenFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _freeLockingFee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _feeAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _freeLockingToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class SetFeesCall__Outputs {
  _call: SetFeesCall;

  constructor(call: SetFeesCall) {
    this._call = call;
  }
}

export class SetMigratorCall extends ethereum.Call {
  get inputs(): SetMigratorCall__Inputs {
    return new SetMigratorCall__Inputs(this);
  }

  get outputs(): SetMigratorCall__Outputs {
    return new SetMigratorCall__Outputs(this);
  }
}

export class SetMigratorCall__Inputs {
  _call: SetMigratorCall;

  constructor(call: SetMigratorCall) {
    this._call = call;
  }

  get _migrator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMigratorCall__Outputs {
  _call: SetMigratorCall;

  constructor(call: SetMigratorCall) {
    this._call = call;
  }
}

export class SplitLockCall extends ethereum.Call {
  get inputs(): SplitLockCall__Inputs {
    return new SplitLockCall__Inputs(this);
  }

  get outputs(): SplitLockCall__Outputs {
    return new SplitLockCall__Outputs(this);
  }
}

export class SplitLockCall__Inputs {
  _call: SplitLockCall;

  constructor(call: SplitLockCall) {
    this._call = call;
  }

  get _lockID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SplitLockCall__Outputs {
  _call: SplitLockCall;

  constructor(call: SplitLockCall) {
    this._call = call;
  }
}

export class TransferLockOwnershipCall extends ethereum.Call {
  get inputs(): TransferLockOwnershipCall__Inputs {
    return new TransferLockOwnershipCall__Inputs(this);
  }

  get outputs(): TransferLockOwnershipCall__Outputs {
    return new TransferLockOwnershipCall__Outputs(this);
  }
}

export class TransferLockOwnershipCall__Inputs {
  _call: TransferLockOwnershipCall;

  constructor(call: TransferLockOwnershipCall) {
    this._call = call;
  }

  get _lockID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class TransferLockOwnershipCall__Outputs {
  _call: TransferLockOwnershipCall;

  constructor(call: TransferLockOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _lockID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
