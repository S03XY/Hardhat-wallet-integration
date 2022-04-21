abi = [
  {
    inputs: [],
    name: "getmsg",
    outputs: [
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "greetmsg",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_msg",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

module.exports = { abi };
