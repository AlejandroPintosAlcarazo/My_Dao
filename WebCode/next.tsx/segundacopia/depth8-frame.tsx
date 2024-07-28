import type { NextPage } from "next";
import styles from "./depth8-frame.module.css";

export type Depth8FrameType = {
  className?: string;
  proposalListPlaceholder?: string;
  proposal123?: string;
};

const Depth8Frame: NextPage<Depth8FrameType> = ({
  className = "",
  proposalListPlaceholder,
  proposal123,
}) => {
  return (
    <div className={[styles.depth8Frame0, className].join(" ")}>
      <div className={styles.depth9Frame0}>
        <div className={styles.proposalListPlaceholder}>
          {proposalListPlaceholder}
        </div>
      </div>
      <div className={styles.depth9Frame1}>
        <div className={styles.proposal123}>{proposal123}</div>
      </div>
      <div className={styles.depth9Frame2}>
        <div className={styles.depth10Frame0}>
          <div className={styles.depth11Frame0}>
            <div className={styles.open}>Open</div>
          </div>
        </div>
      </div>
      <div className={styles.depth9Frame3}>
        <div className={styles.jan12023}>Jan 1, 2023</div>
      </div>
      <div className={styles.depth9Frame4}>
        <div className={styles.jan152023}>Jan 15, 2023</div>
      </div>
    </div>
  );
};

export default Depth8Frame;