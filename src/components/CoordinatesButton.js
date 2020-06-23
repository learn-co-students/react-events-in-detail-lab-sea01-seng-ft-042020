// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {
    onclick = (e) => {
        this.props.onReceiveCoordinates([e.screenX, e.screenY])
    }

    render() {
        return(
            <button onClick={(e) => this.onclick(e)}>Coordinates Button</button>
        )
    }
}

export default CoordinatesButton;