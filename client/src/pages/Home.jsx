import { useState } from "react";
import heroImage from "../assets/mdc-campuses.png";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const navigate = useNavigate();

  const campuses = [
    "North Campus",
    "Hialeah Campus",
    "Homestead Campus",
    "Kendall Campus",
    "West Campus",
    "Wolfson Campus",
    "Medical Campus",
    "InterAmerican Campus",
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover What’s Happening Across MDC</h1>
          <div>
            <p>Click on any campus to see events or </p>
            <Link
              to={"/events"}
              role="button"
              style={{ textTransform: "uppercase", cursor: "pointer" }}
            >
              See all events
            </Link>
          </div>
        </div>
        <img
          src={heroImage}
          className="hero-image"
          alt="Miami Dade College Campuses"
          style={{
            width: "100%",
            // height: "100vh",
            // objectFit: "cover",
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            background: "transparent",
          }}
        >
          {campuses.map((campus, index) => (
            <div
              key={campus}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() =>
                navigate(`/events?campus=${campus.trim().split(" ")[0]}`)
              }
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              {hovered === index && <button>{campus}</button>}
            </div>
          ))}
        </div>
      </section>
      <main className="fluid"></main>
    </>
  );
}
