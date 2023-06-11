import {
  Claim,
  Deposit,
  Swap,
  Withdraw,
} from "../../generated/SavvySwapUSDC/SavvySwap";
import { syncUserPosition } from "../helpers/account";
import {
  createClaimEvent,
  createDepositEvent,
  createSwapEvent,
  createWithdrawEvent,
} from "../helpers/savvySwap";

export function handleDepositEvent(event: Deposit): void {
  syncUserPosition(event.params.owner);
  syncUserPosition(event.params.sender);
  createDepositEvent(event);
}

export function handleWithdrawEvent(event: Withdraw): void {
  syncUserPosition(event.params.sender);
  syncUserPosition(event.params.recipient);
  createWithdrawEvent(event);
}

export function handleClaimEvent(event: Claim): void {
  syncUserPosition(event.params.sender);
  syncUserPosition(event.params.recipient);
  createClaimEvent(event);
}

export function handleSwapEvent(event: Swap): void {
  syncUserPosition(event.params.sender);
  createSwapEvent(event);
}
