"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <section className="info_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="info_logo">
                <Link className="navbar-brand" href="/">
                  <span>Energetic</span>
                </Link>
                <video controls className="responsive-video">
                  <source
                    src="/documents/14072024/WhatsApp Video 2024-07-09 at 5.51.21 PM.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info_form">
                <h5>Our Company Profile</h5>
                <iframe
                  src="/documents/Energetic Company Profile V 6.0.pdf"
                  width="90%"
                  height="auto"
                  style={{ border: "none" }}
                ></iframe>
                <a
                  href="/documents/Energetic Company Profile V 6.0.pdf"
                  download="energetic.pdf"
                  style={{
                    display: "block",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  Download PDF
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info_info">
                <h5>Contact Us</h5>
              </div>
              <div className="info_contact">
                <a href="#" className="">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Abu Dhabi, UAE</span>
                </a>
                <a href="tel:+97124459791" className="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>T : +971 2 445 9791</span>
                </a>
                <a href="tel:+971567945533" className="">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>M : +971 56 794 5533</span>
                </a>
                <a href="mailto:info@energetic.ae" className="">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>info@energetic.ae</span>
                </a>
              </div>
              <div className="social_box">
                <a
                  href="https://wa.me/971567945533"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "5px" }}
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "5px" }}
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="container-fluid footer_section">
        <p>
          &copy;All Rights Reserved. Design by{" "}
          <a
            href="https://html.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Energetic
          </a>
        </p>
      </footer>
    </>
  );
}
