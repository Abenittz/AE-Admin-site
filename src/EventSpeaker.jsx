import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const EventSpeaker = () => {
  const location = useLocation();
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = location.state;
      setSpeakers(data.event.speakers);
    };

    fetchData();
  }, [location]);
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
          {speakers.map((speaker, index) => (
            <tr key={index}>
              <th scope="row">{speaker.id}</th>
              <td>{speaker.fullname}</td>
              <td>{speaker.organization}</td>
              <td>{speaker.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        className="btn btn-success fw-bold"
        to={`/events/${location.state.event.id}/speakers/add`}
        state={{ event: location.state.event }}
      >
        <i class="bi bi-plus-circle"></i> Add Speaker
      </Link>
    </div>
  );
};

export default EventSpeaker;
