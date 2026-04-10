"use client";

export default function GymPage() {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <a href="javascript:history.back()" className="back-button">
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
        </a>
        <div className="heading_container heading_center">
          <h2>Gym Equipment</h2>
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
                      src="/documents/Photos/Gym Equipments & Flooring/2A4A8268-4_0.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      height="300px"
                      width="auto"
                      src="/documents/Photos/Gym Equipments & Flooring/gym-91849_1280.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      height="300px"
                      width="auto"
                      src="/documents/Photos/Gym Equipments & Flooring/pexels-heyho-7031706.jpg"
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
                We take pride in offering a comprehensive range of gym
                equipments, including supply, installation and maintenance
                services. Whether you're setting up a commercial gym, corporate
                fitness centre or a personal home gym, we understand the
                importance of providing high-quality equipment that meets both
                your fitness goals and budget requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
