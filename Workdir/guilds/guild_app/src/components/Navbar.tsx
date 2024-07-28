import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>SAUCO</div>
      <nav className={styles.nav}>
        <a className={styles.navLink} href="#home">Home</a>
        <a className={styles.navLink} href="#about">About Us</a>
        <a className={styles.navLink} href="#guilds">Guilds</a>
        <a className={styles.navLink} href="#proposals">Proposals</a>
      </nav>
      <button className={styles.connectWallet}>Connect Wallet</button>
    </header>
  );
};

export default Navbar;
