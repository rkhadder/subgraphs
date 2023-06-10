import {
  Borrow,
  DepositYieldToken,
  RepayWithBaseToken,
  RepayWithCollateral,
  RepayWithDebtToken,
  WithdrawYieldToken,
} from "../../generated/SavvyPositionManagerUSD/SavvyPositionManager";
import {
  createBorrowEvent,
  createDepositYieldTokenEvent,
  createRepayWithBaseTokenEvent,
  createRepayWithCollateralEvent,
  createRepayWithDebtTokenEvent,
  createWithdrawYieldTokenEvent,
} from "../helpers/savvyPositionManager";

export function handleDepositYieldTokenEvent(event: DepositYieldToken): void {
  createDepositYieldTokenEvent(event);
}

export function handleWithdrawYieldTokenEvent(event: WithdrawYieldToken): void {
  createWithdrawYieldTokenEvent(event);
}

export function handleBorrowEvent(event: Borrow): void {
  createBorrowEvent(event);
}

export function handleRepayWithDebtTokenEvent(event: RepayWithDebtToken): void {
  createRepayWithDebtTokenEvent(event);
}

export function handleRepayWithBaseTokenEvent(event: RepayWithBaseToken): void {
  createRepayWithBaseTokenEvent(event);
}

export function handleRepayWithCollateralEvent(
  event: RepayWithCollateral
): void {
  createRepayWithCollateralEvent(event);
}
