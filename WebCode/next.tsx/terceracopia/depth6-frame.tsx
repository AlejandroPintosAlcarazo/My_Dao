import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./depth6-frame.module.css";

export type Depth6FrameType = {
  className?: string;
  depth7Frame0?: string;
  blueLightGlasses?: string;
  divider?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const Depth6Frame: NextPage<Depth6FrameType> = ({
  className = "",
  depth7Frame0,
  blueLightGlasses,
  divider,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const depth6Frame0Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div
      className={[styles.depth6Frame0, className].join(" ")}
      style={depth6Frame0Style}
    >
      <img
        className={styles.depth7Frame0}
        loading="lazy"
        alt=""
        src={depth7Frame0}
      />
      <div className={styles.depth7Frame1}>
        <div className={styles.depth8Frame0}>
          <div className={styles.blueLightGlasses}>{blueLightGlasses}</div>
        </div>
        <div className={styles.depth8Frame1}>
          <div className={styles.divider}>{divider}</div>
        </div>
      </div>
    </div>
  );
};

export default Depth6Frame;