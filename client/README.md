# AI & Robotics Summer Workshop

## Project Summary

AI & Robotics Summer Workshop is a full-stack web application designed to promote and manage workshop registrations for children interested in Artificial Intelligence, Robotics, and Coding.

The application provides a modern and responsive user interface where users can explore workshop details, learning outcomes, FAQs, and register for the program through an online registration form.

The registration form is connected to a Node.js and Express.js backend API that validates user input and stores registration data in MongoDB Atlas. The project follows a clean component-based architecture and includes responsive design, form validation, loading states, and API integration.

### Key Highlights

- Responsive React.js Frontend
- Express.js REST API
- MongoDB Atlas Integration
- Registration Form with Validation
- FAQ Accordion
- Loading & Success States
- Mobile Friendly Design
- Deployment Ready Architecture

## Tech Stack

### Frontend

- React.js
- Tailwind CSS
  

### Backend

- Node.js
- Express.js

### DataBase
-MongoDB

## Folder Structure

```text
AI-Robotics-Summer-Workshop
│
├── client
│   ├── public
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── index.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### Open Project

```bash
cd AI-Robotics-Summer-Workshop
```

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## Backend Setup

Open a new terminal:

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

## Environment Variables

### Client (.env)

```env
VITE_BASE_URL=http://localhost:5000/api
```

### Server (.env)

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
```


## Author

Gaurav
