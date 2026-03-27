# Bowling League API

A full-stack web application for managing bowling league tournaments, players, and match results. Built with React + TypeScript on the frontend and ASP.NET Core on the backend.

## Prerequisites

- **Node.js** 18+ and npm (for frontend development)
- **.NET SDK 10** (for backend development)

## Installation

### Frontend Dependencies
```bash
npm --prefix frontend install
```

### Backend Dependencies
```bash
dotnet restore backend/
```

## Running the Project

The frontend and backend run on separate ports and must be started independently.

### Start Frontend (Vite Dev Server)
```bash
npm run frontend:dev
```
Frontend will be available at **http://localhost:5173**

### Start Backend (ASP.NET Core API)
```bash
dotnet run --project backend/
```
Backend API will be available at **http://localhost:5000** (HTTP) or **http://localhost:5001** (HTTPS)

## Project Structure

```
.
├── frontend/              # React + TypeScript + Vite application
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── App.tsx       # Main application component
│   │   └── main.tsx      # Entry point
│   └── package.json      # Frontend dependencies
│
├── backend/               # ASP.NET Core REST API
│   ├── Controllers/      # API endpoint handlers
│   ├── Models/          # Data models and EF Core DbContext
│   ├── Program.cs       # Application setup and middleware configuration
│   ├── appsettings.json # Backend configuration
│   └── BowlingLeagueApi.csproj # .NET project file
│
└── package.json          # Root scripts for frontend tooling
```

## Tech Stack

### Frontend
- **React 19** — UI framework
- **TypeScript** — Type-safe JavaScript
- **Vite** — Lightning-fast build tool and dev server
- **CSS 3** — Styling

### Backend
- **ASP.NET Core 10** — Web API framework
- **Entity Framework Core 10** — ORM for database access
- **SQLite** — Lightweight relational database
- **CORS** — Configured to accept requests from React app

## Available Scripts

### Frontend Commands (from root)
- `npm run frontend:dev` — Start development server
- `npm run frontend:build` — Build for production
- `npm run frontend:lint` — Run ESLint code quality checks
- `npm run frontend:preview` — Preview production build locally

### Backend Commands
Use `dotnet` CLI directly:
- `dotnet run --project backend/` — Start the API
- `dotnet build backend/` — Build the project
- `dotnet test backend/` — Run tests (if included)
- `dotnet ef database update --project backend/` — Apply EF Core migrations

## API Documentation

API endpoints are documented in [backend/BowlingLeagueApi.http](backend/BowlingLeagueApi.http). This file is compatible with VS Code REST Client extension and similar tools for testing API calls.

## Development Notes

- **CORS Configuration** — The backend is configured to accept requests from `http://localhost:5173` and `http://localhost:5174` (Vite default ports). Adjust in [backend/Program.cs](backend/Program.cs) if using a different frontend port.
- **Database** — SQLite database file is stored in the `backend/` directory as `BowlingLeague.sqlite`.
- **Hot Reload** — Frontend supports fast refresh during development. Backend can be restarted with `dotnet run --project backend/` to apply code changes.


