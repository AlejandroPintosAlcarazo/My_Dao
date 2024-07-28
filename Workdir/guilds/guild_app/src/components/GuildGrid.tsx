import Guild from './Guild';
import styles from '../styles/GuildGrid.module.css';

const GuildGrid = ({ guilds }) => {
  return (
    <div className={styles.grid}>
      {guilds.map(guild => (
        <Guild key={guild.id} name={guild.name} description={guild.description} image={guild.image} />
      ))}
    </div>
  );
};

export default GuildGrid;
