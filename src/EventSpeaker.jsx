import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { EventContext } from "./MyContext";

const EventSpeaker = () => {
  const { speakers } = useContext(EventContext);
  console.log(speakers);

  return (
    <div>
      <table class="table caption-top rounded mt-2 bg-white">
        <caption className="text-white fs-4">Speakers</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Organization</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {speakers.map((speaker) => (
            <tr key={speaker.id}>
              <th scope="row">{speaker.id}</th>
              <td>{speaker.fullname}</td>
              <td>{speaker.organization}</td>
              <td>{speaker.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Link
        className="btn btn-success fw-bold"
        to={`/events/${location.state.event.id}/speakers/add`}
        state={{ event: location.state.event }}
      >
        <i class="bi bi-plus-circle"></i> Add Speaker
      </Link> */}
      <Link
        type="button"
        className="btn btn-success fw-bold"
        to={`/events/${location.state.event.id}/speakers/add`}
      >
        <i class="bi bi-plus-circle" /> Add Speaker
      </Link>
    </div>
  );
};

export default EventSpeaker;
