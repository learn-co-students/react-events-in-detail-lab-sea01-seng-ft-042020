// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {

    handleClick = (e) => {
        // console.log(this.props.delay)
        // console.log(this.props.onDelayedClick)
        e.persist()
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }

    render() {
        return(
            <button onClick={this.handleClick}/>
        )
    }
}

export default DelayedButton