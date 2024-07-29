import type { NextPage } from "next";
import styles from "./depth5-frame.module.css";

export type Depth5FrameType = {
  className?: string;
  addressScore?: string;
  progressIndicators?: string;
};

const Depth5Frame: NextPage<Depth5FrameType> = ({
  className = "",
  addressScore,
  progressIndicators,
}) => {
  return (
    <div className={[styles.depth5Frame0, className].join(" ")}>
      <div className={styles.depth6Frame0}>
        <a className={styles.addressScore}>{addressScore}</a>
      </div>
      <div className={styles.depth6Frame1}>
        <b className={styles.progressIndicators}>{progressIndicators}</b>
      </div>
    </div>
  );
};

export default Depth5Frame;
