import "./CollectionSection.css";

import kidsImage from "/diy-kids.png";
import womenImage from "../assets/women.png";
import menImage from "../assets/men.png";
import giftCardImage from "../assets/gift-card.png";

function CollectionSection() {
  const collections = [
    {
      title: "KIDS",
      subtitle: "Play, Create & Discover",
      button: "Shop Kids",
      image: kidsImage,
      link: "/all?category=kids",
      className: "kids-card",
    },
    {
      title: "WOMEN",
      subtitle: "Thoughtful Picks Just for You",
      button: "Shop Women",
      image: womenImage,
      link: "/all?category=women",
      className: "women-card",
    },
    {
      title: "MEN",
      subtitle: "Everyday Essentials for Every Adventure",
      button: "Shop Men",
      image: menImage,
      link: "/all?category=men",
      className: "men-card",
    },
    {
      title: "GIFT CARDS",
      subtitle: "Give the Joy of Choosing",
      button: "Shop Gift Cards",
      image: giftCardImage,
      link: "/gift-cards",
      className: "gift-card",
    },
  ];

  return (
    <section className="collection-section">

      {/* Heading */}
      <div className="collection-heading">
        <span className="collection-eyebrow">
          Shop by Collection
        </span>

        <h2>
          Find Something{" "}
          <span>You’ll Love</span>
        </h2>

        <p>
          Little discoveries for every kind of shopper.
        </p>
      </div>

      {/* Collection Layout */}
      <div className="collection-grid">

        {/* Large Kids Card */}
        <a
          href={collections[0].link}
          className={`collection-card ${collections[0].className}`}
        >
          <img
            src={collections[0].image}
            alt="Shop Kids"
          />

          <div className="collection-overlay">
            <div className="collection-content">
              <h3>{collections[0].title}</h3>

              <p>{collections[0].subtitle}</p>

              <span className="collection-button">
                {collections[0].button}
                <span>→</span>
              </span>
            </div>
          </div>
        </a>

        {/* Right Side */}
        <div className="collection-right">

          {/* Women */}
          <a
            href={collections[1].link}
            className={`collection-card ${collections[1].className}`}
          >
            <img
              src={collections[1].image}
              alt="Shop Women"
            />

            <div className="collection-overlay">
              <div className="collection-content">
                <h3>{collections[1].title}</h3>

                <p>{collections[1].subtitle}</p>

                <span className="collection-button">
                  {collections[1].button}
                  <span>→</span>
                </span>
              </div>
            </div>
          </a>

          {/* Bottom Two */}
          <div className="collection-bottom">

            {/* Men */}
            <a
              href={collections[2].link}
              className={`collection-card ${collections[2].className}`}
            >
              <img
                src={collections[2].image}
                alt="Shop Men"
              />

              <div className="collection-overlay">
                <div className="collection-content">
                  <h3>{collections[2].title}</h3>

                  <p>{collections[2].subtitle}</p>

                  <span className="collection-button">
                    {collections[2].button}
                    <span>→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Gift Cards */}
            <a
              href={collections[3].link}
              className={`collection-card ${collections[3].className}`}
            >
              <img
                src={collections[3].image}
                alt="Gift Cards"
              />

              <div className="collection-overlay">
                <div className="collection-content">
                  <h3>{collections[3].title}</h3>

                  <p>{collections[3].subtitle}</p>

                  <span className="collection-button">
                    {collections[3].button}
                    <span>→</span>
                  </span>
                </div>
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CollectionSection;