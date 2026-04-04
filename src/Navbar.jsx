// src/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <nav>
       <a href="/"><h1>TechCorp</h1></a>
      <a href="/about">About</a>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;