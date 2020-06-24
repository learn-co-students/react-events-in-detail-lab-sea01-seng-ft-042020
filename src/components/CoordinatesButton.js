// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {

    handleClick = (event) => {
        console.log(event)
        const arr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(arr)
        // return arr
    }

    render() {
        return(
            <button onClick={this.handleClick} />
        )
    }
}

export default CoordinatesButton