import React, {useState,useEffect} from 'react';
import "./TickBox.css"

const TickBox = props =>{

    const [enteredChoice, setEnteredChoice]=useState('');

    useEffect(() => {
        props.validateValue(enteredChoice);
      });

    const CheckEmpty=(event)=>{
        
        setEnteredChoice(event.target.checked);
        
        
    };

    const optionsArray=props.options.split(',');
    const optionsList=optionsArray.map((option) =>
    <div key={Math.random()} className='TickBoxOption'><input onChange={CheckEmpty} className="TickBox" type="checkbox" name="consentTick" value={enteredChoice} checked={enteredChoice}/>
    <label style={{'color':` ${enteredChoice  ===true ? 'green' : 'red'}`}} htmlFor={option}>{option}</label></div>);
    
return <div className="TickBoxSet"><div className="TickBoxQuestion">{props.question}</div>{optionsList}</div>;
    
};

export default TickBox;