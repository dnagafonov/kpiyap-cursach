import React from 'react';
import "./body.css"

export default class Body extends React.Component{
    render() {
        return(
            <div className="body-container">
                {this.props.children}
            </div>
        );
    }
}