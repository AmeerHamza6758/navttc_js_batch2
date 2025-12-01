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
import ViewUserDetails from './pages/view-users-list/ViewUserDetails';
import CreateUserDetails from './pages/create-user/CreateUserDetails';
import EditUserDetails from './pages/edit-user/EditUserDetails';
import ViewSingleUserDetails from './pages/view-user/ViewSingleUserDetails';

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

        <Route path="/user" element={<ViewUserDetails />} />
        <Route path="/create-user" element={<CreateUserDetails />} />
        <Route path="/edit-user/:id" element={<EditUserDetails />} />
        <Route path="/view-user/:id" element={<ViewSingleUserDetails />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
