import type { NextPage } from "next";
import styles from "./depth5-frame.module.css";

export type Depth5FrameType = {
  className?: string;
  votingStarts?: string;
  june12023?: string;
  votingEnds?: string;
  june152023?: string;
};

const Depth5Frame: NextPage<Depth5FrameType> = ({
  className = "",
  votingStarts,
  june12023,
  votingEnds,
  june152023,
}) => {
  return (
    <div className={[styles.depth5Frame0, className].join(" ")}>
      <div className={styles.depth6Frame0}>
        <div className={styles.depth7Frame0}>
          <div className={styles.votingStarts}>{votingStarts}</div>
        </div>
        <div className={styles.depth7Frame1}>
          <div className={styles.june12023}>{june12023}</div>
        </div>
      </div>
      <div className={styles.depth6Frame1}>
        <div className={styles.depth7Frame01}>
          <div className={styles.votingEnds}>{votingEnds}</div>
        </div>
        <div className={styles.depth7Frame11}>
          <div className={styles.june152023}>{june152023}</div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame;