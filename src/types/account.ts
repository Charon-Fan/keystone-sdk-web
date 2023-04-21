export interface AccountProps {
  chain?: string
  path: string
  publicKey: string
  name?: string
  chainCode?: string
  extendedPublicKey?: string
}

export interface Account {
  chain: string
  path: string
  publicKey: string
  name: string
  getChainCode: () => string
  getExtendedPublicKey: () => string
}

export interface MultiAccounts {
  device: string
  masterFingerprint: string
  keys: Account[]
}

export interface PathComponent {
  index: number
  hardened: boolean
}

export interface CosmosAccount {
  path: string
  xfp: string
  address: string
}

export interface AptosAccount {
  path: string
  xfp: string
  key?: string
}
