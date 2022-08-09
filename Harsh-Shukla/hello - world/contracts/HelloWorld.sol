// A simple smart contract that stores a message upon creation and can be updated by calling the update function.

//--------------------------------------------------------------------------------------------------------//

// SPDX-License-Identifier: MIT

// specifies the version of Solidity using semantic versoning
pragma solidity >=0.7.3;

//create a contract - hello world!

contract HelloWorld {

     //1. emmit an event
     event UpdatedMessages(string oldStr , string newStr);

     //2. // Declaring the state variable "message" of "string" dtype and visbility to "public"
     string public message;

     //3. Intialize data to blockchain using "constructor" function.
     // It accepts a string argument 'initMessage' and sets the value into the contract's 'message' (storage variable).
     constructor(string memory initMessage){

        message = initMessage;
     }

     //5. Declaring "update" public function that accepts a string as argument and update the 'message' storage variable.
     function update(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;
        emit UpdatedMessages(oldMsg, newMessage);
     }
}