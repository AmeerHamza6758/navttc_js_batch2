import { useState } from 'react'
import './Navbar.css'

function Navbar() {
    var name = "Ameer Hamza"
    console.log("Hello", name)
    // State management
    let [myName, setMyName] = useState("Ameer Hamza")
    const [count, setCOunt] = useState(0)

    if (name == "Ameer Hamza") {
        setMyName("Ameer Hamza")
        // myName = "saba"
        console.log("Hello", name)
        // return (
        //     <h1>Hello, {myName}</h1>
        // )
    }
    console.log(myName, 'my-name')
    console.log(myName, 'my-name')

    return (
        <div className='nav-header'>
            <h3>{myName}</h3>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <ul>
                <li>S</li>
                <li>F</li>
                <li>A</li>
            </ul>
        </div>
    )
}

export default Navbar