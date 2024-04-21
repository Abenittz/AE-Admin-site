import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./MyContext";
import { useNavigate } from "react-router-dom";

function Nav() {
  // const [users, setUsers] = useState();
  // // console.log(users.user.fullname);

  // useEffect(() => {
  //   const userDataString = sessionStorage.getItem("userData");
  //   if (userDataString) {
  //     const userData = JSON.parse(userDataString);
  //     setUsers(userData);
  //   }
  // }, []);

  const handleLogout = async (e) => {
    e.preventDefault();

    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
      <i className="navbar-brand bi bi-justify-left fs-4"></i>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-justify"></i>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* {users.user.username.charAt(0).toUpperCase() +
                users.user.username.slice(1)} */}
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">
                Profile
              </a>
              <a className="dropdown-item" href="#">
                Setting
              </a>
              <button className="dropdown-item">Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
