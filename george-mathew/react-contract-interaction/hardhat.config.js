require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const privateKey = process.env.privateKey;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: "./src/artifacts",
  },
  mumbai: {
    url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY}`,
    accounts: [privateKey],
  },
};
