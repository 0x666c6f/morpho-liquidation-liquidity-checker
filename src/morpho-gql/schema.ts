// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Int: number,
    Float: number,
    BigInt: any,
    Address: any,
    String: string,
    ID: string,
    MarketId: any,
    Boolean: boolean,
    HexString: any,
}

export interface PageInfo {
    /** Total number of items */
    countTotal: Scalars['Int']
    /** Number of items as scoped by pagination. */
    count: Scalars['Int']
    /** Number of items requested. */
    limit: Scalars['Int']
    /** Number of items skipped. */
    skip: Scalars['Int']
    __typename: 'PageInfo'
}

export interface BigIntDataPoint {
    x: Scalars['Float']
    y: (Scalars['BigInt'] | null)
    __typename: 'BigIntDataPoint'
}

export interface FloatDataPoint {
    x: Scalars['Float']
    y: (Scalars['Float'] | null)
    __typename: 'FloatDataPoint'
}

export interface IntDataPoint {
    x: Scalars['Float']
    y: (Scalars['Int'] | null)
    __typename: 'IntDataPoint'
}

export interface AddressDataPoint {
    x: Scalars['Float']
    y: (Scalars['Address'] | null)
    __typename: 'AddressDataPoint'
}


/** Chain */
export interface Chain {
    id: Scalars['Int']
    network: Scalars['String']
    currency: Scalars['String']
    __typename: 'Chain'
}


/** Market state history */
export interface MarketHistory {
    /** Amount borrowed on the market, in underlying units. Amount increases as interests accrue. */
    borrowAssets: (BigIntDataPoint[] | null)
    /** Amount supplied on the market, in underlying units. Amount increases as interests accrue. */
    supplyAssets: (BigIntDataPoint[] | null)
    /** Amount borrowed on the market, in USD for display purpose */
    borrowAssetsUsd: (FloatDataPoint[] | null)
    /** Amount supplied on the market, in USD for display purpose */
    supplyAssetsUsd: (FloatDataPoint[] | null)
    /** Amount borrowed on the market, in market share units. Amount does not increase as interest accrue. */
    borrowShares: (BigIntDataPoint[] | null)
    /** Amount supplied on the market, in market share units. Amount does not increase as interest accrue. */
    supplyShares: (BigIntDataPoint[] | null)
    /** Amount available to borrow on the market, in underlying units */
    liquidityAssets: (BigIntDataPoint[] | null)
    /** Amount available to borrow on the market, in USD for display purpose */
    liquidityAssetsUsd: (FloatDataPoint[] | null)
    /** Amount of collateral in the market, in underlying units */
    collateralAssets: (BigIntDataPoint[] | null)
    /** Amount of collateral in the market, in USD for display purpose */
    collateralAssetsUsd: (FloatDataPoint[] | null)
    /** Utilization rate */
    utilization: (FloatDataPoint[] | null)
    /** Rate at utilization target */
    rateAtUTarget: (FloatDataPoint[] | null)
    /** Supply APY excluding rewards */
    supplyApy: (FloatDataPoint[] | null)
    /** Supply APY including rewards */
    netSupplyApy: (FloatDataPoint[] | null)
    /** Borrow APY excluding rewards */
    borrowApy: (FloatDataPoint[] | null)
    /** Supply APY including rewards */
    netBorrowApy: (FloatDataPoint[] | null)
    /** Fee rate */
    fee: (FloatDataPoint[] | null)
    /** Daily Supply APY excluding rewards */
    dailySupplyApy: (FloatDataPoint[] | null)
    /** Daily Supply APY including rewards */
    dailyNetSupplyApy: (FloatDataPoint[] | null)
    /** Daily Borrow APY excluding rewards */
    dailyBorrowApy: (FloatDataPoint[] | null)
    /** Daily Borrow APY including rewards */
    dailyNetBorrowApy: (FloatDataPoint[] | null)
    /** Weekly Supply APY excluding rewards */
    weeklySupplyApy: (FloatDataPoint[] | null)
    /** Weekly Supply APY including rewards */
    weeklyNetSupplyApy: (FloatDataPoint[] | null)
    /** Weekly Borrow APY excluding rewards */
    weeklyBorrowApy: (FloatDataPoint[] | null)
    /** Weekly Borrow APY including rewards */
    weeklyNetBorrowApy: (FloatDataPoint[] | null)
    /** Monthly Supply APY excluding rewards */
    monthlySupplyApy: (FloatDataPoint[] | null)
    /** Monthly Supply APY including rewards */
    monthlyNetSupplyApy: (FloatDataPoint[] | null)
    /** Monthly Borrow APY excluding rewards */
    monthlyBorrowApy: (FloatDataPoint[] | null)
    /** Monthly Borrow APY including rewards */
    monthlyNetBorrowApy: (FloatDataPoint[] | null)
    /** Quarterly Supply APY excluding rewards */
    quarterlySupplyApy: (FloatDataPoint[] | null)
    /** Quarterly Supply APY including rewards */
    quarterlyNetSupplyApy: (FloatDataPoint[] | null)
    /** Quarterly Borrow APY excluding rewards */
    quarterlyBorrowApy: (FloatDataPoint[] | null)
    /** Quarterly Borrow APY including rewards */
    quarterlyNetBorrowApy: (FloatDataPoint[] | null)
    /** Yearly Supply APY excluding rewards */
    yearlySupplyApy: (FloatDataPoint[] | null)
    /** Yearly Supply APY including rewards */
    yearlyNetSupplyApy: (FloatDataPoint[] | null)
    /** Yearly Borrow APY excluding rewards */
    yearlyBorrowApy: (FloatDataPoint[] | null)
    /** Yearly Borrow APY including rewards */
    yearlyNetBorrowApy: (FloatDataPoint[] | null)
    /** All Time Supply APY excluding rewards */
    allTimeSupplyApy: (FloatDataPoint[] | null)
    /** All Time Supply APY including rewards */
    allTimeNetSupplyApy: (FloatDataPoint[] | null)
    /** All Time Borrow APY excluding rewards */
    allTimeBorrowApy: (FloatDataPoint[] | null)
    /** All Time Borrow APY including rewards */
    allTimeNetBorrowApy: (FloatDataPoint[] | null)
    __typename: 'MarketHistory'
}

export type TimeseriesInterval = 'MINUTE' | 'FIVE_MINUTES' | 'FIFTEEN_MINUTES' | 'HALF_HOUR' | 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | 'ALL'


/** Morpho Blue market state rewards */
export interface MarketStateReward {
    /** Amount of reward tokens per year on the supply side. Scaled to reward asset decimals. */
    yearlySupplyTokens: Scalars['BigInt']
    /** Amount of reward tokens per year on the borrow side. Scaled to reward asset decimals. */
    yearlyBorrowTokens: Scalars['BigInt']
    /**
     * @deprecated Use `supplyApr` instead. This field will be removed in the future.
     * Supply rewards APY.
     */
    supplyApy: (Scalars['Float'] | null)
    /** Supply rewards APR. */
    supplyApr: (Scalars['Float'] | null)
    /**
     * @deprecated Use `borrowApr` instead. This field will be removed in the future.
     * Borrow rewards APY.
     */
    borrowApy: (Scalars['Float'] | null)
    /** Borrow rewards APR. */
    borrowApr: (Scalars['Float'] | null)
    /** Amount of reward tokens per supplied token (annualized). Scaled to reward asset decimals. */
    amountPerSuppliedToken: Scalars['BigInt']
    /** Amount of reward tokens per borrowed token (annualized). Scaled to reward asset decimals. */
    amountPerBorrowedToken: Scalars['BigInt']
    asset: Asset
    __typename: 'MarketStateReward'
}


/** Morpho Blue market state */
export interface MarketState {
    id: Scalars['ID']
    /** Amount borrowed on the market, in underlying units. Amount increases as interests accrue. */
    borrowAssets: Scalars['BigInt']
    /** Amount supplied on the market, in underlying units. Amount increases as interests accrue. */
    supplyAssets: Scalars['BigInt']
    /** Amount borrowed on the market, in USD for display purpose */
    borrowAssetsUsd: (Scalars['Float'] | null)
    /** Amount supplied on the market, in USD for display purpose */
    supplyAssetsUsd: (Scalars['Float'] | null)
    /** Amount borrowed on the market, in market share units. Amount does not increase as interest accrue. */
    borrowShares: Scalars['BigInt']
    /** Amount supplied on the market, in market share units. Amount does not increase as interest accrue. */
    supplyShares: Scalars['BigInt']
    /** Amount available to borrow on the market, in underlying units */
    liquidityAssets: Scalars['BigInt']
    /** Amount available to borrow on the market, in USD for display purpose */
    liquidityAssetsUsd: (Scalars['Float'] | null)
    /** Amount of collateral in the market, in underlying units */
    collateralAssets: (Scalars['BigInt'] | null)
    /** Amount of collateral in the market, in USD for display purpose */
    collateralAssetsUsd: (Scalars['Float'] | null)
    /** Utilization rate */
    utilization: Scalars['Float']
    /** Borrow rate at target utilization */
    rateAtUTarget: Scalars['Float']
    /** Supply APY */
    supplyApy: Scalars['Float']
    /** Borrow APY */
    borrowApy: Scalars['Float']
    /** Supply APY including rewards */
    netSupplyApy: (Scalars['Float'] | null)
    /** Borrow APY including rewards */
    netBorrowApy: (Scalars['Float'] | null)
    /** Fee rate */
    fee: Scalars['Float']
    /** Last update timestamp. */
    timestamp: Scalars['BigInt']
    /** Market state rewards */
    rewards: (MarketStateReward[] | null)
    /** Daily Supply APY excluding rewards */
    dailySupplyApy: (Scalars['Float'] | null)
    /** Daily Supply APY including rewards */
    dailyNetSupplyApy: (Scalars['Float'] | null)
    /** Daily Borrow APY excluding rewards */
    dailyBorrowApy: (Scalars['Float'] | null)
    /** Daily Borrow APY including rewards */
    dailyNetBorrowApy: (Scalars['Float'] | null)
    /** Weekly Supply APY excluding rewards */
    weeklySupplyApy: (Scalars['Float'] | null)
    /** Weekly Supply APY including rewards */
    weeklyNetSupplyApy: (Scalars['Float'] | null)
    /** Weekly Borrow APY excluding rewards */
    weeklyBorrowApy: (Scalars['Float'] | null)
    /** Weekly Borrow APY including rewards */
    weeklyNetBorrowApy: (Scalars['Float'] | null)
    /** Monthly Supply APY excluding rewards */
    monthlySupplyApy: (Scalars['Float'] | null)
    /** Monthly Supply APY including rewards */
    monthlyNetSupplyApy: (Scalars['Float'] | null)
    /** Monthly Borrow APY excluding rewards */
    monthlyBorrowApy: (Scalars['Float'] | null)
    /** Monthly Borrow APY including rewards */
    monthlyNetBorrowApy: (Scalars['Float'] | null)
    /** Quarterly Supply APY excluding rewards */
    quarterlySupplyApy: (Scalars['Float'] | null)
    /** Quarterly Supply APY including rewards */
    quarterlyNetSupplyApy: (Scalars['Float'] | null)
    /** Quarterly Borrow APY excluding rewards */
    quarterlyBorrowApy: (Scalars['Float'] | null)
    /** Quarterly Borrow APY including rewards */
    quarterlyNetBorrowApy: (Scalars['Float'] | null)
    /** Yearly Supply APY excluding rewards */
    yearlySupplyApy: (Scalars['Float'] | null)
    /** Yearly Supply APY including rewards */
    yearlyNetSupplyApy: (Scalars['Float'] | null)
    /** Yearly Borrow APY excluding rewards */
    yearlyBorrowApy: (Scalars['Float'] | null)
    /** Yearly Borrow APY including rewards */
    yearlyNetBorrowApy: (Scalars['Float'] | null)
    /** All Time Supply APY excluding rewards */
    allTimeSupplyApy: (Scalars['Float'] | null)
    /** All Time Supply APY including rewards */
    allTimeNetSupplyApy: (Scalars['Float'] | null)
    /** All Time Borrow APY excluding rewards */
    allTimeBorrowApy: (Scalars['Float'] | null)
    /** All Time Borrow APY including rewards */
    allTimeNetBorrowApy: (Scalars['Float'] | null)
    __typename: 'MarketState'
}


/** Morpho Blue state history */
export interface MorphoBlueStateHistory {
    /** Amount of collateral in all markets, in USD for display purpose. */
    totalCollateralUsd: (FloatDataPoint[] | null)
    /** Amount supplied in all markets, in USD for display purpose */
    totalSupplyUsd: (FloatDataPoint[] | null)
    /** Amount deposited in all markets, in USD for display purpose */
    totalDepositUsd: (FloatDataPoint[] | null)
    /** Amount borrowed in all markets, in USD for display purpose */
    totalBorrowUsd: (FloatDataPoint[] | null)
    /** TVL (collateral + supply - borrows), in USD for display purpose */
    tvlUsd: (FloatDataPoint[] | null)
    /** Number of unique users that have interacted with the protocol */
    userCount: (IntDataPoint[] | null)
    /** Number of markets in the protocol */
    marketCount: (IntDataPoint[] | null)
    /** Number of meta morpho vaults in the protocol */
    vaultCount: (IntDataPoint[] | null)
    __typename: 'MorphoBlueStateHistory'
}


/** Morpho Blue global state */
export interface MorphoBlueState {
    id: Scalars['ID']
    /** Last update timestamp. */
    timestamp: Scalars['BigInt']
    /** Amount of collateral in all markets, in USD for display purpose */
    totalCollateralUsd: Scalars['Float']
    /** Amount supplied in all markets, in USD for display purpose */
    totalSupplyUsd: Scalars['Float']
    /** Amount deposited in all markets, in USD for display purpose */
    totalDepositUsd: Scalars['Float']
    /** Amount borrowed in all markets, in USD for display purpose */
    totalBorrowUsd: Scalars['Float']
    /** TVL (collateral + supply - borrows), in USD for display purpose */
    tvlUsd: Scalars['Float']
    /** Number of unique users that have interacted with the protocol */
    userCount: Scalars['Int']
    /** Number of markets in the protocol */
    marketCount: Scalars['Int']
    /** Number of meta morpho vaults in the protocol */
    vaultCount: Scalars['Int']
    __typename: 'MorphoBlueState'
}


/** Morpho Blue deployment */
export interface MorphoBlue {
    id: Scalars['ID']
    address: Scalars['Address']
    creationBlockNumber: Scalars['Int']
    chain: Chain
    /** Current state */
    state: (MorphoBlueState | null)
    /** State history */
    historicalState: (MorphoBlueStateHistory | null)
    __typename: 'MorphoBlue'
}


/** Oracle Feed */
export interface OracleFeed {
    id: Scalars['ID']
    /** Feed contract address */
    address: Scalars['Address']
    description: (Scalars['String'] | null)
    vendor: (Scalars['String'] | null)
    pair: (Scalars['String'][] | null)
    chain: Chain
    __typename: 'OracleFeed'
}


/** Oracle */
export interface Oracle {
    id: Scalars['ID']
    /** Oracle contract address */
    address: Scalars['Address']
    /** Oracle type */
    type: OracleType
    data: (OracleData | null)
    chain: Chain
    markets: Market[]
    __typename: 'Oracle'
}

export type OracleType = 'ChainlinkOracle' | 'ChainlinkOracleV2' | 'CustomOracle' | 'Unknown'

export type OracleData = (MorphoChainlinkOracleData | MorphoChainlinkOracleV2Data) & { __isUnion?: true }


