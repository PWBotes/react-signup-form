import React from 'react';
import "./SubmitButton.css"


//button component which can be disabled if validation doesn't pass, configurable text with props
const SubmitButton = props =>{

    

const onClickHandler=(event)=>{
    props.onClickValidate(event.target.value); 
}

return <button disabled={props.buttonState} onClick={onClickHandler} className="SubmitButton" value="Submit">{props.buttonText}</button>
};

export default SubmitButton;