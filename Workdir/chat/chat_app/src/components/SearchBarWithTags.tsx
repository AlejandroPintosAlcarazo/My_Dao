import styles from '../styles/SearchBarWithTags.module.css';

const SearchBarWithTags = () => {
  return (
    <div className={styles.searchBarContainer}>
      <input className={styles.searchInput} type="text" placeholder="Search all chats" />
      <div className={styles.tagsContainer}>
        <button className={styles.tag}>All</button>
        <button className={styles.tag}>Unread</button>
        <button className={styles.tag}>Following</button>
        <button className={styles.tag}>Mentors</button>
        <button className={styles.tag}>Members</button>
        <button className={styles.tag}>Requests</button>
        <button className={styles.tag}>New</button>
        <button className={styles.tag}>Old</button>
      </div>
    </div>
  );
};

export default SearchBarWithTags;
