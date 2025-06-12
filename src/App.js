import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WelcomePopup from "./components/WelcomePopup";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <>
        <WelcomePopup />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
