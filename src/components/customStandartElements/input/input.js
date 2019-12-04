import React from 'react';
import './input.css'

const Input = ({placeholder, type, className, height, width, onChange, margin}) => <input placeholder={placeholder}
                                                type={type}
                                                className={"input "+{className}}
                                                style={{height:{height}, width:{width}, margin:{margin}}}
                                                onChange={onChange}/>;

export default Input;