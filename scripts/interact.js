const { ethers } = require("ethers");
const { abi } = require("./abi");

let address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

async function setgreet() {
  console.log("setting the greeting....");

  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:8545/"
  );
  const customwallet = new ethers.Wallet(
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
    provider
  );

  

  console.log("custom wallet", customwallet);

  let GreetContract = new ethers.Contract(address, abi, customwallet);



  console.log("contract", GreetContract);
  //   GreetContract.connect(customwallet);

  const tx = await GreetContract.setGreeting("shashank-pandey");

  let response = await GreetContract.greetmsg();

  console.log("response", response);

  console.log("transaction hash", tx);

  let remaingbal = await provider.getBalance(customwallet.address);
  console.log("reaming balance", ethers.utils.hexValue(remaingbal._hex));
  console.log("reaming balance", remaingbal.toString());
}

setgreet();
