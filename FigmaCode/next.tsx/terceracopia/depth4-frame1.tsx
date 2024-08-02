import type { NextPage } from "next";
import styles from "./depth4-frame1.module.css";

export type Depth4Frame1Type = {
  className?: string;
  vector0?: string;
  mission1?: string;
  daysAgo?: string;
};

const Depth4Frame1: NextPage<Depth4Frame1Type> = ({
  className = "",
  vector0,
  mission1,
  daysAgo,
}) => {
  return (
    <div className={[styles.depth4Frame5, className].join(" ")}>
      <div className={styles.depth5Frame0}>
        <div className={styles.depth6Frame0}>
          <div className={styles.depth7Frame0}>
            <img
              className={styles.vector0}
              loading="lazy"
              alt=""
              src={vector0}
            />
            <div className={styles.depth8Frame0} />
          </div>
        </div>
        <div className={styles.depth6Frame1}>
          <div className={styles.depth7Frame01}>
            <div className={styles.mission1}>{mission1}</div>
          </div>
          <div className={styles.depth7Frame1}>
            <div className={styles.x12345678}>0x1234...5678</div>
          </div>
        </div>
      </div>
      <div className={styles.depth5Frame1}>
        <div className={styles.depth6Frame01}>
          <div className={styles.daysAgo}>{daysAgo}</div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame1;