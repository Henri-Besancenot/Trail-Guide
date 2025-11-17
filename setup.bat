    @echo off
    rem change to script folder
    cd /d "%~dp0"

    rem frontend: open new cmd window, run install then dev
    cd frontend
    start "Frontend" cmd /k "npm install && npm run dev"
    cd ..

    rem backend: open new cmd window, run install then dev
    cd backend
    start "Backend" cmd /k "npm install && npm run dev"
    cd ..

    rem start MongoDB service (service name may be MongoDB or MongoDBServer)
    net start MongoDB 2>nul || net start "MongoDB Server" 2>nul
    exit