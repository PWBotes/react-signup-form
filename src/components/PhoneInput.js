import React, {useState,useEffect} from 'react';
import "./PhoneInput.css"

const PhoneInput = props =>{

    const [enteredPhoneNumber, setEnteredPhoneNumber]=useState('');

    useEffect(() => {
        props.validateValue(enteredPhoneNumber);
      });

    const CheckEmpty=(event)=>{
        setEnteredPhoneNumber(event.target.value);
    };

return <input onChange={CheckEmpty}  className="PhoneInput" placeholder="Contact Number" style={{'borderColor':` ${enteredPhoneNumber.length ===0 ? 'red' : 'green'}`}}>
    
</input>
};

export default PhoneInput;