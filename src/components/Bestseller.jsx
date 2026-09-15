import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import "./Bestseller.css";

function Bestseller() {

  // Show the first 5 products as Bestsellers
  const bestsellerProducts = products.slice(0, 8);

  return (
    <section className="bestseller-section">

      <div className="bestseller-header">

        <div>
          <span className="bestseller-label">
            iSANDBOX FAVOURITES
          </span>

          <h2>
            Bestsellers
            <span> everyone loves</span>
          </h2>

          <p>
            Little favourites picked for curious minds and happy playtime.
          </p>
        </div>

      </div>


      {/* PRODUCT SLIDER */}

      <div className="bestseller-slider">

        {bestsellerProducts.map((product) => (

          <div
            className="bestseller-slide"
            key={product.id}
          >
            <ProductCard product={product} />
          </div>

        ))}

      </div>


      {/* VIEW ALL BUTTON */}

      <div className="bestseller-button-wrapper">

        <Link
          to="/all"
          className="bestseller-view-button"
        >
          View All Products
          <span>→</span>
        </Link>

      </div>

    </section>
  );
}

export default Bestseller;