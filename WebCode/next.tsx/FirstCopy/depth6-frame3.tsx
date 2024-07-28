import type { NextPage } from "next";
import styles from "./depth6-frame3.module.css";

export type Depth6Frame3Type = {
  className?: string;
  depth7Frame0?: string;
  englishClan?: string;
};

const Depth6Frame3: NextPage<Depth6Frame3Type> = ({
  className = "",
  depth7Frame0,
  englishClan,
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
        <div className={styles.englishClan}>{englishClan}</div>
      </div>
    </div>
  );
};

export default Depth6Frame3;