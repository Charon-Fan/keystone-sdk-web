import KeystoneSDK from '../../src'

test('parseAccount', () => {
  const ur = 'substrate:123dTzDaBPSoiGzA7YvuPZZcRL3tQv7eaWeZdicV5qggUWAH:0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3:DOT-0';
  const keystoneSDK = new KeystoneSDK()

  const expectResult = {
    address: "5D7LKexWKcBLGjye9usuFQjTZi4EicZWW1v5URd8XkfAJ9Ap",
    genesisHash: "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
    name: "DOT-0",
    type: "sr25519"
  }

  expect(keystoneSDK.polkadot.parseAccount(ur)).toStrictEqual(expectResult)
})