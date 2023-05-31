import type { KeypairType } from '@polkadot/util-crypto/types'
import { keyring } from '@polkadot/ui-keyring'

import { type PolkadotAccount } from '../types/account'
import { type PolkadotRequestProps } from '../types/props'
import { type PolkadotSignature } from '../types/signature'

enum Prefix {
  SUBSTRATE = 'substrate',
  ETHEREUM = 'ethereum'
}

const isKeyringLoaded = (): boolean => {
  try {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    return !!keyring.keyring
  } catch {
    return false
  }
}

export class KeystonePolkadotSDK {
  constructor () {
    isKeyringLoaded() || keyring.loadAll({})
  }

  generateSignRequest ({
    ...rest
  }: PolkadotRequestProps): any {
  }

  parseSignature (ur: string): PolkadotSignature | any {
    return ur
  }

  parseAccount (ur: string): PolkadotAccount | null {
    const arr: string[] = ur.split(':')
    const prefix = arr[0]
    let content = ''
    let genesisHash = ''
    let name: string[] = []
    let type: KeypairType = 'sr25519'

    if (prefix === Prefix.SUBSTRATE) {
      [content, genesisHash, ...name] = arr.slice(1)
    } else if (prefix === Prefix.ETHEREUM) {
      [content, ...name] = arr.slice(1)
      const split = content.split('@')
      genesisHash = Array.isArray(split) && split.length > 1 ? split[1] : ''
      content = content.substring(0, 42)
      type = Prefix.ETHEREUM
    } else {
      return null
    }

    return {
      address: keyring.addExternal(content).pair.address,
      genesisHash,
      name: name?.length !== 0 ? name.join(':') : undefined,
      type
    }
  }
}
