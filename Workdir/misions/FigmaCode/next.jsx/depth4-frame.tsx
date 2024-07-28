import type { NextPage } from "next";
import styles from "./depth4-frame.module.css";

export type Depth4FrameType = {
  className?: string;
  week2DailyLife?: string;
  learnHowToDescribeYourDai?: string;
  depth6Frame1?: string;
};

const Depth4Frame: NextPage<Depth4FrameType> = ({
  className = "",
  week2DailyLife,
  learnHowToDescribeYourDai,
  depth6Frame1,
}) => {
  return (
    <div className={[styles.depth4Frame4, className].join(" ")}>
      <div className={styles.depth5Frame0}>
        <div className={styles.depth6Frame0}>
          <div className={styles.depth7Frame0}>
            <div className={styles.depth8Frame0}>
              <b className={styles.week2Daily}>{week2DailyLife}</b>
            </div>
            <div className={styles.depth8Frame1}>
              <div className={styles.learnHowTo}>
                {learnHowToDescribeYourDai}
              </div>
            </div>
          </div>
          <div className={styles.depth7Frame1}>
            <div className={styles.depth8Frame01}>
              <div className={styles.unlock}>Unlock</div>
            </div>
          </div>
        </div>
        <img
          className={styles.depth6Frame1}
          loading="lazy"
          alt=""
          src={depth6Frame1}
        />
      </div>
    </div>
  );
};

export default Depth4Frame;
