import CourseMission from './CourseMission';
import styles from '../styles/MissionsList.module.css';

type MissionsListProps = {
  missions: {
    week: string;
    description: string;
    image: string;
    buttonLabel: string;
  }[];
};

const MissionsList = ({ missions }: MissionsListProps) => {
  return (
    <div className={styles.missionsList}>
      {missions.map((mission, index) => (
        <CourseMission
          key={index}
          week={mission.week}
          description={mission.description}
          image={mission.image}
          buttonLabel={mission.buttonLabel}
        />
      ))}
    </div>
  );
};

export default MissionsList;
