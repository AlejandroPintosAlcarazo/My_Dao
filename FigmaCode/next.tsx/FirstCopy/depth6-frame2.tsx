import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./depth6-frame2.module.css";

export type Depth6Frame2Type = {
  className?: string;
  depth7Frame0?: string;
  language?: string;
  learnGrowAndShareKnowledg?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const Depth6Frame2: NextPage<Depth6Frame2Type> = ({
  className = "",
  depth7Frame0,
  language,
  learnGrowAndShareKnowledg,
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
          <div className={styles.language}>{language}</div>
        </div>
        <div className={styles.depth8Frame1}>
          <div className={styles.learnGrowAnd}>{learnGrowAndShareKnowledg}</div>
        </div>
      </div>
    </div>
  );
};
