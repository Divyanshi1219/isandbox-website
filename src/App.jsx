import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Banner from "./components/Banner";
import FeaturedCollection from "./components/FeaturedCollection";
import DiySection from "./components/DiySection";
import BestsellerSection from "./components/Bestseller";
import CollectionSection from "./components/CollectionSection";
import Newsletter from "./components/Newsletter";

import NewIn from "./pages/NewIn";
import Bestseller from "./pages/Bestseller";
import All from "./pages/All";
import Contact from "./pages/Contact";


/* ================================
   HOME PAGE
================================ */

function Home() {
  return (
    <>
      <Banner />

      <FeaturedCollection />

      <DiySection />

      <CollectionSection />

      <BestsellerSection />

      <Newsletter />
    </>
  );
}


/* ================================
   APP
================================ */

function App() {
  return (
    <>
      {/* Static Navbar */}
      <Navbar />
{/* Announcement Bar */}
<div className="announcement-bar">

  <div className="announcement-track">

    {/* FIRST SET */}
    <div className="announcement-set">

      <div className="announcement-item">
        Discover something new ✨ <span>|</span> Shop our latest collection
      </div>

      <div className="announcement-item">
        Discover something new ✨ <span>|</span> Shop our latest collection
      </div>

      <div className="announcement-item">
        Discover something new ✨ <span>|</span> Shop our latest collection
      </div>

      <div className="announcement-item">
        Discover something new ✨ <span>|</span> Shop our latest collection
      </div>

    </div>


    {/* SECOND IDENTICAL SET */}
    <div className="announcement-set">

      <div className="announcement-item">
        Discover something new ✨ <span>|</span> Shop our latest collection
      </div>

      <div className="announcement-item">
        Discover something new ✨ <span>|</span> Shop our latest collection
      </div>

      <div className="announcement-item">
        Discover something new ✨ <span>|</span> Shop our latest collection
      </div>

      <div className="announcement-item">
        Discover something new ✨ <span>|</span> Shop our latest collection
      </div>

    </div>

  </div>

</div>
      <main>

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* NEW IN */}
          <Route
            path="/new-in"
            element={<NewIn />}
          />

          {/* BESTSELLER */}
          <Route
            path="/bestseller"
            element={<Bestseller />}
          />

          {/* ALL PRODUCTS */}
          <Route
            path="/all"
            element={<All />}
          />
         
         {/* contac us*/}
          <Route
  path="/contact"
  element={<Contact />}
/>

        </Routes>
        

      </main>

      {/* Static Footer */}
      <Footer />
    </>
  );
}

export default App;