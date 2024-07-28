import styles from '../styles/VoteCard.module.css';

type VoteCardProps = {
  user: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
};

const VoteCard = ({ user, title, description, startDate, endDate }: VoteCardProps) => {
  return (
    <div className={styles.voteCard}>
      <div className={styles.user}>{user}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.dates}>
        <div className={styles.startDate}>{startDate}</div>
        <div className={styles.endDate}>{endDate}</div>
      </div>
    </div>
  );
};

export default VoteCard;

