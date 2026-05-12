# Netflix Clone - MERN Stack

A full-stack Netflix clone built with MongoDB, Express, React, Node.js, and Tailwind CSS.

## Features

- **Authentication**: JWT-based auth with HTTP-only cookies.
- **TMDB Integration**: Real-time movie and TV show data.
- **Search**: Search for movies, TV shows, and people with history tracking.
- **Responsive UI**: Pixel-perfect design inspired by Netflix.
- **Watch Page**: YouTube trailer embedding and similar content recommendations.

## Setup

### Backend

1. Navigate to `/backend`.
2. Install dependencies: `npm install`.
3. Create a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   TMDB_API_KEY=your_tmdb_api_key
   NODE_ENV=development
   ```
4. Start dev server: `npm run dev`.

### Frontend

1. Navigate to `/frontend`.
2. Install dependencies: `npm install`.
3. Start dev server: `npm run dev`.

## Production Build

To build the project for production:

1. Build the frontend: `cd frontend && npm run build`.
2. Set `NODE_ENV=production` in `backend/.env`.
3. Start the backend: `cd backend && npm start`.
