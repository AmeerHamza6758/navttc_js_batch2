import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ViewSingleUserDetails.css";
import { useUserHook } from "../../hooks/useUserDetails.hook";

function ViewSingleUserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getUserById } = useUserHook();
  const [user, setUser] = useState(null);

  async function fetchUser() {
    try {
      const data = await getUserById(id);
      setUser(data);
    } catch (err) {
    } 
  }

  useEffect(() => {
    fetchUser();
  }, [id]);


  return (
    <section className="details-wrapper">
      <div className="user-card">
        <h2>User Details</h2>

        <div className="user-info">
          <p><strong>ID:</strong> {user?.id}</p>
          <p><strong>Name:</strong> {user?.firstname} {user?.lastname}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Contact:</strong> {user?.contactNo}</p>
          <p><strong>Address:</strong> {user?.address}</p>
        </div>

        <div className="actions">
          <button className="back-btn" onClick={() => navigate(-1)}>
            Back
          </button>

          <button className="edit-btn" onClick={() => navigate(`/edit-user/${user.id}`)}>
            Edit User
          </button>
        </div>
      </div>
    </section>
  );
}

export default ViewSingleUserDetails;
