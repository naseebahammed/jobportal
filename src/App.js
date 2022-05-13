import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./comp/Navbar/Navbar";
import Routes from "./Routes";
import Footer from "./comp/Footer/Footer";

// import CandidateLogin from "./Pages/Candidate/CandidateLogin";
// import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main">
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
