import Navbar from '../components/Navbar';
import CourseDetail from '../components/CourseDetail';
import MissionsList from '../components/MissionsList';
import styles from '../styles/index.module.css';

const missions = [
  {
    week: 'Week 2: Daily Life',
    description: 'Learn how to describe your daily life in English',
    image: '/depth-6-frame-1@2x.png',
    buttonLabel: 'Unlock',
  },
  {
    week: 'Week 3: Hobbies',
    description: 'Learn how to talk about your hobbies in English',
    image: '/depth-6-frame-1-1@2x.png',
    buttonLabel: 'Unlock',
  },
  {
    week: 'Week 4: Future Plans',
    description: 'Learn how to discuss your future plans in English',
    image: '/depth-6-frame-1-2@2x.png',
    buttonLabel: 'Unlock',
  },
  {
    week: 'Week 5: Travel',
    description: 'Learn how to describe your travel experiences in English',
    image: '/depth-6-frame-1-3@2x.png',
    buttonLabel: 'Unlock',
  },
];

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <CourseDetail
          icon="/vector--0.svg"
          title="Current Mission"
          description="Learn how to introduce yourself in English"
        />
        <MissionsList missions={missions} />
      </main>
    </div>
  );
};

export default HomePage;
