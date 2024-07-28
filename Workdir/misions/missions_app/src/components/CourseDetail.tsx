import styles from '../styles/CourseDetail.module.css';

type CourseDetailProps = {
  icon: string;
  title: string;
  description: string;
};

const CourseDetail = ({ icon, title, description }: CourseDetailProps) => {
  return (
    <div className={styles.courseDetail}>
      <img src={icon} alt={title} className={styles.icon} />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default CourseDetail;
