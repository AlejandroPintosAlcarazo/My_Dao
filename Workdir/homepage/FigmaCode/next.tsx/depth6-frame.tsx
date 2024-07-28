import type { NextPage } from "next";
import styles from "./depth6-frame.module.css";

export type Depth6FrameType = {
  className?: string;
  stepIconPair?: string;
  step1?: string;
  joinAGuildAndStartLearnin?: string;
};

const Depth6Frame: NextPage<Depth6FrameType> = ({
  className = "",
  stepIconPair,
  step1,
  joinAGuildAndStartLearnin,
}) => {
  return (
    <div className={[styles.depth6Frame0, className].join(" ")}>
      <div className={styles.depth7Frame0}>
        <div className={styles.depth8Frame0}>
          <img
            className={styles.stepIconPair}
            loading="lazy"
            alt=""
            src={stepIconPair}
          />
          <div className={styles.depth9Frame0} />
        </div>
      </div>
      <div className={styles.depth7Frame1}>
        <div className={styles.depth8Frame01}>
          <b className={styles.step1}>{step1}</b>
        </div>
        <div className={styles.depth8Frame1}>
          <div className={styles.joinAGuild}>{joinAGuildAndStartLearnin}</div>
        </div>
      </div>
    </div>
  );
};

export default Depth6Frame;