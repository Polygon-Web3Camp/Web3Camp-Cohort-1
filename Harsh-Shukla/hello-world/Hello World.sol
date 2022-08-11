// SPDX-License-Identifier: MIT

// specifies the version of Solidity using semantic versoning
pragma solidity >=0.7.3;

//create a contract - hello world!

contract HelloWorld {
     
     //creating an even helps the front-end to understand that something has happened. In context front end listen to blockchain.

     //1. emmit an event
     event UpdatedMessages(string oldStr , string newStr);

     //2. state variables are values stored in contract storage.
     
     //public fn insures the variable can be accesed from anywhere by creating a function that other contracts / clients can listen to.

     // Declaring the state variable "message" of string dtype and visbility to public
     string public message;

     //3. "constructor" function is only executed when contract is created. Use to intialize data.
     constructor(string memory initMessage){

        //4. accepts a string argument 'initMessage' and sets the value into the contract's 'message' (storage variable).
        message = initMessage;
     }

     //5. A public function that accepts a string as argument and update the 'message' storage variable.
     function update(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;
        emit UpdatedMessages(oldMsg, newMessage);
     }
}