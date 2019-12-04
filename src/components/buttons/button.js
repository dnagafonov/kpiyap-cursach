import React from 'react';
import './button.css'

const Button = ({btnStyle, onclick, children}) => <button className={"btn " + btnStyle} onClick={onclick}>{children}</button>;

export default Button;