import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-elem">
        <div className="footer-main">
          <div className="footer-desc">
            <div className="footer-logo">
              <img
                src="http://www.btrac.in/assets/img/site-header-logo.png"
                alt=""
              />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of printing and type setting
              industry. Lorem Ipsum been industry standard dummy text ever
              since.
            </p>
            <ul className="footer-socialLinks">
              <li>
                <i class="fa fa-facebook"></i>
              </li>
              <li>
                <i class="fa fa-google"></i>
              </li>

              <li>
                <i class="fa fa-twitter"></i>
              </li>
              <li>
                <i class="fa fa-instagram"></i>
              </li>
            </ul>
          </div>
          <div className="footer-catogories">
            <h2 className="footer-head">Job Categories</h2>
            <ul>
              <li>
                <i class="fa fa-angle-double-right"></i> Work from Home
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Internship Job
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Freelancer Job
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Part Time Job
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Full Time Job
              </li>
            </ul>
          </div>
          <div className="footer-catogories">
            <h2 className="footer-head">Job Type</h2>
            <ul>
              <li>
                <i class="fa fa-angle-double-right"></i> Create Account
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Career Counseling
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> My Oficiona
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> FAQ
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Report a Problem
              </li>
            </ul>
          </div>
          <div className="footer-catogories">
            <h2 className="footer-head">Resources</h2>
            <ul>
              <li>
                <i class="fa fa-angle-double-right"></i> My Account
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Support
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> How It Works
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Underwriting
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Employers
              </li>
            </ul>
          </div>
          <div className="footer-catogories">
            <h2 className="footer-head">Quick Links</h2>
            <ul>
              <li>
                <i class="fa fa-angle-double-right"></i> Jobs Listing
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> About Us
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Contact Us
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Privacy Policy
              </li>
              <li>
                <i class="fa fa-angle-double-right"></i> Term &#38; Condition
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="footer-copyright">
          Copyright © 2021 All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
export default Footer;
