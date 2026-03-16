import events from "../data/events.js";
import { pool } from "./database.js";

async function seedDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title TEXT,
        campus TEXT,
        date DATE,
        location TEXT,
        description TEXT
      )
    `);

    console.log("Events table ready");

    for (const event of events) {
      await pool.query(
        `
        INSERT INTO events (title, campus, date, location, description)
        VALUES ($1, $2, $3, $4, $5)
        `,
        [
          event.title,
          event.campus,
          event.date,
          event.location,
          event.description,
        ],
      );
    }

    console.log("Events inserted successfully");
  } catch (error) {
    console.error(error);
  } finally {
    await pool.end();
  }
}

seedDatabase();
