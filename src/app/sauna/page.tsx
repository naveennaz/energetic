'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function Sauna() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: '/documents/Photos/Sauna & Steam Rooms/interior-of-finnish-sauna-classic-wooden-sauna-royalty-free-image-1677879860.jpg', alt: 'Finnish sauna interior' },
    { src: '/documents/Photos/Sauna & Steam Rooms/pexels-heyho-8092430.jpg', alt: 'Luxury steam room' },
    { src: '/documents/Photos/Sauna & Steam Rooms/pexels-maria-kosmidi-458108827-15598608.jpg', alt: 'Modern sauna design' }
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
          <h1 className="page-title">Sauna & Steam Rooms</h1>
          <p className="page-subtitle">Custom Wellness Solutions for Ultimate Relaxation</p>
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
                <h2>Premium Sauna & Steam Room Solutions</h2>
                <p>
                  At Energetic, we understand the importance of custom-made wellness solutions tailored to each customer's unique needs. Transform your space into a sanctuary of relaxation and rejuvenation.
                </p>
                <h3>Why Choose Our Saunas & Steam Rooms?</h3>
                <ul className="feature-list">
                  <li><i className="fa fa-check-circle"></i> Industry-leading products from Finland & USA</li>
                  <li><i className="fa fa-check-circle"></i> Custom-designed for your space</li>
                  <li><i className="fa fa-check-circle"></i> Unparalleled quality and durability</li>
                  <li><i className="fa fa-check-circle"></i> Professional installation & support</li>
                  <li><i className="fa fa-check-circle"></i> Energy-efficient designs</li>
                  <li><i className="fa fa-check-circle"></i> Premium materials and craftsmanship</li>
                </ul>
                <p className="highlight">
                  Experience the perfect blend of traditional wellness practices with modern technology and design.
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
