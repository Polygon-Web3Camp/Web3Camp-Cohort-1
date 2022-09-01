//define solidity version
pragma solidity ^0.8.9;

//define a contract called HelloWorld
contract HelloWorld {
    string public message;

    constructor(string memory initMessage) {
        message = initMessage;
    }

    //take a variable of type string and update the state variable message
    function update(string memory newMessage) public {
        message = newMessage;
    }
}
