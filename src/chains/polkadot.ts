import { Keyring } from '@polkadot/keyring'
import { u8aConcat, u8aToU8a } from '@polkadot/util'
import { decodeAddress } from '@polkadot/util-crypto'
import type { KeypairType } from '@polkadot/util-crypto/types'

import { type PolkadotAccount } from '../types/account'
import { type PolkadotRequestProps } from '../types/props'
import { type PolkadotSignature } from '../types/signature'

enum Prefix {
  SUBSTRATE = 'substrate',
  ETHEREUM = 'ethereum'
}

const SUBSTRATE_ID = new Uint8Array([0x53])
const CRYPTO_SR25519 = new Uint8Array([0x01])

export class KeystonePolkadotSDK {
  private readonly _keyring: Keyring = new Keyring({ type: 'sr25519' })

  generateUOSSignRequest (props: PolkadotRequestProps): Uint8Array {
    const { address, cmd, payload, genesisHash } = props

    return u8aConcat(
      SUBSTRATE_ID,
      CRYPTO_SR25519,
      new Uint8Array([cmd]),
      decodeAddress(address),
      u8aToU8a(payload),
      u8aToU8a(genesisHash)
    )
  }

  parseUOSSignature (signature: string): PolkadotSignature {
    return { signature: `0x${signature}` }
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
