import styles from '../styles/SectionLinks.module.css';

const sections = [
  { title: "Achievements", content: "0 achievements unlocked" },
  { title: "Guilds", content: "You are not a member of any guilds" },
  { title: "Missions", content: "You have not completed any missions" },
  { title: "Voting", content: "You have not participated in any votes" },
];

const SectionLinks = () => {
  return (
    <div className={styles.sections}>
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h3>{section.title}</h3>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionLinks;
