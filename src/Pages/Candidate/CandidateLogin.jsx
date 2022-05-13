import "./CandidateLogin.scss";

function CandidateLogin() {
  return (
    <div className="candidateLogin">
      <form action="">
        <div className="candidateLogin-card">
          <div className="candidateLogin-card_inputs">
            <h4>Login</h4>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Address" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Contact" />
            <input type="text" placeholder="Qualification" />
            <input type="text" placeholder="Category" />
            <input type="input" placeholder="Resume" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Intersted Fields"
            ></textarea>
            <input type="text" placeholder="Linkedin URL" />
            <button>Sign Up</button>
          </div>
          <div className="candidateLogin-card_img"></div>
        </div>
      </form>
    </div>
  );
}
export default CandidateLogin;
