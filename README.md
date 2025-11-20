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
- **Database:** MongoDB (using MongoDB Atlas)
- **Design & Prototyping:** Figma or Canva
- **Maps & Visualization:** Google Maps API with GPX track display
- **Server & Proxy:** The server is from AWS and use NGinx

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
- [ ] Integrate Google Maps API and GPX track display
- [ ] Implement trail browsing and filtering features
- [ ] Add trail detail pages with descriptions, photos, and maps

### Backend
- [x] Set up backend with Node.js (JavaScript/TypeScript)
- [ ] Design and create MongoDB database schema
- [ ] Enable trail editing functionality for users
- [ ] Populate database with sample trail data
- [ ] Implement trail generation feature based on user-provided information (estimated difficulty, time, points of interest, etc.)
