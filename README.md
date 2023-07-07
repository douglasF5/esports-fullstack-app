# Esports full-stack app

-   [About](#about)
-   [Web client](#web-client)
-   [Web server/API](#web-serverapi)
-   [Mobile client](#mobile-client)
-   [Installation](#installation)
-   [Extra notes](#extra-notes)

<br>

## About

The application allows users to publish their availability, find and connect to other users playing the same game, so they can play together.

In this project, the premise was to explore the basics of client-server architecture. The backend exposes a simple REST API to serve and create resources based on incoming requests. On the client side, the web and mobile apps are responsible for communicating with the server as well as providing an interface for handling user interactions.

<br>

## Web client

<img src=".github/project-screenshot-web.png"><br>

Web client built with ReactJS. The main features include listing games and creating ads.

### Tools

-   TypeScript
-   ReactJS
-   TailwindCSS
-   Radix UI
-   Axios

<br>

## Web server/API

<img src=".github/project-screenshot-backend.png"><br>

Rest API with routes for listing and creating resources.

### Tools

-   NodeJS
-   ExpressJS
-   Prisma ORM
-   SQLite
-   TypeScript

<br>

## Mobile client

<img src=".github/project-screenshot-mobile.png"><br>

The cross-platform mobile client is built with React Native. The main features include browsing ads and finding players.

### Tools

-   TypeScript
-   React Native
-   Expo

<br>

## Installation

-   Navigate to an application root directory (mobile, server, or web)
-   Install dependencies by running `npm install`
-   Run the application with `npm run dev`

Two things to keep in mind:

-   You may install and run the server before running the client apps
-   As of today, none of the applications in this project is ready for deployment

<br>

## Extra notes

- This project is purely a practical exercise intended for developing and/or showcasing my skills in the tools/techniques/concepts mentioned above. It's not meant to be a complete production-ready solution. Feel free to reach out if you have any questions or want to chat about it!
- This exercise was built following the lessons from [Rocketseat](https://www.rocketseat.com.br/)'s Ignite ReactJS program. It may or may not have been adapted/redesigned by me.
