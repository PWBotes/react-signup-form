import React, {useState,useEffect} from 'react';
import "./RadioInput.css"

const RadioInput = props =>{

    const [enteredRadio, setEnteredRadio]=useState('male');

    useEffect(() => {
        props.validateValue(enteredRadio);
      });

    const CheckEmpty=(event)=>{
        setEnteredRadio(event.target.value);
    };
    
    
return <div className="RadioSet"><div className="RadioQuestion">{props.question}</div><div  key={Math.random()} className='RadioOption'><input  onChange={CheckEmpty} className="RadioInput" type="radio" name='genderChoice' value="male" checked={enteredRadio === "male"}/>
<label htmlFor="genderChoice">Male</label></div>
<div  key={Math.random()} className='RadioOption'><input  onChange={CheckEmpty} className="RadioInput" type="radio" name='genderChoice' value="female" checked={enteredRadio === "female"}/>
<label htmlFor="genderChoice">Female</label></div>
<div  key={Math.random()} className='RadioOption'><input  onChange={CheckEmpty} className="RadioInput" type="radio" name='genderChoice' value="rather not say" checked={enteredRadio === "rather not say"}/>
<label htmlFor="genderChoice">Rather not say</label></div></div>;
    
};

export default RadioInput;