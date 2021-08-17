const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

const { interface, bytecode } = require("./compile.js");

const provider = new HDWalletProvider(
    "diet woman fiber tower please casual mask hard injury crunch reject radar",
    "https://rinkeby.infura.io/v3/6f31849c02b24c729f95901316208077",
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempt to deploy from: ", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,

        })
        .send({ gas: "1000000", from: accounts[0] });

        console.log("interface::",interface);

    console.log("Contract deployed to: ", result.options.address);
};

deploy();
