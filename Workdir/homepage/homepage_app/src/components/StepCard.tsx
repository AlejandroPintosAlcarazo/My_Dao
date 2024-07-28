import styles from '../styles/StepCard.module.css';

const StepCard = ({ stepNumber, description, iconSrc }) => {
  return (
    <div className={styles.stepCard}>
      <img src={iconSrc} alt={`Step ${stepNumber}`} className={styles.stepIcon} />
      <p>{description}</p>
    </div>
  );
};

export default StepCard;
