'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['home', 'about', 'products', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
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
      <header className={`new-header ${!isHomePage || scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="container-fluid">
            <div className="header-content">
              {/* Logo */}
              <Link href="/" className="logo-wrapper">
                <div className="logo-design">
                  <span className="logo-letter">E</span>
                </div>
                <div className="logo-details">
                  <h1 className="company-name">ENERGETIC</h1>
                  <p className="company-subtitle">Fitness & Wellness Solutions</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="desktop-nav">
                {isHomePage ? (
                  <>
                    <a 
                      href="#home" 
                      className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                    >
                      Home
                    </a>
                    <a 
                      href="#about" 
                      className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                    >
                      About Us
                    </a>
                    <a 
                      href="#products" 
                      className={`nav-item ${activeSection === 'products' ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}
                    >
                      Products
                    </a>
                    <a 
                      href="#contact" 
                      className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                    >
                      Contact
                    </a>
                  </>
                ) : (
                  <>
                    <Link href="/#home" className="nav-item">Home</Link>
                    <Link href="/#about" className="nav-item">About Us</Link>
                    <Link href="/#products" className="nav-item">Products</Link>
                    <Link href="/#contact" className="nav-item">Contact</Link>
                  </>
                )}
              </nav>

              {/* Contact Info */}
              <div className="header-contact">
                <a href="tel:+971567945533" className="contact-info">
                  <i className="fa fa-phone"></i>
                  <div className="contact-details">
                    <span className="contact-label">Call Us</span>
                    <span className="contact-value">+971 56 794 5533</span>
                  </div>
                </a>
                <a href="mailto:info@energetic.ae" className="contact-info">
                  <i className="fa fa-envelope"></i>
                  <div className="contact-details">
                    <span className="contact-label">Email Us</span>
                    <span className="contact-value">info@energetic.ae</span>
                  </div>
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {isHomePage ? (
              <>
                <a 
                  href="#home"
                  className={`mobile-nav-item ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                >
                  <i className="fa fa-home"></i>
                  Home
                </a>
                <a 
                  href="#about"
                  className={`mobile-nav-item ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                >
                  <i className="fa fa-info-circle"></i>
                  About Us
                </a>
                <a 
                  href="#products"
                  className={`mobile-nav-item ${activeSection === 'products' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}
                >
                  <i className="fa fa-th"></i>
                  Products
                </a>
                <a 
                  href="#contact"
                  className={`mobile-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                >
                  <i className="fa fa-envelope"></i>
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link href="/#home" className="mobile-nav-item">
                  <i className="fa fa-home"></i>
                  Home
                </Link>
                <Link href="/#about" className="mobile-nav-item">
                  <i className="fa fa-info-circle"></i>
                  About Us
                </Link>
                <Link href="/#products" className="mobile-nav-item">
                  <i className="fa fa-th"></i>
                  Products
                </Link>
                <Link href="/#contact" className="mobile-nav-item">
                  <i className="fa fa-envelope"></i>
                  Contact
                </Link>
              </>
            )}
            <div className="mobile-contact-info">
              <a href="tel:+971567945533">
                <i className="fa fa-phone"></i> +971 56 794 5533
              </a>
              <a href="mailto:info@energetic.ae">
                <i className="fa fa-envelope"></i> info@energetic.ae
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
