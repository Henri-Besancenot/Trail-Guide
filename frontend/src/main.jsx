import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import TrailsList from './pages/TrailsList.jsx';
import Trail from './pages/Trail.jsx';
import AboutUs from './pages/AboutUs.jsx';
import App from './App.jsx'
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import MyProfile from './pages/MyProfile.jsx';
import CreateTrail from './pages/CreateTrail.jsx';
import NearbyTrails from './pages/NearbyTrails.jsx';

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/trails/all" element={<TrailsList />} />
        <Route path="/trails/all/:id" element={<Trail />} />
        <Route path="/trails/nearby" element={<NearbyTrails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/users/:id" element={<MyProfile />} />
        <Route path="/trails/new" element={<CreateTrail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

