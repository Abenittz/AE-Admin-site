import React, { useEffect, useState, useContext } from "react";
import { EventContext } from "./MyContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import HeaderAdmin from "./HeaderBak";
import imageUrl from "./img/event.jpg";
// import { FaEllipsisH } from "react-icons/fa";

function Dashboard() {
  // let { user } = useContext(EventContext);
  // console.log(user);
  const { events } = useContext(EventContext);
  const { speakers } = useContext(EventContext);
  const { sponsors } = useContext(EventContext);
  const { attendees } = useContext(EventContext);
  const location = useLocation();
  const data = location.state;
  console.log(data);
  console.log(events);
  const countEvents = events.length;
  const countSpeakers = speakers.length;
  const countSponsors = sponsors.length;
  const countAttendees = attendees.length;

  if (!events || events.length === 0) {
    return <div>Loading...</div>;
  }

  const upcomingevents = events.filter((event) => event.status === "upcoming");
  const firstSixEvents = upcomingevents.slice(0, Math.min(events.length, 6));

  const mostRecentEvent =
    firstSixEvents.length > 0
      ? firstSixEvents[firstSixEvents.length - 1]
      : null;

  return (
    // <div className="text-white">
    //   <h1>Welcome To Astu Events Admin Dashboard</h1>
    //   {user ? <p>Hello {user.username}</p> : <p>No User Found.</p>}
    //   <p className="fs-4">Use side menu to perform list of activites:</p>
    //   <ul>
    //     <li className="fs-5">Manage events.</li>
    //   </ul>
    // </div>
    <>
      <div className="container mt-5" id="headerAdmin">
        <div className="row">
          <div className="col-md-3">
            <div className="card border-start mt-1 p-3 d-flex flex-column">
              <div
                className="decore bg-primary position-absolute top-0 start-0 h-100 rounded-start"
                style={{ width: "6px" }}
              ></div>
              <div className="card-body ps-2">
                <h5 className="card-title text-muted mb-0  me-4">Events</h5>
                <h1 className="mb-0 mt-4">
                  {countEvents}
                  <span className="fs-3">+</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-start mt-1 p-3 d-flex flex-column">
              <div
                className="decore bg-primary position-absolute top-0 start-0 h-100 rounded-start"
                style={{ width: "6px" }}
              ></div>
              <div className="card-body ps-2">
                <h5 className="card-title text-muted mb-0  me-4">Speakers</h5>
                <h1 className="mb-0 mt-4">
                  {countSpeakers}
                  <span className="fs-3">+</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-start mt-1 p-3 d-flex flex-column">
              <div
                className="decore bg-primary position-absolute top-0 start-0 h-100 rounded-start"
                style={{ width: "6px" }}
              ></div>
              <div className="card-body ps-2">
                <h5 className="card-title text-muted mb-0  me-4">Sponsors</h5>
                <h1 className="mb-0 mt-4">
                  {countSponsors}
                  <span className="fs-3">+</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-start mt-1 p-3 d-flex flex-column">
              <div
                className="decore bg-primary position-absolute top-0 start-0 h-100 rounded-start"
                style={{ width: "6px" }}
              ></div>
              <div className="card-body ps-2">
                <h5 className="card-title text-muted mb-0  me-4">Attendees</h5>
                <h1 className="mb-0 mt-4">
                  {countAttendees}
                  <span className="fs-3">+</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5" id="headerAdmin">
        <div className="row">
          <div className="col">
            <HeaderAdmin imageUrl={imageUrl} className="card mt-3 p-5">
              <div className="card-title">
                <Link to={"/room"}>
                  <div className="" id="state-container">
                    <div id="dot-circle"></div>
                    <div>
                      <p className="m-0 fw-bold text-white">Live</p>
                    </div>
                  </div>
                </Link>

                <h1 className="mt-2 text-white">
                  {mostRecentEvent ? mostRecentEvent.title : "No Recent Event"}
                </h1>
                <h5 className="text-white">
                  Location:{" "}
                  {mostRecentEvent ? mostRecentEvent.address : "Speaker"}
                </h5>
              </div>
              <div className="card-body mt-5 p-0">
                <div className="mt-5">
                  <Link
                    to={`/speaker/${mostRecentEvent ? mostRecentEvent.id : 6}`}
                    className="btn btn-primary"
                  >
                    Go Live Now
                  </Link>
                </div>
              </div>
            </HeaderAdmin>
          </div>
        </div>
      </div>

      {/* This is the Event List */}
      <div className="container mt-5 mb-5 ">
        <div className="search-bar d-flex justify-content-end">
          <div className="search-field me-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
            ></input>
          </div>
          <div className="add-btn">
            <Link to={"/eventreg"} className="btn btn-primary">
              + Add Event
            </Link>
          </div>
        </div>
      </div>
      {events.map((event) => (
        <div className="container mt-3 mb-5">
          <div className="card">
            <div className="card-container d-flex flex-row">
              {/* <div className="img-box w-25">
                <div className="img-container">
                  <img className="card-img-top" src={imageUrl} alt="..." />
                </div>
              </div> */}
              <div className="card-body">
                <div className="header-container d-flex justify-content-between align-items-center">
                  <div className="header">
                    <h4 className="card-title m-0">{event.title}</h4>
                    <p className="text-muted m-0">Location: {event.location}</p>
                  </div>
                  <div className="speakers ">
                    <h5 className="m-0">Chapi Menge 2 others</h5>
                  </div>

                  <div className="start-date">
                    <p className="m-0 ">{event.start_date}</p>
                    <p className="text-muted m-0">Start Date</p>
                  </div>
                  <div className="end-date">
                    <p className="m-0 ">{event.end_date}</p>
                    <p className="text-muted m-0">End Date</p>
                  </div>

                  {/* <div class="dropup">
                    <a
                      class="btn btn-outline-secondary"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    > */}
                  {/* <FaEllipsisH /> Detail */}
                  {/* </a>

                    <ul class="dropdown-menu">
                      <li>
                        <Link
                          to={`/admindetail/${event.id}`}
                          state={{ event: event }}
                          className="dropdown-item"
                        >
                          Detail
                        </Link>
                      </li>
                    </ul>
                  </div> */}

                  {/* <div className="option">
                    <Link
                      to={`/admindetail/${event.id}`}
                      state={{ event: event }}
                      className="text-secondary fw-bold text-center"
                    >
                      <FaEllipsisH />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Dashboard;
