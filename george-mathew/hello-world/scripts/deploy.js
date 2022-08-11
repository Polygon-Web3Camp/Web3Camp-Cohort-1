const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log(
    "💰" + "Account balance:",
    ethers.utils.formatEther(await deployer.getBalance()) + " ETH"
  );

  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy("Hello World");
  console.log("Deployed contract:", helloWorld.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
