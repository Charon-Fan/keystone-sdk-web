import KeystoneSDK from '../../src'

test('parseAccount-polkadot', () => {
  const ur = 'substrate:123dTzDaBPSoiGzA7YvuPZZcRL3tQv7eaWeZdicV5qggUWAH:0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3:DOT-0'
  const keystoneSDK = new KeystoneSDK()

  const expectResult = {
    address: '5D7LKexWKcBLGjye9usuFQjTZi4EicZWW1v5URd8XkfAJ9Ap',
    genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
    name: 'DOT-0',
    type: 'sr25519'
  }

  expect(keystoneSDK.polkadot.parseAccount(ur)).toStrictEqual(expectResult)
})

test('parseAccount-kusama', () => {
  const ur = 'substrate:HZwU6RGjEveAAx29tjgtUTd39wKsnKyhTLHrcLq4z2hWDLe:0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe:KSM-0'
  const keystoneSDK = new KeystoneSDK()

  const expectResult = {
    address: '5H4Kon5Q6suiQX8aPBvdzX6ctZf657WoF5VYTx4sbBpCmHhN',
    genesisHash: '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
    name: 'KSM-0',
    type: 'sr25519'
  }

  expect(keystoneSDK.polkadot.parseAccount(ur)).toStrictEqual(expectResult)
})
