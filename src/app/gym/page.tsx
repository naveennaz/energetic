'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Gym() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "/documents/Photos/Gym Equipments & Flooring/2A4A8268-4_0.jpg",
      alt: "Commercial gym equipment for sale in Abu Dhabi UAE - Energetic Contracting"
    },
    {
      src: "/documents/Photos/Gym Equipments & Flooring/gym-91849_1280.jpg",
      alt: "Premium fitness equipment supplier Abu Dhabi - Energetic"
    },
    {
      src: "/documents/Photos/Gym Equipments & Flooring/pexels-heyho-7031706.jpg",
      alt: "Home and commercial gym equipment installation Abu Dhabi UAE"
    }
  ];

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="inner-page">
      <div className="inner-page-hero">
        <div className="container">
          <button onClick={() => router.back()} className="back-button">
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
          </button>
          <h1 className="page-title">Gym Equipment Sale in Abu Dhabi, UAE</h1>
          <p className="page-subtitle">Premium Commercial & Home Fitness Equipment</p>
        </div>
      </div>

      <div className="inner-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-gallery">
                <div className="carousel-container">
                  <div className="carousel-inner">
                    <img
                      src={images[activeIndex].src}
                      alt={images[activeIndex].alt}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <button 
                    className="carousel-control-prev" 
                    onClick={goToPrevious}
                    aria-label="Previous"
                  >
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                  </button>
                  <button 
                    className="carousel-control-next" 
                    onClick={goToNext}
                    aria-label="Next"
                  >
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                  <div className="carousel-indicators">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={index === activeIndex ? 'active' : ''}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-box">
                <h2>Premium Gym Equipment Supplier in Abu Dhabi</h2>
                <p>
                  <strong>Energetic Contracting LLC</strong> is your trusted <strong>gym equipment supplier in Abu Dhabi, UAE</strong>. We take pride in offering a comprehensive range of premium fitness equipment for sale, including complete supply, professional installation, and maintenance services throughout the UAE.
                </p>
                <p>
                  Whether you&apos;re setting up a <strong>commercial gym in Abu Dhabi</strong>, a corporate fitness centre, or a home gym, we provide high-quality gym equipment that meets both your fitness goals and budget requirements. Our services cover all of Abu Dhabi and the wider UAE region.
                </p>
                <h3>Our Gym Equipment Services in Abu Dhabi:</h3>
                <ul className="feature-list">
                  <li><i className="fa fa-check-circle"></i> Commercial gym equipment supply and installation</li>
                  <li><i className="fa fa-check-circle"></i> Home gym equipment sale in Abu Dhabi</li>
                  <li><i className="fa fa-check-circle"></i> Corporate fitness center solutions</li>
                  <li><i className="fa fa-check-circle"></i> Ongoing maintenance and support services</li>
                  <li><i className="fa fa-check-circle"></i> Fitness equipment consultation and planning</li>
                </ul>
                <p className="highlight">
                  Contact us today for the best <strong>gym equipment prices in Abu Dhabi, UAE</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
