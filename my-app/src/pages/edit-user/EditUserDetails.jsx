import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditUserDetails.css";
import { useUserHook } from "../../hooks/useUserDetails.hook";

function EditUserDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { getUserById, updateUserDetails } = useUserHook();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    contactNo: "",
  });

  async function fetchUser() {
    try {
      const data = await getUserById(id);
      setUserData({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        address: data.address,
        contactNo: data.contactNo,
      });
    } catch (err) {
    }
  }

  useEffect(() => {
    fetchUser();
  }, [id]);

  function handleChange(e) {
    e.preventDefault()
    setUserData({ ...userData,
       [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateUserDetails(id, userData);
      alert("User updated successfully!");
      navigate(-1);
    } catch (err) {
    }
  }

  return (
    <section className="form-wrapper">
      <h1>Update User</h1>

      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            name="firstname"
            value={userData.firstname}
            onChange={handleChange}
            placeholder="Enter first name"
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={userData.address}
            onChange={handleChange}
            placeholder="Enter address"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Contact No</label>
          <input
            name="contactNo"
            value={userData.contactNo}
            onChange={handleChange}
            placeholder="0300-00000"
          />
        </div>

        <button className="submit-btn" type="submit">
          Update User
        </button>
      </form>
    </section>
  );
}

export default EditUserDetails;
