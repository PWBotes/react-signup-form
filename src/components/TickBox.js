import React from 'react';
import "./TickBox.css"

const TickBox = props =>{
    const optionsArray=props.options.split(',');
    const optionsList=optionsArray.map((option) =>
    <div className='TickBoxOption'><input className="TickBox" type="checkbox" name={option} value={option}/>
    <label for={option}>{option}</label></div>);
    
return <div className="TickBoxSet"><div className="TickBoxQuestion">{props.question}</div>{optionsList}</div>;
    
};

export default TickBox;