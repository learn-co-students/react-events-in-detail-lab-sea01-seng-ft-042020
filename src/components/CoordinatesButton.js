// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component{
    handleClick = (e) => {
        let arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }
    
    render(){
        return(
            <button onClick={this.handleClick}>Coords Button</button>
        )
    }
}
export default CoordinatesButton