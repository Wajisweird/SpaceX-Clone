import React from "react";

export default function Footer() {
  return (
    <div>
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
  );
}
