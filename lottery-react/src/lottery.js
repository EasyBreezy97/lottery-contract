// 0x928ABea10c8f1342a7E699322D1233B9DF062a65 deploy to
// 0x2fCff4A11f0b1d1a6e07597f9bC843379eCF2154 deploy from

import web3 from "./web3";

const address = "0x928ABea10c8f1342a7E699322D1233B9DF062a65";

const abi = [
    {
        constant: true,
        inputs: [],
        name: "manager",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "pickWinner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getPlayers",
        outputs: [{ name: "", type: "address[]" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "enter",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function",
    },
    {
        constant: true,
        inputs: [{ name: "", type: "uint256" }],
        name: "players",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        payable: true,
        stateMutability: "payable",
        type: "constructor",
    },
];

export default new web3.eth.Contract(abi, address);
