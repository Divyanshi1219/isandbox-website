import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Banner.css";

function Banner() {
  const banners = [
    "/hero-banner1.png",
    "/hero-banner2.png",
    "/hero-banner3.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  // Previous
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  // Next
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <section className="hero-banner">

      {/* Slides */}
      <div
        className="hero-banner-track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <div className="hero-slide" key={banner}>
            <img
              src={banner}
              alt={`iSandbox Banner ${index + 1}`}
              className="hero-banner-image"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="banner-arrow banner-arrow-left"
        onClick={prevSlide}
        aria-label="Previous banner"
      >
        <ChevronLeft size={22} strokeWidth={1.7} />
      </button>

      {/* Next Button */}
      <button
        className="banner-arrow banner-arrow-right"
        onClick={nextSlide}
        aria-label="Next banner"
      >
        <ChevronRight size={22} strokeWidth={1.7} />
      </button>

      {/* Dots */}
      <div className="banner-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`banner-dot ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

export default Banner;