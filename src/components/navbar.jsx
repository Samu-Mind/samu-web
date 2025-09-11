import React, { useState } from "react";
import styles from "../styles/navbar.module.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav >
      {/* Menu Button */}
      <button className={styles.menuBtn} onClick={toggleMenu}>
        ☰
      </button>

      {/* Full-screen Menu Overlay */}
      {menuOpen && (
        <div className={styles.overlay}>
          <button className={styles.closeBtn} onClick={toggleMenu}>✕</button>
          <ul className={styles.menu}>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
