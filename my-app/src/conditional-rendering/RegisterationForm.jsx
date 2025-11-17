import React, { useState } from "react";
import "./form.css";

const StudentRegistrationForm = () => {
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [gender, setGender] = useState();
    const [dob, setDob] = useState();
    const [error, setError] = useState({})


    function formValidation() {
        let formErrors = {}
        if (fullName == undefined || fullName == null) {
            formErrors.name = "Pleae enter your name..."
        } else if (email == undefined || email == null) {
            formErrors.email = "Please enter email address"
        }
        else if (!email.includes('@')) {
            formErrors.email = "Please enter a valid email address"
        }
        setError(formErrors)
        console.log(error, 'form errors')
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        formValidation()
        // alert("Form submitted.")
    }


    return (
        <div className="form-container">
            <div className="form-card">
                <h2>Student Registration</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter your full name"
                        />

                        {error.name && <strong style={{ color: 'red' }}>{error.name}</strong>}
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default StudentRegistrationForm;
