import type { NextPage } from "next";
import styles from "./depth4-frame.module.css";

export type Depth4FrameType = {
  className?: string;
  missionInstructions?: string;
  reviewTheMissionInstructi?: string;
  vector0?: string;
};

const Depth4Frame: NextPage<Depth4FrameType> = ({
  className = "",
  missionInstructions,
  reviewTheMissionInstructi,
  vector0,
}) => {
  return (
    <div className={[styles.depth4Frame15, className].join(" ")}>
      <div className={styles.depth5Frame0}>
        <div className={styles.depth6Frame0}>
          <div className={styles.missionInstructions}>
            {missionInstructions}
          </div>
        </div>
        <div className={styles.depth6Frame1}>
          <div className={styles.reviewTheMission}>
            {reviewTheMissionInstructi}
          </div>
        </div>
      </div>
      <div className={styles.depth5Frame1}>
        <div className={styles.depth6Frame01}>
          <div className={styles.depth7Frame0}>
            <img className={styles.vector0} alt="" src={vector0} />
            <div className={styles.depth8Frame0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame;