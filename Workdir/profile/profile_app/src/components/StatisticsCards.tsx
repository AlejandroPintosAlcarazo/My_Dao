import styles from '../styles/StatisticsCards.module.css';

const statistics = [
  { label: "Missions", value: 100 },
  { label: "Voting", value: 200 },
  { label: "Guilds", value: 300 },
  { label: "Reputation", value: 400 },
  { label: "XP", value: 500 },
];

const StatisticsCards = () => {
  return (
    <div className={styles.statistics}>
      {statistics.map((stat, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.value}>{stat.value}</div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards;
