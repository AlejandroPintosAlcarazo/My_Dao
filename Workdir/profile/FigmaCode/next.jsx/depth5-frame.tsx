import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./depth5-frame.module.css";

export type Depth5FrameType = {
  className?: string;
  placeholders?: string;
  missions?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
};

const Depth5Frame: NextPage<Depth5FrameType> = ({
  className = "",
  placeholders,
  missions,
  propFlex,
  propPadding,
}) => {
  const depth5Frame0Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  return (
    <div
      className={[styles.depth5Frame0, className].join(" ")}
      style={depth5Frame0Style}
    >
      <div className={styles.depth6Frame0}>
        <b className={styles.placeholders}>{placeholders}</b>
      </div>
      <div className={styles.depth6Frame1}>
        <div className={styles.depth7Frame0}>
          <div className={styles.missions}>{missions}</div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame;
