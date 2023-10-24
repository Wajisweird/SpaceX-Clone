import React from "react";
import Logo from "../Images/Logo.png";
import Last from "../Images/lastlink.jpg";

export default function Lastlink() {
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
        <img src={Last} alt="/" id="lastLink" className="mx-5" />
        <br />
        <br />
        <br />
        <br />
        <p className="textt text-white-50 ms-3" data-aos="fade-up">
          APRIL 20, 2023
        </p>
        <h2 className="head1 ms-3" data-aos="fade-up">
          STARSHIP FLIGHT TEST
        </h2>
        <br />
        <div className="container" data-aos="fade-up">
          <div
            className="row text-white d-flex justify-content-evenly"
            id="rowData1"
          >
            <div className="col-6" id="firstCol">
              Starship gave us quite a show during today’s first flight test of
              a fully integrated <b>Starship and Super Heavy</b> rocket from
              Starbase in Texas. <br />
              <br /> At 8:33 a.m. CT, Starship successfully lifted off from the
              orbital launch pad for the first time. The vehicle cleared the pad
              and beach as Starship climbed to an apogee of ~39 km over the Gulf
              of Mexico – the highest of any Starship to-date. The vehicle
              experienced multiple engines out during the flight test, lost
              altitude, and began to tumble. The flight termination system was
              commanded on both the booster and ship. As is standard procedure,
              the pad and surrounding area was cleared well in advance of the
              test, and we expect the road and beach near the pad to remain
              closed until tomorrow.
            </div>
            <div className="col-6" id="seCol">
              With a test like this, success comes from what we learn, and we
              learned a tremendous amount about the vehicle and ground systems
              today that will help us improve on future flights of Starship.{" "}
              <br />
              <br />
              Thank you to our customers, Cameron County, and the wider
              community for the continued support and encouragement. And
              congratulations to the entire SpaceX team on an exciting first
              flight test of Starship!
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
