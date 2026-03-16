import express from "express";
import cors from "cors";
import eventsRoutes from "./routes/events.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/events", eventsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "MDC Happenings API running" });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
