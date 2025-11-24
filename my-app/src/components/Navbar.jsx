import { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { UserContext } from '../context/UserContext'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigation = useNavigate()
    // console.log("Hello", name)
    // State management
    const { userData } = useContext(UserContext)
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

    const handleCount = () => {
        console.log('handle count triggered')
        setCount(count + 1)
    }

    const handleClick =()=>{
        console.log('button is clicked')
        navigation("/sales")
    }

    return (
        <div className='nav-header'>
            <h3 onMouseLeave={handleCount}>{myName}= {count}</h3>
            <nav style={{ display: 'flex', gap: '20px' }}>
                <Link to="/">Home</Link>
                <Link to="/sales">Sales</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <button onClick={handleClick}>Click me</button>
            <h3>{userData.name}</h3>
        </div>
    )
}

export default Navbar