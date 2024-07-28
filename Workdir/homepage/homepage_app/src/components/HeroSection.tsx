import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <img className={styles.heroImage} src="/path-to-image.jpg" alt="Welcome to SAUCO DAO" />
      <div className={styles.welcomeMessage}>
        <h1>Welcome to SAUCO DAO</h1>
        <p>Learn, Earn, and Thrive: A Gamified DAO for Lifelong Achievement</p>
        <div className={styles.cta}>
          <input type="email" placeholder="Enter your email address" className={styles.ctaInput} />
          <button className={styles.ctaButton}>Get Early Access</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
