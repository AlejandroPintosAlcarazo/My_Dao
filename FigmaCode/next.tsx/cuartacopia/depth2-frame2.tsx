import type { NextPage } from "next";
import styles from "./depth2-frame2.module.css";

export type Depth2Frame2Type = {
  className?: string;
};

const Depth2Frame2: NextPage<Depth2Frame2Type> = ({ className = "" }) => {
  return (
    <header className={[styles.depth2Frame0, className].join(" ")}>
      <div className={styles.depth3Frame0}>
        <div className={styles.depth4Frame0}>
          <div className={styles.depth5Frame0}>
            <img
              className={styles.vector0}
              loading="lazy"
              alt=""
              src="/vector--0.svg"
            />
            <div className={styles.depth6Frame0} />
          </div>
        </div>
        <div className={styles.depth4Frame1}>
          <a className={styles.acmeInc}>Acme Inc</a>
        </div>
      </div>
      <div className={styles.depth3Frame1}>
        <nav className={styles.depth4Frame01}>
          <div className={styles.depth5Frame01}>
            <a className={styles.home}>Home</a>
          </div>
          <div className={styles.depth5Frame1}>
            <a className={styles.proposals}>Proposals</a>
          </div>
          <div className={styles.depth5Frame2}>
            <a className={styles.members}>Members</a>
          </div>
          <div className={styles.depth5Frame3}>
            <a className={styles.docs}>Docs</a>
          </div>
        </nav>
        <div className={styles.depth4Frame11}>
          <div className={styles.depth5Frame02}>
            <a className={styles.newProposal}>New Proposal</a>
          </div>
        </div>
        <img
          className={styles.depth4Frame2}
          loading="lazy"
          alt=""
          src="/depth-4-frame-22@2x.png"
        />
      </div>
    </header>
  );
};

export default Depth2Frame2;