import React from "react";
import "./App.css";
import First from "./Components/First";
import UpcomingLaunch from "./Components/UpcomingLaunch";
import Second from "./Components/Second";
import Third from "./Components/Third";
import Fourth from "./Components/Fourth";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <>
        <First />
        <UpcomingLaunch />
        <Second />
        <Third />
        <Fourth />
        <Footer />
      </>
    </div>
  );
}
