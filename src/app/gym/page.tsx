import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Equipment Sale Abu Dhabi | Commercial Fitness Equipment UAE - Energetic",
  description: "Buy premium gym equipment in Abu Dhabi, UAE. Energetic offers commercial gym equipment, home fitness solutions, installation & maintenance services. Best prices on quality fitness equipment.",
  keywords: "gym equipment sale Abu Dhabi, buy gym equipment UAE, commercial gym equipment Abu Dhabi, fitness equipment supplier UAE, gym equipment installation Abu Dhabi, home gym equipment UAE, gym machines Abu Dhabi, fitness equipment sale UAE",
  openGraph: {
    title: "Gym Equipment Sale Abu Dhabi | Commercial Fitness Equipment UAE",
    description: "Buy premium gym equipment in Abu Dhabi, UAE. Professional installation & maintenance services.",
  },
};

export default function Gym() {
  return (
    <section className="service_section layout_padding sub_page">
      <div className="container">
        <a href="javascript:history.back()" className="back-button">
          <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
        </a>
        <div className="heading_container heading_center">
          <h1>Gym Equipment Sale in Abu Dhabi, UAE</h1>
        </div>
        <div className="row box">
          <div className="col-md-6">
            <div className="container">
              <div id="carouselGym" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselGym" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselGym" data-slide-to="1"></li>
                  <li data-target="#carouselGym" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      height="300"
                      src="/documents/Photos/Gym Equipments & Flooring/2A4A8268-4_0.jpg"
                      alt="Commercial gym equipment for sale in Abu Dhabi UAE - Energetic Contracting"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      height="300"
                      src="/documents/Photos/Gym Equipments & Flooring/gym-91849_1280.jpg"
                      alt="Premium fitness equipment supplier Abu Dhabi - Energetic"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      height="300"
                      src="/documents/Photos/Gym Equipments & Flooring/pexels-heyho-7031706.jpg"
                      alt="Home and commercial gym equipment installation Abu Dhabi UAE"
                    />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselGym" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselGym" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h2>Premium Gym Equipment Supplier in Abu Dhabi</h2>
              <p>
                <strong>Energetic Contracting LLC</strong> is your trusted <strong>gym equipment supplier in Abu Dhabi, UAE</strong>. We take pride in offering a comprehensive range of premium fitness equipment for sale, including complete supply, professional installation, and maintenance services throughout the UAE.
              </p>
              <p>
                Whether you&apos;re setting up a <strong>commercial gym in Abu Dhabi</strong>, a corporate fitness centre, or a home gym, we provide high-quality gym equipment that meets both your fitness goals and budget requirements. Our services cover all of Abu Dhabi and the wider UAE region.
              </p>
              <h3>Our Gym Equipment Services in Abu Dhabi:</h3>
              <ul>
                <li>Commercial gym equipment supply and installation</li>
                <li>Home gym equipment sale in Abu Dhabi</li>
                <li>Corporate fitness center solutions</li>
                <li>Ongoing maintenance and support services</li>
                <li>Fitness equipment consultation and planning</li>
              </ul>
              <p>
                Contact us today for the best <strong>gym equipment prices in Abu Dhabi, UAE</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
