import React from "react";

function Users() {
  return (
    <div>
      <table class="table caption-top rounded mt-2 bg-white">
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
          <tr>
            <th scope="row">1</th>
            <td>Duresa Wata</td>
            <td>duresa@gmail.com</td>
            <td>Superuser</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Kuma Telila</td>
            <td>kuma@gmail.com</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>
      <a href="/users/add" className="btn btn-success fw-bold">
        <i class="bi bi-plus-circle"></i> Add User
      </a>
    </div>
  );
}

export default Users;
