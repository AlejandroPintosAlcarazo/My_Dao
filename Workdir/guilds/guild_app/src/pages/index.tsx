import Navbar from '../components/Navbar';
import GuildSearch from '../components/GuildSearch';
import GuildGrid from '../components/GuildGrid';
import styles from '../styles/Index.module.css';

const guilds = [
  { id: 1, name: "Language", description: "Learn, grow and share knowledge", image: "/images/language.png" },
  { id: 2, name: "Gaming", description: "Play games and earn rewards", image: "/images/gaming.png" },
  { id: 3, name: "Art", description: "Create, share and collaborate on art", image: "/images/art.png" },
  { id: 4, name: "Finance", description: "Discuss and invest in finance", image: "/images/finance.png" },
  { id: 5, name: "Global", description: "Connect and learn with a global community", image: "/images/global.png" },
  { id: 6, name: "Technology", description: "Build and learn about technology", image: "/images/technology.png" }
];

const IndexPage = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.title}>Guilds</h1>
        <GuildSearch />
        <GuildGrid guilds={guilds} />
      </div>
    </div>
  );
};

export default IndexPage;