/** Morpho chainlink oracle data */
export interface MorphoChainlinkOracleData {
    baseFeedOne: (OracleFeed | null)
    baseFeedTwo: (OracleFeed | null)
    quoteFeedOne: (OracleFeed | null)
    quoteFeedTwo: (OracleFeed | null)
    scaleFactor: Scalars['BigInt']
    vault: Scalars['String']
    vaultConversionSample: Scalars['BigInt']
    __typename: 'MorphoChainlinkOracleData'
}


/** Morpho chainlink oracle v2 data */
export interface MorphoChainlinkOracleV2Data {
    baseFeedOne: (OracleFeed | null)
    baseFeedTwo: (OracleFeed | null)
    quoteFeedOne: (OracleFeed | null)
    quoteFeedTwo: (OracleFeed | null)
    scaleFactor: Scalars['BigInt']
    baseVault: Scalars['String']
    quoteVault: Scalars['String']
    baseVaultConversionSample: Scalars['BigInt']
    quoteVaultConversionSample: Scalars['BigInt']
    __typename: 'MorphoChainlinkOracleV2Data'
}


/** Public alllocator shared liquidity */
export interface PublicAllocatorSharedLiquidity {
    id: Scalars['ID']
    assets: Scalars['BigInt']
    market: Market
    vault: Vault
    allocationMarket: Market
    __typename: 'PublicAllocatorSharedLiquidity'
}


/** Morpho Blue supply and borrow side concentrations */
export interface MarketConcentration {
    /** Borrowers Herfindahl-Hirschman Index */
    supplyHhi: (Scalars['Float'] | null)
    /** Borrowers Herfindahl-Hirschman Index */
    borrowHhi: (Scalars['Float'] | null)
    __typename: 'MarketConcentration'
}


/** Market APY aggregates */
export interface MarketApyAggregates {
    /** Average market supply APY excluding rewards */
    supplyApy: (Scalars['Float'] | null)
    /** Average market borrow APY excluding rewards */
    borrowApy: (Scalars['Float'] | null)
    /** Average market supply APY including rewards */
    netSupplyApy: (Scalars['Float'] | null)
    /** Average market borrow APY including rewards */
    netBorrowApy: (Scalars['Float'] | null)
    __typename: 'MarketApyAggregates'
}


/** IRM curve data point */
export interface IRMCurveDataPoint {
    /** Market utilization rate */
    utilization: Scalars['Float']
    /** Supply APY at utilization rate */
    supplyApy: Scalars['Float']
    /** Borrow APY at utilization rate */
    borrowApy: Scalars['Float']
    __typename: 'IRMCurveDataPoint'
}


/** Bad debt realized in the market */
export interface MarketBadDebt {
    /** Amount of bad debt realized in the market in underlying units. */
    underlying: Scalars['BigInt']
    /** Amount of bad debt realized in the market in USD. */
    usd: (Scalars['Float'] | null)
    __typename: 'MarketBadDebt'
}


/** Market oracle information */
export interface MarketOracleInfo {
    type: OracleType
    __typename: 'MarketOracleInfo'
}


/** Market warning */
export interface MarketWarning {
    type: Scalars['String']
    level: WarningLevel
    __typename: 'MarketWarning'
}

export type WarningLevel = 'YELLOW' | 'RED'


/** Market oracle feeds */
export interface MarketOracleFeed {
    baseFeedOneAddress: Scalars['Address']
    baseFeedOneDescription: (Scalars['String'] | null)
    baseFeedOneVendor: (Scalars['String'] | null)
    baseFeedTwoAddress: Scalars['Address']
    baseFeedTwoDescription: (Scalars['String'] | null)
    baseFeedTwoVendor: (Scalars['String'] | null)
    baseVault: (Scalars['Address'] | null)
    baseVaultDescription: (Scalars['String'] | null)
    baseVaultVendor: (Scalars['String'] | null)
    baseVaultConversionSample: (Scalars['BigInt'] | null)
    quoteFeedOneAddress: Scalars['Address']
    quoteFeedOneDescription: (Scalars['String'] | null)
    quoteFeedOneVendor: (Scalars['String'] | null)
    quoteFeedTwoAddress: Scalars['Address']
    quoteFeedTwoDescription: (Scalars['String'] | null)
    quoteFeedTwoVendor: (Scalars['String'] | null)
    quoteVault: (Scalars['Address'] | null)
    quoteVaultDescription: (Scalars['String'] | null)
    quoteVaultVendor: (Scalars['String'] | null)
    quoteVaultConversionSample: (Scalars['BigInt'] | null)
    scaleFactor: (Scalars['BigInt'] | null)
    __typename: 'MarketOracleFeed'
}


/** Morpho Blue market */
export interface Market {
    id: Scalars['ID']
    uniqueKey: Scalars['MarketId']
    lltv: Scalars['BigInt']
    oracleAddress: Scalars['Address']
    irmAddress: Scalars['Address']
    creationBlockNumber: Scalars['Int']
    creationTimestamp: (Scalars['BigInt'] | null)
    creatorAddress: (Scalars['Address'] | null)
    whitelisted: Scalars['Boolean']
    /** Amount of collateral to borrow 1 loan asset scaled to both asset decimals */
    collateralPrice: (Scalars['BigInt'] | null)
    /** Underlying amount of assets that can be reallocated to this market */
    reallocatableLiquidityAssets: (Scalars['BigInt'] | null)
    targetBorrowUtilization: Scalars['BigInt']
    targetWithdrawUtilization: Scalars['BigInt']
    loanAsset: Asset
    collateralAsset: (Asset | null)
    oracle: (Oracle | null)
    morphoBlue: MorphoBlue
    /** Current state */
    state: (MarketState | null)
    /** State history */
    historicalState: (MarketHistory | null)
    /** Feeds used by the oracle if provided by the contract */
    oracleFeed: (MarketOracleFeed | null)
    /** Market oracle information */
    oracleInfo: (MarketOracleInfo | null)
    /** Market concentrations */
    concentration: (MarketConcentration | null)
    /** Market bad debt values */
    badDebt: (MarketBadDebt | null)
    /** Market realized bad debt values */
    realizedBadDebt: (MarketBadDebt | null)
    /** Daily market APYs */
    dailyApys: (MarketApyAggregates | null)
    /** Weekly market APYs */
    weeklyApys: (MarketApyAggregates | null)
    /** Monthly market APYs */
    monthlyApys: (MarketApyAggregates | null)
    /** Quarterly market APYs */
    quarterlyApys: (MarketApyAggregates | null)
    /** Yearly market APYs */
    yearlyApys: (MarketApyAggregates | null)
    /** All time market APYs */
    allTimeApys: (MarketApyAggregates | null)
    /** Current IRM curve at different utilization thresholds for display purpose */
    currentIrmCurve: (IRMCurveDataPoint[] | null)
    /** Public allocator shared liquidity available reallocations */
    publicAllocatorSharedLiquidity: (PublicAllocatorSharedLiquidity[] | null)
    /** Market warnings */
    warnings: (MarketWarning[] | null)
    /** Vaults with the market in supply queue */
    supplyingVaults: (Vault[] | null)
    __typename: 'Market'
}


/** Public allocator flow caps */
export interface PublicAllocatorFlowCaps {
    /** Public allocator flow cap in USD */
    maxIn: Scalars['BigInt']
    /** Public allocator flow cap in underlying */
    maxOut: Scalars['BigInt']
    market: Market
    __typename: 'PublicAllocatorFlowCaps'
}


/** Public allocator configuration */
export interface PublicAllocatorConfig {
    fee: Scalars['BigInt']
    accruedFee: Scalars['BigInt']
    admin: Scalars['Address']
    flowCaps: PublicAllocatorFlowCaps[]
    __typename: 'PublicAllocatorConfig'
}


/** Public allocator */
export interface PublicAllocator {
    id: Scalars['ID']
    address: Scalars['Address']
    creationBlockNumber: Scalars['Int']
    morphoBlue: MorphoBlue
    __typename: 'PublicAllocator'
}


/** MetaMorpho vault allocation */
export interface VaultAllocation {
    id: Scalars['ID']
    /** Amount of asset supplied on market, in market underlying token units */
    supplyAssets: Scalars['BigInt']
    /** Amount of asset supplied on market, in USD for display purpose. */
    supplyAssetsUsd: (Scalars['Float'] | null)
    /** Amount of supplied shares on market. */
    supplyShares: Scalars['BigInt']
    /** Maximum amount of asset that can be supplied on market by the vault, in market underlying token units */
    supplyCap: Scalars['BigInt']
    /** Maximum amount of asset that can be supplied on market by the vault, in USD for display purpose. */
    supplyCapUsd: (Scalars['Float'] | null)
    /** Pending maximum amount of asset that can be supplied on market by the vault, in market underlying token units */
    pendingSupplyCap: (Scalars['BigInt'] | null)
    /** Pending supply cap apply timestamp */
    pendingSupplyCapValidAt: (Scalars['BigInt'] | null)
    /** Pending maximum amount of asset that can be supplied on market by the vault, in USD for display purpose. */
    pendingSupplyCapUsd: (Scalars['Float'] | null)
    /** Supply queue index */
    supplyQueueIndex: (Scalars['Int'] | null)
    /** Withdraw queue index */
    withdrawQueueIndex: (Scalars['Int'] | null)
    enabled: Scalars['Boolean']
    removableAt: Scalars['BigInt']
    market: Market
    __typename: 'VaultAllocation'
}


/** MetaMorpho vault state rewards */
export interface VaultStateReward {
    /** Amount of reward tokens distributed to MetaMorpho vault suppliers (annualized). Scaled to reward asset decimals. */
    yearlySupplyTokens: Scalars['BigInt']
    /** Rewards APR. */
    supplyApr: (Scalars['Float'] | null)
    /** Amount of reward tokens earned per supplied token (annualized). Scaled to reward asset decimals. */
    amountPerSuppliedToken: Scalars['BigInt']
    asset: Asset
    __typename: 'VaultStateReward'
}


/** MetaMorpho vault state */
export interface VaultState {
    id: Scalars['ID']
    /** Total value of vault holdings, in underlying token units. */
    totalAssets: Scalars['BigInt']
    /** Total value of vault holdings, in USD for display purpose. */
    totalAssetsUsd: (Scalars['Float'] | null)
    /** Stores the total assets managed by this vault when the fee was last accrued, in underlying token units. */
    lastTotalAssets: Scalars['BigInt']
    /** Vault shares total supply. */
    totalSupply: Scalars['BigInt']
    /** Vault performance fee. */
    fee: Scalars['Float']
    /** Vault APY. */
    apy: Scalars['Float']
    /** Vault APY including rewards. */
    netApy: (Scalars['Float'] | null)
    /** Vault curator address. */
    curator: Scalars['Address']
    /** Fee recipient address. */
    feeRecipient: Scalars['Address']
    /** Guardian address. */
    guardian: Scalars['Address']
    /** Pending guardian address. */
    pendingGuardian: (Scalars['Address'] | null)
    /** Pending guardian apply timestamp. */
    pendingGuardianValidAt: (Scalars['BigInt'] | null)
    /** Owner address. */
    owner: Scalars['Address']
    /** Pending owner address. */
    pendingOwner: (Scalars['Address'] | null)
    /** Skim recipient address. */
    skimRecipient: Scalars['Address']
    /** Timelock in seconds. */
    timelock: Scalars['BigInt']
    /** Pending timelock in seconds. */
    pendingTimelock: (Scalars['BigInt'] | null)
    /** Pending timelock apply timestamp. */
    pendingTimelockValidAt: (Scalars['BigInt'] | null)
    /** Last update timestamp. */
    timestamp: Scalars['BigInt']
    /** Vault allocation on Morpho Blue markets. */
    allocation: (VaultAllocation[] | null)
    /** Vault state rewards */
    rewards: (VaultStateReward[] | null)
    __typename: 'VaultState'
}


/** Vault warning */
export interface VaultWarning {
    type: Scalars['String']
    level: WarningLevel
    __typename: 'VaultWarning'
}


/** Vault APY aggregates */
export interface VaultApyAggregates {
    /** Average vault apy */
    apy: (Scalars['Float'] | null)
    /** Average vault APY including rewards */
    netApy: (Scalars['Float'] | null)
    __typename: 'VaultApyAggregates'
}


/** Vault Liquidity */
export interface VaultLiquidity {
    /** Vault withdrawable liquidity in underlying. */
    underlying: Scalars['BigInt']
    /** Vault withdrawable liquidity in USD. */
    usd: Scalars['Float']
    __typename: 'VaultLiquidity'
}


/** Vault allocator */
export interface VaultAllocator {
    /** Allocator adress. */
    address: Scalars['Address']
    /** Allocator since block number */
    blockNumber: Scalars['BigInt']
    /** Allocator since timestamp */
    timestamp: Scalars['BigInt']
    __typename: 'VaultAllocator'
}


/** Vault pending cap */
export interface VaultPendingCap {
    /** Pending supply cap */
    supplyCap: Scalars['BigInt']
    /** Pending supply cap apply timestamp */
    validAt: Scalars['BigInt']
    market: Market
    __typename: 'VaultPendingCap'
}


/** Vault metadata curator */
export interface VaultMetadataCurator {
    name: Scalars['String']
    image: Scalars['String']
    url: Scalars['String']
    verified: Scalars['Boolean']
    __typename: 'VaultMetadataCurator'
}


/** Vault metadata */
export interface VaultMetadata {
    description: Scalars['String']
    image: Scalars['String']
    forumLink: (Scalars['String'] | null)
    curators: VaultMetadataCurator[]
    __typename: 'VaultMetadata'
}


/** MetaMorpho Vaults */
export interface Vault {
    id: Scalars['ID']
    address: Scalars['Address']
    symbol: Scalars['String']
    name: Scalars['String']
    creationBlockNumber: Scalars['Int']
    creationTimestamp: (Scalars['BigInt'] | null)
    creatorAddress: (Scalars['Address'] | null)
    whitelisted: Scalars['Boolean']
    metadata: (VaultMetadata | null)
    asset: Asset
    chain: Chain
    state: (VaultState | null)
    /**
     * @deprecated Use dailyApys instead.
     * Daily vault APY
     */
    dailyApy: (Scalars['Float'] | null)
    /**
     * @deprecated Use monthlyApys instead.
     * Monthly vault APY
     */
    monthlyApy: (Scalars['Float'] | null)
    /**
     * @deprecated Use weeklyApys instead.
     * Weekly vault APY
     */
    weeklyApy: (Scalars['Float'] | null)
    /** Daily vault APYs */
    dailyApys: (VaultApyAggregates | null)
    /** Weekly vault APYs */
    weeklyApys: (VaultApyAggregates | null)
    /** Monthly vault APYs */
    monthlyApys: (VaultApyAggregates | null)
    /** Vault liquidity */
    liquidity: (VaultLiquidity | null)
    /** Vault warnings */
    warnings: (VaultWarning[] | null)
    /** Public allocator configuration */
    publicAllocatorConfig: (PublicAllocatorConfig | null)
    /** Vault allocators */
    allocators: (VaultAllocator[] | null)
    /** Vault pending caps */
    pendingCaps: (VaultPendingCap[] | null)
    historicalState: VaultHistory
    __typename: 'Vault'
}


/** Asset yield */
export interface AssetYield {
    /** Asset yield (APR) */
    apr: Scalars['Float']
    __typename: 'AssetYield'
}


