import React from 'react';
import './button.css'

const Button = (props) => <button className={"btn " + props.btnStyle} onClick={props.onclick}>{props.children}</button>;

export default Button;