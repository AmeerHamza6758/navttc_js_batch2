import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function IndexPage() {
    const {userData}=useContext(UserContext)
    return (
        <main style={{ height: '80vh', backgroundColor: 'lightcoral' , padding:'30px'}}>
            <h1>MAIN SECTION</h1>

            <h1>{`Hello, ${userData.name}`}</h1>
        </main>
    )
}

export default IndexPage