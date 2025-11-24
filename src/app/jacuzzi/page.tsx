'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function Jacuzzi() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: '/documents/Photos/jacuzzi/balneotherapy-3926747_1280.jpg', alt: 'Luxury jacuzzi spa' },
    { src: '/documents/Photos/jacuzzi/istockphoto-1347520050-612x612.jpg', alt: 'Modern jacuzzi design' },
    { src: '/documents/Photos/jacuzzi/vecteezy_view-on-a-spa-at-night-hot-tub-at-night_8357842.JPG', alt: 'Hot tub at night' }
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
          <h1 className="page-title">Jacuzzi & Hot Tubs</h1>
          <p className="page-subtitle">Luxury Relaxation & Hydrotherapy Solutions</p>
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
                <h2>Premium Jacuzzi Solutions</h2>
                <p>
                  Our Jacuzzis provide a soothing escape from daily stress. Transform your outdoor or indoor space into a personal wellness retreat with our premium hot tub solutions.
                </p>
                <h3>Features & Benefits</h3>
                <ul className="feature-list">
                  <li><i className="fa fa-check-circle"></i> Advanced Hydrotherapy Jets</li>
                  <li><i className="fa fa-check-circle"></i> Energy-Efficient Heating Systems</li>
                  <li><i className="fa fa-check-circle"></i> Superior Craftsmanship & Durability</li>
                  <li><i className="fa fa-check-circle"></i> Stylish & Modern Designs</li>
                  <li><i className="fa fa-check-circle"></i> Easy Maintenance & Control</li>
                  <li><i className="fa fa-check-circle"></i> Perfect Blend of Luxury & Functionality</li>
                </ul>
                <p className="highlight">
                  Experience therapeutic relaxation and enhance your property value with our premium jacuzzi installations.
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
