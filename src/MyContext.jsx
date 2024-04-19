import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

// Create the context
const EventContext = createContext();

// Create a provider component
const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsFromServer = await fetchEvents();
        const speakersFromServer = await fetchSpeakers();
        const sponsorsFromServer = await fetchSponsors();
        const attendeesFromServer = await fetchAttendees();

        setSpeakers(speakersFromServer);
        setSponsors(sponsorsFromServer);
        setAttendees(attendeesFromServer);
        setEvents(eventsFromServer);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchSpeakers = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/speakers/");
    if (!res.ok) {
      throw new Error("Failed to fetch speakers");
    }
    return res.json();
  };

  const fetchSponsors = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/sponsors/");
    if (!res.ok) {
      throw new Error("Failed to fetch sponsors");
    }
    return res.json();
  };

  const fetchAttendees = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/attendees/");
    if (!res.ok) {
      throw new Error("Failed to fetch attendees");
    }
    return res.json();
  };

  const fetchEvents = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/events/");
    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
    return res.json();
  };

  // const getEvent = async (eventId) => {
  //   const res = await fetch(`http://10.240.68.67:8000/api/event/${eventId}`);
  //   const data = await res.json();
  //   return data.data;
  // };

  const createEvent = async (newEventData, onSuccess, onError) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/events/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEventData),
      });

      if (res.status === 201) {
        const createdEvent = await res.json();
        setEvents([...events, createdEvent]);
        onSuccess(createdEvent);
      } else {
        onError();
      }
    } catch (error) {
      onError();
    }
  };

  const editEvent = async (eventId, updatedEventData, onSuccess, onError) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/events/${eventId}/`, {
        method: "PUT", // Use PUT or PATCH method for editing
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEventData),
      });

      if (res.status === 200) {
        const updatedEvent = await res.json();
        // Update the events state to reflect the changes
        const updatedEvents = events.map((event) =>
          event.id === eventId ? updatedEvent : event
        );
        setEvents(updatedEvents);
        onSuccess(updatedEvent);
      } else {
        onError();
      }
    } catch (error) {
      onError();
    }
  };

  const deleteEvent = async (eventId, onSuccess, onError) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/events/${eventId}/`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Find the index of the event to be deleted in the local state
        const eventIndex = events.findIndex((event) => event.id === eventId);
        if (eventIndex !== -1) {
          // Create a new array without the deleted event
          const updatedEvents = [...events];
          updatedEvents.splice(eventIndex, 1);
          setEvents(updatedEvents);
          console.log("Event deleted successfully");
          onSuccess(); // Call the success callback
        }
      } else {
        console.error("Failed to delete event");
        onError(); // Call the error callback
      }
    } catch (error) {
      console.error("An error occurred while deleting the event", error);
      onError(); // Call the error callback
    }
  };

  const loginUser = async (userData, onSuccess, onError) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        onSuccess(data); // Send the entire response data to the success callback
      } else {
        onError();
      }
    } catch (error) {
      console.error("Login error:", error);
      onError();
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  const registerAttendee = async (attendeeData, onSuccess, onError) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/attendee/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(attendeeData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        onSuccess(data); // Send the entire response data to the success callback
      } else {
        onError();
      }
    } catch (error) {
      console.error("Attendee registration error:", error);
      onError();
    }
  };

  const registerSpeaker = async (speakerData, onSuccess, onError) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/speaker/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(speakerData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        onSuccess(data); // Send the entire response data to the success callback
      } else {
        onError();
      }
    } catch (error) {
      console.error("speaker registration error:", error);
      onError();
    }
  };

  const registerSponsor = async (sponsorData, onSuccess, onError) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/sponsor/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sponsorData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        onSuccess(data); // Send the entire response data to the success callback
      } else {
        onError();
      }
    } catch (error) {
      console.error("sponsor registration error:", error);
      onError();
    }
  };

  const registerSchedule = async (scheduleData, onSuccess, onError) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/schedule/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(scheduleData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        onSuccess(data); // Send the entire response data to the success callback
      } else {
        onError();
      }
    } catch (error) {
      console.error("schedule registration error:", error);
      onError();
    }
  };

  const registerRoomid = async (roomData, onSuccess, onError) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/roomId/register/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(roomData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        onSuccess(data);
      } else {
        onError();
      }
    } catch (error) {
      console.error("failed to send room id:", error);
      onError();
    }
  };

  const contextValue = {
    events,
    createEvent,
    editEvent,
    deleteEvent,
    loginUser,
    user,
    logoutUser,
    registerAttendee,
    registerSpeaker,
    registerSponsor,
    registerSchedule,
    registerRoomid,
    // getEvent,
    speakers,
    sponsors,
    attendees,
    loading,
    error,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};

export { EventProvider, EventContext };
