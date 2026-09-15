import ProductCard from "./ProductCard";
import "./FeaturedCollection.css";

const products = [
  {
    id: 1,
    name: "Smart LED Desk Lamp",
    description: "Modern lighting for your workspace.",
    rating: 4.8,
    price: 1299,
    image: "/products/product-1.jpeg",
  },
  {
    id: 2,
    name: "Wireless Charging Stand",
    description: "Fast and convenient wireless charging.",
    rating: 4.6,
    price: 1599,
    image: "/products/product-2.jpeg",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    description: "Compact sound for every adventure.",
    rating: 4.9,
    price: 2199,
    image: "/products/product-3.jpeg",
  },
  {
    id: 4,
    name: "Minimal Desk Organizer",
    description: "Keep your workspace clean and organized.",
    rating: 4.5,
    price: 799,
    image: "/products/product-4.jpeg",
  },
  {
    id: 5,
    name: "USB-C Multiport Hub",
    description: "Expand your laptop connectivity.",
    rating: 4.7,
    price: 1899,
    image: "/products/product-5.png",
  },
  {
    id: 6,
    name: "Smart Travel Bottle",
    description: "A smarter way to stay hydrated.",
    rating: 4.4,
    price: 999,
    image: "/products/product-6.jpeg",
  },
  {
      id: 7,
      name: "Stylish card Holder",
      description: "A smarter way to stay organzied.",
      rating: 5,
      price: 999,
      image: "/products/product-7.jpeg",
    },
    {
      id: 8,
      name: "Money Plant",
      description: "help sooth mind",
      rating: 4.7,
      price: 1999,
      image: "/products/product-8.jpeg",
    },
];

function FeaturedCollection() {
  return (
    <section className="featured-collection">

      <div className="featured-container">

        {/* Section Heading */}
        <div className="featured-heading">
          <span className="section-eyebrow">
            SHOP OUR COLLECTION
          </span>

          <h2>
            Featured Products
          </h2>

          <p>
            Discover our most-loved products, selected just for you.
          </p>
        </div>


        {/* Product Scroller */}
        <div className="products-scroller">

          <div className="products-grid">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>


        {/* View All */}
        <div className="view-all-wrapper">

          <a
            href="/all"
            className="view-all-products"
          >
            View All Products
          </a>

        </div>

      </div>

    </section>
  );
}

export default FeaturedCollection;