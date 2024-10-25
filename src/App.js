// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
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
