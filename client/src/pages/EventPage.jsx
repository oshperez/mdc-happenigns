import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function EventsPage() {
  const [searchParams] = useSearchParams();
  const campus = searchParams.get("campus");

  const events = [
    { id: 1, title: "Tech Club Meeting", campus: "Kendall", date: "May 10" },
    { id: 2, title: "Art Exhibition", campus: "Wolfson", date: "May 11" },
    { id: 3, title: "Career Fair", campus: "North", date: "May 15" },
    { id: 4, title: "Music Festival", campus: "Homestead", date: "May 20" },
  ];

  const filteredEvents = !campus
    ? events
    : events.filter((event) => event.campus === campus);

  return (
    <div className="grid">
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
              <strong>Date:</strong> {event.date}
            </p>

            <button>View Event</button>
          </article>
        ))
      )}
    </div>
  );
}
