'use client';

export default function ProductsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Products</h2>
          <p style={{color: '#666', marginTop: '15px', fontSize: '16px'}}>
            Complete fitness and wellness solutions for your commercial and residential spaces
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img
                  src="/documents/Photos/Courts Flooring/Picture2.jpg"
                  alt="Courts Flooring"
                  height="150"
                />
              </div>
              <div className="detail-box">
                <h6>Courts Flooring</h6>
                <p>Premium multipurpose sport flooring and decking for indoor & outdoor facilities.</p>
                <a href="/courts-flooring">
                  Read More <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img
                  src="/documents/Photos/Sauna & Steam Rooms/pexels-heyho-8092430.jpg"
                  alt="Sauna & Steam Rooms"
                  height="150"
                />
              </div>
              <div className="detail-box">
                <h6>Sauna & Steam Rooms</h6>
                <p>Custom-made wellness solutions designed for ultimate relaxation and rejuvenation.</p>
                <a href="/sauna">
                  Read More <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img
                  src="/documents/Photos/Gym Equipments & Flooring/2A4A8268-4_0.jpg"
                  alt="Gym Equipment"
                  height="150"
                />
              </div>
              <div className="detail-box">
                <h6>Gym Equipment</h6>
                <p>
                  Comprehensive range of professional gym equipment with supply, installation, and maintenance services.
                </p>
                <a href="/gym">
                  Read More <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img
                  src="/documents/Photos/Smart Lockers/dayuse-7d1985fa1733956cf578a4eefa07bd48.jpg"
                  alt="Smart Lockers"
                  height="150"
                />
              </div>
              <div className="detail-box">
                <h6>Smart Lockers</h6>
                <p>
                  Secure storage solutions with RFID card and wristband access for modern facilities.
                </p>
                <a href="/smart-lockers">
                  Read More <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img
                  src="/documents/Photos/jacuzzi/balneotherapy-3926747_1280.jpg"
                  alt="Jacuzzi"
                  height="150"
                />
              </div>
              <div className="detail-box">
                <h6>Jacuzzi</h6>
                <p>
                  Premium jacuzzis with advanced features - the perfect blend of luxury, style, and functionality.
                </p>
                <a href="/jacuzzi">
                  Read More <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="img-box">
                <img
                  src="/documents/Photos/Acess Control Gates/ttscpr1-speed-gate-550.png"
                  alt="Access Control Gates"
                  height="150"
                />
              </div>
              <div className="detail-box">
                <h6>Access Control Gates</h6>
                <p>Secure speed gates ensuring efficient access control for high-traffic commercial areas.</p>
                <a href="/access-control-gates">
                  Read More <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
