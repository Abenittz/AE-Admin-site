import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState();
  // console.log(users.user.fullname);

  useEffect(() => {
    const userDataString = sessionStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUsers(userData);
    }
  }, []);

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
          {users ? (
            <tr>
              <th scope="row">1</th>
              <td>{users.user.fullname}</td>
              <td>{users.user.email}</td>
              <td>superUser</td>
            </tr>
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
