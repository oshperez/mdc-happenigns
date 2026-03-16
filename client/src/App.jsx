import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import EventsPage from "./pages/EventPage";
import EventsLayout from "./layouts/EventsLayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsLayout />}>
            <Route index element={<EventsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
