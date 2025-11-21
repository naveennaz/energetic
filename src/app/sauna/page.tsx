'use client';

export default function Sauna() {
  return (
    <>
      <section className="service_section layout_padding">
        <div className="container">
          <a href="javascript:history.back()" className="back-button">
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
          </a>
          <div className="heading_container heading_center">
            <h2>Sauna & Steam Rooms</h2>
            </>
          <div className="row box">
            <div className="col-md-6">
              <div className="container">
                <div id="carouselSauna" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselSauna" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselSauna" data-slide-to="1"></li>
                    <li data-target="#carouselSauna" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" height="300" src="/documents/Photos/Sauna & Steam Rooms/interior-of-finnish-sauna-classic-wooden-sauna-royalty-free-image-1677879860.jpg" alt="First slide" />
                      </>
                    <div className="carousel-item">
                      <img className="d-block w-100" height="300" src="/documents/Photos/Sauna & Steam Rooms/pexels-heyho-8092430.jpg" alt="Second slide" />
                      </>
                    <div className="carousel-item">
                      <img className="d-block w-100" height="300" src="/documents/Photos/Sauna & Steam Rooms/pexels-maria-kosmidi-458108827-15598608.jpg" alt="Third slide" />
                      </>
                    </>
                  <a className="carousel-control-prev" href="#carouselSauna" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselSauna" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                  </>
                </>
              </>
            <div className="col-md-6">
              <div className="detail-box">
                <p>
                  At Energetic, we understand the importance of custom made solutions for each customer. By supplying products from industry&apos;s leaders in Finland and USA for saunas and steam rooms, we ensure unparalleled quality and durability.
                </p>
                </>
              </>
            </>
          </>
      </section>
      </>
  );
}
