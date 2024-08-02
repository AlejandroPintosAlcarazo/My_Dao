import type { NextPage } from "next";
import styles from "./depth4-frame.module.css";

export type Depth4FrameType = {
  className?: string;
  rankSMaster?: string;
  xP?: string;
  youHaveMasteredTheArtOfLe?: string;
  depth6Frame1?: string;
};

const Depth4Frame: NextPage<Depth4FrameType> = ({
  className = "",
  rankSMaster,
  xP,
  youHaveMasteredTheArtOfLe,
  depth6Frame1,
}) => {
  return (
    <div className={[styles.depth4Frame1, className].join(" ")}>
      <div className={styles.depth5Frame0}>
        <div className={styles.depth6Frame0}>
          <div className={styles.depth7Frame0}>
            <div className={styles.rankSMaster}>{rankSMaster}</div>
          </div>
          <div className={styles.depth7Frame1}>
            <b className={styles.xp}>{xP}</b>
          </div>
          <div className={styles.depth7Frame2}>
            <div className={styles.youHaveMastered}>
              {youHaveMasteredTheArtOfLe}
            </div>
          </div>
        </div>
        <img
          className={styles.depth6Frame1}
          loading="lazy"
          alt=""
          src={depth6Frame1}
        />
      </div>
    </div>
  );
};
