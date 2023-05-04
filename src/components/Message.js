import React from "react";
import Totoro from '../assets/totoro-sleeping.webp'

export default function Message() {
  return (
    <div className="message">
        <img className="totoro" src={Totoro} alt="Totoro Sleeping"/>
        <p>This page is currently in the works, please come back later :)</p>
    </div>
  );
}