import styles from '../styles/GuildSearch.module.css';

const GuildSearch = () => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" className={styles.searchInput} placeholder="Search guilds" />
    </div>
  );
};

export default GuildSearch;
