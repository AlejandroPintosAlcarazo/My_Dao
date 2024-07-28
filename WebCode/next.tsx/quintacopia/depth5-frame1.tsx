import type { NextPage } from "next";
import styles from "./depth5-frame1.module.css";

export type Depth5FrameType = {
  className?: string;
  fileFormat?: string;
  pNGMP4?: string;
  fileSize?: string;
  mB?: string;
};

const Depth5Frame: NextPage<Depth5FrameType> = ({
  className = "",
  fileFormat,
  pNGMP4,
  fileSize,
  mB,
}) => {
  return (
    <div className={[styles.depth5Frame0, className].join(" ")}>
      <div className={styles.depth6Frame0}>
        <div className={styles.depth7Frame0}>
          <div className={styles.fileFormat}>{fileFormat}</div>
        </div>
        <div className={styles.depth7Frame1}>
          <div className={styles.pngMp4}>{pNGMP4}</div>
        </div>
      </div>
      <div className={styles.depth6Frame1}>
        <div className={styles.depth7Frame01}>
          <div className={styles.fileSize}>{fileSize}</div>
        </div>
        <div className={styles.depth7Frame11}>
          <div className={styles.mb}>{mB}</div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame;