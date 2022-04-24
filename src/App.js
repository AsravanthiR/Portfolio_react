import "./App.css";
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./home/Home";
import Resume from "./components/Resume";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Resume />
    </main>
  );
}
