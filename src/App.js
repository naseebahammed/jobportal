import "./App.css";
import Hero from "./Pages/Hero/Hero";
import Navbar from "./comp/Navbar/Navbar";
import JobList from "./Pages/Jobs/JobList";
import JobCategories from "./Pages/Jobs/JobCategories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <JobList />
      <JobCategories />
    </div>
  );
}

export default App;
