"use client";

import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="hero_bg_box">
        <div className="img-box">
          <img
            src="/documents/21072024/WhatsApp Image 2024-07-18 at 11.33.41 AM.jpeg"
            alt=""
          />
        </div>
      </div>
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="contact_link-container">
              <a href="#" className="contact_link1">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>Abu Dhabi, UAE</span>
              </a>
              <a href="tel:+97124459791" className="contact_link2">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>Call : +971 56 794 5533</span>
              </a>
              <a href="mailto:info@energetic.ae" className="contact_link3">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>info@energetic.ae</span>
              </a>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" href="/">
                <span>Energetic</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""></span>
              </button>
              <div
                className="collapse navbar-collapse ml-auto"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav" id="navMenu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/service">
                      Our Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/contact">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
