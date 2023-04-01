import React, {useState,useEffect} from 'react';
import "./TextInput.css"

const TextInput = props =>{

const [enteredFisrtName, setEnteredFirstName]=useState('');

useEffect(() => {
    props.validateValue(enteredFisrtName);
  });

const CheckEmpty=(event)=>{
setEnteredFirstName(event.target.value);



};

return <input onInput={CheckEmpty} className="TextInput" placeholder={props.placeholder}  style={{'borderColor':` ${enteredFisrtName.length ===0 ? 'red' : 'green'}`}}>
    
</input>
};

export default TextInput;