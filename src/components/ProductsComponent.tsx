import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Courts Flooring (Indoor & Outdoor)",
    description:
      "Energetic provides premium multipurpose sport flooring and decking.",
    image: "/documents/Photos/Courts Flooring/Picture2.jpg",
    link: "/courts-flooring",
  },
  {
    id: 2,
    title: "Sauna & Steam Rooms",
    description:
      "At Energetic, we understand the importance of custom made solutions for each customer.",
    image: "/documents/Photos/Sauna & Steam Rooms/pexels-heyho-8092430.jpg",
    link: "/sauna",
  },
  {
    id: 3,
    title: "Gym Equipment",
    description:
      "We take pride in offering a comprehensive range of gym equipments, including supply, installation and maintenance services.",
    image: "/documents/Photos/Gym Equipments & Flooring/2A4A8268-4_0.jpg",
    link: "/gym",
  },
  {
    id: 4,
    title: "Smart Lockers",
    description:
      "Energetic's Smart Lockers offer secure and convenient storage solutions for various industries. It features RFID Card Access and Wristband Access.",
    image:
      "/documents/Photos/Smart Lockers/dayuse-7d1985fa1733956cf578a4eefa07bd48.jpg",
    link: "/smart-lockers",
  },
  {
    id: 5,
    title: "Jacuzzi",
    description:
      "Our Jacuzzis provide a soothing escape. Equipped with advanced features and superior craftsmanship, they offer the perfect blend of style and functionality.",
    image: "/documents/Photos/jacuzzi/balneotherapy-3926747_1280.jpg",
    link: "/jacuzzi",
  },
  {
    id: 6,
    title: "Access Control Gates",
    description:
      "Our Access Control Speed Gates ensures secure and efficient access control for high-traffic areas.",
    image: "/documents/Photos/Acess Control Gates/ttscpr1-speed-gate-550.png",
    link: "/access-control-gates",
  },
];

export default function ProductsComponent() {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Products</h2>
        </div>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={product.image} alt={product.title} height="150" />
                </div>
                <div className="detail-box">
                  <h6>{product.title}</h6>
                  <p>{product.description}</p>
                  <Link href={product.link}>Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
