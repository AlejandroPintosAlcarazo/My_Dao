import type { NextPage } from "next";
import styles from "./depth6-frame.module.css";

export type Depth6FrameType = {
  className?: string;
  depth7Frame0?: string;
  communityContributor?: string;
  x12345678?: string;
};

const Depth6Frame: NextPage<Depth6FrameType> = ({
  className = "",
  depth7Frame0,
  communityContributor,
  x12345678,
}) => {
  return (
    <div className={[styles.depth6Frame0, className].join(" ")}>
      <img
        className={styles.depth7Frame0}
        loading="lazy"
        alt=""
        src={depth7Frame0}
      />
      <div className={styles.depth7Frame1}>
        <div className={styles.depth8Frame0}>
          <div className={styles.communityContributor}>
            {communityContributor}
          </div>
        </div>
        <div className={styles.depth8Frame1}>
          <div className={styles.x12345678}>{x12345678}</div>
        </div>
      </div>
    </div>
  );
};

export default Depth6Frame;
