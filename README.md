# CodePilot (React + Express MERN Architecture)

This project has been converted from Next.js to a standard React + Express setup separated into two independent folders: `client` and `server`.

---

## Project Structure

```text
coding_agent/
├── client/                     # Frontend (Vite + React 18 + Tailwind CSS + Axios)
│   ├── src/
│   │   ├── App.tsx             # CodePilot Chat UI with Axios API calls
│   │   ├── main.tsx            # React root mount
│   │   └── index.css           # Tailwind styles
│   ├── index.html
│   ├── vite.config.ts          # Vite configuration with proxy to :5000
│   ├── tsconfig.json
│   └── package.json
│
└── server/                     # Backend (Node.js + Express + TypeScript)
    ├── src/
    │   ├── controllers/
    │   │   └── chatController.ts # Business logic / AI integration
    │   ├── routes/
    │   │   └── chatRoutes.ts     # Express router
    │   └── server.ts             # Express app setup and middleware
    ├── .env
    ├── tsconfig.json
    └── package.json
```

---

## How to Run

Run `client` and `server` in separate terminal windows:

### 1. Start the Backend Server (Terminal 1)

```bash
cd server
npm run dev
```

The Express API will be running at `http://localhost:5000`.

### 2. Start the Frontend Client (Terminal 2)

```bash
cd client
npm run dev
```

The React app will be running at `http://localhost:5173`.
