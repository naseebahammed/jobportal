import SearchBtn from "../../comp/SearchBtn/SearchBtn";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <h2 className="hero-heading">
        Search Between More Then <br />
        50,000 Open Jobs.
      </h2>
      <div className="hero-keyword">
        <p>Trending Jobs Keywords:</p>

        <ul className="hero-list">
          <li>Web Designer</li>
          <li>Web Developer</li>
          <li>IOS Developer</li>
          <li>Android Developer</li>
        </ul>
      </div>

      <SearchBtn />
    </div>
  );
}

export default Hero;
