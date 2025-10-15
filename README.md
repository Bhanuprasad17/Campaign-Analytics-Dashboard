# Campaign Dashboard Project

This is a full-stack web application for managing marketing campaigns. It consists of a React frontend built with Vite and Tailwind CSS, and an Express.js backend that connects to a Supabase database for data storage and retrieval.

## Features

- View a list of campaigns with details like name, status, clicks, cost, and impressions.
- Add new campaigns through the API.
- Responsive UI built with React and styled with Tailwind CSS.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A [Supabase](https://supabase.com/) account and project set up with a `campaigns` table.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   cd ..
   ```

3. Install dependencies for the server:
   ```
   cd server
   npm install
   cd ..
   ```

## Setup

1. Create a `.env` file in the `server` directory with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   PORT=5000  # Optional, defaults to 5000
   ```

   Replace `your-supabase-url` and `your-supabase-anon-key` with the actual values from your Supabase project dashboard.

2. Ensure your Supabase database has a `campaigns` table with columns: `id` (primary key), `Name`, `Status`, `Clicks`, `Cost`, `Impressions`.

## Running the Project

1. Start the backend server:
   ```
   cd server
   npm start
   ```
   The server will run on `http://localhost:5000` (or the port specified in `.env`).

2. In a new terminal, start the frontend client:
   ```
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173` (default Vite port).

3. Open your browser and navigate to `http://localhost:5173` to view the application.

## API Endpoints

- `GET /` - Root endpoint, returns a status message.
- `GET /campaigns` - Fetch all campaigns.
- `POST /campaigns` - Add a new campaign. Body should include `Name`, `Status`, `Clicks`, `Cost`, `Impressions`.

## Development

- For client development: Use `npm run dev` in the `client` directory.
- For server development: Use `npm start` in the `server` directory (uses nodemon for auto-restart).
- Build the client for production: `npm run build` in the `client` directory.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, Lucide React icons
- **Backend**: Express.js, Supabase
- **Database**: Supabase (PostgreSQL)

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the ISC License.
