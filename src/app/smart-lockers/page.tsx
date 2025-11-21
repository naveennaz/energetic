'use client';

import { useRouter } from 'next/navigation';

export default function SmartLockers() {
  const router = useRouter();

  return (
    <>
      <section className="service_section layout_padding">
        <div className="container">
          <button onClick={() => router.back()} className="back-button">
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
          </button>
          <div className="heading_container heading_center">
            <h2>Smart Lockers</h2>
          </div>
          <div className="row box">
            <div className="col-md-6">
              <div className="container">
                <div id="carouselLockers" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" height="300" src="/documents/Photos/Smart Lockers/dayuse-7d1985fa1733956cf578a4eefa07bd48.jpg" alt="Smart Lockers" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <p>
                  Energetic&apos;s Smart Lockers offer secure and convenient storage solutions for various industries. It features RFID Card Access and Wristband Access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
