import {
  Claim,
  Deposit,
  Swap,
  Withdraw,
} from "../../generated/SavvySwapUSDC/SavvySwap";
import {
  createClaimEvent,
  createDepositEvent,
  createSwapEvent,
  createWithdrawEvent,
} from "../helpers/savvySwap";

export function handleDepositEvent(event: Deposit): void {
  createDepositEvent(event);
}

export function handleWithdrawEvent(event: Withdraw): void {
  createWithdrawEvent(event);
}

export function handleClaimEvent(event: Claim): void {
  createClaimEvent(event);
}

export function handleSwapEvent(event: Swap): void {
  createSwapEvent(event);
}
