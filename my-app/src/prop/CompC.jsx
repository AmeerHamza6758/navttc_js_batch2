import React, { useState } from 'react'

function CompC({age}) {
    return (
        <div style={{ backgroundColor: 'green' }}>
            <h1>CompC</h1>
            <h3>{age}</h3>
        </div>
    )
}

export default CompC