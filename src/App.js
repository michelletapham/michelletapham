import React, { PureComponent } from "react";
import { Routes, Route } from "react-router-dom";
import './styling/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from "./pages/Blog";
import Photo from "./pages/Photo";
import About from "./pages/About";
import Pilot from "./blog-posts/Pilot";
import TwoYearsSingle from "./blog-posts/TwoYearsSingle";
import CovidThoughts from "./blog-posts/CovidThoughts";
import TwentyThreeYearsOld from "./blog-posts/23YearOld";
import GuideToNotPeakInCollege from "./blog-posts/GuideToNotPeakingInCollege";
import FarewellTo2023 from "./blog-posts/FarewellTo2023";
import TwentyFourYearsOld from "./blog-posts/24YearsOld";



export default class App extends PureComponent {

  render() {
    return (
      <div className="app ">
        <Routes>
            <Route path='/' element={<Blog/>} />
            <Route path='/photo' element={<Photo/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
        <Routes>
          <Route path='/blog/pilot' element={<Pilot/>} />
          <Route path='/blog/two-years-being-single' element={<TwoYearsSingle/>} />
          <Route path='/blog/scattered-quarantine-thoughts' element={<CovidThoughts/>} />
          <Route path='/blog/23-years-old' element={<TwentyThreeYearsOld/>} />
          <Route path='/blog/how-to-not-peak-in-college-and-enjoy-postgrad-life' element={<GuideToNotPeakInCollege/>} />
          <Route path='/blog/farewell-to-2023' element={<FarewellTo2023/>} />
          <Route path='/blog/24th-birthday' element={<TwentyFourYearsOld/>} />
        </Routes>
      </div>
    );
  }
}