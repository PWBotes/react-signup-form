import React, {useState,useEffect} from 'react';
import "./PhoneInput.css"
//email component with validation and color changes to reflect valid input
const PhoneInput = props =>{

    const [enteredPhoneNumber, setEnteredPhoneNumber]=useState('');

    useEffect(() => {
        props.validateValue(enteredPhoneNumber);
      });

    const CheckEmpty=(event)=>{
        setEnteredPhoneNumber(event.target.value);
    };

return <input type="number" onChange={CheckEmpty}  className="PhoneInput" placeholder="Contact number" style={{'borderColor':` ${enteredPhoneNumber.length ===0 ? 'red' : 'green'}`}}>
    
</input>
};

export default PhoneInput;