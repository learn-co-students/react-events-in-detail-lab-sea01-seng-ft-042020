// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {
    onclick = (e) => {
        e.persist();
        setTimeout(() => {
            this.props.onDelayedClick(e)}, 
            this.props.delay)
    }



    render() {
        return(
            <button onClick={(e) => this.onclick(e)}>Delayed Button</button>
        )
    }
}

export default DelayedButton;