import styles from '../styles/InfoCard.module.css';

type InfoCardProps = {
  title: string;
  description: string;
  viewAllLink: string;
};

const InfoCard = ({ title, description, viewAllLink }: InfoCardProps) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.cardContent}>
        <b className={styles.cardTitle}>{title}</b>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <a className={styles.viewAll} href={viewAllLink}>View all</a>
    </div>
  );
};

export default InfoCard;

