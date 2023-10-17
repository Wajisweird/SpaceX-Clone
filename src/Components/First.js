import React from "react";
import Logo from "../Images/Logo.png";

export default function First() {
  return (
    <div>
      <div className="container-fluid" id="backOneimage">
        <div className="logo">
          <img src={Logo} alt="/" className="mt-4 ms-4" />
          <span className="anchorTags ms-5">
            <a href="/" id="anchor">
              FALCON 9
            </a>
            <a href="/" id="anchor">
              FALCON HEAVY
            </a>
            <a href="/" id="anchor">
              DRAGON
            </a>
            <a href="/" id="anchor">
              STARSHIP
            </a>
            <a href="/" id="anchor">
              HUMAN SPACEFLIGHT
            </a>
            <a href="/" id="anchor">
              RIDESHARE
            </a>
            <a href="/" id="anchor">
              STARSHIELD
            </a>
            <a href="/" id="anchor">
              STARLINK
            </a>
            <a href="/" id="anchor">
              SHOP
            </a>
          </span>
        </div>
        <div className="texts" data-aos="fade-up">
          <p className="text1">UPCOMING LAUNCH</p>
          <h1 className="head1">STARLINK MISSION</h1>
          <a href="/" className="btn41-43 btn-43 mt-3">
            LEARN MORE
          </a>
        </div>
        <br />
        <i class="fa-solid fa-chevron-down fa-fade fs-2xl" id="arrow1"></i>
      </div>
    </div>
  );
}
