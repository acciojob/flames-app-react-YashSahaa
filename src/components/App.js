import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
      const [inputState1, setInputState1] = useState("");
      const [inputState2, setInputState2] = useState("");
      const [outputState, setOutputState] = useState("");
      const [showOutput, setShowOutput] = useState(false);
    
      function removeCommonCharacters(str1, str2) {
        const freqMap1 = {};
        const freqMap2 = {};
    
        for (let char of str1) {
          if (freqMap1[char]) {
            freqMap1[char]++;
          } else {
            freqMap1[char] = 1;
          }
        }
    
        for (let char of str2) {
          if (freqMap2[char]) {
            freqMap2[char]++;
          } else {
            freqMap2[char] = 1;
          }
        }
    
        let resultStr1 = "";
        let resultStr2 = "";
    
        for (let char of str1) {
          if (freqMap2[char]) {
            freqMap2[char]--;
            if (freqMap2[char] === 0) {
              delete freqMap2[char];
            }
          } else {
            resultStr1 += char;
          }
        }
    
        for (let char of str2) {
          if (freqMap1[char]) {
            freqMap1[char]--;
            if (freqMap1[char] === 0) {
              delete freqMap1[char];
            }
          } else {
            resultStr2 += char;
          }
        }
    
        return [resultStr1, resultStr2];
      }
    
      const calculateRelation = () => {
        if (inputState1.length === 0 || inputState2.length === 0) {
          setOutputState("Please Enter valid input");
          setShowOutput(true);
          return;
        }
        let [newStr1, newStr2] = removeCommonCharacters(inputState1, inputState2);
        let sum = newStr1.length + newStr2.length;
        let mod = sum % 6;
        if (mod === 0) {
          setOutputState("Siblings");
        } else if (mod === 1) {
          setOutputState("Friends");
        } else if (mod === 2) {
          setOutputState("Love");
        } else if (mod === 3) {
          setOutputState("Affection");
        } else if (mod === 4) {
          setOutputState("Marriage");
        } else if (mod === 5) {
          setOutputState("Enemy");
        }
        setShowOutput(true);
      };
    
      const clearState = () => {
        setInputState1("");
        setInputState2("");
        setOutputState("");
        setShowOutput(false);
      };
      return (
        <div id="main">
          <input
            id="input1"
            value={inputState1}
            onChange={(e) => {
              setInputState1(e.target.value);
            }}
            placeholder="Enter first name"
          />
          <input
            id="input2"
            value={inputState2}
            onChange={(e) => {
              setInputState2(e.target.value);
            }}
            placeholder="Enter second name"
          />
          <button id="calculate_relationship" onClick={calculateRelation}>
            Calculate Relationship Future
          </button>
          <button id="clear" onClick={clearState}>
            Clear
          </button>
          {showOutput && <h1>{outputState}</h1>}
        </div>
      );
    }
}


export default App;
