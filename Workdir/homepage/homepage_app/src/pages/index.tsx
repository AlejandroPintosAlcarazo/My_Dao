import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import GuildCard from '../components/GuildCard';
import StepCard from '../components/StepCard';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <HeroSection />
      <section className={styles.additionalInfo}>
        <div className={styles.guilds}>
          <h2>Guilds</h2>
          <div className={styles.guildsList}>
            <GuildCard imageSrc="/path-to-language-icon.jpg" title="Language" />
            <GuildCard imageSrc="/path-to-gaming-icon.jpg" title="Gaming" />
            <GuildCard imageSrc="/path-to-art-icon.jpg" title="Art" />
            <GuildCard imageSrc="/path-to-finance-icon.jpg" title="Finance" />
          </div>
        </div>
        <div className={styles.howItWorks}>
          <h2>How it works</h2>
          <div className={styles.steps}>
            <StepCard stepNumber="1" description="Join a guild and start learning" iconSrc="/path-to-step1-icon.jpg" />
            <StepCard stepNumber="2" description="Get XP for completing quests and challenges" iconSrc="/path-to-step2-icon.jpg" />
          </div>
          <button className={styles.learnMore}>Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
