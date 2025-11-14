import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
    // console.log("Hello", name)
    // State management
    let [myName, setMyName] = useState("Ameer Hamza")
    const [count, setCount] = useState(0)

    // if (name == "Ameer Hamza") {
    //     setMyName("Ameer Hamza")
    //     // myName = "saba"
    //     console.log("Hello", name)
    //     // return (
    //     //     <h1>Hello, {myName}</h1>
    //     // )
    // }


    // useEffect
    // useEffect(() => {
    //     console.log("Hello I'm useEffect HooK")
    // }, [count])

    // onClick={() => setCount(count + 2)

    const handleCount=()=> {
        console.log('handle count triggered')
        setCount(count + 1)
    }

    return (
        <div className='nav-header'>
            <h3 onMouseLeave={handleCount}>{myName}= {count}</h3>
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