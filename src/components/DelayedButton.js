// Code DelayedButton Component Here
import React, {Component} from "react"

const DelayedButton = (props) =>{

    const handleClick = (e) => {
        e.persist()
        setTimeout(() => {
            props.onDelayedClick(e)
        }, props.delay);
    }
    return(
        <button onClick={handleClick} >Delayed Button</button>
    )
}
export default DelayedButton