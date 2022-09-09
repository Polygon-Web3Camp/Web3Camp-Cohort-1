import 'dotenv/config'

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const { PRIVATE_KEY, API_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};

console.log("these ones", API_URL, "and", PRIVATE_KEY);

export default config;
