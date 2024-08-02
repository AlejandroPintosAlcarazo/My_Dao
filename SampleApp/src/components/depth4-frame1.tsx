import type { NextPage } from "next";
import styles from '../styles/depth4-frame1.module.css';

export type Depth4Frame1Type = {
  className?: string;
  completeProfile?: string;
  earn500MEME?: string;
};

const Depth4Frame1: NextPage<Depth4Frame1Type> = ({
  className = "",
  completeProfile,
  earn500MEME,
}) => {
  return (
    <div className={[styles.depth4Frame3, className].join(" ")}>
      <div className={styles.depth5Frame0}>
        <div className={styles.depth6Frame0}>
          <div className={styles.depth7Frame0}>
            <b className={styles.completeProfile}>{completeProfile}</b>
          </div>
          <div className={styles.depth7Frame1}>
            <div className={styles.earn500Meme}>{earn500MEME}</div>
          </div>
        </div>
        <div className={styles.depth6Frame1}>
          <div className={styles.depth7Frame01}>
            <div className={styles.start}>Start</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame1;