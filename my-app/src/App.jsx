import './App.css'
import { useState } from "react";
import IndexPage from './pages/IndexPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CompA from './prop/CompA';
import StudentRegistrationForm from './conditional-rendering/RegisterationForm';
import ConditionPage from './conditional-rendering/ConditionPage';
import { Route, Routes } from 'react-router-dom';
import Sales from './pages/Sales';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';

function App() {
  const [tName, setTName] = useState("Ameer")
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='*' element={<CompA />} />
        {/* <Route path='/settings'>
          <Route path='/user' element={<CompA />} />
        </Route> */}

      </Routes>

      <Footer />
    </>
  )
}

export default App
