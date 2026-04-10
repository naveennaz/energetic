"use client";

export default function AccessControlGatesPage() {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <a href="javascript:history.back()" className="back-button">
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
        </a>
        <div className="heading_container heading_center">
          <h2>Access Control Gates</h2>
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
                      src="/documents/Photos/Acess Control Gates/ttscpr1-speed-gate-550.png"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      height="300px"
                      width="auto"
                      src="/documents/Photos/Acess Control Gates/WhatsApp Image 2024-07-03 at 4.00.03 PM.jpeg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      height="300px"
                      width="auto"
                      src="/documents/Photos/Acess Control Gates/WhatsApp Image 2024-07-03 at 4.00.28 PM.jpeg"
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
                Our Access Control Speed Gates ensures secure and efficient
                access control for high-traffic areas. It supports multiple
                authentication methods such as Facial Recognition, RFID Card and
                Wristband Access. Durable and reliable, the sleek design
                integrates seamlessly into any setting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
