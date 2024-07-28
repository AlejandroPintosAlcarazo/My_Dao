import VoteCard from './VoteCard';
import styles from '../styles/OpenVotes.module.css';

const OpenVotes = () => {
  const votes = [
    { id: 1, user: "User1", title: "Proposal 123", description: "Description of proposal 123", startDate: "Jan 1, 2023", endDate: "Jan 15, 2023" },
    { id: 2, user: "User2", title: "Proposal 124", description: "Description of proposal 124", startDate: "Jan 1, 2023", endDate: "Jan 15, 2023" },
    // Más propuestas...
  ];

  return (
    <div className={styles.openVotes}>
      <div className={styles.voteHeader}>
        <div className={styles.headerItem}>Proposal number</div>
        <div className={styles.headerItem}>Title</div>
        <div className={styles.headerItem}>Status</div>
        <div className={styles.headerItem}>Start date</div>
        <div className={styles.headerItem}>End date</div>
      </div>
      {votes.map(vote => (
        <VoteCard 
          key={vote.id} 
          user={vote.user}
          title={vote.title}
          description={vote.description}
          startDate={vote.startDate}
          endDate={vote.endDate}
        />
      ))}
    </div>
  );
};

export default OpenVotes;

