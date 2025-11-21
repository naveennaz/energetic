'use client';

import { useRouter } from 'next/navigation';

export default function Jacuzzi() {
  const router = useRouter();

  return (
    <>
      <section className="service_section layout_padding">
        <div className="container">
          <button onClick={() => router.back()} className="back-button">
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
          </button>
          <div className="heading_container heading_center">
            <h2>Jacuzzi</h2>
          </div>
          <div className="row box">
            <div className="col-md-6">
              <div className="container">
                <div id="carouselJacuzzi" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" height="300" src="/documents/Photos/jacuzzi/balneotherapy-3926747_1280.jpg" alt="Jacuzzi" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <p>
                  Our Jacuzzis provide a soothing escape. Equipped with advanced features and superior craftsmanship, they offer the perfect blend of style and functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
