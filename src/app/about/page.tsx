export default function AboutPage() {
  return (
    <section
      className="about_section layout_padding"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img_container">
              <div className="img-box">
                <img src="/documents/14072024/who-we-are.jpeg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Who Are We?</h2>
              </div>
              <p>
                Welcome to Energetic Contracting LLC, a distinguished leader in
                the Fitness and Wellness industry
                <br />
                <br />
                At Energetic we are committed to provide the highest standards
                of quality to ensure a safe and blissful experience in your
                fitness and wellness journey be it residential or corporate.
                <br />
                <br />
                Discover how Energetic can elevate your space with our
                integrated solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
