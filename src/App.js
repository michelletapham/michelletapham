import React, { PureComponent } from "react";
import './styling/App.css';
import AppRouter from "./AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends PureComponent {
  render() {
    return (
      <div className="app fadeInUp-animation">
          <AppRouter/>
      </div>
    );
  }
}