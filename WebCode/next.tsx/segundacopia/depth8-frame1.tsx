import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./depth8-frame1.module.css";

export type Depth8Frame1Type = {
  className?: string;
  increaseTheWeeklyRewardTo?: string;
  daysAgo?: string;

  /** Style props */
  propOverflowX?: CSSProperties["overflowX"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propRowGap?: CSSProperties["rowGap"];
};

const Depth8Frame1: NextPage<Depth8Frame1Type> = ({
  className = "",
  increaseTheWeeklyRewardTo,
  daysAgo,
  propOverflowX,
  propFlexWrap,
  propRowGap,
}) => {
  const depth8Frame0Style: CSSProperties = useMemo(() => {
    return {
      overflowX: propOverflowX,
      flexWrap: propFlexWrap,
      rowGap: propRowGap,
    };
  }, [propOverflowX, propFlexWrap, propRowGap]);

  return (
    <div
      className={[styles.depth8Frame0, className].join(" ")}
      style={depth8Frame0Style}
    >
      <div className={styles.depth9Frame0}>
        <div className={styles.increaseTheWeekly}>
          {increaseTheWeeklyRewardTo}
        </div>
      </div>
      <div className={styles.depth9Frame1}>
        <div className={styles.depth10Frame0}>
          <div className={styles.depth11Frame0}>
            <div className={styles.open}>Open</div>
          </div>
        </div>
      </div>
      <div className={styles.depth9Frame2}>
        <div className={styles.daysAgo}>{daysAgo}</div>
      </div>
      <div className={styles.depth9Frame3}>
        <b className={styles.vote}>Vote</b>
      </div>
    </div>
  );
};

export default Depth8Frame1;