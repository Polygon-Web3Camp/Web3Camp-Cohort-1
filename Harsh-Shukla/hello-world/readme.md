<h1>All Files For Week 2 - SMC Developement</h1>

<h2><u>Important Info:</u></h2>

1. contracts/`HelloWorld.sol`: The Smart Contract (Logic)<br>
2. scripts/`deploy.js`: The Javascript code for interacting with blockchain<br>
3. `hardhat.config.js`: The configuration file for deploying contract locally<br>
4. `.env`: Enviroment Variables file<br>
<hr>

<h2>Instructions To Run</h2>

1. Git Clone The Repo <br>
`git clone https://github.com/DevloperHS/Web3Camp-Cohort-1.git`

2. Navigate to the folder <br>
`cd Harsh-Shukla/hello-world`

3. Alchemy Setup<br>
Visit [Alchemy](https://www.alchemy.com/) , signup and create a app

4. Local Environement Setup<br>
Open the terminal in the `hello-world` directory. <br> <br>
<em>*To Setup Packages: `nodejs` needs to be installed</em>

5. Installing Dependencies
Run all code one by one. <br>
Not Included:(hardhat.config.js & .env) file as included in repo <br>

CODES
```
> npm init --yes
> npm install --save-dev hardhat
> npm install dotenv --save
> npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"
```

6. Deploy<br>
*Make sure you have passed right values in `.env` file. <br>
Finally Deploy Using:

```
npx hardhat run scripts/deploy.js  --network rinkeby
```

You will get something like (if deployed): <br>

`Contract deployed to address: address`

Congrats! You just deployed a smart contract to the Ethereum chain ✌

<h2>Contact Me</h2>
In case you are having any issue contact me on:<br>

Twitter: [@devloper_hs](https://twitter.com/devloper_hs) 


