/** Asset */
export interface Asset {
    id: Scalars['ID']
    /** ERC-20 token contract address */
    address: Scalars['Address']
    chain: Chain
    decimals: Scalars['Float']
    name: Scalars['String']
    symbol: Scalars['String']
    tags: (Scalars['String'][] | null)
    /** Token logo URI, for display purpose */
    logoURI: (Scalars['String'] | null)
    /** ERC-20 token total supply */
    totalSupply: Scalars['BigInt']
    /** Current price in USD, for display purpose. */
    priceUsd: (Scalars['Float'] | null)
    /** Historical price in USD, for display purpose */
    historicalPriceUsd: (FloatDataPoint[] | null)
    /** Current oracle price in USD, for display purpose. */
    oraclePriceUsd: (Scalars['Float'] | null)
    /** Current spot price in ETH. */
    spotPriceEth: (Scalars['Float'] | null)
    /** Historical spot price in ETH */
    historicalSpotPriceEth: (FloatDataPoint[] | null)
    /** MetaMorpho vault */
    vault: (Vault | null)
    /** Asset yield */
    yield: (AssetYield | null)
    __typename: 'Asset'
}

export interface PaginatedAssets {
    items: (Asset[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedAssets'
}


/** Market position */
export interface MarketPosition {
    id: Scalars['ID']
    /** Amount of loan asset supplied, in market shares. */
    supplyShares: Scalars['BigInt']
    /** Amount of loan asset supplied, in underlying token units. */
    supplyAssets: Scalars['BigInt']
    /** Amount of loan asset supplied, in USD for display purpose. */
    supplyAssetsUsd: (Scalars['Float'] | null)
    /** Amount of loan asset borrowed, in market shares. */
    borrowShares: Scalars['BigInt']
    /** Amount of loan asset borrowed, in underlying token units. */
    borrowAssets: Scalars['BigInt']
    /** Amount of loan asset borrowed, in USD for display purpose. */
    borrowAssetsUsd: (Scalars['Float'] | null)
    /** Amount of collateral asset deposited on the market, in underlying token units. */
    collateral: Scalars['BigInt']
    /** Amount of collateral asset deposited on the market, in USD for display purpose. */
    collateralUsd: (Scalars['Float'] | null)
    /** Health factor of the position, computed as collateral value divided by borrow value. */
    healthFactor: (Scalars['Float'] | null)
    user: User
    market: Market
    __typename: 'MarketPosition'
}


/** MetaMorpho vault position */
export interface VaultPosition {
    id: Scalars['ID']
    /** Amount of vault shares */
    shares: Scalars['BigInt']
    /** Value of vault shares held, in underlying token units. */
    assets: Scalars['BigInt']
    /** Value of vault shares held, in USD for display purpose. */
    assetsUsd: (Scalars['Float'] | null)
    user: User
    vault: Vault
    __typename: 'VaultPosition'
}


/** User */
export interface User {
    id: Scalars['ID']
    address: Scalars['Address']
    tag: (Scalars['String'] | null)
    chain: Chain
    marketPositions: MarketPosition[]
    vaultPositions: VaultPosition[]
    transactions: Transaction[]
    __typename: 'User'
}


/** Transaction */
export interface Transaction {
    id: Scalars['ID']
    timestamp: Scalars['BigInt']
    hash: Scalars['HexString']
    logIndex: Scalars['Int']
    blockNumber: Scalars['BigInt']
    type: TransactionType
    data: TransactionData
    chain: Chain
    user: User
    __typename: 'Transaction'
}

export type TransactionType = 'MetaMorphoDeposit' | 'MetaMorphoWithdraw' | 'MetaMorphoFee' | 'MarketBorrow' | 'MarketLiquidation' | 'MarketRepay' | 'MarketSupply' | 'MarketSupplyCollateral' | 'MarketWithdraw' | 'MarketWithdrawCollateral'

export type TransactionData = (VaultTransactionData | MarketCollateralTransferTransactionData | MarketTransferTransactionData | MarketLiquidationTransactionData) & { __isUnion?: true }


/** Meta Morpho vault transfer transaction data */
export interface VaultTransactionData {
    shares: Scalars['BigInt']
    assets: Scalars['BigInt']
    assetsUsd: (Scalars['Float'] | null)
    vault: Vault
    __typename: 'VaultTransactionData'
}


/** Market collateral transfer transaction data */
export interface MarketCollateralTransferTransactionData {
    assets: Scalars['BigInt']
    assetsUsd: (Scalars['Float'] | null)
    market: Market
    __typename: 'MarketCollateralTransferTransactionData'
}


/** Market transfer transaction data */
export interface MarketTransferTransactionData {
    shares: Scalars['BigInt']
    assets: Scalars['BigInt']
    assetsUsd: (Scalars['Float'] | null)
    market: Market
    __typename: 'MarketTransferTransactionData'
}


/** Market liquidation transaction data */
export interface MarketLiquidationTransactionData {
    repaidAssets: Scalars['BigInt']
    repaidAssetsUsd: (Scalars['Float'] | null)
    repaidShares: Scalars['BigInt']
    seizedAssets: Scalars['BigInt']
    seizedAssetsUsd: (Scalars['Float'] | null)
    badDebtShares: Scalars['BigInt']
    badDebtAssets: Scalars['BigInt']
    badDebtAssetsUsd: (Scalars['Float'] | null)
    liquidator: Scalars['Address']
    market: Market
    __typename: 'MarketLiquidationTransactionData'
}

export interface PaginatedTransactions {
    items: (Transaction[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedTransactions'
}

export interface PaginatedMetaMorphos {
    items: (Vault[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedMetaMorphos'
}


/** MetaMorpho vault allocation history */
export interface VaultAllocationHistory {
    market: Market
    /** Amount of asset supplied on market, in market underlying token units */
    supplyAssets: BigIntDataPoint[]
    /** Amount of asset supplied on market, in USD for display purpose. */
    supplyAssetsUsd: (FloatDataPoint[] | null)
    /** Maximum amount of asset that can be supplied on market by the vault, in market underlying token units */
    supplyCap: BigIntDataPoint[]
    /** Maximum amount of asset that can be supplied on market by the vault, in USD for display purpose. */
    supplyCapUsd: (FloatDataPoint[] | null)
    __typename: 'VaultAllocationHistory'
}


/** Meta-Morpho vault history */
export interface VaultHistory {
    /** Total value of vault holdings, in underlying token units. */
    totalAssets: (BigIntDataPoint[] | null)
    /** Total value of vault holdings, in USD for display purpose. */
    totalAssetsUsd: (FloatDataPoint[] | null)
    /** Vault shares total supply. */
    totalSupply: (BigIntDataPoint[] | null)
    /** Vault performance fee. */
    fee: (FloatDataPoint[] | null)
    /** Vault APY. */
    apy: (FloatDataPoint[] | null)
    /** Vault APY including rewards. */
    netApy: (FloatDataPoint[] | null)
    /** Vault curator. */
    curator: (AddressDataPoint[] | null)
    /** Fee recipient. */
    feeRecipient: (AddressDataPoint[] | null)
    /** Guardian. */
    guardian: (AddressDataPoint[] | null)
    /** Owner. */
    owner: (AddressDataPoint[] | null)
    /** Skim recipient. */
    skimRecipient: (AddressDataPoint[] | null)
    /** Vault allocation on Morpho Blue markets. */
    allocation: (VaultAllocationHistory[] | null)
    __typename: 'VaultHistory'
}

export interface PaginatedMetaMorphoPositions {
    items: (VaultPosition[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedMetaMorphoPositions'
}

export interface PaginatedUsers {
    items: (User[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedUsers'
}

export interface PaginatedMarkets {
    items: (Market[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedMarkets'
}

export interface PaginatedMarketPositions {
    items: (MarketPosition[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedMarketPositions'
}


/** Chain synchronization state */
export interface ChainSynchronizationState {
    id: Scalars['ID']
    key: Scalars['String']
    blockNumber: Scalars['BigInt']
    chain: Chain
    __typename: 'ChainSynchronizationState'
}

export interface PaginatedMorphoBlue {
    items: (MorphoBlue[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedMorphoBlue'
}


/** Market oracle accuracy versus spot price */
export interface MarketOracleAccuracy {
    market: Market
    /** Average oracle/spot prices deviation */
    averagePercentDifference: (Scalars['Float'] | null)
    /** Maximum oracle/spot prices deviation */
    maxPercentDifference: (Scalars['Float'] | null)
    __typename: 'MarketOracleAccuracy'
}


/** Amount of collateral at risk of liquidation at collateralPriceRatio * oracle price */
export interface CollateralAtRiskDataPoint {
    collateralPriceRatio: Scalars['Float']
    collateralAssets: Scalars['BigInt']
    collateralUsd: Scalars['Float']
    __typename: 'CollateralAtRiskDataPoint'
}


/** Market collateral at risk of liquidation */
export interface MarketCollateralAtRisk {
    market: Market
    /** Total collateral at risk of liquidation at certain prices thresholds. */
    collateralAtRisk: (CollateralAtRiskDataPoint[] | null)
    __typename: 'MarketCollateralAtRisk'
}


/** Vault reallocate */
export interface VaultReallocate {
    id: Scalars['ID']
    timestamp: Scalars['BigInt']
    hash: Scalars['HexString']
    logIndex: Scalars['Int']
    blockNumber: Scalars['BigInt']
    caller: Scalars['Address']
    shares: Scalars['BigInt']
    assets: Scalars['BigInt']
    type: VaultReallocateType
    market: Market
    vault: Vault
    __typename: 'VaultReallocate'
}

export type VaultReallocateType = 'ReallocateSupply' | 'ReallocateWithdraw'

export interface PaginatedVaultReallocates {
    items: (VaultReallocate[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedVaultReallocates'
}


/** Global search results */
export interface SearchResults {
    markets: Market[]
    vaults: Vault[]
    __typename: 'SearchResults'
}

export interface PaginatedPublicAllocator {
    items: (PublicAllocator[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedPublicAllocator'
}


/** Public alllocator reallocate */
export interface PublicAllocatorReallocate {
    id: Scalars['ID']
    timestamp: Scalars['BigInt']
    hash: Scalars['HexString']
    logIndex: Scalars['Int']
    blockNumber: Scalars['BigInt']
    sender: Scalars['Address']
    assets: Scalars['BigInt']
    type: PublicAllocatorReallocateType
    market: Market
    vault: Vault
    publicAllocator: PublicAllocator
    __typename: 'PublicAllocatorReallocate'
}

export type PublicAllocatorReallocateType = 'Deposit' | 'Withdraw'

export interface PaginatedPublicAllocatorReallocates {
    items: (PublicAllocatorReallocate[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedPublicAllocatorReallocates'
}

export interface PaginatedOracles {
    items: (Oracle[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedOracles'
}

export interface PaginatedOracleFeeds {
    items: (OracleFeed[] | null)
    pageInfo: (PageInfo | null)
    __typename: 'PaginatedOracleFeeds'
}

export interface Query {
    chainSynchronizationStates: ChainSynchronizationState[]
    chainSynchronizationState: ChainSynchronizationState
    chain: Chain
    chains: Chain[]
    asset: Asset
    assetByAddress: Asset
    assets: PaginatedAssets
    transaction: Transaction
    transactionByHash: Transaction
    transactions: PaginatedTransactions
    user: User
    userByAddress: User
    users: PaginatedUsers
    marketCollateralAtRisk: MarketCollateralAtRisk
    market: Market
    marketByUniqueKey: Market
    marketAverageApys: (MarketApyAggregates | null)
    markets: PaginatedMarkets
    marketOracleAccuracy: MarketOracleAccuracy
    morphoBlue: MorphoBlue
    morphoBlueByAddress: MorphoBlue
    morphoBlues: PaginatedMorphoBlue
    marketPosition: MarketPosition
    marketPositions: PaginatedMarketPositions
    oracleFeedByAddress: OracleFeed
    oracleFeeds: PaginatedOracleFeeds
    oracleByAddress: Oracle
    oracles: PaginatedOracles
    publicAllocator: PublicAllocator
    publicAllocators: PaginatedPublicAllocator
    publicAllocatorReallocates: PaginatedPublicAllocatorReallocates
    search: SearchResults
    vault: Vault
    vaultByAddress: Vault
    vaults: PaginatedMetaMorphos
    vaultPosition: VaultPosition
    vaultPositions: PaginatedMetaMorphoPositions
    vaultReallocates: PaginatedVaultReallocates
    __typename: 'Query'
}

export type TransactionsOrderBy = 'Timestamp' | 'Shares' | 'Assets' | 'AssetsUsd' | 'RepaidShares' | 'RepaidAssets' | 'RepaidAssetsUsd' | 'SeizedAssets' | 'SeizedAssetsUsd' | 'BadDebtShares' | 'BadDebtAssets' | 'BadDebtAssetsUsd'

export type OrderDirection = 'Asc' | 'Desc'

export type UsersOrderBy = 'Address'

export type MarketOrderBy = 'UniqueKey' | 'Lltv' | 'BorrowAssets' | 'BorrowAssetsUsd' | 'SupplyAssets' | 'SupplyAssetsUsd' | 'BorrowShares' | 'SupplyShares' | 'Utilization' | 'RateAtUTarget' | 'SupplyApy' | 'NetSupplyApy' | 'BorrowApy' | 'NetBorrowApy' | 'Fee' | 'LoanAssetSymbol' | 'CollateralAssetSymbol' | 'TotalLiquidityUsd' | 'DailyBorrowApy' | 'DailyNetBorrowApy'

export type MorphoBlueOrderBy = 'Address'

export type MarketPositionOrderBy = 'SupplyShares' | 'BorrowShares' | 'Collateral' | 'HealthFactor'

export type PublicAllocatorOrderBy = 'Address'

export type PublicAllocatorReallocateOrderBy = 'Timestamp' | 'Assets'

export type VaultOrderBy = 'Address' | 'TotalAssets' | 'TotalAssetsUsd' | 'TotalSupply' | 'Fee' | 'Apy' | 'NetApy' | 'Name' | 'Curator'

export type VaultPositionOrderBy = 'Shares'

export type VaultReallocateOrderBy = 'Timestamp' | 'Shares' | 'Assets'

export type CacheControlScope = 'PUBLIC' | 'PRIVATE'

export interface PageInfoGenqlSelection{
    /** Total number of items */
    countTotal?: boolean | number
    /** Number of items as scoped by pagination. */
    count?: boolean | number
    /** Number of items requested. */
    limit?: boolean | number
    /** Number of items skipped. */
    skip?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BigIntDataPointGenqlSelection{
    x?: boolean | number
    y?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FloatDataPointGenqlSelection{
    x?: boolean | number
    y?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IntDataPointGenqlSelection{
    x?: boolean | number
    y?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddressDataPointGenqlSelection{
    x?: boolean | number
    y?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Chain */
export interface ChainGenqlSelection{
    id?: boolean | number
    network?: boolean | number
    currency?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Market state history */
export interface MarketHistoryGenqlSelection{
    /** Amount borrowed on the market, in underlying units. Amount increases as interests accrue. */
    borrowAssets?: (BigIntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount supplied on the market, in underlying units. Amount increases as interests accrue. */
    supplyAssets?: (BigIntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount borrowed on the market, in USD for display purpose */
    borrowAssetsUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount supplied on the market, in USD for display purpose */
    supplyAssetsUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount borrowed on the market, in market share units. Amount does not increase as interest accrue. */
    borrowShares?: (BigIntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount supplied on the market, in market share units. Amount does not increase as interest accrue. */
    supplyShares?: (BigIntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount available to borrow on the market, in underlying units */
    liquidityAssets?: (BigIntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount available to borrow on the market, in USD for display purpose */
    liquidityAssetsUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount of collateral in the market, in underlying units */
    collateralAssets?: (BigIntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount of collateral in the market, in USD for display purpose */
    collateralAssetsUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Utilization rate */
    utilization?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Rate at utilization target */
    rateAtUTarget?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Supply APY excluding rewards */
    supplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Supply APY including rewards */
    netSupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Borrow APY excluding rewards */
    borrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Supply APY including rewards */
    netBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Fee rate */
    fee?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Daily Supply APY excluding rewards */
    dailySupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Daily Supply APY including rewards */
    dailyNetSupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Daily Borrow APY excluding rewards */
    dailyBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Daily Borrow APY including rewards */
    dailyNetBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Weekly Supply APY excluding rewards */
    weeklySupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Weekly Supply APY including rewards */
    weeklyNetSupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Weekly Borrow APY excluding rewards */
    weeklyBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Weekly Borrow APY including rewards */
    weeklyNetBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Monthly Supply APY excluding rewards */
    monthlySupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Monthly Supply APY including rewards */
    monthlyNetSupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Monthly Borrow APY excluding rewards */
    monthlyBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Monthly Borrow APY including rewards */
    monthlyNetBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Quarterly Supply APY excluding rewards */
    quarterlySupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Quarterly Supply APY including rewards */
    quarterlyNetSupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Quarterly Borrow APY excluding rewards */
    quarterlyBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Quarterly Borrow APY including rewards */
    quarterlyNetBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Yearly Supply APY excluding rewards */
    yearlySupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Yearly Supply APY including rewards */
    yearlyNetSupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Yearly Borrow APY excluding rewards */
    yearlyBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Yearly Borrow APY including rewards */
    yearlyNetBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** All Time Supply APY excluding rewards */
    allTimeSupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** All Time Supply APY including rewards */
    allTimeNetSupplyApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** All Time Borrow APY excluding rewards */
    allTimeBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** All Time Borrow APY including rewards */
    allTimeNetBorrowApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TimeseriesOptions {
/** Unix timestamp (Inclusive) */
startTimestamp?: (Scalars['Int'] | null),
/** Unix timestamp (Inclusive) */
endTimestamp?: (Scalars['Int'] | null),interval?: (TimeseriesInterval | null)}


/** Morpho Blue market state rewards */
export interface MarketStateRewardGenqlSelection{
    /** Amount of reward tokens per year on the supply side. Scaled to reward asset decimals. */
    yearlySupplyTokens?: boolean | number
    /** Amount of reward tokens per year on the borrow side. Scaled to reward asset decimals. */
    yearlyBorrowTokens?: boolean | number
    /**
     * @deprecated Use `supplyApr` instead. This field will be removed in the future.
     * Supply rewards APY.
     */
    supplyApy?: boolean | number
    /** Supply rewards APR. */
    supplyApr?: boolean | number
    /**
     * @deprecated Use `borrowApr` instead. This field will be removed in the future.
     * Borrow rewards APY.
     */
    borrowApy?: boolean | number
    /** Borrow rewards APR. */
    borrowApr?: boolean | number
    /** Amount of reward tokens per supplied token (annualized). Scaled to reward asset decimals. */
    amountPerSuppliedToken?: boolean | number
    /** Amount of reward tokens per borrowed token (annualized). Scaled to reward asset decimals. */
    amountPerBorrowedToken?: boolean | number
    asset?: AssetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Morpho Blue market state */
export interface MarketStateGenqlSelection{
    id?: boolean | number
    /** Amount borrowed on the market, in underlying units. Amount increases as interests accrue. */
    borrowAssets?: boolean | number
    /** Amount supplied on the market, in underlying units. Amount increases as interests accrue. */
    supplyAssets?: boolean | number
    /** Amount borrowed on the market, in USD for display purpose */
    borrowAssetsUsd?: boolean | number
    /** Amount supplied on the market, in USD for display purpose */
    supplyAssetsUsd?: boolean | number
    /** Amount borrowed on the market, in market share units. Amount does not increase as interest accrue. */
    borrowShares?: boolean | number
    /** Amount supplied on the market, in market share units. Amount does not increase as interest accrue. */
    supplyShares?: boolean | number
    /** Amount available to borrow on the market, in underlying units */
    liquidityAssets?: boolean | number
    /** Amount available to borrow on the market, in USD for display purpose */
    liquidityAssetsUsd?: boolean | number
    /** Amount of collateral in the market, in underlying units */
    collateralAssets?: boolean | number
    /** Amount of collateral in the market, in USD for display purpose */
    collateralAssetsUsd?: boolean | number
    /** Utilization rate */
    utilization?: boolean | number
    /** Borrow rate at target utilization */
    rateAtUTarget?: boolean | number
    /** Supply APY */
    supplyApy?: boolean | number
    /** Borrow APY */
    borrowApy?: boolean | number
    /** Supply APY including rewards */
    netSupplyApy?: boolean | number
    /** Borrow APY including rewards */
    netBorrowApy?: boolean | number
    /** Fee rate */
    fee?: boolean | number
    /** Last update timestamp. */
    timestamp?: boolean | number
    /** Market state rewards */
    rewards?: MarketStateRewardGenqlSelection
    /** Daily Supply APY excluding rewards */
    dailySupplyApy?: boolean | number
    /** Daily Supply APY including rewards */
    dailyNetSupplyApy?: boolean | number
    /** Daily Borrow APY excluding rewards */
    dailyBorrowApy?: boolean | number
    /** Daily Borrow APY including rewards */
    dailyNetBorrowApy?: boolean | number
    /** Weekly Supply APY excluding rewards */
    weeklySupplyApy?: boolean | number
    /** Weekly Supply APY including rewards */
    weeklyNetSupplyApy?: boolean | number
    /** Weekly Borrow APY excluding rewards */
    weeklyBorrowApy?: boolean | number
    /** Weekly Borrow APY including rewards */
    weeklyNetBorrowApy?: boolean | number
    /** Monthly Supply APY excluding rewards */
    monthlySupplyApy?: boolean | number
    /** Monthly Supply APY including rewards */
    monthlyNetSupplyApy?: boolean | number
    /** Monthly Borrow APY excluding rewards */
    monthlyBorrowApy?: boolean | number
    /** Monthly Borrow APY including rewards */
    monthlyNetBorrowApy?: boolean | number
    /** Quarterly Supply APY excluding rewards */
    quarterlySupplyApy?: boolean | number
    /** Quarterly Supply APY including rewards */
    quarterlyNetSupplyApy?: boolean | number
    /** Quarterly Borrow APY excluding rewards */
    quarterlyBorrowApy?: boolean | number
    /** Quarterly Borrow APY including rewards */
    quarterlyNetBorrowApy?: boolean | number
    /** Yearly Supply APY excluding rewards */
    yearlySupplyApy?: boolean | number
    /** Yearly Supply APY including rewards */
    yearlyNetSupplyApy?: boolean | number
    /** Yearly Borrow APY excluding rewards */
    yearlyBorrowApy?: boolean | number
    /** Yearly Borrow APY including rewards */
    yearlyNetBorrowApy?: boolean | number
    /** All Time Supply APY excluding rewards */
    allTimeSupplyApy?: boolean | number
    /** All Time Supply APY including rewards */
    allTimeNetSupplyApy?: boolean | number
    /** All Time Borrow APY excluding rewards */
    allTimeBorrowApy?: boolean | number
    /** All Time Borrow APY including rewards */
    allTimeNetBorrowApy?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Morpho Blue state history */
export interface MorphoBlueStateHistoryGenqlSelection{
    /** Amount of collateral in all markets, in USD for display purpose. */
    totalCollateralUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount supplied in all markets, in USD for display purpose */
    totalSupplyUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount deposited in all markets, in USD for display purpose */
    totalDepositUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount borrowed in all markets, in USD for display purpose */
    totalBorrowUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** TVL (collateral + supply - borrows), in USD for display purpose */
    tvlUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Number of unique users that have interacted with the protocol */
    userCount?: (IntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Number of markets in the protocol */
    marketCount?: (IntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Number of meta morpho vaults in the protocol */
    vaultCount?: (IntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Morpho Blue global state */
export interface MorphoBlueStateGenqlSelection{
    id?: boolean | number
    /** Last update timestamp. */
    timestamp?: boolean | number
    /** Amount of collateral in all markets, in USD for display purpose */
    totalCollateralUsd?: boolean | number
    /** Amount supplied in all markets, in USD for display purpose */
    totalSupplyUsd?: boolean | number
    /** Amount deposited in all markets, in USD for display purpose */
    totalDepositUsd?: boolean | number
    /** Amount borrowed in all markets, in USD for display purpose */
    totalBorrowUsd?: boolean | number
    /** TVL (collateral + supply - borrows), in USD for display purpose */
    tvlUsd?: boolean | number
    /** Number of unique users that have interacted with the protocol */
    userCount?: boolean | number
    /** Number of markets in the protocol */
    marketCount?: boolean | number
    /** Number of meta morpho vaults in the protocol */
    vaultCount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Morpho Blue deployment */
export interface MorphoBlueGenqlSelection{
    id?: boolean | number
    address?: boolean | number
    creationBlockNumber?: boolean | number
    chain?: ChainGenqlSelection
    /** Current state */
    state?: MorphoBlueStateGenqlSelection
    /** State history */
    historicalState?: MorphoBlueStateHistoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Oracle Feed */
export interface OracleFeedGenqlSelection{
    id?: boolean | number
    /** Feed contract address */
    address?: boolean | number
    description?: boolean | number
    vendor?: boolean | number
    pair?: boolean | number
    chain?: ChainGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Oracle */
export interface OracleGenqlSelection{
    id?: boolean | number
    /** Oracle contract address */
    address?: boolean | number
    /** Oracle type */
    type?: boolean | number
    data?: OracleDataGenqlSelection
    chain?: ChainGenqlSelection
    markets?: MarketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OracleDataGenqlSelection{
    on_MorphoChainlinkOracleData?:MorphoChainlinkOracleDataGenqlSelection,
    on_MorphoChainlinkOracleV2Data?:MorphoChainlinkOracleV2DataGenqlSelection,
    __typename?: boolean | number
}


/** Morpho chainlink oracle data */
export interface MorphoChainlinkOracleDataGenqlSelection{
    baseFeedOne?: OracleFeedGenqlSelection
    baseFeedTwo?: OracleFeedGenqlSelection
    quoteFeedOne?: OracleFeedGenqlSelection
    quoteFeedTwo?: OracleFeedGenqlSelection
    scaleFactor?: boolean | number
    vault?: boolean | number
    vaultConversionSample?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Morpho chainlink oracle v2 data */
export interface MorphoChainlinkOracleV2DataGenqlSelection{
    baseFeedOne?: OracleFeedGenqlSelection
    baseFeedTwo?: OracleFeedGenqlSelection
    quoteFeedOne?: OracleFeedGenqlSelection
    quoteFeedTwo?: OracleFeedGenqlSelection
    scaleFactor?: boolean | number
    baseVault?: boolean | number
    quoteVault?: boolean | number
    baseVaultConversionSample?: boolean | number
    quoteVaultConversionSample?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Public alllocator shared liquidity */
export interface PublicAllocatorSharedLiquidityGenqlSelection{
    id?: boolean | number
    assets?: boolean | number
    market?: MarketGenqlSelection
    vault?: VaultGenqlSelection
    allocationMarket?: MarketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Morpho Blue supply and borrow side concentrations */
export interface MarketConcentrationGenqlSelection{
    /** Borrowers Herfindahl-Hirschman Index */
    supplyHhi?: boolean | number
    /** Borrowers Herfindahl-Hirschman Index */
    borrowHhi?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Market APY aggregates */
export interface MarketApyAggregatesGenqlSelection{
    /** Average market supply APY excluding rewards */
    supplyApy?: boolean | number
    /** Average market borrow APY excluding rewards */
    borrowApy?: boolean | number
    /** Average market supply APY including rewards */
    netSupplyApy?: boolean | number
    /** Average market borrow APY including rewards */
    netBorrowApy?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** IRM curve data point */
export interface IRMCurveDataPointGenqlSelection{
    /** Market utilization rate */
    utilization?: boolean | number
    /** Supply APY at utilization rate */
    supplyApy?: boolean | number
    /** Borrow APY at utilization rate */
    borrowApy?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Bad debt realized in the market */
export interface MarketBadDebtGenqlSelection{
    /** Amount of bad debt realized in the market in underlying units. */
    underlying?: boolean | number
    /** Amount of bad debt realized in the market in USD. */
    usd?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Market oracle information */
export interface MarketOracleInfoGenqlSelection{
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Market warning */
export interface MarketWarningGenqlSelection{
    type?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Market oracle feeds */
export interface MarketOracleFeedGenqlSelection{
    baseFeedOneAddress?: boolean | number
    baseFeedOneDescription?: boolean | number
    baseFeedOneVendor?: boolean | number
    baseFeedTwoAddress?: boolean | number
    baseFeedTwoDescription?: boolean | number
    baseFeedTwoVendor?: boolean | number
    baseVault?: boolean | number
    baseVaultDescription?: boolean | number
    baseVaultVendor?: boolean | number
    baseVaultConversionSample?: boolean | number
    quoteFeedOneAddress?: boolean | number
    quoteFeedOneDescription?: boolean | number
    quoteFeedOneVendor?: boolean | number
    quoteFeedTwoAddress?: boolean | number
    quoteFeedTwoDescription?: boolean | number
    quoteFeedTwoVendor?: boolean | number
    quoteVault?: boolean | number
    quoteVaultDescription?: boolean | number
    quoteVaultVendor?: boolean | number
    quoteVaultConversionSample?: boolean | number
    scaleFactor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Morpho Blue market */
export interface MarketGenqlSelection{
    id?: boolean | number
    uniqueKey?: boolean | number
    lltv?: boolean | number
    oracleAddress?: boolean | number
    irmAddress?: boolean | number
    creationBlockNumber?: boolean | number
    creationTimestamp?: boolean | number
    creatorAddress?: boolean | number
    whitelisted?: boolean | number
    /** Amount of collateral to borrow 1 loan asset scaled to both asset decimals */
    collateralPrice?: boolean | number
    /** Underlying amount of assets that can be reallocated to this market */
    reallocatableLiquidityAssets?: boolean | number
    targetBorrowUtilization?: boolean | number
    targetWithdrawUtilization?: boolean | number
    loanAsset?: AssetGenqlSelection
    collateralAsset?: AssetGenqlSelection
    oracle?: OracleGenqlSelection
    morphoBlue?: MorphoBlueGenqlSelection
    /** Current state */
    state?: MarketStateGenqlSelection
    /** State history */
    historicalState?: MarketHistoryGenqlSelection
    /** Feeds used by the oracle if provided by the contract */
    oracleFeed?: MarketOracleFeedGenqlSelection
    /** Market oracle information */
    oracleInfo?: MarketOracleInfoGenqlSelection
    /** Market concentrations */
    concentration?: MarketConcentrationGenqlSelection
    /** Market bad debt values */
    badDebt?: MarketBadDebtGenqlSelection
    /** Market realized bad debt values */
    realizedBadDebt?: MarketBadDebtGenqlSelection
    /** Daily market APYs */
    dailyApys?: MarketApyAggregatesGenqlSelection
    /** Weekly market APYs */
    weeklyApys?: MarketApyAggregatesGenqlSelection
    /** Monthly market APYs */
    monthlyApys?: MarketApyAggregatesGenqlSelection
    /** Quarterly market APYs */
    quarterlyApys?: MarketApyAggregatesGenqlSelection
    /** Yearly market APYs */
    yearlyApys?: MarketApyAggregatesGenqlSelection
    /** All time market APYs */
    allTimeApys?: MarketApyAggregatesGenqlSelection
    /** Current IRM curve at different utilization thresholds for display purpose */
    currentIrmCurve?: (IRMCurveDataPointGenqlSelection & { __args?: {numberOfPoints?: (Scalars['Float'] | null)} })
    /** Public allocator shared liquidity available reallocations */
    publicAllocatorSharedLiquidity?: PublicAllocatorSharedLiquidityGenqlSelection
    /** Market warnings */
    warnings?: MarketWarningGenqlSelection
    /** Vaults with the market in supply queue */
    supplyingVaults?: VaultGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Public allocator flow caps */
export interface PublicAllocatorFlowCapsGenqlSelection{
    /** Public allocator flow cap in USD */
    maxIn?: boolean | number
    /** Public allocator flow cap in underlying */
    maxOut?: boolean | number
    market?: MarketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Public allocator configuration */
export interface PublicAllocatorConfigGenqlSelection{
    fee?: boolean | number
    accruedFee?: boolean | number
    admin?: boolean | number
    flowCaps?: PublicAllocatorFlowCapsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Public allocator */
export interface PublicAllocatorGenqlSelection{
    id?: boolean | number
    address?: boolean | number
    creationBlockNumber?: boolean | number
    morphoBlue?: MorphoBlueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** MetaMorpho vault allocation */
export interface VaultAllocationGenqlSelection{
    id?: boolean | number
    /** Amount of asset supplied on market, in market underlying token units */
    supplyAssets?: boolean | number
    /** Amount of asset supplied on market, in USD for display purpose. */
    supplyAssetsUsd?: boolean | number
    /** Amount of supplied shares on market. */
    supplyShares?: boolean | number
    /** Maximum amount of asset that can be supplied on market by the vault, in market underlying token units */
    supplyCap?: boolean | number
    /** Maximum amount of asset that can be supplied on market by the vault, in USD for display purpose. */
    supplyCapUsd?: boolean | number
    /** Pending maximum amount of asset that can be supplied on market by the vault, in market underlying token units */
    pendingSupplyCap?: boolean | number
    /** Pending supply cap apply timestamp */
    pendingSupplyCapValidAt?: boolean | number
    /** Pending maximum amount of asset that can be supplied on market by the vault, in USD for display purpose. */
    pendingSupplyCapUsd?: boolean | number
    /** Supply queue index */
    supplyQueueIndex?: boolean | number
    /** Withdraw queue index */
    withdrawQueueIndex?: boolean | number
    enabled?: boolean | number
    removableAt?: boolean | number
    market?: MarketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** MetaMorpho vault state rewards */
export interface VaultStateRewardGenqlSelection{
    /** Amount of reward tokens distributed to MetaMorpho vault suppliers (annualized). Scaled to reward asset decimals. */
    yearlySupplyTokens?: boolean | number
    /** Rewards APR. */
    supplyApr?: boolean | number
    /** Amount of reward tokens earned per supplied token (annualized). Scaled to reward asset decimals. */
    amountPerSuppliedToken?: boolean | number
    asset?: AssetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** MetaMorpho vault state */
export interface VaultStateGenqlSelection{
    id?: boolean | number
    /** Total value of vault holdings, in underlying token units. */
    totalAssets?: boolean | number
    /** Total value of vault holdings, in USD for display purpose. */
    totalAssetsUsd?: boolean | number
    /** Stores the total assets managed by this vault when the fee was last accrued, in underlying token units. */
    lastTotalAssets?: boolean | number
    /** Vault shares total supply. */
    totalSupply?: boolean | number
    /** Vault performance fee. */
    fee?: boolean | number
    /** Vault APY. */
    apy?: boolean | number
    /** Vault APY including rewards. */
    netApy?: boolean | number
    /** Vault curator address. */
    curator?: boolean | number
    /** Fee recipient address. */
    feeRecipient?: boolean | number
    /** Guardian address. */
    guardian?: boolean | number
    /** Pending guardian address. */
    pendingGuardian?: boolean | number
    /** Pending guardian apply timestamp. */
    pendingGuardianValidAt?: boolean | number
    /** Owner address. */
    owner?: boolean | number
    /** Pending owner address. */
    pendingOwner?: boolean | number
    /** Skim recipient address. */
    skimRecipient?: boolean | number
    /** Timelock in seconds. */
    timelock?: boolean | number
    /** Pending timelock in seconds. */
    pendingTimelock?: boolean | number
    /** Pending timelock apply timestamp. */
    pendingTimelockValidAt?: boolean | number
    /** Last update timestamp. */
    timestamp?: boolean | number
    /** Vault allocation on Morpho Blue markets. */
    allocation?: VaultAllocationGenqlSelection
    /** Vault state rewards */
    rewards?: VaultStateRewardGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Vault warning */
export interface VaultWarningGenqlSelection{
    type?: boolean | number
    level?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Vault APY aggregates */
export interface VaultApyAggregatesGenqlSelection{
    /** Average vault apy */
    apy?: boolean | number
    /** Average vault APY including rewards */
    netApy?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Vault Liquidity */
export interface VaultLiquidityGenqlSelection{
    /** Vault withdrawable liquidity in underlying. */
    underlying?: boolean | number
    /** Vault withdrawable liquidity in USD. */
    usd?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Vault allocator */
export interface VaultAllocatorGenqlSelection{
    /** Allocator adress. */
    address?: boolean | number
    /** Allocator since block number */
    blockNumber?: boolean | number
    /** Allocator since timestamp */
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Vault pending cap */
export interface VaultPendingCapGenqlSelection{
    /** Pending supply cap */
    supplyCap?: boolean | number
    /** Pending supply cap apply timestamp */
    validAt?: boolean | number
    market?: MarketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Vault metadata curator */
export interface VaultMetadataCuratorGenqlSelection{
    name?: boolean | number
    image?: boolean | number
    url?: boolean | number
    verified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Vault metadata */
export interface VaultMetadataGenqlSelection{
    description?: boolean | number
    image?: boolean | number
    forumLink?: boolean | number
    curators?: VaultMetadataCuratorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** MetaMorpho Vaults */
export interface VaultGenqlSelection{
    id?: boolean | number
    address?: boolean | number
    symbol?: boolean | number
    name?: boolean | number
    creationBlockNumber?: boolean | number
    creationTimestamp?: boolean | number
    creatorAddress?: boolean | number
    whitelisted?: boolean | number
    metadata?: VaultMetadataGenqlSelection
    asset?: AssetGenqlSelection
    chain?: ChainGenqlSelection
    state?: VaultStateGenqlSelection
    /**
     * @deprecated Use dailyApys instead.
     * Daily vault APY
     */
    dailyApy?: boolean | number
    /**
     * @deprecated Use monthlyApys instead.
     * Monthly vault APY
     */
    monthlyApy?: boolean | number
    /**
     * @deprecated Use weeklyApys instead.
     * Weekly vault APY
     */
    weeklyApy?: boolean | number
    /** Daily vault APYs */
    dailyApys?: VaultApyAggregatesGenqlSelection
    /** Weekly vault APYs */
    weeklyApys?: VaultApyAggregatesGenqlSelection
    /** Monthly vault APYs */
    monthlyApys?: VaultApyAggregatesGenqlSelection
    /** Vault liquidity */
    liquidity?: VaultLiquidityGenqlSelection
    /** Vault warnings */
    warnings?: VaultWarningGenqlSelection
    /** Public allocator configuration */
    publicAllocatorConfig?: PublicAllocatorConfigGenqlSelection
    /** Vault allocators */
    allocators?: VaultAllocatorGenqlSelection
    /** Vault pending caps */
    pendingCaps?: VaultPendingCapGenqlSelection
    historicalState?: VaultHistoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Asset yield */
export interface AssetYieldGenqlSelection{
    /** Asset yield (APR) */
    apr?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Asset */
export interface AssetGenqlSelection{
    id?: boolean | number
    /** ERC-20 token contract address */
    address?: boolean | number
    chain?: ChainGenqlSelection
    decimals?: boolean | number
    name?: boolean | number
    symbol?: boolean | number
    tags?: boolean | number
    /** Token logo URI, for display purpose */
    logoURI?: boolean | number
    /** ERC-20 token total supply */
    totalSupply?: boolean | number
    /** Current price in USD, for display purpose. */
    priceUsd?: boolean | number
    /** Historical price in USD, for display purpose */
    historicalPriceUsd?: (FloatDataPointGenqlSelection & { __args: {options: TimeseriesOptions} })
    /** Current oracle price in USD, for display purpose. */
    oraclePriceUsd?: { __args: {timestamp?: (Scalars['Float'] | null)} } | boolean | number
    /** Current spot price in ETH. */
    spotPriceEth?: { __args: {timestamp?: (Scalars['Float'] | null)} } | boolean | number
    /** Historical spot price in ETH */
    historicalSpotPriceEth?: (FloatDataPointGenqlSelection & { __args: {options: TimeseriesOptions} })
    /** MetaMorpho vault */
    vault?: VaultGenqlSelection
    /** Asset yield */
    yield?: AssetYieldGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedAssetsGenqlSelection{
    items?: AssetGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Market position */
export interface MarketPositionGenqlSelection{
    id?: boolean | number
    /** Amount of loan asset supplied, in market shares. */
    supplyShares?: boolean | number
    /** Amount of loan asset supplied, in underlying token units. */
    supplyAssets?: boolean | number
    /** Amount of loan asset supplied, in USD for display purpose. */
    supplyAssetsUsd?: boolean | number
    /** Amount of loan asset borrowed, in market shares. */
    borrowShares?: boolean | number
    /** Amount of loan asset borrowed, in underlying token units. */
    borrowAssets?: boolean | number
    /** Amount of loan asset borrowed, in USD for display purpose. */
    borrowAssetsUsd?: boolean | number
    /** Amount of collateral asset deposited on the market, in underlying token units. */
    collateral?: boolean | number
    /** Amount of collateral asset deposited on the market, in USD for display purpose. */
    collateralUsd?: boolean | number
    /** Health factor of the position, computed as collateral value divided by borrow value. */
    healthFactor?: boolean | number
    user?: UserGenqlSelection
    market?: MarketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** MetaMorpho vault position */
export interface VaultPositionGenqlSelection{
    id?: boolean | number
    /** Amount of vault shares */
    shares?: boolean | number
    /** Value of vault shares held, in underlying token units. */
    assets?: boolean | number
    /** Value of vault shares held, in USD for display purpose. */
    assetsUsd?: boolean | number
    user?: UserGenqlSelection
    vault?: VaultGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** User */
export interface UserGenqlSelection{
    id?: boolean | number
    address?: boolean | number
    tag?: boolean | number
    chain?: ChainGenqlSelection
    marketPositions?: MarketPositionGenqlSelection
    vaultPositions?: VaultPositionGenqlSelection
    transactions?: TransactionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Transaction */
export interface TransactionGenqlSelection{
    id?: boolean | number
    timestamp?: boolean | number
    hash?: boolean | number
    logIndex?: boolean | number
    blockNumber?: boolean | number
    type?: boolean | number
    data?: TransactionDataGenqlSelection
    chain?: ChainGenqlSelection
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TransactionDataGenqlSelection{
    on_VaultTransactionData?:VaultTransactionDataGenqlSelection,
    on_MarketCollateralTransferTransactionData?:MarketCollateralTransferTransactionDataGenqlSelection,
    on_MarketTransferTransactionData?:MarketTransferTransactionDataGenqlSelection,
    on_MarketLiquidationTransactionData?:MarketLiquidationTransactionDataGenqlSelection,
    __typename?: boolean | number
}


/** Meta Morpho vault transfer transaction data */
export interface VaultTransactionDataGenqlSelection{
    shares?: boolean | number
    assets?: boolean | number
    assetsUsd?: boolean | number
    vault?: VaultGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Market collateral transfer transaction data */
export interface MarketCollateralTransferTransactionDataGenqlSelection{
    assets?: boolean | number
    assetsUsd?: boolean | number
    market?: MarketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Market transfer transaction data */
export interface MarketTransferTransactionDataGenqlSelection{
    shares?: boolean | number
    assets?: boolean | number
    assetsUsd?: boolean | number
    market?: MarketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Market liquidation transaction data */
export interface MarketLiquidationTransactionDataGenqlSelection{
    repaidAssets?: boolean | number
    repaidAssetsUsd?: boolean | number
    repaidShares?: boolean | number
    seizedAssets?: boolean | number
    seizedAssetsUsd?: boolean | number
    badDebtShares?: boolean | number
    badDebtAssets?: boolean | number
    badDebtAssetsUsd?: boolean | number
    liquidator?: boolean | number
    market?: MarketGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedTransactionsGenqlSelection{
    items?: TransactionGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedMetaMorphosGenqlSelection{
    items?: VaultGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** MetaMorpho vault allocation history */
export interface VaultAllocationHistoryGenqlSelection{
    market?: MarketGenqlSelection
    /** Amount of asset supplied on market, in market underlying token units */
    supplyAssets?: (BigIntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Amount of asset supplied on market, in USD for display purpose. */
    supplyAssetsUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Maximum amount of asset that can be supplied on market by the vault, in market underlying token units */
    supplyCap?: (BigIntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Maximum amount of asset that can be supplied on market by the vault, in USD for display purpose. */
    supplyCapUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Meta-Morpho vault history */
export interface VaultHistoryGenqlSelection{
    /** Total value of vault holdings, in underlying token units. */
    totalAssets?: (BigIntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Total value of vault holdings, in USD for display purpose. */
    totalAssetsUsd?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Vault shares total supply. */
    totalSupply?: (BigIntDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Vault performance fee. */
    fee?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Vault APY. */
    apy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Vault APY including rewards. */
    netApy?: (FloatDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Vault curator. */
    curator?: (AddressDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Fee recipient. */
    feeRecipient?: (AddressDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Guardian. */
    guardian?: (AddressDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Owner. */
    owner?: (AddressDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Skim recipient. */
    skimRecipient?: (AddressDataPointGenqlSelection & { __args?: {options?: (TimeseriesOptions | null)} })
    /** Vault allocation on Morpho Blue markets. */
    allocation?: VaultAllocationHistoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedMetaMorphoPositionsGenqlSelection{
    items?: VaultPositionGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedUsersGenqlSelection{
    items?: UserGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedMarketsGenqlSelection{
    items?: MarketGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedMarketPositionsGenqlSelection{
    items?: MarketPositionGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Chain synchronization state */
export interface ChainSynchronizationStateGenqlSelection{
    id?: boolean | number
    key?: boolean | number
    blockNumber?: boolean | number
    chain?: ChainGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedMorphoBlueGenqlSelection{
    items?: MorphoBlueGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Market oracle accuracy versus spot price */
export interface MarketOracleAccuracyGenqlSelection{
    market?: MarketGenqlSelection
    /** Average oracle/spot prices deviation */
    averagePercentDifference?: boolean | number
    /** Maximum oracle/spot prices deviation */
    maxPercentDifference?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Amount of collateral at risk of liquidation at collateralPriceRatio * oracle price */
export interface CollateralAtRiskDataPointGenqlSelection{
    collateralPriceRatio?: boolean | number
    collateralAssets?: boolean | number
    collateralUsd?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Market collateral at risk of liquidation */
export interface MarketCollateralAtRiskGenqlSelection{
    market?: MarketGenqlSelection
    /** Total collateral at risk of liquidation at certain prices thresholds. */
    collateralAtRisk?: CollateralAtRiskDataPointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Vault reallocate */
export interface VaultReallocateGenqlSelection{
    id?: boolean | number
    timestamp?: boolean | number
    hash?: boolean | number
    logIndex?: boolean | number
    blockNumber?: boolean | number
    caller?: boolean | number
    shares?: boolean | number
    assets?: boolean | number
    type?: boolean | number
    market?: MarketGenqlSelection
    vault?: VaultGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedVaultReallocatesGenqlSelection{
    items?: VaultReallocateGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Global search results */
export interface SearchResultsGenqlSelection{
    markets?: MarketGenqlSelection
    vaults?: VaultGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedPublicAllocatorGenqlSelection{
    items?: PublicAllocatorGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Public alllocator reallocate */
export interface PublicAllocatorReallocateGenqlSelection{
    id?: boolean | number
    timestamp?: boolean | number
    hash?: boolean | number
    logIndex?: boolean | number
    blockNumber?: boolean | number
    sender?: boolean | number
    assets?: boolean | number
    type?: boolean | number
    market?: MarketGenqlSelection
    vault?: VaultGenqlSelection
    publicAllocator?: PublicAllocatorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedPublicAllocatorReallocatesGenqlSelection{
    items?: PublicAllocatorReallocateGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedOraclesGenqlSelection{
    items?: OracleGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginatedOracleFeedsGenqlSelection{
    items?: OracleFeedGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    chainSynchronizationStates?: ChainSynchronizationStateGenqlSelection
    chainSynchronizationState?: (ChainSynchronizationStateGenqlSelection & { __args: {key: Scalars['String'], chainId?: Scalars['Int']} })
    chain?: (ChainGenqlSelection & { __args: {id: Scalars['Int']} })
    chains?: ChainGenqlSelection
    asset?: (AssetGenqlSelection & { __args: {id: Scalars['String']} })
    assetByAddress?: (AssetGenqlSelection & { __args: {address: Scalars['String'], chainId?: (Scalars['Int'] | null)} })
    assets?: (PaginatedAssetsGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), where?: (AssetsFilters | null)} })
    transaction?: (TransactionGenqlSelection & { __args: {id: Scalars['String']} })
    transactionByHash?: (TransactionGenqlSelection & { __args: {hash: Scalars['String'], chainId?: (Scalars['Int'] | null)} })
    transactions?: (PaginatedTransactionsGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), orderBy?: (TransactionsOrderBy | null), orderDirection?: (OrderDirection | null), where?: (TransactionFilters | null)} })
    user?: (UserGenqlSelection & { __args: {id: Scalars['String']} })
    userByAddress?: (UserGenqlSelection & { __args: {address: Scalars['String'], chainId?: (Scalars['Int'] | null)} })
    users?: (PaginatedUsersGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), orderBy?: (UsersOrderBy | null), orderDirection?: (OrderDirection | null), where?: (UsersFilters | null)} })
    marketCollateralAtRisk?: (MarketCollateralAtRiskGenqlSelection & { __args: {uniqueKey: Scalars['String'], chainId?: (Scalars['Int'] | null), numberOfPoints?: (Scalars['Float'] | null)} })
    market?: (MarketGenqlSelection & { __args: {id: Scalars['String']} })
    marketByUniqueKey?: (MarketGenqlSelection & { __args: {uniqueKey: Scalars['String'], chainId?: (Scalars['Int'] | null)} })
    marketAverageApys?: (MarketApyAggregatesGenqlSelection & { __args: {uniqueKey: Scalars['String'], chainId?: (Scalars['Int'] | null), startTimestamp: Scalars['Float']} })
    markets?: (PaginatedMarketsGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), orderBy?: (MarketOrderBy | null), orderDirection?: (OrderDirection | null), where?: (MarketFilters | null)} })
    marketOracleAccuracy?: (MarketOracleAccuracyGenqlSelection & { __args: {marketId: Scalars['String'], options?: (TimeseriesOptions | null)} })
    morphoBlue?: (MorphoBlueGenqlSelection & { __args: {id: Scalars['String']} })
    morphoBlueByAddress?: (MorphoBlueGenqlSelection & { __args: {address: Scalars['String'], chainId?: (Scalars['Int'] | null)} })
    morphoBlues?: (PaginatedMorphoBlueGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), orderBy?: (MorphoBlueOrderBy | null), orderDirection?: (OrderDirection | null), where?: (MorphoBlueFilters | null)} })
    marketPosition?: (MarketPositionGenqlSelection & { __args: {userAddress: Scalars['String'], marketUniqueKey: Scalars['String'], chainId?: (Scalars['Int'] | null)} })
    marketPositions?: (PaginatedMarketPositionsGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), orderBy?: (MarketPositionOrderBy | null), orderDirection?: (OrderDirection | null), where?: (MarketPositionFilters | null)} })
    oracleFeedByAddress?: (OracleFeedGenqlSelection & { __args: {address: Scalars['String'], chainId?: (Scalars['Int'] | null)} })
    oracleFeeds?: (PaginatedOracleFeedsGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), where?: (OracleFeedsFilters | null)} })
    oracleByAddress?: (OracleGenqlSelection & { __args: {address: Scalars['String'], chainId?: (Scalars['Int'] | null)} })
    oracles?: (PaginatedOraclesGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), where?: (OraclesFilters | null)} })
    publicAllocator?: (PublicAllocatorGenqlSelection & { __args: {address: Scalars['String'], chainId?: (Scalars['Int'] | null)} })
    publicAllocators?: (PaginatedPublicAllocatorGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), orderBy?: (PublicAllocatorOrderBy | null), orderDirection?: (OrderDirection | null), where?: (PublicAllocatorFilters | null)} })
    publicAllocatorReallocates?: (PaginatedPublicAllocatorReallocatesGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), orderBy?: (PublicAllocatorReallocateOrderBy | null), orderDirection?: (OrderDirection | null), where?: (PublicallocatorReallocateFilters | null)} })
    search?: (SearchResultsGenqlSelection & { __args: {search: Scalars['String'], marketOrderBy?: (MarketOrderBy | null), vaultOrderBy?: (VaultOrderBy | null), numberOfResults?: (Scalars['Int'] | null), 
    /** Filter by chain id */
    chainId_in?: (Scalars['Int'][] | null)} })
    vault?: (VaultGenqlSelection & { __args: {id: Scalars['String']} })
    vaultByAddress?: (VaultGenqlSelection & { __args: {address: Scalars['String'], chainId?: (Scalars['Int'] | null)} })
    vaults?: (PaginatedMetaMorphosGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), orderBy?: (VaultOrderBy | null), orderDirection?: (OrderDirection | null), where?: (VaultFilters | null)} })
    vaultPosition?: (VaultPositionGenqlSelection & { __args: {userAddress: Scalars['String'], vaultAddress: Scalars['String'], chainId?: (Scalars['Int'] | null)} })
    vaultPositions?: (PaginatedMetaMorphoPositionsGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), orderBy?: (VaultPositionOrderBy | null), orderDirection?: (OrderDirection | null), where?: (VaultPositionFilters | null)} })
    vaultReallocates?: (PaginatedVaultReallocatesGenqlSelection & { __args?: {
    /** Number of items requested */
    first?: (Scalars['Int'] | null), 
    /** Number of items skipped */
    skip?: (Scalars['Int'] | null), orderBy?: (VaultReallocateOrderBy | null), orderDirection?: (OrderDirection | null), where?: (VaultReallocateFilters | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AssetsFilters {search?: (Scalars['String'] | null),
/** Filter by asset id */
id_in?: (Scalars['String'][] | null),
/** Filter by token symbol */
symbol_in?: (Scalars['String'][] | null),
/** Filter by token contract address. Case insensitive. */
address_in?: (Scalars['String'][] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null),
/** Filter by token's tags  */
tags_in?: (Scalars['String'][] | null)}


/** Filtering options for transactions. AND operator is used for multiple filters, while OR operator is used for multiple values in the same filter. */
export interface TransactionFilters {search?: (Scalars['String'] | null),
/** Filter by asset id */
assetId_in?: (Scalars['String'][] | null),
/** Filter by token symbol. */
assetSymbol_in?: (Scalars['String'][] | null),
/** Filter by token contract address. Case insensitive. */
assetAddress_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho vault id */
vaultId_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho vault address */
vaultAddress_in?: (Scalars['String'][] | null),
/** Filter by market id */
marketId_in?: (Scalars['String'][] | null),
/** Filter by market unique key */
marketUniqueKey_in?: (Scalars['String'][] | null),
/** Filter by user address. Case insensitive. */
userAddress_in?: (Scalars['String'][] | null),
/** Filter by user id */
userId_in?: (Scalars['String'][] | null),
/** Filter by transaction type */
type_in?: (TransactionType[] | null),
/** Filter by transaction hash */
hash?: (Scalars['String'] | null),
/** Filter by greater than or equal to given timestamp */
timestamp_gte?: (Scalars['Int'] | null),
/** Filter by lower than or equal to given timestamp */
timestamp_lte?: (Scalars['Int'] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null),
/** Filter by greater than or equal to given amount of MetaMorpho vault shares */
shares_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of MetaMorpho vault shares */
shares_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given amount of market assets, in underlying token units */
assets_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of market assets, in underlying token units */
assets_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given amount of market assets, in USD */
assetsUsd_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given amount of market assets, in USD */
assetsUsd_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given amount of repaid shares. Applies exclusively to MarketLiquidation transactions. */
repaidAssets_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of repaid shares. Applies exclusively to MarketLiquidation transactions. */
repaidAssets_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given amount of repaid shares, in USD. Applies exclusively to MarketLiquidation transactions. */
repaidAssetsUsd_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given amount of repaid shares, in USD. Applies exclusively to MarketLiquidation transactions. */
repaidAssetsUsd_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given amount of repaid shares. Applies exclusively to MarketLiquidation transactions. */
repaidShares_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of repaid shares. Applies exclusively to MarketLiquidation transactions. */
repaidShares_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given amount of seized shares. Applies exclusively to MarketLiquidation transactions. */
seizedAssets_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of seized shares. Applies exclusively to MarketLiquidation transactions. */
seizedAssets_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given amount of seized shares, in USD. Applies exclusively to MarketLiquidation transactions. */
seizedAssetsUsd_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given amount of seized shares, in USD. Applies exclusively to MarketLiquidation transactions. */
seizedAssetsUsd_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given amount of bad debt shares. Applies exclusively to MarketLiquidation transactions. */
badDebtShares_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of bad debt shares. Applies exclusively to MarketLiquidation transactions. */
badDebtShares_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given amount of bad debt assets. Applies exclusively to MarketLiquidation transactions. */
badDebtAssets_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of bad debt assets. Applies exclusively to MarketLiquidation transactions. */
badDebtAssets_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given amount of bad debt assets, in USD. Applies exclusively to MarketLiquidation transactions. */
badDebtAssetsUsd_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given amount of bad debt assets, in USD. Applies exclusively to MarketLiquidation transactions. */
badDebtAssetsUsd_lte?: (Scalars['Float'] | null),
/** Filter by liquidator address. Applies exclusively to MarketLiquidation transactions. */
liquidator_in?: (Scalars['String'][] | null)}


/** Filtering options for users. AND operator is used for multiple filters, while OR operator is used for multiple values in the same filter. */
export interface UsersFilters {search?: (Scalars['String'] | null),
/** Filter by user address. Case insensitive. */
address_in?: (Scalars['String'][] | null),
/** Filter by user id */
id_in?: (Scalars['String'][] | null),
/** Filter by asset id */
assetId_in?: (Scalars['String'][] | null),
/** Filter by token symbol */
assetSymbol_in?: (Scalars['String'][] | null),
/** Filter by token contract address. Case insensitive. */
assetAddress_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho vault id. */
vaultId_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho vault address. Case insensitive. */
vaultAddress_in?: (Scalars['String'][] | null),
/** Filter by market id */
marketId_in?: (Scalars['String'][] | null),
/** Filter by market unique key */
marketUniqueKey_in?: (Scalars['String'][] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null)}


/** Filtering options for markets. AND operator is used for multiple filters, while OR operator is used for multiple values in the same filter. */
export interface MarketFilters {search?: (Scalars['String'] | null),
/** Filter by market id */
id_in?: (Scalars['String'][] | null),whitelisted?: (Scalars['Boolean'] | null),countryCode?: (Scalars['String'] | null),isIdle?: (Scalars['Boolean'] | null),
/** Filter by market unique key */
uniqueKey_in?: (Scalars['String'][] | null),
/** Filter by loan asset tags. */
loanAssetTags_in?: (Scalars['String'][] | null),
/** Filter by collateral asset tags. */
collateralAssetTags_in?: (Scalars['String'][] | null),
/** Filter by market oracle address. Case insensitive. */
oracleAddress_in?: (Scalars['String'][] | null),
/** Filter by market irm address */
irmAddress_in?: (Scalars['String'][] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null),
/** Filter by collateral asset address. Case insensitive. */
collateralAssetAddress_in?: (Scalars['String'][] | null),
/** Filter by collateral asset id */
collateralAssetId_in?: (Scalars['String'][] | null),
/** Filter by loan asset address. Case insensitive. */
loanAssetAddress_in?: (Scalars['String'][] | null),
/** Filter by loan asset id */
loanAssetId_in?: (Scalars['String'][] | null),
/** Filter by greater than or equal to given lltv */
lltv_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given lltv */
lltv_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given borrow asset amount, in underlying token units. */
borrowAssets_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given borrow asset amount, in underlying token units. */
borrowAssets_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given borrow asset amount, in USD. */
borrowAssetsUsd_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given borrow asset amount, in USD. */
borrowAssetsUsd_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given supply asset amount, in underlying token units. */
supplyAssets_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given supply asset amount, in underlying token units. */
supplyAssets_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given supply asset amount, in USD. */
supplyAssetsUsd_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given supply asset amount, in USD. */
supplyAssetsUsd_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given borrow shares amount */
borrowShares_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given borrow shares amount */
borrowShares_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given supply shares amount */
supplyShares_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given borrow shares amount */
supplyShares_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given utilization rate */
utilization_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given utilization rate */
utilization_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given rate at target utilization */
rateAtUTarget_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given rate at target utilization */
rateAtUTarget_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given supply APY */
supplyApy_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given supply APY */
supplyApy_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given net supply APY */
netSupplyApy_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given net supply APY */
netSupplyApy_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given borrow APY */
borrowApy_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given borrow APY */
borrowApy_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given net borrow APY */
netBorrowApy_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given net borrow APY */
netBorrowApy_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given fee rate */
fee_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given fee rate */
fee_lte?: (Scalars['Float'] | null)}


/** Filtering options for morpho blue deployments. */
export interface MorphoBlueFilters {
/** Filter by morpho blue id */
id_in?: (Scalars['String'][] | null),
/** Filter by deployment address. Case insensitive. */
address_in?: (Scalars['String'][] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null)}


/** Filtering options for market positions. AND operator is used for multiple filters, while OR operator is used for multiple values in the same filter. */
export interface MarketPositionFilters {search?: (Scalars['String'] | null),
/** Filter by market id */
marketId_in?: (Scalars['String'][] | null),
/** Filter by market unique key */
marketUniqueKey_in?: (Scalars['String'][] | null),
/** Filter by user id */
userId_in?: (Scalars['String'][] | null),
/** Filter by user address. Case insensitive. */
userAddress_in?: (Scalars['String'][] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null),
/** Filter by greater than or equal to given health factor */
healthFactor_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given health factor */
healthFactor_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given supply shares */
supplyShares_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given supply shares */
supplyShares_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given borrow shares */
borrowShares_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given borrow shares */
borrowShares_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given collateral amount, in underlying token units. */
collateral_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given collateral amount, in underlying token units. */
collateral_lte?: (Scalars['BigInt'] | null)}

export interface OracleFeedsFilters {
/** Filter by feed contract address. Case insensitive. */
address_in?: (Scalars['String'][] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null)}

export interface OraclesFilters {
/** Filter by oracle contract address. Case insensitive. */
address_in?: (Scalars['String'][] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null)}


/** Filtering options for public allocators. */
export interface PublicAllocatorFilters {
/** Filter by ids */
id_in?: (Scalars['String'][] | null),
/** Filter by address. Case insensitive. */
address_in?: (Scalars['String'][] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null)}


/** Filtering options for public allocator reallocates. AND operator is used for multiple filters, while OR operator is used for multiple values in the same filter. */
export interface PublicallocatorReallocateFilters {
/** Filter by MetaMorpho vault id */
vaultId_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho vault address */
vaultAddress_in?: (Scalars['String'][] | null),
/** Filter by market id */
marketId_in?: (Scalars['String'][] | null),
/** Filter by market unique key */
marketUniqueKey_in?: (Scalars['String'][] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null),
/** Filter by reallocate type */
type_in?: (PublicAllocatorReallocateType[] | null),
/** Filter by greater than or equal to given timestamp */
timestamp_gte?: (Scalars['Int'] | null),
/** Filter by lower than or equal to given timestamp */
timestamp_lte?: (Scalars['Int'] | null),
/** Filter by greater than or equal to given amount of market assets, in underlying token units */
assets_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of market assets, in underlying token units */
assets_lte?: (Scalars['BigInt'] | null)}

export interface VaultFilters {search?: (Scalars['String'] | null),whitelisted?: (Scalars['Boolean'] | null),countryCode?: (Scalars['String'] | null),
/** Filter by MetaMorpho vault id */
id_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho vault address */
address_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho creator address */
creatorAddress_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho current owner address */
ownerAddress_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho current curator address */
curatorAddress_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho vault symbol */
symbol_in?: (Scalars['String'][] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null),
/** Filter by asset id */
assetId_in?: (Scalars['String'][] | null),
/** Filter by asset contract address */
assetAddress_in?: (Scalars['String'][] | null),
/** Filter by asset symbol */
assetSymbol_in?: (Scalars['String'][] | null),
/** Filter by markets in which the vault has positions. */
marketUniqueKey_in?: (Scalars['String'][] | null),
/** Filter by greater than or equal to given APY. */
apy_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given APY. */
apy_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given net APY. */
netApy_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given net APY. */
netApy_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given fee rate. */
fee_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given fee rate. */
fee_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given amount of total assets, in underlying token units. */
totalAssets_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of total assets, in underlying token units. */
totalAssets_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given amount of total assets, in USD. */
totalAssetsUsd_gte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given amount of total assets, in USD. */
totalAssetsUsd_lte?: (Scalars['Float'] | null),
/** Filter by greater than or equal to given amount of shares total supply. */
totalSupply_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of shares total supply. */
totalSupply_lte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given public allocator fee. */
publicAllocatorFee_lte?: (Scalars['Float'] | null),
/** Filter by lower than or equal to given public allocator fee in dollar. */
publicAllocatorFeeUsd_lte?: (Scalars['Float'] | null)}


/** Filtering options for vault positions. AND operator is used for multiple filters, while OR operator is used for multiple values in the same filter. */
export interface VaultPositionFilters {search?: (Scalars['String'] | null),
/** Filter by MetaMorpho vault id */
vaultId_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho vault address */
vaultAddress_in?: (Scalars['String'][] | null),
/** Filter by user address */
userAddress_in?: (Scalars['String'][] | null),
/** Filter by user id */
userId_in?: (Scalars['String'][] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null),
/** Filter by greater than or equal to given amount of vault shares. */
shares_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of vault shares. */
shares_lte?: (Scalars['BigInt'] | null)}


/** Filtering options for vault reallocates. AND operator is used for multiple filters, while OR operator is used for multiple values in the same filter. */
export interface VaultReallocateFilters {
/** Filter by MetaMorpho vault id */
vaultId_in?: (Scalars['String'][] | null),
/** Filter by MetaMorpho vault address */
vaultAddress_in?: (Scalars['String'][] | null),
/** Filter by market id */
marketId_in?: (Scalars['String'][] | null),
/** Filter by market unique key */
marketUniqueKey_in?: (Scalars['String'][] | null),
/** Filter by reallocate type */
type_in?: (VaultReallocateType[] | null),
/** Filter by chain id */
chainId_in?: (Scalars['Int'][] | null),
/** Filter by greater than or equal to given timestamp */
timestamp_gte?: (Scalars['Int'] | null),
/** Filter by lower than or equal to given timestamp */
timestamp_lte?: (Scalars['Int'] | null),
/** Filter by greater than or equal to given amount of market shares */
shares_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of market shares */
shares_lte?: (Scalars['BigInt'] | null),
/** Filter by greater than or equal to given amount of market assets, in underlying token units */
assets_gte?: (Scalars['BigInt'] | null),
/** Filter by lower than or equal to given amount of market assets, in underlying token units */
assets_lte?: (Scalars['BigInt'] | null)}


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const BigIntDataPoint_possibleTypes: string[] = ['BigIntDataPoint']
    export const isBigIntDataPoint = (obj?: { __typename?: any } | null): obj is BigIntDataPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBigIntDataPoint"')
      return BigIntDataPoint_possibleTypes.includes(obj.__typename)
    }
    


    const FloatDataPoint_possibleTypes: string[] = ['FloatDataPoint']
    export const isFloatDataPoint = (obj?: { __typename?: any } | null): obj is FloatDataPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFloatDataPoint"')
      return FloatDataPoint_possibleTypes.includes(obj.__typename)
    }
    


    const IntDataPoint_possibleTypes: string[] = ['IntDataPoint']
    export const isIntDataPoint = (obj?: { __typename?: any } | null): obj is IntDataPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntDataPoint"')
      return IntDataPoint_possibleTypes.includes(obj.__typename)
    }
    


    const AddressDataPoint_possibleTypes: string[] = ['AddressDataPoint']
    export const isAddressDataPoint = (obj?: { __typename?: any } | null): obj is AddressDataPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddressDataPoint"')
      return AddressDataPoint_possibleTypes.includes(obj.__typename)
    }
    


    const Chain_possibleTypes: string[] = ['Chain']
    export const isChain = (obj?: { __typename?: any } | null): obj is Chain => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChain"')
      return Chain_possibleTypes.includes(obj.__typename)
    }
    


    const MarketHistory_possibleTypes: string[] = ['MarketHistory']
    export const isMarketHistory = (obj?: { __typename?: any } | null): obj is MarketHistory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketHistory"')
      return MarketHistory_possibleTypes.includes(obj.__typename)
    }
    


    const MarketStateReward_possibleTypes: string[] = ['MarketStateReward']
    export const isMarketStateReward = (obj?: { __typename?: any } | null): obj is MarketStateReward => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketStateReward"')
      return MarketStateReward_possibleTypes.includes(obj.__typename)
    }
    


    const MarketState_possibleTypes: string[] = ['MarketState']
    export const isMarketState = (obj?: { __typename?: any } | null): obj is MarketState => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketState"')
      return MarketState_possibleTypes.includes(obj.__typename)
    }
    


    const MorphoBlueStateHistory_possibleTypes: string[] = ['MorphoBlueStateHistory']
    export const isMorphoBlueStateHistory = (obj?: { __typename?: any } | null): obj is MorphoBlueStateHistory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMorphoBlueStateHistory"')
      return MorphoBlueStateHistory_possibleTypes.includes(obj.__typename)
    }
    


    const MorphoBlueState_possibleTypes: string[] = ['MorphoBlueState']
    export const isMorphoBlueState = (obj?: { __typename?: any } | null): obj is MorphoBlueState => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMorphoBlueState"')
      return MorphoBlueState_possibleTypes.includes(obj.__typename)
    }
    


    const MorphoBlue_possibleTypes: string[] = ['MorphoBlue']
    export const isMorphoBlue = (obj?: { __typename?: any } | null): obj is MorphoBlue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMorphoBlue"')
      return MorphoBlue_possibleTypes.includes(obj.__typename)
    }
    


    const OracleFeed_possibleTypes: string[] = ['OracleFeed']
    export const isOracleFeed = (obj?: { __typename?: any } | null): obj is OracleFeed => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOracleFeed"')
      return OracleFeed_possibleTypes.includes(obj.__typename)
    }
    


    const Oracle_possibleTypes: string[] = ['Oracle']
    export const isOracle = (obj?: { __typename?: any } | null): obj is Oracle => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOracle"')
      return Oracle_possibleTypes.includes(obj.__typename)
    }
    


    const OracleData_possibleTypes: string[] = ['MorphoChainlinkOracleData','MorphoChainlinkOracleV2Data']
    export const isOracleData = (obj?: { __typename?: any } | null): obj is OracleData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOracleData"')
      return OracleData_possibleTypes.includes(obj.__typename)
    }
    


    const MorphoChainlinkOracleData_possibleTypes: string[] = ['MorphoChainlinkOracleData']
    export const isMorphoChainlinkOracleData = (obj?: { __typename?: any } | null): obj is MorphoChainlinkOracleData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMorphoChainlinkOracleData"')
      return MorphoChainlinkOracleData_possibleTypes.includes(obj.__typename)
    }
    


    const MorphoChainlinkOracleV2Data_possibleTypes: string[] = ['MorphoChainlinkOracleV2Data']
    export const isMorphoChainlinkOracleV2Data = (obj?: { __typename?: any } | null): obj is MorphoChainlinkOracleV2Data => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMorphoChainlinkOracleV2Data"')
      return MorphoChainlinkOracleV2Data_possibleTypes.includes(obj.__typename)
    }
    


    const PublicAllocatorSharedLiquidity_possibleTypes: string[] = ['PublicAllocatorSharedLiquidity']
    export const isPublicAllocatorSharedLiquidity = (obj?: { __typename?: any } | null): obj is PublicAllocatorSharedLiquidity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublicAllocatorSharedLiquidity"')
      return PublicAllocatorSharedLiquidity_possibleTypes.includes(obj.__typename)
    }
    


    const MarketConcentration_possibleTypes: string[] = ['MarketConcentration']
    export const isMarketConcentration = (obj?: { __typename?: any } | null): obj is MarketConcentration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketConcentration"')
      return MarketConcentration_possibleTypes.includes(obj.__typename)
    }
    


    const MarketApyAggregates_possibleTypes: string[] = ['MarketApyAggregates']
    export const isMarketApyAggregates = (obj?: { __typename?: any } | null): obj is MarketApyAggregates => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketApyAggregates"')
      return MarketApyAggregates_possibleTypes.includes(obj.__typename)
    }
    


    const IRMCurveDataPoint_possibleTypes: string[] = ['IRMCurveDataPoint']
    export const isIRMCurveDataPoint = (obj?: { __typename?: any } | null): obj is IRMCurveDataPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIRMCurveDataPoint"')
      return IRMCurveDataPoint_possibleTypes.includes(obj.__typename)
    }
    


    const MarketBadDebt_possibleTypes: string[] = ['MarketBadDebt']
    export const isMarketBadDebt = (obj?: { __typename?: any } | null): obj is MarketBadDebt => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketBadDebt"')
      return MarketBadDebt_possibleTypes.includes(obj.__typename)
    }
    


    const MarketOracleInfo_possibleTypes: string[] = ['MarketOracleInfo']
    export const isMarketOracleInfo = (obj?: { __typename?: any } | null): obj is MarketOracleInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketOracleInfo"')
      return MarketOracleInfo_possibleTypes.includes(obj.__typename)
    }
    


    const MarketWarning_possibleTypes: string[] = ['MarketWarning']
    export const isMarketWarning = (obj?: { __typename?: any } | null): obj is MarketWarning => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketWarning"')
      return MarketWarning_possibleTypes.includes(obj.__typename)
    }
    


    const MarketOracleFeed_possibleTypes: string[] = ['MarketOracleFeed']
    export const isMarketOracleFeed = (obj?: { __typename?: any } | null): obj is MarketOracleFeed => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketOracleFeed"')
      return MarketOracleFeed_possibleTypes.includes(obj.__typename)
    }
    


    const Market_possibleTypes: string[] = ['Market']
    export const isMarket = (obj?: { __typename?: any } | null): obj is Market => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarket"')
      return Market_possibleTypes.includes(obj.__typename)
    }
    


    const PublicAllocatorFlowCaps_possibleTypes: string[] = ['PublicAllocatorFlowCaps']
    export const isPublicAllocatorFlowCaps = (obj?: { __typename?: any } | null): obj is PublicAllocatorFlowCaps => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublicAllocatorFlowCaps"')
      return PublicAllocatorFlowCaps_possibleTypes.includes(obj.__typename)
    }
    


    const PublicAllocatorConfig_possibleTypes: string[] = ['PublicAllocatorConfig']
    export const isPublicAllocatorConfig = (obj?: { __typename?: any } | null): obj is PublicAllocatorConfig => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublicAllocatorConfig"')
      return PublicAllocatorConfig_possibleTypes.includes(obj.__typename)
    }
    


    const PublicAllocator_possibleTypes: string[] = ['PublicAllocator']
    export const isPublicAllocator = (obj?: { __typename?: any } | null): obj is PublicAllocator => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublicAllocator"')
      return PublicAllocator_possibleTypes.includes(obj.__typename)
    }
    


    const VaultAllocation_possibleTypes: string[] = ['VaultAllocation']
    export const isVaultAllocation = (obj?: { __typename?: any } | null): obj is VaultAllocation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultAllocation"')
      return VaultAllocation_possibleTypes.includes(obj.__typename)
    }
    


    const VaultStateReward_possibleTypes: string[] = ['VaultStateReward']
    export const isVaultStateReward = (obj?: { __typename?: any } | null): obj is VaultStateReward => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultStateReward"')
      return VaultStateReward_possibleTypes.includes(obj.__typename)
    }
    


    const VaultState_possibleTypes: string[] = ['VaultState']
    export const isVaultState = (obj?: { __typename?: any } | null): obj is VaultState => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultState"')
      return VaultState_possibleTypes.includes(obj.__typename)
    }
    


    const VaultWarning_possibleTypes: string[] = ['VaultWarning']
    export const isVaultWarning = (obj?: { __typename?: any } | null): obj is VaultWarning => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultWarning"')
      return VaultWarning_possibleTypes.includes(obj.__typename)
    }
    


    const VaultApyAggregates_possibleTypes: string[] = ['VaultApyAggregates']
    export const isVaultApyAggregates = (obj?: { __typename?: any } | null): obj is VaultApyAggregates => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultApyAggregates"')
      return VaultApyAggregates_possibleTypes.includes(obj.__typename)
    }
    


    const VaultLiquidity_possibleTypes: string[] = ['VaultLiquidity']
    export const isVaultLiquidity = (obj?: { __typename?: any } | null): obj is VaultLiquidity => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultLiquidity"')
      return VaultLiquidity_possibleTypes.includes(obj.__typename)
    }
    


    const VaultAllocator_possibleTypes: string[] = ['VaultAllocator']
    export const isVaultAllocator = (obj?: { __typename?: any } | null): obj is VaultAllocator => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultAllocator"')
      return VaultAllocator_possibleTypes.includes(obj.__typename)
    }
    


    const VaultPendingCap_possibleTypes: string[] = ['VaultPendingCap']
    export const isVaultPendingCap = (obj?: { __typename?: any } | null): obj is VaultPendingCap => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultPendingCap"')
      return VaultPendingCap_possibleTypes.includes(obj.__typename)
    }
    


    const VaultMetadataCurator_possibleTypes: string[] = ['VaultMetadataCurator']
    export const isVaultMetadataCurator = (obj?: { __typename?: any } | null): obj is VaultMetadataCurator => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultMetadataCurator"')
      return VaultMetadataCurator_possibleTypes.includes(obj.__typename)
    }
    


    const VaultMetadata_possibleTypes: string[] = ['VaultMetadata']
    export const isVaultMetadata = (obj?: { __typename?: any } | null): obj is VaultMetadata => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultMetadata"')
      return VaultMetadata_possibleTypes.includes(obj.__typename)
    }
    


    const Vault_possibleTypes: string[] = ['Vault']
    export const isVault = (obj?: { __typename?: any } | null): obj is Vault => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVault"')
      return Vault_possibleTypes.includes(obj.__typename)
    }
    


    const AssetYield_possibleTypes: string[] = ['AssetYield']
    export const isAssetYield = (obj?: { __typename?: any } | null): obj is AssetYield => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAssetYield"')
      return AssetYield_possibleTypes.includes(obj.__typename)
    }
    


    const Asset_possibleTypes: string[] = ['Asset']
    export const isAsset = (obj?: { __typename?: any } | null): obj is Asset => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAsset"')
      return Asset_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedAssets_possibleTypes: string[] = ['PaginatedAssets']
    export const isPaginatedAssets = (obj?: { __typename?: any } | null): obj is PaginatedAssets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedAssets"')
      return PaginatedAssets_possibleTypes.includes(obj.__typename)
    }
    


    const MarketPosition_possibleTypes: string[] = ['MarketPosition']
    export const isMarketPosition = (obj?: { __typename?: any } | null): obj is MarketPosition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketPosition"')
      return MarketPosition_possibleTypes.includes(obj.__typename)
    }
    


    const VaultPosition_possibleTypes: string[] = ['VaultPosition']
    export const isVaultPosition = (obj?: { __typename?: any } | null): obj is VaultPosition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultPosition"')
      return VaultPosition_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const Transaction_possibleTypes: string[] = ['Transaction']
    export const isTransaction = (obj?: { __typename?: any } | null): obj is Transaction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTransaction"')
      return Transaction_possibleTypes.includes(obj.__typename)
    }
    


    const TransactionData_possibleTypes: string[] = ['VaultTransactionData','MarketCollateralTransferTransactionData','MarketTransferTransactionData','MarketLiquidationTransactionData']
    export const isTransactionData = (obj?: { __typename?: any } | null): obj is TransactionData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTransactionData"')
      return TransactionData_possibleTypes.includes(obj.__typename)
    }
    


    const VaultTransactionData_possibleTypes: string[] = ['VaultTransactionData']
    export const isVaultTransactionData = (obj?: { __typename?: any } | null): obj is VaultTransactionData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultTransactionData"')
      return VaultTransactionData_possibleTypes.includes(obj.__typename)
    }
    


    const MarketCollateralTransferTransactionData_possibleTypes: string[] = ['MarketCollateralTransferTransactionData']
    export const isMarketCollateralTransferTransactionData = (obj?: { __typename?: any } | null): obj is MarketCollateralTransferTransactionData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketCollateralTransferTransactionData"')
      return MarketCollateralTransferTransactionData_possibleTypes.includes(obj.__typename)
    }
    


    const MarketTransferTransactionData_possibleTypes: string[] = ['MarketTransferTransactionData']
    export const isMarketTransferTransactionData = (obj?: { __typename?: any } | null): obj is MarketTransferTransactionData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketTransferTransactionData"')
      return MarketTransferTransactionData_possibleTypes.includes(obj.__typename)
    }
    


    const MarketLiquidationTransactionData_possibleTypes: string[] = ['MarketLiquidationTransactionData']
    export const isMarketLiquidationTransactionData = (obj?: { __typename?: any } | null): obj is MarketLiquidationTransactionData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketLiquidationTransactionData"')
      return MarketLiquidationTransactionData_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedTransactions_possibleTypes: string[] = ['PaginatedTransactions']
    export const isPaginatedTransactions = (obj?: { __typename?: any } | null): obj is PaginatedTransactions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedTransactions"')
      return PaginatedTransactions_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedMetaMorphos_possibleTypes: string[] = ['PaginatedMetaMorphos']
    export const isPaginatedMetaMorphos = (obj?: { __typename?: any } | null): obj is PaginatedMetaMorphos => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedMetaMorphos"')
      return PaginatedMetaMorphos_possibleTypes.includes(obj.__typename)
    }
    


    const VaultAllocationHistory_possibleTypes: string[] = ['VaultAllocationHistory']
    export const isVaultAllocationHistory = (obj?: { __typename?: any } | null): obj is VaultAllocationHistory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultAllocationHistory"')
      return VaultAllocationHistory_possibleTypes.includes(obj.__typename)
    }
    


    const VaultHistory_possibleTypes: string[] = ['VaultHistory']
    export const isVaultHistory = (obj?: { __typename?: any } | null): obj is VaultHistory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultHistory"')
      return VaultHistory_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedMetaMorphoPositions_possibleTypes: string[] = ['PaginatedMetaMorphoPositions']
    export const isPaginatedMetaMorphoPositions = (obj?: { __typename?: any } | null): obj is PaginatedMetaMorphoPositions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedMetaMorphoPositions"')
      return PaginatedMetaMorphoPositions_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedUsers_possibleTypes: string[] = ['PaginatedUsers']
    export const isPaginatedUsers = (obj?: { __typename?: any } | null): obj is PaginatedUsers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedUsers"')
      return PaginatedUsers_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedMarkets_possibleTypes: string[] = ['PaginatedMarkets']
    export const isPaginatedMarkets = (obj?: { __typename?: any } | null): obj is PaginatedMarkets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedMarkets"')
      return PaginatedMarkets_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedMarketPositions_possibleTypes: string[] = ['PaginatedMarketPositions']
    export const isPaginatedMarketPositions = (obj?: { __typename?: any } | null): obj is PaginatedMarketPositions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedMarketPositions"')
      return PaginatedMarketPositions_possibleTypes.includes(obj.__typename)
    }
    


    const ChainSynchronizationState_possibleTypes: string[] = ['ChainSynchronizationState']
    export const isChainSynchronizationState = (obj?: { __typename?: any } | null): obj is ChainSynchronizationState => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChainSynchronizationState"')
      return ChainSynchronizationState_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedMorphoBlue_possibleTypes: string[] = ['PaginatedMorphoBlue']
    export const isPaginatedMorphoBlue = (obj?: { __typename?: any } | null): obj is PaginatedMorphoBlue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedMorphoBlue"')
      return PaginatedMorphoBlue_possibleTypes.includes(obj.__typename)
    }
    


    const MarketOracleAccuracy_possibleTypes: string[] = ['MarketOracleAccuracy']
    export const isMarketOracleAccuracy = (obj?: { __typename?: any } | null): obj is MarketOracleAccuracy => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketOracleAccuracy"')
      return MarketOracleAccuracy_possibleTypes.includes(obj.__typename)
    }
    


    const CollateralAtRiskDataPoint_possibleTypes: string[] = ['CollateralAtRiskDataPoint']
    export const isCollateralAtRiskDataPoint = (obj?: { __typename?: any } | null): obj is CollateralAtRiskDataPoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCollateralAtRiskDataPoint"')
      return CollateralAtRiskDataPoint_possibleTypes.includes(obj.__typename)
    }
    


    const MarketCollateralAtRisk_possibleTypes: string[] = ['MarketCollateralAtRisk']
    export const isMarketCollateralAtRisk = (obj?: { __typename?: any } | null): obj is MarketCollateralAtRisk => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMarketCollateralAtRisk"')
      return MarketCollateralAtRisk_possibleTypes.includes(obj.__typename)
    }
    


    const VaultReallocate_possibleTypes: string[] = ['VaultReallocate']
    export const isVaultReallocate = (obj?: { __typename?: any } | null): obj is VaultReallocate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVaultReallocate"')
      return VaultReallocate_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedVaultReallocates_possibleTypes: string[] = ['PaginatedVaultReallocates']
    export const isPaginatedVaultReallocates = (obj?: { __typename?: any } | null): obj is PaginatedVaultReallocates => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedVaultReallocates"')
      return PaginatedVaultReallocates_possibleTypes.includes(obj.__typename)
    }
    


    const SearchResults_possibleTypes: string[] = ['SearchResults']
    export const isSearchResults = (obj?: { __typename?: any } | null): obj is SearchResults => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchResults"')
      return SearchResults_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedPublicAllocator_possibleTypes: string[] = ['PaginatedPublicAllocator']
    export const isPaginatedPublicAllocator = (obj?: { __typename?: any } | null): obj is PaginatedPublicAllocator => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedPublicAllocator"')
      return PaginatedPublicAllocator_possibleTypes.includes(obj.__typename)
    }
    


    const PublicAllocatorReallocate_possibleTypes: string[] = ['PublicAllocatorReallocate']
    export const isPublicAllocatorReallocate = (obj?: { __typename?: any } | null): obj is PublicAllocatorReallocate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublicAllocatorReallocate"')
      return PublicAllocatorReallocate_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedPublicAllocatorReallocates_possibleTypes: string[] = ['PaginatedPublicAllocatorReallocates']
    export const isPaginatedPublicAllocatorReallocates = (obj?: { __typename?: any } | null): obj is PaginatedPublicAllocatorReallocates => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedPublicAllocatorReallocates"')
      return PaginatedPublicAllocatorReallocates_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedOracles_possibleTypes: string[] = ['PaginatedOracles']
    export const isPaginatedOracles = (obj?: { __typename?: any } | null): obj is PaginatedOracles => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedOracles"')
      return PaginatedOracles_possibleTypes.includes(obj.__typename)
    }
    


    const PaginatedOracleFeeds_possibleTypes: string[] = ['PaginatedOracleFeeds']
    export const isPaginatedOracleFeeds = (obj?: { __typename?: any } | null): obj is PaginatedOracleFeeds => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaginatedOracleFeeds"')
      return PaginatedOracleFeeds_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    

export const enumTimeseriesInterval = {
   MINUTE: 'MINUTE' as const,
   FIVE_MINUTES: 'FIVE_MINUTES' as const,
   FIFTEEN_MINUTES: 'FIFTEEN_MINUTES' as const,
   HALF_HOUR: 'HALF_HOUR' as const,
   HOUR: 'HOUR' as const,
   DAY: 'DAY' as const,
   WEEK: 'WEEK' as const,
   MONTH: 'MONTH' as const,
   QUARTER: 'QUARTER' as const,
   YEAR: 'YEAR' as const,
   ALL: 'ALL' as const
}

export const enumOracleType = {
   ChainlinkOracle: 'ChainlinkOracle' as const,
   ChainlinkOracleV2: 'ChainlinkOracleV2' as const,
   CustomOracle: 'CustomOracle' as const,
   Unknown: 'Unknown' as const
}

export const enumWarningLevel = {
   YELLOW: 'YELLOW' as const,
   RED: 'RED' as const
}

export const enumTransactionType = {
   MetaMorphoDeposit: 'MetaMorphoDeposit' as const,
   MetaMorphoWithdraw: 'MetaMorphoWithdraw' as const,
   MetaMorphoFee: 'MetaMorphoFee' as const,
   MarketBorrow: 'MarketBorrow' as const,
   MarketLiquidation: 'MarketLiquidation' as const,
   MarketRepay: 'MarketRepay' as const,
   MarketSupply: 'MarketSupply' as const,
   MarketSupplyCollateral: 'MarketSupplyCollateral' as const,
   MarketWithdraw: 'MarketWithdraw' as const,
   MarketWithdrawCollateral: 'MarketWithdrawCollateral' as const
}

export const enumVaultReallocateType = {
   ReallocateSupply: 'ReallocateSupply' as const,
   ReallocateWithdraw: 'ReallocateWithdraw' as const
}

export const enumPublicAllocatorReallocateType = {
   Deposit: 'Deposit' as const,
   Withdraw: 'Withdraw' as const
}

export const enumTransactionsOrderBy = {
   Timestamp: 'Timestamp' as const,
   Shares: 'Shares' as const,
   Assets: 'Assets' as const,
   AssetsUsd: 'AssetsUsd' as const,
   RepaidShares: 'RepaidShares' as const,
   RepaidAssets: 'RepaidAssets' as const,
   RepaidAssetsUsd: 'RepaidAssetsUsd' as const,
   SeizedAssets: 'SeizedAssets' as const,
   SeizedAssetsUsd: 'SeizedAssetsUsd' as const,
   BadDebtShares: 'BadDebtShares' as const,
   BadDebtAssets: 'BadDebtAssets' as const,
   BadDebtAssetsUsd: 'BadDebtAssetsUsd' as const
}

export const enumOrderDirection = {
   Asc: 'Asc' as const,
   Desc: 'Desc' as const
}

export const enumUsersOrderBy = {
   Address: 'Address' as const
}

export const enumMarketOrderBy = {
   UniqueKey: 'UniqueKey' as const,
   Lltv: 'Lltv' as const,
   BorrowAssets: 'BorrowAssets' as const,
   BorrowAssetsUsd: 'BorrowAssetsUsd' as const,
   SupplyAssets: 'SupplyAssets' as const,
   SupplyAssetsUsd: 'SupplyAssetsUsd' as const,
   BorrowShares: 'BorrowShares' as const,
   SupplyShares: 'SupplyShares' as const,
   Utilization: 'Utilization' as const,
   RateAtUTarget: 'RateAtUTarget' as const,
   SupplyApy: 'SupplyApy' as const,
   NetSupplyApy: 'NetSupplyApy' as const,
   BorrowApy: 'BorrowApy' as const,
   NetBorrowApy: 'NetBorrowApy' as const,
   Fee: 'Fee' as const,
   LoanAssetSymbol: 'LoanAssetSymbol' as const,
   CollateralAssetSymbol: 'CollateralAssetSymbol' as const,
   TotalLiquidityUsd: 'TotalLiquidityUsd' as const,
   DailyBorrowApy: 'DailyBorrowApy' as const,
   DailyNetBorrowApy: 'DailyNetBorrowApy' as const
}

export const enumMorphoBlueOrderBy = {
   Address: 'Address' as const
}

export const enumMarketPositionOrderBy = {
   SupplyShares: 'SupplyShares' as const,
   BorrowShares: 'BorrowShares' as const,
   Collateral: 'Collateral' as const,
   HealthFactor: 'HealthFactor' as const
}

export const enumPublicAllocatorOrderBy = {
   Address: 'Address' as const
}

export const enumPublicAllocatorReallocateOrderBy = {
   Timestamp: 'Timestamp' as const,
   Assets: 'Assets' as const
}

export const enumVaultOrderBy = {
   Address: 'Address' as const,
   TotalAssets: 'TotalAssets' as const,
   TotalAssetsUsd: 'TotalAssetsUsd' as const,
   TotalSupply: 'TotalSupply' as const,
   Fee: 'Fee' as const,
   Apy: 'Apy' as const,
   NetApy: 'NetApy' as const,
   Name: 'Name' as const,
   Curator: 'Curator' as const
}

export const enumVaultPositionOrderBy = {
   Shares: 'Shares' as const
}

export const enumVaultReallocateOrderBy = {
   Timestamp: 'Timestamp' as const,
   Shares: 'Shares' as const,
   Assets: 'Assets' as const
}

export const enumCacheControlScope = {
   PUBLIC: 'PUBLIC' as const,
   PRIVATE: 'PRIVATE' as const
}
