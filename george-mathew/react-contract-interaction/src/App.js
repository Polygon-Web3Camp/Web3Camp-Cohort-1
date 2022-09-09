import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";

import HelloWorld from "./artifacts/contracts/HelloWorld.sol/HelloWorld.json";

// Update with the contract address logged out to the CLI when it was deployed
const helloWorldAddress = "0xFFa9F76a9cC0D943A794eD8d0d72817A8E3b15B4";

function App() {
  // store greeting in local state
  const [greeting, setGreetingValue] = useState();

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // call the smart contract, read the current greeting value
  async function fetchGreeting() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        helloWorldAddress,
        HelloWorld.abi,
        provider
      );
      try {
        const data = await contract.message();
        console.log("data: ", data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  // call the smart contract, send an update
  async function setGreeting() {
    if (!greeting) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        helloWorldAddress,
        HelloWorld.abi,
        signer
      );
      const transaction = await contract.update(greeting);
      await transaction.wait();
      fetchGreeting();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchGreeting}>Get Message</button>
        <button onClick={setGreeting}>Set Message</button>
        <input
          onChange={(e) => setGreetingValue(e.target.value)}
          placeholder="Set Message"
        />
      </header>
    </div>
  );
}

export default App;
