import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./depth4-frame3.module.css";

export type Depth4Frame3Type = {
  className?: string;
  cancelButtonContainer?: string;
  votingPower?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Depth4Frame3: NextPage<Depth4Frame3Type> = ({
  className = "",
  cancelButtonContainer,
  votingPower,
  propPadding,
}) => {
  const depth4Frame4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.depth4Frame4, className].join(" ")}
      style={depth4Frame4Style}
    >
      <div className={styles.depth5Frame0}>
        <div className={styles.depth6Frame0}>
          <img
            className={styles.cancelButtonContainer}
            loading="lazy"
            alt=""
            src={cancelButtonContainer}
          />
          <div className={styles.depth7Frame0} />
        </div>
      </div>
      <div className={styles.depth5Frame1}>
        <div className={styles.depth6Frame01}>
          <div className={styles.votingPower}>{votingPower}</div>
        </div>
        <div className={styles.depth6Frame1}>
          <div className={styles.eth}>0.1 ETH</div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame3;