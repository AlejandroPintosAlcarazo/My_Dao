import styles from '../styles/ProfileHeader.module.css';

const ProfileHeader = () => {
  return (
    <div className={styles.profileHeader}>
      <img className={styles.avatar} src="/path/to/avatar.png" alt="Profile" />
      <div className={styles.info}>
        <h2>NFT.CEO</h2>
        <p>Acme Inc. 1000 XP</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.editProfile}>Edit Profile</button>
        <button className={styles.customizeProfile}>Customize Profile</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
