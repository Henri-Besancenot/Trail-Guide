import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import TrailsList from './pages/TrailsList.jsx';
import Trail from './pages/Trail.jsx';
import AboutUs from './pages/AboutUs.jsx';
import App from './App.jsx'
import Contact from './pages/Contact.jsx';
import LoginSignUp from './pages/LoginSignUp.jsx';
import MyProfile from './pages/MyProfile.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/trails/:category" element={<TrailsList />} />
          <Route path="/trails/all/:id" element={<Trail />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/users/:id" element={<MyProfile />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

