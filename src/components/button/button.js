import React from 'react';
import './button.sass'

const Button = props => {
    return (
        <button className="actionbtn" onClick={props.cmpName} > {props.buttonName} </button>
    )
}

export default Button;