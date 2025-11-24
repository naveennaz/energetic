'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function SmartLockers() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: '/documents/Photos/Smart Lockers/dayuse-7d1985fa1733956cf578a4eefa07bd48.jpg', alt: 'Smart locker system' },
    { src: '/documents/Photos/Smart Lockers/WhatsApp Image 2024-07-03 at 4.00.52 PM.jpeg', alt: 'Modern smart lockers' },
    { src: '/documents/Photos/Smart Lockers/WhatsApp Image 2024-07-03 at 4.01.15 PM.jpeg', alt: 'Smart locker installation' }
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
          <h1 className="page-title">Smart Lockers</h1>
          <p className="page-subtitle">Secure & Convenient Storage Solutions</p>
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
                <h2>Modern Smart Locker Systems</h2>
                <p>
                  Energetic's Smart Lockers offer secure and convenient storage solutions for various industries including fitness centers, offices, schools, and recreational facilities.
                </p>
                <h3>Key Features</h3>
                <ul className="feature-list">
                  <li><i className="fa fa-check-circle"></i> RFID Card Access Technology</li>
                  <li><i className="fa fa-check-circle"></i> Wristband Access System</li>
                  <li><i className="fa fa-check-circle"></i> Secure & Reliable Storage</li>
                  <li><i className="fa fa-check-circle"></i> User-Friendly Interface</li>
                  <li><i className="fa fa-check-circle"></i> Modern & Stylish Design</li>
                  <li><i className="fa fa-check-circle"></i> Easy Management System</li>
                </ul>
                <p className="highlight">
                  Perfect for gyms, spas, corporate offices, and any facility requiring secure personal storage.
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
