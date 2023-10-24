import React from "react";
import Logo from "../Images/Logo.png";
import Launch from "../Images/testsection.jpg";
import First from "../Images/first.jpg";
import Second from "../Images/second.jpg";
import Third from "../Images/third.jpg";
import Fourth from "../Images/fourth.jpg";

export default function Launches() {
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
        <div className="container-fluid">
          <img src={Launch} alt="/" id="ImageLaunch" />
          <br />
          <br />
          <p className="textt text-white-50 ms-3" data-aos="fade-up">
            SEPTEMBER 3, 2023
          </p>
          <h2 className="head1 ms-3" data-aos="fade-up">
            DRAGON AND CREW-6 RETURN TO <br />
            EARTH
          </h2>
          <br />
          <div className="container-fluid" data-aos="fade-up">
            <div
              className="row text-white d-flex justify-content-evenly"
              id="rowData1"
            >
              <div className="col-6" id="firstCol">
                After almost 186 days in space, Dragon and Crew-6 NASA
                astronauts
                <b> Stephen Bowen</b> and <b>Woody Hoburg</b>, Rocosmos
                cosmonaut <b>Andrey Fedyaev</b>, and UAE (United Arab Emirates)
                astronaut <b>Sultan Alneyadi</b> returned to Earth and splashed
                down off the coast of Florida at 12:17 a.m. ET on Monday,
                September 4.
              </div>
              <div className="col-6" id="seCol">
                Falcon 9 <b>launched</b> Dragon and Crew-6 to the orbiting
                laboratory on Thursday, March 2 at 12:34 a.m. ET from Launch
                Complex 39A (LC-39A) at Kennedy Space Center in Florida.
              </div>
            </div>
            <br />
            <div className="row" id="reverse">
              <div className="col-3" id="colss" data-aos="fade-up">
                <img src={First} alt="/" id="sizingImg" />
                <p className="text-center text-white mt-2" id="nn">
                  Stephen Bowen
                </p>
              </div>
              <div className="col-3" id="colss" data-aos="fade-up">
                <img src={Second} alt="/" id="sizingImg" />
                <p className="text-center text-white mt-2" id="nn">
                  Warren "Woody" Hoburg
                </p>
              </div>
              <div className="col-3" id="colss" data-aos="fade-up">
                <img src={Third} alt="/" id="sizingImg" />
                <p className="text-center text-white mt-2" id="nn">
                  Andrey Fedyaev
                </p>
              </div>
              <div className="col-3" id="colss" data-aos="fade-up">
                <img src={Fourth} alt="/" id="sizingImg" />
                <p className="text-center text-white mt-2" id="nn">
                  Sultan Alneyadi
                </p>
              </div>
            </div>
          </div>
        </div>
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
