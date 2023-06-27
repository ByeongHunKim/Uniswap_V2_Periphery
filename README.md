<p align="center">
    <h1 align="center">
        Uniswap V2
    </h1>
    <p align="center">Periphery Contracts</p>
</p>


---
# Deployed contracts
|            | Mumbai                                                                                             |
|------------|----------------------------------------------------------------------------------------------------|
| WETH       | [0xAD86...B54D](https://mumbai.polygonscan.com/address/0xAD862fE04f939673961710860e97DD829272B54D) |
| Router     | [0x7196...99Bd](https://mumbai.polygonscan.com/address/0x7196fF881495e2B5e743506c42743070e5C799Bd) |
| TestToken1 | [0x315B...D061](https://mumbai.polygonscan.com/address/0x315B325FB71880E12c944d226DB08C9f5070D061) |
| TestToken2 | [0x129C...B666](https://mumbai.polygonscan.com/address/0x129Cc0bA7667945A55802EA9de362aFa18B1B666) |
---

## 1. installation
- node v16.17.1
- npm 8.15.0
```shell
npm install
```

## 2. environment variables
- `$ touch .env`
- or rename `.env.example` to `.env`
```bash
ALCHEMY_MUMBAI_API_KEY=
ALCHEMY_SEPOLIA_API_KEY=
PRIVATE_KEY=
```

## 3. deploying contract
```shell
# deploy WETH contract 
npx hardhat run scripts/deployWeth.ts --network mumbai

# deploy Router contract
npx hardhat run scripts/deployRouter.ts --network mumbai

# deploy Test Token contract
npx hardhat run scripts/deployTestToken.ts --network mumbai
```

## 3.1 deploying contract in local node
```shell
npx hardhat node
npx hardhat run scripts/
```