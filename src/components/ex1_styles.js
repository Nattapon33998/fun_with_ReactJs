import React from 'react'
import './styles.css'

export default function ex1_styles() {

    const styles = {
        container: {backgroundColor: '#F0F', height: 200}
    }

    return (
        <div>

            <div style={styles.container}>
                <h1>Style Example inline</h1>
            </div>
            
            <div className = "root">
                <h1>Style Example class</h1>
            </div>

        </div>
    )
}
