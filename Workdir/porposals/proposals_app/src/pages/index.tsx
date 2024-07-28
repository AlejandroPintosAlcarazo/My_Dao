import Navbar from '../components/Navbar';
import MainHeader from '../components/MainHeader';
import OpenVotes from '../components/OpenVotes';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <MainHeader />
        <OpenVotes />
      </main>
    </div>
  );
};

export default Home;

