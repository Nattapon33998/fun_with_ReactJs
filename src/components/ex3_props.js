import React from 'react'
import PropTypes from 'prop-types'

export default function ex3_props(props) {
    return (
        <div>
            {props.showLabel && <h1>CountLabel: </h1>}
            <h1 style={{color: props.color}}>{props.count}</h1>
        </div>
    )
}

ex3_props.propTypes = {
    count: PropTypes.number,
    // กำหนดให้ count เป็น num เท่านั้น
    showLabel: PropTypes.bool
}

ex3_props.defaultProps = {
    showLabel: true
    // กำหนดค่าเริ่มต้น count เป็น num เท่านั้น
}
