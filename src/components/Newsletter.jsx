import "./Newsletter.css";
import newsletterBanner from "../assets/newsletter-banner.png";

function Newsletter() {
  return (
    <section className="newsletter-section">

      <div className="newsletter-banner">

        {/* Banner Image */}
        <img
          src={newsletterBanner}
          alt="iSANDBOX newsletter"
          className="newsletter-image"
        />

        {/* Newsletter Content */}
        <div className="newsletter-box">

          <span className="newsletter-small-title">
            STAY IN THE LOOP
          </span>

          <h2>
            Subscribe to our
            <span> newsletter</span>
          </h2>

          <p>
            Get updates on new products, special offers,
            fun activities and exciting sales directly in your inbox.
          </p>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Your email"
              required
            />

            <input
              type="tel"
              placeholder="Phone number"
            />

            <label className="newsletter-consent">
              <input type="checkbox" />

              <span>
                I agree to get updates, offers & promos
                via SMS, RCS & WhatsApp
              </span>
            </label>

            <button type="submit">
              Subscribe
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;