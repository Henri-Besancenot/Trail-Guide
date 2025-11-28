# Trail-Guide

Trail-Guide is a web application built for the CS-E4400 - Design of WWW Services D course at Aalto University. It helps users discover and explore hiking trails with details such as distance, estimated duration, difficulty level, photos and points of interest.


## Quick Project Summary

- **Frontend:** React (Vite) + Tailwind CSS
- **Backend:** Node.js (Express) — planned support for MongoDB
- **UI toolkit:** shadcn/ui components (Radix + Tailwind)
- **Routing:** react-router-dom

## Focus Area

Our primary focus is on the User Interface (UI). Since clear presentation of maps and trail data is essential, we aim to design a clean, intuitive interface with effective filters and user-friendly map integration. The UI will be evaluated and improved through iterative methods such as Cognitive Walkthroughs and Think-Aloud protocols.

## Getting started (local development)

Prerequisites:
- Node.js (v18+ recommended)
- npm

1. Install dependencies

```bash
# from project root
cd frontend
npm install

cd ../backend
npm install
```

2. Run frontend (development)

```bash
cd frontend
npm run dev
# then open http://localhost:5173
```

3. Run backend (development)

```bash
cd backend
npm run dev
# or: node src/server.js
```

Notes:
- If `vite` is not globally available, use `npx vite dev`.
- If you add environment variables, create a `.env` file in the appropriate folder and add them there.

## Project structure (important folders)

```
frontend/
  ├─ public/           # public assets (favicon, static files)
  ├─ src/
  │   ├─ assets/       # images (logo.png, etc.)
  │   ├─ components/   # Header, Footer, Layout components
  │   ├─ pages/        # Route pages (Home, TrailsList, AboutUs)
  │   └─ main.jsx      # Router + app bootstrap
backend/
  ├─ src/              # Express server code
  └─ migrations/       # DB migrations (if used)
```

## Assets & Branding

- A project logo is available in `frontend/src/assets/logo.png`. The app also references `/logo.png` for the favicon. Import images using imports (e.g. `import logo from '@/assets/logo.png'`) or place the asset in `public/` and reference it as `/logo.png`.

## Tailwind CSS and shadcn/ui

- This project uses Tailwind CSS (v4) — note the PostCSS plugin `@tailwindcss/postcss` is required for this setup.
- shadcn/ui components are installed and configured; you can add new components with:

```bash
npx shadcn@latest add <component-name>
```

## Routing

- Client-side routing uses `react-router-dom`. Example routes included:
  - `/` → Home (App)
  - `/trails` → TrailsList
  - `/aboutus` → AboutUs

## Common commands

From repository root:

```bash
# Start frontend
cd frontend
npm run dev

# Start backend
cd backend
npm run dev

# Build frontend for production
cd frontend
npm run build
```

## Troubleshooting

- If you see import resolution errors (e.g. `Failed to resolve import "react-router-dom"`), ensure dependencies are installed:

```bash
cd frontend
npm install
```

- If Vite reports `vite is not recognized`, run with `npx vite dev`.


## Deployment to AWS EC2

### The server

To access the AWS EC2 instance, you need to connect to
```
https://670339745902.signin.aws.amazon.com/console
```
And login using the username and password that has been given to you.
You then need to access to the AWS console -> search for EC2 -> Show the dashboard -> Instances -> click on the ID -> Connect -> Connect. You'll then be on the EC2 Instance Connect.
/!\ To see the instance, you need to be connected to the Francfort eu-central-1 server.


Once you're connected, you'll find the server's code on 
```
/var/www/app
  ├─ frontend   # React / Vite / Tailwind
  └─ backend    # Node / Express / MongoDB
```
To access to this directory, run `cd /var/www/app` in the server's terminal
Once you want to deploy the code in the github repository, you need to run
```bash
cd /var/www/app
./deploy.sh
```
That basically do those steps:
- Pull the git repository to the server's code base
- Reinstall and run the frontend's package
- Reinstall and run the backend's package
- Run the database (not yet implemented)


## To Do

### Project Management
- [x] Set up project repository and initial file structure
- [x] Configure React + Vite + Tailwind CSS
- [ ] Write project documentation and usage instructions

### UI/UX Design
- [x] Design UI mockups in Figma or Canva
- [ ] Conduct UI evaluation (Cognitive Walkthroughs, Think-Aloud)
- [ ] Iterate on UI based on feedback

### Frontend
- [x] Choose frontend framework (React.js with Vite)
- [x] Set up Tailwind CSS for styling
- [x] Implement basic frontend layout and navigation
- [X] Integrate Google Maps API and GPX track display
- [X] Implement trail browsing and filtering features
- [X] Add trail detail pages with descriptions, photos, and maps

### Backend
- [x] Set up backend with Node.js (JavaScript/TypeScript)
- [X] Design and create MongoDB database schema
- [ ] Enable trail editing functionality for users
- [X] Populate database with sample trail data
- [ ] Implement trail generation feature based on user-provided information (estimated difficulty, time, points of interest, etc.)
