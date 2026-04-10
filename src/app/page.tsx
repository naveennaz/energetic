"use client";

import ContactComponent from "../components/ContactComponent";
import ProductsComponent from "../components/ProductsComponent";

export default function HomePage() {
  return (
    <>
      <div className="hero_area">
        <section className="slider_section">
          <video autoPlay muted loop playsInline id="myVideo">
            <source
              src="/documents/14072024/WhatsApp Video 2024-07-09 at 5.51.21 PM.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>
                          Experience the quality
                          <br />
                          <span>with Energetic!</span>
                        </h1>
                        <p>
                          Your trusted partner in fitness and wellness solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>
                          Your wellbeing is <br />
                          <span>our goal!</span>
                        </h1>
                        <p>
                          Elevate your fitness journey with Energetic&apos;s
                          top-tier solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container idicator_container"></div>
          </div>
          <style jsx>{`
            #myVideo {
              position: absolute;
              right: 0;
              bottom: 0;
              width: 100%;
              height: auto;
              z-index: -1;
            }
            .carousel-inner {
              position: relative;
              z-index: 1;
            }
          `}</style>
        </section>
      </div>

      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img_container">
                <div className="img-box">
                  <img
                    src="/documents/14072024/who-we-are.jpeg"
                    alt="Who we are"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-0">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Who Are We?</h2>
                </div>
                <p>
                  Welcome to Energetic Contracting LLC, a distinguished leader
                  in the Fitness and Wellness industry
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

      {/* Products Section */}
      <ProductsComponent />

      {/* Contact Section */}
      <ContactComponent />
    </>
  );
}
