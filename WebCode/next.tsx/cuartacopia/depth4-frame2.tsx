import type { NextPage } from "next";
import styles from "./depth4-frame2.module.css";

export type Depth4Frame2Type = {
  className?: string;
  learnAboutEpiqDAO?: string;
  dec312022?: string;
  daysLeft?: string;
  progressBars?: string;
};

const Depth4Frame2: NextPage<Depth4Frame2Type> = ({
  className = "",
  learnAboutEpiqDAO,
  dec312022,
  daysLeft,
  progressBars,
}) => {
  return (
    <div className={[styles.depth4Frame7, className].join(" ")}>
      <div className={styles.depth5Frame0}>
        <div className={styles.depth6Frame0}>
          <div className={styles.learnAboutEpiq}>{learnAboutEpiqDAO}</div>
        </div>
        <div className={styles.depth6Frame1}>
          <div className={styles.dec312022}>{dec312022}</div>
        </div>
        <div className={styles.depth6Frame2}>
          <div className={styles.daysLeft}>{daysLeft}</div>
        </div>
      </div>
      <div className={styles.depth5Frame1}>
        <div className={styles.depth6Frame01}>
          <div className={styles.depth7Frame0}>
            <img
              className={styles.progressBarsIcon}
              alt=""
              src={progressBars}
            />
            <div className={styles.depth8Frame0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame2;