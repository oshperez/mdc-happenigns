import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { formatDate, daysLeft } from "../utils/helpers.js";

export default function EventsPage() {
  const [searchParams] = useSearchParams();
  const [events, setEvents] = useState([]);

  const campus = searchParams.get("campus");

  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredEvents = !campus
    ? events
    : events.filter((event) => event.campus === campus);

  return (
    <div className="event-grid">
      {filteredEvents.length === 0 ? (
        <p>No events in this campus</p>
      ) : (
        filteredEvents.map((event) => (
          <article key={event.id}>
            <h3>{event.title}</h3>

            <p>
              <strong>Campus:</strong> {event.campus}
            </p>

            <p>
              <strong>Date:</strong> {formatDate(event.date)}
            </p>
            <p>
              <strong>Countdown</strong> {daysLeft(event.date)}
            </p>

            <button>View Event</button>
          </article>
        ))
      )}
    </div>
  );
}
