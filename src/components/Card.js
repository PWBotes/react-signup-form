import React from 'react';
import "./Card.css"
// card for wrapping components
const Card = props =>{
return <div className="card">
    {props.children}
</div>
};

export default Card;