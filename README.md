# WEB103 Project 3 - _MDC-Hppenings_

Submitted by: **Osmani Hernandez**

About this web app: **MDC Happenings is a web application that allows students to explore events happening across different Miami Dade College campuses. The application displays events stored in a PostgreSQL database hosted on Render and presents them in a responsive grid interface built with React. Users can filter events by campus, view details about each event, and see how many days remain before the event occurs through a countdown display.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT \* FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort _or_ filter events by location.
- [x] Events display a countdown showing the time remaining before that event
  - [ ] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<div>
    <a href="https://www.loom.com/share/9a701ca8e041452ba5aafd9220b156d4">
      <p>MDC-Happenings  - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/9a701ca8e041452ba5aafd9220b156d4">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/9a701ca8e041452ba5aafd9220b156d4-a92fdf0f25ee70bb-full-play.gif#t=0.1">
    </a>
  </div>

## Notes

One of the main challenges in building this project was configuring the backend connection to the Render PostgreSQL database. Initially, issues occurred related to environment variables, SSL configuration, and database authentication. After resolving those issues, the API successfully connected to the remote database and retrieved event data.

Another challenge involved correctly formatting and displaying event dates returned from PostgreSQL. The API returned ISO date strings, which required conversion on the client side to display readable dates and calculate the countdown for each event.

Finally, implementing a responsive layout for the event cards required experimentation with CSS Grid to ensure that cards automatically adjust and appear side-by-side when space is available while remaining mobile-friendly.

## License

Copyright [1995] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
