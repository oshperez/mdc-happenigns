import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ position: "sticky", top: 0 }}>
      <nav className="container">
        <ul>
          <li>
            <strong>MDC Happenings</strong>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
