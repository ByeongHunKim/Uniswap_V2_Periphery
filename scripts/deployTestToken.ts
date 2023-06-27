import { ethers } from 'hardhat';
import { getDatetimeString } from '../utils/timeUtils';
async function main() {
    const currentTimestampInSeconds = Math.round(Date.now());
    const contractCreatedTime = getDatetimeString(currentTimestampInSeconds)
    const TestToken1 = await ethers.getContractFactory("ERC20");
    const testToken1 = await TestToken1.deploy(50000000000);
    await testToken1.deployed();

    console.log(
        `${testToken1.address} contract is deployed at ${contractCreatedTime}`
    );
    console.log(`
 click this link if you deploy contract on Ethereum Sepolia Testnet
 https://sepolia.etherscan.io/address/${testToken1.address} \n
 click this link if you deploy contract on Bianace Smart Chain Testnet
 https://testnet.bscscan.com/address/${testToken1.address} \n
 click this link if you deploy contract on Polygon Mumbai Testnet
 https://mumbai.polygonscan.com/address/${testToken1.address} \n
  `)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
