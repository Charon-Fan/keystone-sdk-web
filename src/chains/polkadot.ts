import type { KeypairType } from '@polkadot/util-crypto/types'
import { Keyring } from '@polkadot/keyring'

import { type PolkadotAccount } from '../types/account'
import { type PolkadotRequestProps } from '../types/props'
import { type PolkadotSignature } from '../types/signature'

enum Prefix {
  SUBSTRATE = 'substrate',
  ETHEREUM = 'ethereum'
}

export class KeystonePolkadotSDK {
  private readonly _keyring: Keyring = new Keyring({ type: 'sr25519' })

  generateUOSSignRequest (tx: PolkadotRequestProps): any {
    return tx
  }

  parseUOSSignature (ur: string): PolkadotSignature | any {
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
      address: this._keyring.addFromAddress(content).address,
      genesisHash,
      name: name?.length !== 0 ? name.join(':') : undefined,
      type
    }
  }
}
