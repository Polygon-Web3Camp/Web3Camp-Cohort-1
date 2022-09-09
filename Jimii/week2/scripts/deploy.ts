import { ethers } from "hardhat";

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  //start deployment
  const hello_world = await HelloWorld.deploy("Hello World!");
  console.log("contract deployed to", hello_world.address);
}

main().then(() => process.exit(0)).catch(err => {
  console.error("error deploying contract\n", err);
  process.exit(1);
});