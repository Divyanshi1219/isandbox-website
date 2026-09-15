import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">

      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p>
          Discover something new ✨ &nbsp; | &nbsp; Shop our latest collection
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="navbar">

        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">
            <img src="/iSandbox_logo-1-280x66-1.png" alt="iSandbox" />
          </a>
        </div>


        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <a href="/new-in">New In</a>
          <a href="/bestseller">Bestseller</a>
          <a href="/gift-cards">Gift Cards</a>
          <a href="/all">All</a>
          <a href="/contact">Contact Us</a>
        </div>


        {/* Right Actions */}
        <div className="navbar-actions">

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button nav-icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <X size={21} strokeWidth={1.7} />
            ) : (
              <Menu size={21} strokeWidth={1.7} />
            )}
          </button>


          {/* Cart */}
          <button className="nav-icon" aria-label="Cart">
            <ShoppingBag size={21} strokeWidth={1.7} />
          </button>


          {/* Search */}
          <button className="nav-icon" aria-label="Search">
            <Search size={21} strokeWidth={1.7} />
          </button>

        </div>

      </nav>


      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>

        <a href="/new-in" onClick={() => setMenuOpen(false)}>
          New In
        </a>

        <a href="/bestseller" onClick={() => setMenuOpen(false)}>
          Bestseller
        </a>

        <a href="/gift-cards" onClick={() => setMenuOpen(false)}>
          Gift Cards
        </a>

        <a href="/all" onClick={() => setMenuOpen(false)}>
          All
        </a>

        <a href="/contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </a>

      </div>

    </header>
  );
}

export default Navbar;