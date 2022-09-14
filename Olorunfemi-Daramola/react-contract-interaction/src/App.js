import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
import Greeter from "./Greeter.json";

const greeterAddress = "0x0f308d853028e6454fc5b9d1eb768e09874b0bfa";

function App() {
  // store greeting in local state
  const [greeting, setGreetingValue] = useState();

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // call the smart contract, send an update
  async function setGreeting() {
    if (!greeting) return alert("Greeting is empty");
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.update(greeting);
      await transaction.wait();
    } else {
      alert("Connect your wallet");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          style={{ padding: "1rem", width: "300px" }}
          onChange={(e) => setGreetingValue(e.target.value)}
          placeholder="Set greeting"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "Center",
            width: "300px",
            marginTop: "1rem",
          }}
        >
          <button
            style={{
              padding: ".8rem",
              background: "#FF7518",
              color: "#FFF",
              border: "none",
              borderRadius: "8px",
              width: "48%",
            }}
            onClick={requestAccount}
          >
            Connect Wallet
          </button>
          <button
            style={{
              padding: ".8rem",
              background:
                typeof window.ethereum !== "undefined" ? "#00FF00" : "#FF0000",
              color: "#FFF",
              border: "none",
              borderRadius: "8px",
              width: "48%",
            }}
            onClick={() => {
              setGreeting();
              setGreetingValue("");
            }}
          >
            Set Greeting
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
