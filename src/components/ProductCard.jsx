import { Star, ShoppingBag } from "lucide-react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">

      {/* Product Image */}
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {/* Hover View Product */}
        <a
          href={`/product/${product.id}`}
          className="product-view"
        >
          View Product
        </a>
      </div>


      {/* Product Information */}
      <div className="product-info">

        <h3 className="product-name">
          {product.name}
        </h3>

        <p className="product-description">
          {product.description}
        </p>


        {/* Rating */}
        <div className="product-rating">

          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                strokeWidth={1.5}
                fill={
                  star <= Math.round(product.rating)
                    ? "currentColor"
                    : "none"
                }
              />
            ))}
          </div>

          <span className="rating-number">
            {product.rating}
          </span>

        </div>


        {/* Price */}
        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>


        {/* Add To Cart */}
        <button className="add-to-cart">

          <ShoppingBag
            size={17}
            strokeWidth={1.7}
          />

          <span>Add to Cart</span>

        </button>

      </div>

    </article>
  );
}

export default ProductCard;