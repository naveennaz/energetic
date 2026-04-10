"use client";

export default function SmartLockersPage() {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <a href="javascript:history.back()" className="back-button">
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
        </a>
        <div className="heading_container heading_center">
          <h2>Smart Lockers</h2>
        </div>
        <div className="row box">
          <div className="col-md-6">
            <div className="container">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      height="300px"
                      width="auto"
                      src="/documents/Photos/Smart Lockers/dayuse-7d1985fa1733956cf578a4eefa07bd48.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      height="300px"
                      width="auto"
                      src="/documents/Photos/Smart Lockers/WhatsApp Image 2024-07-03 at 4.01.15 PM.jpeg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      height="300px"
                      width="auto"
                      src="/documents/Photos/Smart Lockers/WhatsApp Image 2024-07-03 at 4.00.52 PM.jpeg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <p>
                Energetic's Smart Lockers offer secure and convenient storage
                solutions for various industries. It features RFID Card Access
                and Wristband Access. Built with high-quality materials, our
                Smart Lockers provide user-friendly interfaces and customizable
                configurations, making them ideal for staff storage, gyms and
                package delivery systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
