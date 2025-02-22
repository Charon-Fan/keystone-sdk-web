import {
  KeystoneAptosSDK,
  KeystoneArweaveSDK,
  KeystoneBitcoinCashSDK,
  KeystoneBitcoinSDK,
  KeystoneCardanoSDK,
  KeystoneCosmosSDK, KeystoneDashSDK,
  KeystoneEthereumSDK, KeystoneLitecoinSDK,
  KeystoneSolanaSDK, KeystoneTronSDK,
  KeystoneNearSDK, KeystoneSuiSDK
} from './chains'
import { parseMultiAccounts, parseHDKey, generateKeyDerivationCall } from './wallet'

export class KeystoneSDK {
  private _btc!: KeystoneBitcoinSDK
  get btc (): KeystoneBitcoinSDK {
    if (this._btc === undefined) {
      this._btc = new KeystoneBitcoinSDK()
    }
    return this._btc
  }

  private _eth!: KeystoneEthereumSDK
  get eth (): KeystoneEthereumSDK {
    if (this._eth === undefined) {
      this._eth = new KeystoneEthereumSDK()
    }
    return this._eth
  }

  private _sol!: KeystoneSolanaSDK
  get sol (): KeystoneSolanaSDK {
    if (this._sol === undefined) {
      this._sol = new KeystoneSolanaSDK()
    }
    return this._sol
  }

  private _cosmos!: KeystoneCosmosSDK
  get cosmos (): KeystoneCosmosSDK {
    if (this._cosmos === undefined) {
      this._cosmos = new KeystoneCosmosSDK()
    }
    return this._cosmos
  }

  private _tron!: KeystoneTronSDK
  get tron (): KeystoneTronSDK {
    if (this._tron === undefined) {
      this._tron = new KeystoneTronSDK()
    }
    return this._tron
  }

  private _ltc!: KeystoneLitecoinSDK
  get ltc (): KeystoneLitecoinSDK {
    if (this._ltc === undefined) {
      this._ltc = new KeystoneLitecoinSDK()
    }
    return this._ltc
  }

  private _bch!: KeystoneBitcoinCashSDK
  get bch (): KeystoneBitcoinCashSDK {
    if (this._bch === undefined) {
      this._bch = new KeystoneBitcoinCashSDK()
    }
    return this._bch
  }

  private _dash!: KeystoneDashSDK
  get dash (): KeystoneDashSDK {
    if (this._dash === undefined) {
      this._dash = new KeystoneDashSDK()
    }
    return this._dash
  }

  private _aptos!: KeystoneAptosSDK
  get aptos (): KeystoneAptosSDK {
    if (this._aptos === undefined) {
      this._aptos = new KeystoneAptosSDK()
    }
    return this._aptos
  }

  private _near!: KeystoneNearSDK
  get near (): KeystoneNearSDK {
    if (this._near === undefined) {
      this._near = new KeystoneNearSDK()
    }
    return this._near
  }

  private _arweave!: KeystoneArweaveSDK
  get arweave (): KeystoneArweaveSDK {
    if (this._arweave === undefined) {
      this._arweave = new KeystoneArweaveSDK()
    }
    return this._arweave
  }

  private _sui!: KeystoneSuiSDK
  get sui (): KeystoneSuiSDK {
    if (this._sui === undefined) {
      this._sui = new KeystoneSuiSDK()
    }
    return this._sui
  }

  private _cardano!: KeystoneCardanoSDK
  get cardano (): KeystoneCardanoSDK {
    if (this._cardano === undefined) {
      this._cardano = new KeystoneCardanoSDK()
    }
    return this._cardano
  }

  static parseMultiAccounts = parseMultiAccounts
  static parseHDKey = parseHDKey
  static generateKeyDerivationCall = generateKeyDerivationCall
}
