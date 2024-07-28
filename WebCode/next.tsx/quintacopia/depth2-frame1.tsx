import type { NextPage } from "next";
import styles from "./depth2-frame1.module.css";

export type Depth2Frame1Type = {
  className?: string;
};

const Depth2Frame1: NextPage<Depth2Frame1Type> = ({ className = "" }) => {
  return (
    <header className={[styles.depth2Frame0, className].join(" ")}>
      <div className={styles.navigationItem}>
        <div className={styles.depth5Frame0}>
          <img className={styles.vector0} alt="" src="/vector--0.svg" />
          <img
            className={styles.vector1}
            loading="lazy"
            alt=""
            src="/vector--1.svg"
          />
          <div className={styles.depth7Frame0} />
        </div>
      </div>
      <div className={styles.navigationItem1}>
        <div className={styles.lionheartDaoWrapper}>
          <a className={styles.lionheartDao}>Lionheart DAO</a>
        </div>
        <div className={styles.depth3Frame1}>
          <nav className={styles.depth4Frame0}>
            <div className={styles.depth5Frame01}>
              <a className={styles.home}>Home</a>
            </div>
            <div className={styles.depth5Frame1}>
              <a className={styles.dao}>DAO</a>
            </div>
            <div className={styles.depth5Frame2}>
              <a className={styles.store}>Store</a>
            </div>
            <div className={styles.depth5Frame3}>
              <a className={styles.proposals}>Proposals</a>
            </div>
            <div className={styles.depth5Frame4}>
              <a className={styles.members}>Members</a>
            </div>
          </nav>
          <div className={styles.depth4Frame1}>
            <div className={styles.depth5Frame02}>
              <a className={styles.create}>Create</a>
            </div>
          </div>
          <img
            className={styles.depth4Frame2}
            loading="lazy"
            alt=""
            src="/depth-4-frame-21@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Depth2Frame1;