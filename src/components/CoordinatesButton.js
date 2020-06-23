// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

    clickHandler = (e) => {
        const arr = []
        const x = e.clientX
        const y = e.clientY
        arr.push(x, y)
        this.props.onReceiveCoordinates(arr)
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Coordinates</button>
            </div>
        )}
}