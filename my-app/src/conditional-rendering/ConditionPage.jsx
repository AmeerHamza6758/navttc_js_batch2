import React, { useState } from 'react'

function ConditionPage() {
    const [isStudentRegistered, setIsStudentRegistered] = useState(true)

    // if (isStudentRegistered) {
    //     return (
    //         <>
    //             <h1>This Student is registered.</h1>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             <h1>Student is not registered. Please Register first....</h1></>
    //     )
    // }


    return (
        <>
            {/* // condition ? truebody : falsebody */}
            {
                isStudentRegistered ? <h1>This Student is registered.</h1> :
                    <h1>Student is not registered. Please Register first....</h1>
            }

            {/* Logical AND */}
            {isStudentRegistered && <h1 style={{ color: 'red' }}>This Student is registered with LOICAL AND.</h1>}
        </>
    )
}

export default ConditionPage