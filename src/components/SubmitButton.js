import React from 'react';
import "./SubmitButton.css"



const SubmitButton = props =>{

    

const onClickHandler=(event)=>{
    props.onClickValidate(event.target.value); 
}

return <button disabled={props.buttonState} onClick={onClickHandler} className="SubmitButton" value="Submit">{props.buttonText}</button>
};

export default SubmitButton;