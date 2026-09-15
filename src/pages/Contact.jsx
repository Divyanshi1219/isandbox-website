import {
      MapPin,
      Phone,
      Mail,
      Clock,
      Send,
      Heart,
    } from "lucide-react";
    
    import "./Contact.css";
    
    function Contact() {
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      return (
        <main className="contact-page">
    
          {/* Decorative background */}
          <div className="contact-shape contact-shape-left"></div>
          <div className="contact-shape contact-shape-right"></div>
    
          <div className="contact-spark spark-1">✦</div>
          <div className="contact-spark spark-2">✦</div>
          <div className="contact-spark spark-3">✧</div>
    
    
          <section className="contact-wrapper">
    
            {/* =================================
                LEFT CONTENT
            ================================= */}
    
            <div className="contact-left">
    
              <div className="contact-title">
    
                <h1>
                  Let's
                  <br />
                  <span>Talk!</span>
                </h1>
    
                <div className="title-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
    
              </div>
    
    
              <p className="contact-intro">
                Have a question, idea, or
                <br />
                just want to say hello?
              </p>
    
    
              {/* Contact Information */}
    
              <div className="contact-info-list">
    
                <div className="contact-info-item">
    
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
    
                  <div>
                    <h3>Our Location</h3>
    
                    <p>
                      3970 Mercantile Dr Suite 150
                      <br />
                      Lake Oswego, OR 97035
                    </p>
                  </div>
    
                </div>
    
    
                <a
                  href="tel:+19718252600"
                  className="contact-info-item"
                >
    
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
    
                  <div>
                    <h3>Call Us</h3>
    
                    <p>
                      (971) 825-2600
                    </p>
                  </div>
    
                </a>
    
    
                <a
                  href="mailto:info@isandboxfactory.com"
                  className="contact-info-item"
                >
    
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
    
                  <div>
                    <h3>Email Us</h3>
    
                    <p>
                      info@isandboxfactory.com
                    </p>
                  </div>
    
                </a>
    
    
                <div className="contact-info-item">
    
                  <div className="contact-icon">
                    <Clock size={20} />
                  </div>
    
                  <div>
                    <h3>Working Hours</h3>
    
                    <p>
                      Mon – Sat | 10 AM – 6 PM
                    </p>
                  </div>
    
                </div>
    
              </div>
    
            </div>
    
    
            {/* =================================
                CENTER FORM
            ================================= */}
    
            <div className="contact-form-wrapper">
    
              <div className="contact-form-card">
    
                <div className="form-top">
    
                  <h2>We'd love to hear from you!</h2>
    
                  <p>
                    Fill in the details below and our team
                    will get back to you soon.
                  </p>
    
                </div>
    
    
                <form onSubmit={handleSubmit}>
    
                  {/* Name + Email */}
    
                  <div className="form-two-columns">
    
                    <div className="form-field">
    
                      <label htmlFor="name">
                        Your Name <span>*</span>
                      </label>
    
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
    
                    </div>
    
    
                    <div className="form-field">
    
                      <label htmlFor="email">
                        Your Email <span>*</span>
                      </label>
    
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
    
                    </div>
    
                  </div>
    
    
                  {/* Subject */}
    
                  <div className="form-field">
    
                    <label htmlFor="subject">
                      Select a Subject <span>*</span>
                    </label>
    
                    <select
                      id="subject"
                      defaultValue=""
                      required
                    >
    
                      <option value="" disabled>
                        Select a Subject
                      </option>
    
                      <option value="general">
                        General Inquiry
                      </option>
    
                      <option value="products">
                        Product Inquiry
                      </option>
    
                      <option value="collaboration">
                        Collaboration
                      </option>
    
                      <option value="bulk">
                        Bulk / Corporate Orders
                      </option>
    
                      <option value="other">
                        Other
                      </option>
    
                    </select>
    
                  </div>
    
    
                  {/* Message */}
    
                  <div className="form-field">
    
                    <label htmlFor="message">
                      Your Message <span>*</span>
                    </label>
    
                    <textarea
                      id="message"
                      placeholder="Type your message here..."
                      rows="5"
                      required
                    />
    
                  </div>
    
    
                  {/* Submit */}
    
                  <button
                    type="submit"
                    className="contact-submit-button"
                  >
    
                    <span>Send Message</span>
    
                    <Send size={18} />
    
                  </button>
    
                </form>
    
              </div>
    
            </div>
    
    
            {/* =================================
                RIGHT ARTWORK
            ================================= */}
    
            <div className="contact-art">
    
              {/* Big blue organic blob */}
    
              <div className="art-blob"></div>
    
    
              {/* Small decorative dots */}
    
              <div className="art-dot art-dot-1"></div>
              <div className="art-dot art-dot-2"></div>
              <div className="art-dot art-dot-3"></div>
    
    
              {/* Message */}
    
              <div className="art-message">
    
                <span>Small</span>
                <span>Steps</span>
                <span className="blue-text">Big</span>
                <span>Dreams</span>
    
                <div className="art-heart">
                  ♡
                </div>
    
              </div>
    
    
              {/* Lamp */}
    
              <div className="art-lamp">
    
                <div className="lamp-top">
    
                  <div className="lamp-glow"></div>
    
                </div>
    
                <div className="lamp-neck"></div>
    
                <div className="lamp-foot"></div>
    
              </div>
    
    
              {/* Pencil cup */}
    
              <div className="art-pencil-cup">
    
                <div className="pencil pencil-1"></div>
                <div className="pencil pencil-2"></div>
                <div className="pencil pencil-3"></div>
    
                <div className="cup-face">
                  <span>•</span>
                  <span>•</span>
                  <b>⌣</b>
                </div>
    
              </div>
    
    
              {/* Blocks */}
    
              <div className="art-blocks">
    
                <div className="art-block block-yellow">
                  Better
                </div>
    
                <div className="art-block block-pink">
                  Ideas
                </div>
    
                <div className="art-block block-blue">
                  Together
                </div>
    
              </div>
    
    
              {/* Rainbow */}
    
              <div className="art-rainbow">
    
                <div className="rainbow-pink"></div>
                <div className="rainbow-blue"></div>
                <div className="rainbow-yellow"></div>
    
              </div>
    
    
              {/* Star */}
    
              <div className="art-star">
                ★
              </div>
    
            </div>
    
          </section>
    
    
          {/* Bottom decoration */}
    
          <div className="contact-bottom-decoration">
            <span></span>
            <Heart size={15} />
            <span></span>
          </div>
    
        </main>
      );
    }
    
    export default Contact;