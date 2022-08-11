async function main() {

    //ContractFactory is abstraction used to deploy new smart conracts
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    //start deployment , returning a promise that resolves to a contract object
    const hello_world = await HelloWorld.deploy("HelloWorld");
    console.log("Contract deployed to address:", hello_world.address);
}

// calling amin fn and catching any errors
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });