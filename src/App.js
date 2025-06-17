import logo from "./logo.svg";
import "./App.css";
import { use, useState } from "react";
import { UC, LC, NC, SC } from "./data/passChar";

function App() {
  // let p = "ghhjkkkl";
  // let n = p.charAt(Math.floor(Math.random() * p.length));
  // console.log(n);
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [passlength, setPasslength] = useState(10);
  let [fpass, setFpass] = useState("");

  let createPass = () => {
    let charset = "";
    let finalPass = "";
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charset += UC;
      if (lowercase) charset += LC;
      if (number) charset += NC;
      if (symbol) charset += SC;
      for (let i = 0; i < passlength; i++) {
        finalPass += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      setFpass(finalPass);

      // console.log(charset, charset.length);
    } else {
      alert("Please check the box to generate the Password!..");
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(fpass);
  };

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passwordBoxin">
          <input type="text" value={fpass} readOnly />
          <button onClick={copyPass}> copy</button>
        </div>
        <div className="passLenght">
          <label>Password Length</label>
          <input
            type="number"
            value={passlength}
            onChange={(event) => setPasslength(event.target.value)}
            max={20}
            min={10}
          ></input>
        </div>

        <div className="passLenght">
          <label>Include Upper case letter</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          ></input>
        </div>

        <div className="passLenght">
          <label>Include Lower case letter</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          ></input>
        </div>

        <div className="passLenght">
          <label>Include number</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          ></input>
        </div>

        <div className="passLenght">
          <label>Include symbol</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          ></input>
        </div>

        <button className="btn" onClick={createPass}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
