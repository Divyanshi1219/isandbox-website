import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./NewIn.css";
import newInBanner from "../assets/your-new-in-banner.png";

function NewIn() {
  return (
    <main className="new-in-page">

      {/* ================================
          BANNER
      ================================= */}

<section className="new-in-banner">
  <img
    src={newInBanner}
    alt="New In Collection"
  />
</section>


      {/* ================================
          PAGE HEADING
      ================================= */}

      <section className="new-in-products">

        <div className="new-in-header">

          <span className="new-in-label">
            FRESH ARRIVALS
          </span>

          <h1>
            New In
          
          </h1>

          <p>
            Discover our latest picks for curious minds,
            creative hands and happy playtime.
          </p>

        </div>


        {/* ================================
            PRODUCT GRID
        ================================= */}

        <div className="new-in-grid">

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

export default NewIn;