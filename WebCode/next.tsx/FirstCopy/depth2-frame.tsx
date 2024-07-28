import type { NextPage } from "next";
import styles from "./depth2-frame.module.css";

export type Depth2FrameType = {
  className?: string;
  vector0?: string;
  connectWallet?: string;
};

const Depth2Frame: NextPage<Depth2FrameType> = ({
  className = "",
  vector0,
  connectWallet,
}) => {
  return (
    <header className={[styles.depth2Frame0, className].join(" ")}>
      <div className={styles.depth3Frame0}>
        <div className={styles.depth4Frame0}>
          <div className={styles.depth5Frame0}>
            <img
              className={styles.vector0}
              loading="lazy"
              alt=""
              src={vector0}
            />
            <div className={styles.depth6Frame0} />
          </div>
        </div>
        <div className={styles.depth4Frame1}>
          <a className={styles.sauco}>SAUCO</a>
        </div>
      </div>
      <div className={styles.depth3Frame1}>
        <nav className={styles.depth4Frame01}>
          <div className={styles.depth5Frame01}>
            <a className={styles.home}>Home</a>
          </div>
          <div className={styles.depth5Frame1}>
            <a className={styles.aboutUs}>About us</a>
          </div>
          <div className={styles.depth5Frame2}>
            <a className={styles.guilds}>Guilds</a>
          </div>
          <div className={styles.depth5Frame3}>
            <a className={styles.proposals}>Proposals</a>
          </div>
        </nav>
        <div className={styles.depth4Frame11}>
          <div className={styles.depth5Frame02}>
            <a className={styles.connectWallet}>{connectWallet}</a>
          </div>
        </div>
      </div>
    </header>
  );
};