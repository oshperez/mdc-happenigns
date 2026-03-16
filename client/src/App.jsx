import { useState } from "react";
import heroImage from "./assets/mdc-campuses.png";

export default function Home() {
  const [hovered, setHovered] = useState(null);

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
      <section style={{ position: "relative" }}>
        <img
          src={heroImage}
          alt="Miami Dade College Campuses"
          style={{
            width: "100%",
            height: "100vh",
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
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
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
