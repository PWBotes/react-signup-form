import React, {useState,useEffect} from 'react';
import "./EmailInput.css"
//email component with validation and color changes to reflect valid input
const EmailInput = props =>{

    const [enteredEmail, setEnteredEmail]=useState('');

    useEffect(() => {
        props.validateValue(enteredEmail);
      });

    const CheckEmpty=(event)=>{
    setEnteredEmail(event.target.value);
    };

return <input onChange={CheckEmpty}  className="EmailInput" placeholder="Email" type="Email" style={{'borderColor':` ${enteredEmail.length ===0 ? 'red' : 'green'}`}}>
    
</input>
};

export default EmailInput;