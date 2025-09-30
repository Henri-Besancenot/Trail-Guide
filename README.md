# Trail-Guide

Project for the CS-E4400 - Design of WWW Services D course at Aalto University.

## Project Overview

Trail-Guide is a web application designed to help users discover hiking trails. The site will provide comprehensive information about various trails, including:

- Distance
- Estimated duration
- Difficulty level
- Points of interest

Users can browse and edit trails, filter them by different criteria, and view detailed descriptions, photos, and maps.

## Technologies

- **Frontend:** React.js with Vite, Tailwind CSS
- **Backend:** JavaScript/TypeScript, Node.js
- **Database:** MongoDB
- **Design & Prototyping:** Figma or Canva
- **Maps & Visualization:** Google Maps API with GPX track display

To populate the database, we may extract publicly available trail data, focusing on routes relevant to our chosen region.

## Focus Area

Our primary focus is on the User Interface (UI). Since clear presentation of maps and trail data is essential, we aim to design a clean, intuitive interface with effective filters and user-friendly map integration. The UI will be evaluated and improved through iterative methods such as Cognitive Walkthroughs and Think-Aloud protocols.

## Development

### Frontend Setup
This React + Vite template provides a minimal setup to get React working with HMR and ESLint rules.

Currently using:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) with [Babel](https://babeljs.io/) for Fast Refresh
- Tailwind CSS for styling

### Running the Application
```bash
cd frontend
npm install
npm run dev
```

## To Do

### Project Management
- [x] Set up project repository and initial file structure
- [x] Configure React + Vite + Tailwind CSS
- [ ] Write project documentation and usage instructions

### UI/UX Design
- [ ] Design UI mockups in Figma or Canva
- [ ] Conduct UI evaluation (Cognitive Walkthroughs, Think-Aloud)
- [ ] Iterate on UI based on feedback

### Frontend
- [x] Choose frontend framework (React.js with Vite)
- [x] Set up Tailwind CSS for styling
- [ ] Implement basic frontend layout and navigation
- [ ] Integrate Google Maps API and GPX track display
- [ ] Implement trail browsing and filtering features
- [ ] Add trail detail pages with descriptions, photos, and maps

### Backend
- [ ] Set up backend with Node.js (JavaScript/TypeScript)
- [ ] Design and create MongoDB database schema
- [ ] Enable trail editing functionality for users
- [ ] Populate database with sample trail data
- [ ] Implement trail generation feature based on user-provided information (estimated difficulty, time, points of interest, etc.)
