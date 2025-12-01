import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewUserDetails.css";
import { useUserHook } from "../../hooks/useUserDetails.hook";

function ViewUserDetails() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const { getAllUsers, deleteUserDetails } = useUserHook();

  async function fetchUsers() {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleDelete(id) {
    try {
      await deleteUserDetails(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      console.error("Faile delete:", err);
    }
  }

  return (
    <section className="table-wrapper">
      <div className="table-header">
        <h2>User List</h2>
        <button className="add-btn" onClick={() => navigate("/create-user")}>
          + Add User
        </button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.contactNo}</td>
                <td>
                  <button className="view-btn" onClick={() => navigate(`/view-user/${user.id}`)}>
                    View
                  </button>
                  <button className="edit-btn" onClick={() => navigate(`/edit-user/${user.id}`)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>

      </table>
    </section>
  );
}

export default ViewUserDetails;
