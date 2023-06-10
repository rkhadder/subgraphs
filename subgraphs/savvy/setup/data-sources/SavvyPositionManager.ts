import { DataSourceConfig, MANIFEST_PATH_TO_ROOT } from "../utils";

export function createSavvyPositionManagerDataSource(
  network: string,
  config: DataSourceConfig
) {
  return {
    kind: "ethereum/contract",
    name: config.name,
    network: network,
    source: {
      address: config.address,
      abi: "SavvyPositionManager",
      startBlock: config.startBlock,
    },
    mapping: {
      kind: "ethereum/events",
      apiVersion: "0.0.7",
      language: "wasm/assemblyscript",
      entities: [],
      abis: [
        {
          name: "SavvyPositionManager",
          file: `${MANIFEST_PATH_TO_ROOT}abis/SavvyPositionManager.json`,
        },
        {
          name: "SavvyFrontendInfoAggregator",
          file: `${MANIFEST_PATH_TO_ROOT}abis/SavvyFrontendInfoAggregator.json`,
        },
      ],
      eventHandlers: [
        {
          event:
            "DepositYieldToken(indexed address,indexed address,uint256,address)",
          handler: "handleDepositYieldTokenEvent",
        },
        {
          event:
            "WithdrawYieldToken(indexed address,indexed address,uint256,address)",
          handler: "handleWithdrawYieldTokenEvent",
        },
        {
          event: "Borrow(indexed address,uint256,address)",
          handler: "handleBorrowEvent",
        },
        {
          event: "RepayWithDebtToken(indexed address,uint256,address)",
          handler: "handleRepayWithDebtTokenEvent",
        },
        {
          event:
            "RepayWithBaseToken(indexed address,indexed address,uint256,address,uint256)",
          handler: "handleRepayWithBaseTokenEvent",
        },
        {
          event:
            "RepayWithCollateral(indexed address,indexed address,indexed address,uint256,uint256)",
          handler: "handleRepayWithCollateralEvent",
        },
      ],
      file: `${MANIFEST_PATH_TO_ROOT}src/mappings/savvyPositionManager.ts`,
    },
  };
}
