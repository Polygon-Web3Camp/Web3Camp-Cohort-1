const { ethers } = require("hardhat");

async function main(){
    //instances are connected to the first signer(owner) by default.
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello_world = await HelloWorld.deploy("Hello World Web3!");
    console.log("Contract deployed to address :",hello_world.address);
    //https://goerli.etherscan.io/address/0x029E0CE38C7Ec08B692Bcc2cCA2C8218a102bDB2
    //Contract deployed to address : 0x029E0CE38C7Ec08B692Bcc2cCA2C8218a102bDB2
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });