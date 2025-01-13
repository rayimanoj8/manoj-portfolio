import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Projects from "@/components/Projects/Projects.jsx";
import Home from "@/components/Home.jsx";
import About from "@/components/About/About.jsx";
import Contact from "@/components/Contact/Contact.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
