import React from "react";
import Logo from "../Images/Logo.png";
import link1 from "../Images/firstlink.jpg";

export default function Firstlink() {
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
        <img src={link1} alt="/" id="firstLink" />
        <br />
        <br />
        <br />
        <br />
        <p className="textt text-white-50 ms-3" data-aos="fade-up">
          OCTOBER 17, 2023
        </p>
        <h2 className="head1 ms-3" data-aos="fade-up">
          STARLINK MISSION
        </h2>
        <br />
        <div className="container" data-aos="fade-up">
          <div
            className="row text-white d-flex justify-content-evenly"
            id="rowData1"
          >
            <div className="col-6" id="firstCol">
              On Tuesday, October 17 at 8:39 p.m. ET, Falcon 9 launched 22
              <b> Starlink</b> satellites to low-Earth orbit from Space Launch
              Complex 40 (SLC-40) at Cape Canaveral Space Force Station in
              Florida.
            </div>
            <div className="col-6" id="seCol">
              This is the 16th flight for the first stage booster supporting
              this mission, which previously launched GPS III Space Vehicle 04,
              GPS III Space Vehicle 05, Inspiration4, Ax-1, Nilesat 301, OneWeb
              Launch 17, ARABSAT BADR-8, and now nine Starlink missions.
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
