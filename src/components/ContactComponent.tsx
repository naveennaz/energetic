'use client'

export default function ContactComponent() {
  return (
    <section className="contact_section layout_padding">
      <div className="contact_bg_box">
        <div className="img-box">
          <img src="/documents/14072024/contact-us.jpeg" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Get In touch
          </h2>
        </div>
        <div className="">
          <div className="row">
            <div className="col-md-7 mx-auto">
              <form action="#">
                <div className="contact_form-container">
                  <div>
                    <div>
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div>
                      <input type="email" placeholder="Email " />
                    </div>
                    <div>
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className="">
                      <input type="text" placeholder="Message" className="message_input" />
                    </div>
                    <div className="btn-box ">
                      <button type="submit">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
