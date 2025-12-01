import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateUserDetails.css";
import { useUserHook } from "../../hooks/useUserDetails.hook";

function CreateUserDetails() {
  const navigate = useNavigate();
  const { createUserDetails } = useUserHook();

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    contactNo: "",
  });


  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createUserDetails(userData);
      alert("User created successfully!");
      navigate(-1);
    } catch (err) {
    } 
  }

  return (
    <section className="form-wrapper">
      <h1>Create User</h1>

      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter first name"
            value={userData.firstname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter last name"
            value={userData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter address"
            value={userData.address}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Contact No</label>
          <input
            type="text"
            name="contactNo"
            placeholder="0300-0000000"
            value={userData.contactNo}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
         Create User
        </button>
      </form>
    </section>
  );
}

export default CreateUserDetails;
