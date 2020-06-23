// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
    
    clickHandler = (e) => {
        e.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(e)
          }, this.props.delay);
    }
    
    render() {
        // console.log(this.props)
        return (
            <button onClick={this.clickHandler}>Delayed</button>
        )
    }
}