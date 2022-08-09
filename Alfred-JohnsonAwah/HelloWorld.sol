pragma solidity >=7.0.3


contract HelloWorld {
  
  event UpdateMessages(string oldaStr, string newStr);
  
  string public message;
  
  
  constructor(string memory initMessage){
      message = initMessage;  
  }
  
  function update(string memory newMessage) public {
      string memory oldMsg = message;
      message = newMessage;
      emit UpdateMessages(oldMsg, newMessage);
   }

}
