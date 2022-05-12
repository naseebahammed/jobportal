import "./JobsCard.scss";
import BtnGreen from "../../comp/Btn/BtnGreen";

function JobsCard() {
  return (
    <div className="jobCard">
      <div className="jobCard-head">
        <p>Full Time</p>
        <div className="jobCard-head_icon">
          <i className="fa fa-heart"></i>
        </div>
      </div>
      <div className="jobCard-img">
        <img
          src="assets/img/company_logo_1.png"
          alt=""
          className="jobCard-logo"
        />
      </div>
      <div className="jobCard-text">
        <h3>Product Redesign</h3>
        <p>2708 Scenic Way, IL 62373</p>
      </div>
      <BtnGreen text="Apply Now" />
    </div>
  );
}
export default JobsCard;
