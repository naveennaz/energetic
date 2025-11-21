'use client';

import ProductsSection from '@/components/ProductsSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section id="home" className="slider_section">
        <style dangerouslySetInnerHTML={{
          __html: `
            #myVideo {
              position: absolute;
              right: 0;
              bottom: 0;
              width: 100%;
              height: auto;
              z-index: -1;
            }
            .slider_section .carousel-inner {
              position: relative;
              z-index: 1;
            }
          `
        }} />
        <video autoPlay muted loop playsInline id="myVideo">
          <source src="/documents/14072024/WhatsApp Video 2024-07-09 at 5.51.21 PM.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="detail-box">
                        <h1>
                          Transform Your Fitness <br />
                          <span>Experience with Energetic!</span>
                        </h1>
                        <p>Premium gym equipment, sauna, steam rooms, and wellness solutions in Abu Dhabi, UAE</p>
                        <div className="btn-box">
                          <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }} className="btn1">
                            Explore Products
                          </a>
                          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="btn2">
                            Get a Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="detail-box">
                        <h1>
                          Your Wellbeing is <br />
                          <span>Our Priority!</span>
                        </h1>
                        <p>Trusted fitness solutions provider in Abu Dhabi - Quality, Innovation, Excellence</p>
                        <div className="btn-box">
                          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="btn1">
                            About Us
                          </a>
                          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="btn2">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container idicator_container"></div>
          </div>
        </section>

      <section id="about" className="about_section layout_padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="img_container">
                <div className="img-box">
                  <img src="/documents/14072024/who-we-are.jpeg" alt="Who we are" />
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

      <section id="products">
        <ProductsSection />
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}
