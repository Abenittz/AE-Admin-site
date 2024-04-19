import React, { useContext, useState } from "react";
import { EventContext } from "./MyContext";
import { useLocation, useNavigate } from "react-router-dom";

const Sharelink = () => {
  const [roomid, setRoomid] = useState();

  const { registerRoomid } = useContext(EventContext);

  //   const [eventid, setEventId] = useState();
  const location = useLocation();
  console.log(location);
  const url = location.pathname;

  const regex = /\/room\/(\d+)/;

  const match = url.match(regex);

  let eventid = null;
  if (match) {
    const number = match[1];
    eventid = number.toString();
  } else {
    console.log("Number not found in URL");
  }

  const handleRoomid = async (e) => {
    e.preventDefault();

    const roomData = {
      event: eventid,
      roomId: roomid,
    };

    const handleSuccess = (registered) => {
      console.log("succesdfully shared the link");
    };
    const handleError = () => {
      alert("register failed");
    };

    registerRoomid(roomData, handleSuccess, handleError);
  };

  return (
    <div className="form-group">
      <form className="card p-3" onSubmit={handleRoomid}>
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
  );
};

export default Sharelink;
