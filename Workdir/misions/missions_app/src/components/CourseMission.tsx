import styles from '../styles/CourseMission.module.css';

type CourseMissionProps = {
  week: string;
  description: string;
  image: string;
  buttonLabel: string;
};

const CourseMission = ({ week, description, image, buttonLabel }: CourseMissionProps) => {
  return (
    <div className={styles.courseMission}>
      <img src={image} alt={week} className={styles.image} />
      <div className={styles.textContainer}>
        <h3 className={styles.week}>{week}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>{buttonLabel}</button>
      </div>
    </div>
  );
};

export default CourseMission;
