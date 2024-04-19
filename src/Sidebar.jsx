import React, { useContext, useState } from "react";
import { EventContext } from "./MyContext";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo-5.png";
import "./style.css";

function Sidebar() {
  const [roomid, setRoomid] = useState();

  const { logoutUser } = useContext(EventContext);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    logoutUser();
    navigate("/login");
  };
  return (
    <div className="bg-white p-2 sidebar">
      <div className="m-2">
        {/* <i className="bi bi-bootstrap-fill me-3 fs-4"></i> */}
        <img src={logo} alt="" className="me-3 fs-4" width="30" height="24" />
        <span className="brand-name fs-4">AstuEvents</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a href="/" className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span>Dashboard</span>
        </a>

        <a href="/" className="list-group-item py-2">
          <i className="bi bi-house fs-5 me-3"></i>
          <span>Home</span>
        </a>

        <a href="/events" className="list-group-item py-2">
          <i className="bi bi-table fs-5 me-3"></i>
          <span>Events</span>
        </a>

        {/* <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <span>Report</span>
        </a> */}
        <a href="/speakers" className="list-group-item py-2">
          <i className="bi bi-megaphone fs-5 me-3"></i>
          <span>Speakers</span>
        </a>
        <a href="/sponsors" className="list-group-item py-2">
          <i className="bi bi-globe fs-5 me-3"></i>
          <span>Sponsors</span>
        </a>

        <a href="/users" className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i>
          <span>Users</span>
        </a>

        <a className="list-group-item py-2" onClick={handleLogout}>
          <i className="bi bi-power fs-5 me-3"></i>
          <span>Logout</span>
        </a>
      </div>
      <div className="form-group">
        <form className="card p-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="share link"
            value={roomid}
            onChange={(e) => setRoomid(e.target.value)}
            required
          ></input>
          <button type="submit" className="btn btn-primary">
            Share Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
