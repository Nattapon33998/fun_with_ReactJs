import React from 'react'

export default function ex2_image(props) {
    return (
        <div>
            <img src="/logo512.png" height="100"/>
            <img src="/images/launch.png" height="100"/>
            {props.image && <img src={props.image} height="200"/>}
        </div>
    )
}
