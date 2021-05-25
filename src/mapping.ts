import { BigInt } from "@graphprotocol/graph-ts"
import {
  token_vesting,
  OwnershipTransferred,
  onLock,
  onMigrate,
  onRelock,
  onSplitLock,
  onTransferLock,
  onWithdraw
} from "../generated/token_vesting/token_vesting"
import { TokenLock } from "../generated/schema"

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}


  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.BLACKLIST(...)
  // - contract.FEES(...)
  // - contract.LOCKS(...)
  // - contract.MIGRATOR(...)
  // - contract.MINIMUM_DEPOSIT(...)
  // - contract.NONCE(...)
  // - contract.SHARES(...)
  // - contract.convertSharesToTokens(...)
  // - contract.convertTokensToShares(...)
  // - contract.getLock(...)
  // - contract.getNumLockedTokens(...)
  // - contract.getTokenAtIndex(...)
  // - contract.getTokenLockIDAtIndex(...)
  // - contract.getTokenLocksLength(...)
  // - contract.getTokenWhitelisterAtIndex(...)
  // - contract.getTokenWhitelisterLength(...)
  // - contract.getTokenWhitelisterStatus(...)
  // - contract.getUserLockIDForTokenAtIndex(...)
  // - contract.getUserLockedTokenAtIndex(...)
  // - contract.getUserLockedTokensLength(...)
  // - contract.getUserLocksForTokenLength(...)
  // - contract.getWithdrawableShares(...)
  // - contract.getWithdrawableTokens(...)
  // - contract.getZeroFeeTokenAtIndex(...)
  // - contract.getZeroFeeTokensLength(...)
  // - contract.owner(...)
  // - contract.testCondition(...)
  // - contract.tokenOnZeroFeeWhitelist(...)



export function handleonLock(event: onLock): void {
  let tokenLock = TokenLock.load(event.transaction.from.toHex())

  if(tokenLock == null) {
    tokenLock = new TokenLock(event.transaction.from.toHex())
  }
  
  
  tokenLock.lockId = event.params.lockID;
  tokenLock.tokenAddress = event.params.token;
  tokenLock.owner = event.params.owner;
  tokenLock.sharesDeposited = event.params.amountInTokens;
  tokenLock.startEmission = event.params.startEmission;
  tokenLock.endEmission = event.params.endEmission;

  tokenLock.save();

}

export function handleonMigrate(event: onMigrate): void {}

export function handleonRelock(event: onRelock): void {}

export function handleonSplitLock(event: onSplitLock): void {}

export function handleonTransferLock(event: onTransferLock): void {}

export function handleonWithdraw(event: onWithdraw): void {}
