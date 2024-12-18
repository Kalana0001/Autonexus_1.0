import React, { useEffect, useRef } from "react";
import "./Navbar_Landing.css";

export const Navbar_Landing = () => {
  const navLinksRef = useRef(null);
  const menuBtnRef = useRef(null);

  useEffect(() => {
    const menuBtn = menuBtnRef.current;
    const navLinks = navLinksRef.current;

    const toggleMenu = () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtn.querySelector("i").className = isOpen ? "ri-close-line" : "ri-menu-line";
    };

    const closeMenu = () => {
      navLinks.classList.remove("open");
      menuBtn.querySelector("i").className = "ri-menu-line";
    };

    menuBtn.addEventListener("click", toggleMenu);
    navLinks.addEventListener("click", closeMenu);

    // Cleanup event listeners on unmount
    return () => {
      menuBtn.removeEventListener("click", toggleMenu);
      navLinks.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div>
      <nav className="landing_nav">
        <div className="nav_header">
          <div className="nav_logo">
            <a href="#">AutoNexus</a>
          </div>
          <div className="nav_menu_btn" id="menu-btn" ref={menuBtnRef} aria-label="Menu">
            <i className="ri-menu-line" aria-hidden="true">A</i>
          </div>
        </div>
        <ul className="nav_links" id="nav-links" ref={navLinksRef}>
          <li><a href="#home">Home</a></li>
          <li><a href="#rent">Rent</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#ride">Ride</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="nav_links__btn">
            <button className="nav_btn">Sign Up</button>
          </li>
          <li className="nav_links__btn">
            <button className="nav_btn">Sign In</button>
          </li>
        </ul>
        <div class="nav_btns">
          <button class="nav_btn btn__primary">Sign Up</button>
          <button class="nav_btn btn__secondary">Sign In</button>
        </div>
      </nav>
    </div>
  );
};
