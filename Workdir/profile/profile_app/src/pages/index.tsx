import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProfileHeader from '../components/ProfileHeader';
import StatisticsCards from '../components/StatisticsCards';
import SectionLinks from '../components/SectionLinks';
import styles from '../styles/index.module.css'; // Utilizar el archivo de estilos específico para la página

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <ProfileHeader />
          <StatisticsCards />
          <SectionLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
