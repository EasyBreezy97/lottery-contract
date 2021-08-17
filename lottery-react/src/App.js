import { useState, useEffect } from "react";
import web3 from "./web3";
import lottery from "./lottery";

import "./App.css";

function App() {
    const [manager, setManager] = useState("");
    const [players, setPlayers] = useState([]);
    const [balance, setBalance] = useState("");
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        getManager();
        getPlayers();
        getBalance();
    }, []);

    // const logAccounts = async () => {
    //   const accounts = await web3.eth.getAccounts();
    //   console.log(accounts);
    // }

    const getManager = async () => {
        const manager = await lottery.methods.manager().call();
        console.log("manager address:", manager);
        setManager(manager);
    };

    const getPlayers = async () => {
        const players = await lottery.methods.getPlayers().call();
        setPlayers(players);
    };

    const getBalance = async () => {
        const balance = await web3.eth.getBalance(lottery.options.address);
        setBalance(balance);
    };

    const enterToLottery = async (e) => {
        e.preventDefault();

        const accounts = await web3.eth.getAccounts();

        setMessage("Waiting on transaction success...");

        console.log(accounts);
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei(value, "ether"),
        });

        setMessage("You have been entered!");
    };

    const pickWinnerHandler = async () => {
        const accounts = await web3.eth.getAccounts();
        setMessage("Waiting on transaction success...");

        await lottery.methods.pickWinner().send({
            from: accounts[0],
        });

        setMessage("A winner has been picked!");
    };

    return (
        <div>
            <h2>Lottery Contract</h2>
            <p>
                This contract is managed by {manager} Tere are currently{" "}
                {players?.length} competing to win{" "}
                {web3.utils.fromWei(balance, "ether")} ether
            </p>

            <form onSubmit={enterToLottery}>
                <h4>Want to try your luck?</h4>
                <div>
                    <label htmlFor="ether-value">
                        {" "}
                        Amount of ether to enter
                    </label>
                    <input
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        type="text"
                        name="ether-value"
                    />
                </div>
                <button>Enter</button>
            </form>
            <hr />

            <h4>Ready to pick winner?</h4>
            <button onClick={pickWinnerHandler}> Pick a winner!</button>

            <hr />
            <h1>{message}</h1>
        </div>
    );
}

export default App;
