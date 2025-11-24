'use client';

import { useState, useEffect } from 'react';
import ProductsSection from '@/components/ProductsSection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Transform Your Fitness",
      subtitle: "Experience with Energetic!",
      description: "Premium gym equipment, sauna, steam rooms, and wellness solutions in Abu Dhabi, UAE"
    },
    {
      title: "Your Wellbeing is",
      subtitle: "Our Priority!",
      description: "Trusted fitness solutions provider in Abu Dhabi - Quality, Innovation, Excellence"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

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
            .slider_section {
              position: relative;
              overflow: hidden;
            }
            #myVideo {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              z-index: 0;
            }
            .slider_section .carousel-inner {
              position: relative;
              z-index: 1;
            }
            .carousel-item {
              display: none;
            }
            .carousel-item.active {
              display: block;
            }
          `
        }} />
        <video autoPlay muted loop playsInline id="myVideo">
          <source src="/documents/14072024/WhatsApp Video 2024-07-09 at 5.51.21 PM.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div key={index} className={`carousel-item ${index === activeSlide ? 'active' : ''}`}>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <div className="detail-box">
                          <h1>
                            {slide.title} <br />
                            <span>{slide.subtitle}</span>
                          </h1>
                          <p>{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
