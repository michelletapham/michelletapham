import React, { PureComponent } from "react";
import { Routes, Route } from "react-router-dom";
import './styling/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Photo from "./pages/Photo";
import Moodboard from "./pages/Moodboard.js";
import About from "./pages/About";
import Pilot from "./blog-posts/Pilot";
import TwoYearsSingle from "./blog-posts/TwoYearsSingle";
import CovidThoughts from "./blog-posts/CovidThoughts";


export default class App extends PureComponent {

  render() {
    return (
      <div className="app ">
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/photo' element={<Photo/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
        <Routes>
          <Route path='/blog/pilot' element={<Pilot/>} />
          <Route path='/blog/two-years-being-single' element={<TwoYearsSingle/>} />
          <Route path='/blog/scattered-quarantine-thoughts' element={<CovidThoughts/>} />
        </Routes>
      </div>
    );
  }
}