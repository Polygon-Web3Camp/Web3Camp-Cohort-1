async function main(){
    const HelloWorld=await ethers.getContractFactory("HelloWorld");
    const hello_world=await HelloWorld.deploy("HelloWorld");
    console.log("Contract deployed to address:",hello_world.address);
}

main()
.then(()=>process.exit(0))
.catch(error=>{console.error(error);
process.exit(1);
})