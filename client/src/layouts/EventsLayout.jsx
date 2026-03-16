import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function EventsLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const campus = searchParams.get("campus");

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ campus: value });
    }
  };
  return (
    <main className="container">
      <h2>Campus Events</h2>

      {/* Filter controls */}

      <div className="grid">
        <select value={campus || "all"} onChange={handleChange}>
          <option value="all">All Campuses</option>
          <option value="North">North Campus</option>
          <option value="Kendall">Kendall Campus</option>
          <option value="Wolfson">Wolfson Campus</option>
          <option value="Medical">Medical Campus</option>
          <option value="Hialeah">Hialeah Campus</option>
          <option value="Homestead">Homestead Campus</option>
          <option value="West">West Campus</option>
          <option value="InterAmerican">InterAmerican Campus</option>
        </select>

        <button onClick={() => setSearchParams({})}>Show All Events</button>
      </div>
      <Outlet />
    </main>
  );
}

export default EventsLayout;
