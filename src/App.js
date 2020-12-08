import React from "react";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import IconSection from "./components/IconSection";
import Timeline from "./components/TImeline";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <IconSection />
      <Portfolio />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
