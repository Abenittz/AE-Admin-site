import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./MyContext";
import { FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";

function Users() {
  const [eventusers, setEventusers] = useState();
  // console.log(users.user.fullname);
  const { eventUsers, toggleUserIsStaffById } = useContext(EventContext);
  console.log(eventUsers);

  // useEffect(() => {
  //   const userDataString = sessionStorage.getItem("userData");
  //   if (userDataString) {
  //     const userData = JSON.parse(userDataString);
  //     setUsers(userData);
  //   }
  // }, []);

  const handleAddAdmin = async (userId) => {
    try {
      await toggleUserIsStaffById(
        userId,
        () => {
          console.log("User is_staff toggled successfully");
          // Optionally, update the local state or perform any other actions after the toggle
        },
        () => {
          console.error("Failed to toggle user is_staff status");
          // Handle the error, e.g., show an error message to the user
        }
      );
    } catch (error) {
      console.error("Error toggling user is_staff status:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <table className="table caption-top rounded mt-2 bg-white">
        <caption className="text-white fs-4">Site Users</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {eventUsers !== null ? (
            eventUsers.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.is_staff === true ? <kbd>Admin</kbd> : "Atendee"}</td>
                <td>
                  <div className="dropup">
                    <a
                      className=""
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FaEllipsisH />
                    </a>

                    <ul class="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item pointer"
                          onClick={() => handleAddAdmin(user.id)}
                        >
                          {user.is_staff === true
                            ? "Remove Admin"
                            : "Add Admin"}
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                User not found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <a href="/users/add" className="btn btn-success fw-bold">
        <i className="bi bi-plus-circle"></i> Add User
      </a>
    </div>
  );
}

export default Users;
