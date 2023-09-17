# E-Commerce Project

Welcome to the E-Commerce Project! This project consists of two main components: a backend server and a frontend application. Follow the instructions below to set up and run both parts of the project.

## Backend Setup

### Prerequisites

- Node.js installed on your machine
- MongoDB database URL (you can use MongoDB Atlas or a local MongoDB instance)

### Instructions

1. Navigate to the `backend` folder:

2. Create a `.env` file in the `backend` folder and add the following configurations:

PORT=5000
MONGO_URI=<your MongoDB database URL>

Replace `<your MongoDB database URL>` with your actual MongoDB database URL and any desired port number.

3. Install the necessary backend dependencies:
   `npm install`

4. Start the backend server:
   `npm start`

This will run the backend server on the specified port (default is 5000).

## Frontend Setup

### Prerequisites

- Node.js installed on your machine

### Instructions

1. Navigate to the `frontend` folder:

2. Create a `.env` file in the `frontend` folder and add the following configuration:

REACT_APP_SERVER_DOMAIN=http://localhost:5000

Replace `http://localhost:5000` with the actual backend server URL and port where the backend is running.

3. Install the necessary frontend dependencies:
   `npm install`

4. Start the React frontend server:
   `npm start`

This will start the React development server and open the project in your default web browser.

## Accessing the Project

Once both the backend and frontend are up and running, you can access the project in your web browser by navigating to the frontend server URL (usually http://localhost:3000 by default).

You now have the E-Commerce project up and running with both the backend and frontend components.

Happy coding!
