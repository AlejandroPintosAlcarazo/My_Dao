import type { NextPage } from "next";
import styles from "./depth8-frame.module.css";

export type Depth8FrameType = {
  className?: string;
  empty?: string;
  rebrandingAcme?: string;
  inProgress?: string;
};

const Depth8Frame: NextPage<Depth8FrameType> = ({
  className = "",
  empty,
  rebrandingAcme,
  inProgress,
}) => {
  return (
    <div className={[styles.depth8Frame0, className].join(" ")}>
      <div className={styles.depth9Frame0}>
        <div className={styles.empty}>{empty}</div>
      </div>
      <div className={styles.depth9Frame1}>
        <div className={styles.rebrandingAcme}>{rebrandingAcme}</div>
      </div>
      <div className={styles.depth9Frame2}>
        <div className={styles.depth10Frame0}>
          <div className={styles.depth11Frame0}>
            <div className={styles.inProgress}>{inProgress}</div>
          </div>
        </div>
      </div>
      <div className={styles.depth9Frame3}>
        <b className={styles.viewDetails}>View Details</b>
      </div>
    </div>
  );
};

export default Depth8Frame;