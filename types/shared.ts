export interface BalancesProps {
    nativeBalance: bigint;
    isNativeBalanceLoading: boolean;
    refetchNativeBalance: () => void;
    tokenBalances: bigint[];
    isTokenBalancesLoading: boolean;
    refetchTokenBalances: () => void;
  }
  
  export interface MintProps {
    nativeBalance: bigint | undefined;
    tokenBalances: readonly [bigint | undefined, bigint | undefined, bigint | undefined] | undefined;
    initialTokenSymbol?: string | null;
    onTokenChange?: (symbol: string) => void;
  }
  
  export interface RedeemProps {
    tokenBalances: readonly [bigint | undefined, bigint | undefined, bigint | undefined] | undefined;
    initialTokenSymbol?: string | null;
    onTokenChange?: (symbol: string) => void;
    nativeBalance?: bigint;
  }
  
  export interface DepositToVaultProps {
    tokenBalances: readonly [bigint | undefined, bigint | undefined, bigint | undefined] | undefined;
  }