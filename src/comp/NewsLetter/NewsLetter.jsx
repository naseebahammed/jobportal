import "./NewsLetter.scss";

function NewsLetter() {
  return (
    <div className="newsletter">
      <div className="newsletter-bg">
        <h1>Subscribe Our Newsletter!</h1>
        <p>
          Lorem Ipsum is simply dummy text printing and type setting industry
          Lorem Ipsum been industry standard dummy text ever since when unknown
          printer took a galley.
        </p>
        <div className="newsletter-btn">
          <div className="newsletter-btn-bg">
            <i className="ti-email theme-cl"></i>
            <input type="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsLetter;
