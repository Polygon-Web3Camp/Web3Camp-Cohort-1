// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

//Task Completed Please Merge

contract HelloWorld {

    event UpdatedMessages(string oldString, string newString);

    string public message;

    constructor(string memory initMessage) {
        message = initMessage;
    }

    function update (string memory newMessage) public {
        string memory oldMesg = message;
        message = newMessage;

        emit UpdatedMessages(oldMesg, newMessage);
    }
}