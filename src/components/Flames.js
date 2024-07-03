import React,{useState} from "react";

const Flames = ()=>{
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const[result,setResult] = useState('');
    const calculateRelationship=()=>{
        let modname1=name1.toLowerCase();
        let modname2=name2.toLowerCase();
        let relation=modname1.length+modname2.length;
    
    
        for(let value of modname1){
            if(modname2.includes(value)){
                modname1 = modname1.replace(value,'');
                modname2 = modname2.replace(value,'');
                relation-=2;
            }
        }
    
        const flames =['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy']
        const relationIndex= relation % flames.length;
        setResult(flames[relationIndex])
    };
    
    const clearForm = ()=>{
        setName1('');
        setName2('');
        setResult('')
    
    }
    
    return (
        <div>
        <input
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="Enter name 1"
            data-testid="input1"
            name="name1"
        />
        <input
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Enter name 2"
            data-testid="input2"
            name="name2"
        />
        <button onClick={calculateRelationship} data-testid="calculate_relationship">calculate Relationship Future</button>
        <button onClick={clearForm} data-testid="clear">clear</button>
        <h3 data-testid="answer">{result}</h3>
        {/* <h3>Marriage</h3> */}
        </div>
  );

};
 
export default Flames;