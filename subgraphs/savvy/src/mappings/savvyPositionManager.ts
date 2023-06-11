import {
  Borrow,
  DepositYieldToken,
  RepayWithBaseToken,
  RepayWithCollateral,
  RepayWithDebtToken,
  WithdrawYieldToken,
} from "../../generated/SavvyPositionManagerUSD/SavvyPositionManager";
import { syncUserPosition } from "../helpers/account";
import {
  createBorrowEvent,
  createDepositYieldTokenEvent,
  createRepayWithBaseTokenEvent,
  createRepayWithCollateralEvent,
  createRepayWithDebtTokenEvent,
  createWithdrawYieldTokenEvent,
} from "../helpers/savvyPositionManager";

export function handleDepositYieldTokenEvent(event: DepositYieldToken): void {
  syncUserPosition(event.params.sender);
  syncUserPosition(event.params.recipient);
  createDepositYieldTokenEvent(event);
}

export function handleWithdrawYieldTokenEvent(event: WithdrawYieldToken): void {
  syncUserPosition(event.params.owner);
  syncUserPosition(event.params.recipient);
  createWithdrawYieldTokenEvent(event);
}

export function handleBorrowEvent(event: Borrow): void {
  syncUserPosition(event.params.owner);
  syncUserPosition(event.params.recipient);
  createBorrowEvent(event);
}

export function handleRepayWithDebtTokenEvent(event: RepayWithDebtToken): void {
  syncUserPosition(event.params.sender);
  syncUserPosition(event.params.recipient);
  createRepayWithDebtTokenEvent(event);
}

export function handleRepayWithBaseTokenEvent(event: RepayWithBaseToken): void {
  syncUserPosition(event.params.sender);
  syncUserPosition(event.params.recipient);
  createRepayWithBaseTokenEvent(event);
}

export function handleRepayWithCollateralEvent(
  event: RepayWithCollateral
): void {
  syncUserPosition(event.params.owner);
  createRepayWithCollateralEvent(event);
}
