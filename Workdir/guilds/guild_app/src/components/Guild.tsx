import styles from '../styles/Guild.module.css';

const Guild = ({ name, description, image }) => {
  return (
    <div className={styles.guild}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Guild;
