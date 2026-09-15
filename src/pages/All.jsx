import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./All.css";

function All() {
  return (
    <main className="all-page">

      {/* ================================
          BANNER
      ================================= */}

      <section className="all-banner">
        <img
          src="/all-banner.png"
          alt="All Products"
        />
      </section>


      {/* ================================
          PAGE HEADING
      ================================= */}

      <section className="all-products">

        <div className="all-header">

          <span className="all-label">
            EXPLORE ISANDBOX
          </span>

          <h1>
            All <em>Products</em>
          </h1>

          <p>
            Explore everything we have created for curious minds,
            creative hands and happy playtime.
          </p>

        </div>


        {/* ================================
            PRODUCT GRID
        ================================= */}

        <div className="all-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default All;