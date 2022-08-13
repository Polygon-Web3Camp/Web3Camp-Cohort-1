const {ethers} = require("hardhat");
async function main ()
{
    const HelloWorld = await ethers.getContractFactory( "HelloWorld" );
    const helloWorld = await HelloWorld.deploy("Hello World!");
    await helloWorld.deployed();

    console.log( "HelloWorld deployed to:", helloWorld.address );  //0xB28B8c4EAEa4c100730583782B50E39599048e19
}

main().then( () => process.exit( 0 ) ).catch(
    error =>
    {
        console.error( error );
        process.exit( 1 );
    }
);