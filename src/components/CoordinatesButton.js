import React from 'react';

class CoordinatesButton extends React.Component {



    logCoords = (e) => {
        return [e.clientX,e.clientY]

    }

    render () {
        return (
            <button onClick={(event) => this.props.onReceiveCoordinates(this.logCoords(event))}  > COORDINATES </button>
        )
    }
}

export default CoordinatesButton