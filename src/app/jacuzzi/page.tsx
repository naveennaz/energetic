"use client";

export default function JacuzziPage() {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <a href="javascript:history.back()" className="back-button">
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
        </a>
        <div className="heading_container heading_center">
          <h2>Jacuzzi</h2>
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
                      src="/documents/Photos/jacuzzi/balneotherapy-3926747_1280.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      height="300px"
                      width="auto"
                      src="/documents/Photos/jacuzzi/istockphoto-1347520050-612x612.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      height="300px"
                      width="auto"
                      src="/documents/Photos/jacuzzi/vecteezy_view-on-a-spa-at-night-hot-tub-at-night_8357842.JPG"
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
                Our Jacuzzis provide a soothing escape. Equipped with advanced
                features and superior craftsmanship, they offer the perfect
                blend of style and functionality. Whether you're looking to
                unwind after a long day or enhance your wellness routine, our
                Jacuzzis deliver unparalleled hydrotherapy benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
