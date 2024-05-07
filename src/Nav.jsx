import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./MyContext";
import { useNavigate } from "react-router-dom";
import avatar from "./img/Avatar.jpg";

function Nav() {
  const [users, setUsers] = useState();
  const { logoutUser } = useContext(EventContext);

  useEffect(() => {
    const userDataString = sessionStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUsers(userData.user);
    }
  }, []);
  // const [users, setUsers] = useState();
  // // console.log(users.user.fullname);

  // useEffect(() => {
  //   const userDataString = sessionStorage.getItem("userData");
  //   if (userDataString) {
  //     const userData = JSON.parse(userDataString);
  //     setUsers(userData);
  //   }
  // }, []);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    logoutUser();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent flex justify-content-between align-items-center">
      <div className="">
        <i className="navbar-brand bi bi-justify-left fs-4 bg-black"></i>
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
      </div>
      {/* <div className="collapse navbar-collapse" id="collapsibleNavId">
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
              {users && users["username"]}
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
      </div> */}

      {users && (
        <div className="card px-1 mb-0 ">
          <div
            className="card-content px-2 py-1 d-flex justify-content-end align-items-center nav-link "
            id="dropdownId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="">
              <p className="m-0">{users["username"]}</p>
            </div>
            <img
              src={avatar}
              className="card-img ms-2"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "100%",
              }}
              alt=""
            />
          </div>
          <div className="dropdown-menu" aria-labelledby="dropdownId">
            <a className="dropdown-item" href="#">
              Profile
            </a>
            <a className="dropdown-item" href="#">
              Setting
            </a>
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
