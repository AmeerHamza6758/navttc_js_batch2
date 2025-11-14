import React, { useState } from 'react'
import CompC from './CompC'

function CompB({ teacherName, age }) {
    return (
        <div style={{ backgroundColor: 'yellow' }}>
            <h1>COMPB</h1>
            <h3>{teacherName}</h3>
            <CompC age={age}/>
        </div>
    )
}

export default CompB