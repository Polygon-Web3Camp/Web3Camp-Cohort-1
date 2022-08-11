require('dotenv').config();


require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;


/**

* @type import('hardhat/config').HardhatUserConfig

*/

module.exports = {

   solidity: "0.7.3",

   defaultNetwork: "ropsten",

   networks: {

      hardhat: {},

      ropsten: {

         url: API_URL,

         accounts: [`0x${PRIVATE_KEY}`]

      }

   },

}
