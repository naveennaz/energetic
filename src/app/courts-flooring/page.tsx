'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function CourtsFlooring() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: '/documents/Photos/Courts Flooring/Picture2.jpg', alt: 'Indoor basketball court flooring' },
    { src: '/documents/Photos/Courts Flooring/Picture4.jpg', alt: 'Sports court flooring installation' },
    { src: '/documents/Photos/Courts Flooring/WhatsApp Image 2024-07-03 at 4.39.35 PM (2).jpeg', alt: 'Premium court flooring' }
  ];

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <section className="inner-page-hero">
        <div className="container">
          <button onClick={() => router.back()} className="back-button">
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Back to Products
          </button>
          <h1 className="page-title">Courts Flooring</h1>
          <p className="page-subtitle">Indoor & Outdoor Sport Flooring Solutions</p>
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
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={index === activeIndex ? 'active' : ''}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="carousel-inner">
                    <img 
                      className="d-block w-100" 
                      src={images[activeIndex].src} 
                      alt={images[activeIndex].alt} 
                    />
                  </div>
                  <button 
                    className="carousel-control-prev" 
                    onClick={goToPrevious}
                    aria-label="Previous slide"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button 
                    className="carousel-control-next" 
                    onClick={goToNext}
                    aria-label="Next slide"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-box">
                <h2>Premium Multipurpose Sport Flooring</h2>
                <p>
                  Energetic provides premium multipurpose sport flooring and decking solutions for both indoor and outdoor facilities. Our comprehensive range ensures the perfect surface for any athletic or recreational space.
                </p>
                <h3>Our Product Range</h3>
                <ul className="feature-list">
                  <li><i className="fa fa-check-circle"></i> Solid & Semi-solid Wooden Flooring</li>
                  <li><i className="fa fa-check-circle"></i> Laminated Parquet</li>
                  <li><i className="fa fa-check-circle"></i> Vinyl & PVC Flooring</li>
                  <li><i className="fa fa-check-circle"></i> Rubber Flooring</li>
                  <li><i className="fa fa-check-circle"></i> SPC Flooring</li>
                  <li><i className="fa fa-check-circle"></i> LVT Flooring</li>
                  <li><i className="fa fa-check-circle"></i> WPC Decking</li>
                  <li><i className="fa fa-check-circle"></i> Solid Timber Wood Decking</li>
                </ul>
                <p className="highlight">
                  All our flooring products are European-made, ensuring the highest quality and durability for your sports facilities.
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
