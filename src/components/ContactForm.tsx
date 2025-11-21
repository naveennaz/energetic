'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact_section layout_padding">
      <div className="contact_bg_box">
        <div className="img-box">
          <img src="/documents/14072024/contact-us.jpeg" alt="Contact Energetic" />
        </div>
      </div>
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Get In Touch</h2>
          <p style={{color: 'rgba(255,255,255,0.9)', marginTop: '10px', fontSize: '18px'}}>
            Ready to transform your fitness space? Contact us today for a free consultation!
          </p>
        </div>
        <div className="">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="contact_form-container">
                  <div>
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Full Name *" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email Address *" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Phone Number *" 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="">
                      <textarea 
                        name="message"
                        placeholder="Your Message *" 
                        className="message_input"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                      />
                    </div>
                    <div className="btn-box text-center">
                      <button type="submit" disabled={status === 'sending'}>
                        {status === 'sending' ? (
                          <>
                            <span className="loading"></span> Sending...
                          </>
                        ) : status === 'success' ? (
                          <>
                            <i className="fa fa-check"></i> Message Sent!
                          </>
                        ) : (
                          <>
                            <i className="fa fa-paper-plane"></i> Send Message
                          </>
                        )}
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
  );
}
