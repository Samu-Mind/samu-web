import styles from '../styles/navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navSection}>
      <button className="p-2 border rounded">☰</button>
    </nav>
  );
}
