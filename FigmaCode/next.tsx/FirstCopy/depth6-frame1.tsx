import type { NextPage } from "next";
import styles from "./depth6-frame1.module.css";

export type Depth6FrameType = {
  className?: string;
  depth8Frame0?: string;
  language?: string;
};

const Depth6Frame: NextPage<Depth6FrameType> = ({
  className = "",
  depth8Frame0,
  language,
}) => {
  return (
    <div className={[styles.depth6Frame0, className].join(" ")}>
      <div className={styles.depth7Frame0}>
        <img
          className={styles.depth8Frame0}
          loading="lazy"
          alt=""
          src={depth8Frame0}
        />
      </div>
      <div className={styles.depth7Frame1}>
        <div className={styles.language}>{language}</div>
      </div>
    </div>
  );
};

export default Depth6Frame;