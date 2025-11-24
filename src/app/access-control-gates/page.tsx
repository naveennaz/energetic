'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function AccessControlGates() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: '/documents/Photos/Acess Control Gates/ttscpr1-speed-gate-550.png', alt: 'Speed gate access control' },
    { src: '/documents/Photos/Acess Control Gates/WhatsApp Image 2024-07-03 at 4.00.03 PM.jpeg', alt: 'Access control system' },
    { src: '/documents/Photos/Acess Control Gates/WhatsApp Image 2024-07-03 at 4.00.28 PM.jpeg', alt: 'Security gate installation' }
  ];

  const goToSlide = (index: number) => setActiveIndex(index);
  const goToPrevious = () => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <section className="inner-page-hero">
        <div className="container">
          <button onClick={() => router.back()} className="back-button">
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Back to Products
          </button>
          <h1 className="page-title">Access Control Gates</h1>
          <p className="page-subtitle">Secure Speed Gates for High-Traffic Areas</p>
        </div>
      </section>

      <section className="inner-page-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <div className="image-gallery">
                <div className="carousel-container">
                  <div className="carousel-indicators">
                    {images.map((_, index) => (
                      <button key={index} onClick={() => goToSlide(index)} className={index === activeIndex ? 'active' : ''} aria-label={`Go to slide ${index + 1}`} />
                    ))}
                  </div>
                  <div className="carousel-inner">
                    <img className="d-block w-100" src={images[activeIndex].src} alt={images[activeIndex].alt} />
                  </div>
                  <button className="carousel-control-prev" onClick={goToPrevious} aria-label="Previous slide">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button className="carousel-control-next" onClick={goToNext} aria-label="Next slide">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-box">
                <h2>Professional Access Control Solutions</h2>
                <p>
                  Our Access Control Speed Gates ensure secure and efficient access management for high-traffic commercial areas, corporate buildings, and fitness facilities.
                </p>
                <h3>Key Features</h3>
                <ul className="feature-list">
                  <li><i className="fa fa-check-circle"></i> High-Speed Entry & Exit Management</li>
                  <li><i className="fa fa-check-circle"></i> Advanced Security Technology</li>
                  <li><i className="fa fa-check-circle"></i> Seamless Integration with Access Systems</li>
                  <li><i className="fa fa-check-circle"></i> Durable & Reliable Construction</li>
                  <li><i className="fa fa-check-circle"></i> Sleek & Professional Design</li>
                  <li><i className="fa fa-check-circle"></i> Ideal for High-Traffic Areas</li>
                </ul>
                <p className="highlight">
                  Perfect for corporate offices, gyms, hotels, and any facility requiring controlled access management.
                </p>
                <Link href="/#contact" className="cta-button">
                  Get a Quote <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
