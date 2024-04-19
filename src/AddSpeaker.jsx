import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EventContext } from "./MyContext";

const AddSpeaker = () => {
  const [fullname, setFullname] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const { registerSpeaker } = useContext(EventContext);

  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;
  const eventid = data.event.id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const speakerdata = {
      event: eventid,
      fullname,
      organization,
      role,
    };

    const handleSuccess = (speaker_registered) => {
      navigate(0);
    };
    const handleError = () => {
      alert("register failed");
    };

    registerSpeaker(speakerdata, handleSuccess, handleError);
  };

  return (
    <div className="container text-white">
      <h2>Add Speaker</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="organization" className="form-label">
            Organization
          </label>
          <input
            type="text"
            className="form-control"
            id="organization"
            name="organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Speaker
        </button>
      </form>
    </div>
  );
};

export default AddSpeaker;
