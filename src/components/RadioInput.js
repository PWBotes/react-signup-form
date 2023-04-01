import React from 'react';
import "./RadioInput.css"

const RadioInput = props =>{
    const optionsArray=props.options.split(',');
    const optionsList=optionsArray.map((option) =>
    <div className='RadioOption'><input className="RadioInput" type="radio" name={option} value={option}/>
    <label for={option}>{option}</label></div>);
    
return <div className="RadioSet"><div className="RadioQuestion">{props.question}</div>{optionsList}</div>;
    
};

export default RadioInput;