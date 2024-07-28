import type { NextPage } from "next";
import styles from "./depth4-frame2.module.css";

export type Depth4Frame2Type = {
  className?: string;
  recentProposals?: string;
  viewTheMostRecentProposal?: string;
  vector0?: string;
};

const Depth4Frame2: NextPage<Depth4Frame2Type> = ({
  className = "",
  recentProposals,
  viewTheMostRecentProposal,
  vector0,
}) => {
  return (
    <div className={[styles.depth4Frame1, className].join(" ")}>
      <div className={styles.depth5Frame0}>
        <div className={styles.depth6Frame0}>
          <div className={styles.depth7Frame0}>
            <b className={styles.recentProposals}>{recentProposals}</b>
          </div>
          <div className={styles.depth7Frame1}>
            <div className={styles.viewTheMost}>
              {viewTheMostRecentProposal}
            </div>
          </div>
        </div>
        <div className={styles.depth6Frame1}>
          <a className={styles.viewAll}>View all</a>
          <div className={styles.depth7Frame11}>
            <div className={styles.depth8Frame0}>
              <img
                className={styles.vector0}
                loading="lazy"
                alt=""
                src={vector0}
              />
              <div className={styles.depth9Frame0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame2;