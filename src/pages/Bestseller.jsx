import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Bestseller.css";

function Bestseller() {
  return (
    <main className="bestseller-page">

      {/* ================================
          BANNER
      ================================= */}

      <section className="bestseller-banner">
        <img
          src="/bestseller-banne.png"
          alt="Bestsellers"
        />
      </section>


      {/* ================================
          PAGE HEADING
      ================================= */}

      <section className="bestseller-products">

        <div className="bestseller-header">

          <span className="bestseller-label">
            ISANDBOX FAVOURITES
          </span>

          <h1>
            Bestsellers <em>everyone loves</em>
          </h1>

          <p>
            Little favourites picked for curious minds and happy playtime.
          </p>

        </div>


        {/* ================================
            PRODUCT GRID
        ================================= */}

        <div className="bestseller-grid">

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

export default Bestseller;