import { DataSourceConfig, MANIFEST_PATH_TO_ROOT } from "../utils";

export function createSavvySwapDataSource(
  network: string,
  config: DataSourceConfig
) {
  return {
    kind: "ethereum/contract",
    name: config.name,
    network: network,
    source: {
      address: config.address,
      abi: "SavvySwap",
      startBlock: config.startBlock,
    },
    mapping: {
      kind: "ethereum/events",
      apiVersion: "0.0.7",
      language: "wasm/assemblyscript",
      entities: [],
      abis: [
        {
          name: "SavvySwap",
          file: `${MANIFEST_PATH_TO_ROOT}abis/SavvySwap.json`,
        },
        {
          name: "SavvyFrontendInfoAggregator",
          file: `${MANIFEST_PATH_TO_ROOT}abis/SavvyFrontendInfoAggregator.json`,
        },
      ],
      eventHandlers: [
        {
          event: "Deposit(indexed address,indexed address,uint256)",
          handler: "handleDepositEvent",
        },
        {
          event: "Withdraw(indexed address,indexed address,uint256)",
          handler: "handleWithdrawEvent",
        },
        {
          event: "Claim(indexed address,indexed address,uint256)",
          handler: "handleClaimEvent",
        },
        {
          event: "Swap(indexed address,uint256)",
          handler: "handleSwapEvent",
        },
      ],
      file: `${MANIFEST_PATH_TO_ROOT}src/mappings/savvySwap.ts`,
    },
  };
}
