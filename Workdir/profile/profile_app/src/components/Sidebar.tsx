import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <img className={styles.avatar} src="/path/to/avatar.png" alt="Profile" />
        <div className={styles.userInfo}>
          <strong>NFT.CEO</strong>
          <span>Acme Inc. 1000 XP</span>
        </div>
      </div>
      <nav className={styles.nav}>
        <a className={styles.navLink} href="#dashboard">Dashboard</a>
        <a className={styles.navLink} href="#profile">Profile</a>
        <a className={styles.navLink} href="#missions">Missions</a>
        <a className={styles.navLink} href="#rewards">Rewards</a>
        <a className={styles.navLink} href="#chat">Chat</a>
        <a className={styles.navLink} href="#vote">Vote</a>
        <a className={styles.navLink} href="#store">Store</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
