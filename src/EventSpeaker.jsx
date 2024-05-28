import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { EventContext } from "./MyContext";

const EventSpeaker = () => {
  const [fullname, setFullname] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const { registerSpeaker } = useContext(EventContext);
  const { speakers } = useContext(EventContext);
  console.log(speakers);

  const location = useLocation();
  const data = location.state;
  console.log(data);
  const eventId = data.event.id;
  console.log(eventId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const speakerdata = {
      event: eventId,
      fullname,
      organization,
      role,
    };

    const handleSuccess = (speaker_registered) => {
      setFullname("");
      setOrganization("");
      setRole("");
    };
    const handleError = () => {
      alert("register failed");
    };

    registerSpeaker(speakerdata, handleSuccess, handleError);
  };

  return (
    <div>
      <table className="table caption-top rounded mt-2 bg-white">
        <caption className="text-black fs-4">Speakers</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Organization</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {speakers?.map((speaker) => (
            <tr key={speaker.id}>
              <th scope="row">{speaker.id}</th>
              <td>{speaker.fullname}</td>
              <td>{speaker.organization}</td>
              <td>{speaker.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Uncomment and update the Link if needed */}
      {/* 
      <Link
        className="btn btn-success fw-bold"
        to={`/events/${location.state.event.id}/speakers/add`}
        state={{ event: location.state.event }}
      >
        <i className="bi bi-plus-circle"></i> Add Speaker
      </Link>
      */}

      <button
        type="button"
        className="btn btn-success fw-bold"
        data-bs-toggle="modal"
        data-bs-target="#addSpeaker"
      >
        <i className="bi bi-plus-circle" /> Add Speaker
      </button>

      <div
        className="modal fade"
        id="addSpeaker"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <h3>Add Speaker</h3>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container text-white">
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
                  <div class="d-flex justify-content-end">
                    <button
                      type="button"
                      class="btn btn-secondary me-2"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Add Speaker
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSpeaker;
