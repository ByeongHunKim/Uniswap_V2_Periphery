import { ethers } from 'hardhat';
import { getDatetimeString } from '../utils/timeUtils';
async function main() {
    const currentTimestampInSeconds = Math.round(Date.now());
    const contractCreatedTime = getDatetimeString(currentTimestampInSeconds)
    const Router = await ethers.getContractFactory("UniswapV2Router02");
    const router = await Router.deploy('0x226C272649300b5225ebE86C3198c70449f64915','0xAD862fE04f939673961710860e97DD829272B54D');

    await router.deployed();

    console.log(
        `${router.address} contract is deployed at ${contractCreatedTime}`
    );
    console.log(`
 click this link if you deploy contract on Ethereum Sepolia Testnet
 https://sepolia.etherscan.io/address/${router.address} \n
 click this link if you deploy contract on Bianace Smart Chain Testnet
 https://testnet.bscscan.com/address/${router.address} \n
 click this link if you deploy contract on Polygon Mumbai Testnet
 https://mumbai.polygonscan.com/address/${router.address} \n
  `)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
