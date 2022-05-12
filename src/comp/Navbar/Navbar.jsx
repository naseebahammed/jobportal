import "./Navbar.scss";

function Navbar() {
  return (
    <div className="header">
      <img
        src="http://www.btrac.in/assets/img/site-header-logo.png"
        alt="logo"
        className="header-logo"
      />
      <ul className="header-items">
        <li>Courses</li>
        <li>Login</li>
        <li>
          <button>Register</button>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
