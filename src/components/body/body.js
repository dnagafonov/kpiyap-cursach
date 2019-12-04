import React from 'react';
import Input from "../customStandartElements/input/input";


export default class Body extends React.Component{

    render() {
        return(
            <div>
                <Input type="text" placeholder="pupa" height="10px" width="50px" margin="10px"/>
            </div>
        );
    }
}