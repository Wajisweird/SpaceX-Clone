import React from "react";
import Logo from "../Images/Logo.png";
import Link2 from "../Images/secondlink.jpg";

export default function Secondlink() {
  return (
    <div>
      <div className="container-fluid" id="backLaunch">
        <div className="logo">
          <img src={Logo} alt="/" className="mt-4 ms-4" href="./First.js" />
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
        <br />
      </div>
      <div className="container-fluid" id="firstLinkback">
        <a href="/" className="ms-5" id="backBtn">
          <i class="fa-solid fa-angle-left"></i> BACK TO LAUNCHES
        </a>
        <br />
        <br />
        <img src={Link2} alt="/" id="firstLink" />
        <br />
        <br />
        <br />
        <br />
        <p className="textt text-white-50 ms-3" data-aos="fade-up">
          OCTOBER 13, 2023
        </p>
        <h2 className="head1 ms-3" data-aos="fade-up">
          PSYCHE MISSION
        </h2>
        <br />
        <div className="container" data-aos="fade-up">
          <div
            className="row text-white d-flex justify-content-evenly"
            id="rowData1"
          >
            <div className="col-6" id="firstCol">
              On Friday, October 13 at 10:19 a.m. ET, Falcon Heavy launched
              NASA's Psyche mission to an interplanetary transfer orbit from
              Launch Complex 39A (LC-39A) at Kennedy Space Center in Florida.
              This was the fourth launch for the side boosters, both of which
              previously supported the USSF-44, USSF-67, and Hughes JUPTER 3
              missions.
            </div>
            <div className="col-6" id="seCol">
              The <b>Psyche spacecraft</b> will travel to a metal-rich asteroid
              of the same name orbiting the Sun between Jupiter and Mars in
              pursuit of studying the exposed nickel-iron core of an early
              planet, one of the building blocks of our solar system. The
              mission will also demonstrate NASA’s first deep space test of the{" "}
              <b>Deep Space Optical Communications (DSOC) system </b>–
              high-bandwidth optical communications through space and back to
              Earth – from distances far exceeding the Moon – using a
              near-infrared laser.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="container-fluid" id="footer">
          <p className="footerText text-white-50" id="lastFooter">
            SPACEX &copy; 2023
          </p>
          <p className="he text-white" id="lastFooter">
            PRIVACY POLICY
          </p>
          <p className=" hh text-white" id="lastFooter">
            SUPPLIERS
          </p>
        </div>
        <div className="container-fluid" id="myName">
          <p className="text-center text-white-50">
            Cloned by{" "}
            <a
              href="https://www.linkedin.com/in/wajahathussain17/"
              target="blank"
            >
              Qazi Wajahat Hussain
            </a>{" "}
            with ❤️.
          </p>
        </div>
      </div>
    </div>
  );
}
