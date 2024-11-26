// import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./index.css";



function App() {
  AOS.init();
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animation
      easing: 'ease-in-out',
      once: false, // whether animation should happen only once
      mirror: true, // whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <Router>
    <div className="App ">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
