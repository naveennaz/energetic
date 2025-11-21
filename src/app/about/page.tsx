export default function About() {
  return (
    <>
      <section className="about_section layout_padding sub_page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="img_container">
                <div className="img-box">
                  <img src="/documents/14072024/who-we-are.jpeg" alt="Energetic Contracting - Who we are" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Who Are We?</h2>
                </div>
                <p>
                  Welcome to <strong>Energetic Contracting LLC</strong>, a distinguished leader in the Fitness and Wellness industry based in Abu Dhabi, UAE.
                </p>
                <p>
                  At Energetic, we are committed to providing the highest standards of quality to ensure a safe and blissful experience in your fitness and wellness journey, be it residential or corporate.
                </p>
                <p>
                  Discover how Energetic can elevate your space with our integrated solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Why Choose Energetic?</h2>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="box text-center" style={{background: '#fff', padding: '40px 20px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                <div style={{fontSize: '48px', color: '#0066cc', marginBottom: '20px'}}>
                  <i className="fa fa-star"></i>
                </div>
                <h3 style={{fontSize: '22px', fontWeight: '600', marginBottom: '15px'}}>Premium Quality</h3>
                <p style={{color: '#666'}}>
                  We provide only the highest quality equipment and installations, ensuring durability and excellence.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box text-center" style={{background: '#fff', padding: '40px 20px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                <div style={{fontSize: '48px', color: '#00c896', marginBottom: '20px'}}>
                  <i className="fa fa-users"></i>
                </div>
                <h3 style={{fontSize: '22px', fontWeight: '600', marginBottom: '15px'}}>Expert Team</h3>
                <p style={{color: '#666'}}>
                  Our experienced professionals deliver expert installation and ongoing maintenance support.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box text-center" style={{background: '#fff', padding: '40px 20px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                <div style={{fontSize: '48px', color: '#ff6b6b', marginBottom: '20px'}}>
                  <i className="fa fa-check-circle"></i>
                </div>
                <h3 style={{fontSize: '22px', fontWeight: '600', marginBottom: '15px'}}>Trusted Partner</h3>
                <p style={{color: '#666'}}>
                  Serving Abu Dhabi and UAE with reliable fitness solutions for residential and commercial spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
