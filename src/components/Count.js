import React from 'react'

function Count(props) {
    return (
        <div>
        <button onClick = {props.increase}>Increase Me !</button>
        <button onClick = {props.decrease}>Decrease Me !</button>
        </div>
    )
}

export default Count
