#!/bin/bash
set -e

cd /var/www/app

echo ">>> Git pull"
git pull origin main

echo ">>> Frontend: install + build"
cd frontend
npm install
npm run build

echo ">>> Backend: install + restart"
cd ../backend
npm install
pm2 restart backend

echo ">>> Déploiement terminé"
