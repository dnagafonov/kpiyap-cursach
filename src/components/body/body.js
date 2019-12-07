import React from 'react';
import Input from "../customStandartElements/input/input";
import "./body.css"

export default class Body extends React.Component{
    render() {
        return(
            <div className="body-container">
                <Input type="text" placeholder="name"/>
            </div>
        );
    }
}