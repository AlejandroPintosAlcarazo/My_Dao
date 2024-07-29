import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SearchBarWithTags from '../components/SearchBarWithTags';
import DiscussionHistory from '../components/DiscussionHistory';
import DateDropdown from '../components/DateDropdown';
import styles from '../styles/index.module.css';

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <SearchBarWithTags />
          <DateDropdown />
          <DiscussionHistory />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
