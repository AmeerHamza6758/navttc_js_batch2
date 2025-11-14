import React, { useState } from 'react'
import CompB from './CompB'

function CompA({name}) {
    return (
        <div style={{ backgroundColor: 'blue', color: 'white' }}>
            <h1>COMP-A</h1>
            <h3>{name}</h3>
            <CompB teacherName={name} age="25"/>
        </div>
    )
}

export default CompA