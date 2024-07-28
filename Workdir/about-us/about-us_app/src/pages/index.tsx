import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import Section from '../components/Section';
import styles from '../styles/AboutUs.module.css';

const IndexPage = () => {
  return (
    <div className={styles.aboutUsPage}>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img
            className={styles.headerImage}
            src="/path-to-your-image.jpg"
            alt="Header Image"
          />
          <div className={styles.headerText}>
            <h1>We're building a decentralized autonomous organization focused on gamified learning.</h1>
            <div className={styles.buttons}>
              <button className={styles.primaryButton}>Join our Discord</button>
              <button className={styles.secondaryButton}>Read our Docs</button>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.mainContent}>
        <Section 
          title="Mission" 
          content="We're on a mission to enhance the way we learn and grow through gamification, community and decentralization. We believe that the future of learning is decentralized, gamified and community-driven."
        />
        <Section 
          title="Vision" 
          content="Our vision is to empower people to learn and grow in a fun and engaging way, while also rewarding them for their contributions. We want to create a vibrant ecosystem of learners, creators and educators who are all motivated by shared values and incentives."
        />
        <Section 
          title="What is LearnCraft?" 
          content="LearnCraft is a decentralized autonomous organization (DAO) focused on gamified learning. We're building a community of learners, creators, and educators who are all motivated by shared values and incentives. Our goal is to enhance the way we learn and grow through gamification, community and decentralization. We believe that the future of learning is decentralized, gamified and community-driven."
        />
        <ContactUs />
      </main>
    </div>
  );
};

export default IndexPage;
