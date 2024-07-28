import styles from '../styles/GuildCard.module.css';

const GuildCard = ({ imageSrc, title }) => {
  return (
    <div className={styles.guildCard}>
      <img src={imageSrc} alt={title} className={styles.guildImage} />
      <p>{title}</p>
    </div>
  );
};

export default GuildCard;
