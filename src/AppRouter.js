import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Photo from "./pages/Photo";
import Currents from "./pages/Currents";
import Moodboard from "./pages/Moodboard.js";
import About from "./pages/About";

function AppRouter() {
    return(
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/photo' element={<Photo/>} />
                <Route path='/currents' element={<Currents/>} />
                <Route path='/moodboard' element={<Moodboard/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter