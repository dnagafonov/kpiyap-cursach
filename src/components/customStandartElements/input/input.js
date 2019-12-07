import React from 'react';
import './input.css'

const Input = ({placeholder, type, className, onChange}) => <input placeholder={placeholder}
                                                type={type}
                                                className={"input "+{className}}
                                                onChange={onChange}/>;

export default Input;