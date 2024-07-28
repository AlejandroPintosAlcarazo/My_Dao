import InfoCard from './InfoCard';
import styles from '../styles/MainHeader.module.css';

const MainHeader = () => {
  return (
    <div className={styles.mainHeader}>
      <h1 className={styles.title}>Governance Proposals</h1>
      <InfoCard 
        title="Recent Proposals" 
        description="View the most recent proposals for governance."
        viewAllLink="#"
      />
      <InfoCard 
        title="Addresses with Highest Voting Power" 
        description="View the addresses with the highest voting power."
        viewAllLink="#"
      />
    </div>
  );
};

export default MainHeader;

