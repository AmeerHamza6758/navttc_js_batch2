import './App.css'
import { useState } from "react";
import IndexPage from './pages/IndexPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CompA from './prop/CompA';

function App() {
    const [tName, setTName] = useState("Ameer")
  return (
    <>
      {/* <Navbar />
      <Navbar />
      <Navbar /> */}

      {/* <IndexPage />
      <Footer /> */}
      <CompA name={tName}/>
    </>
  )
}

export default App
