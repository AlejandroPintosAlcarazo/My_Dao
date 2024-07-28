import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./depth4-frame1.module.css";

export type Depth4Frame1Type = {
  className?: string;
  depth5Frame0?: string;
  alice?: string;
  daysAgo?: string;
  imInFavorOfThisProposalIT?: string;
  vector0?: string;
  noVotesTimePlaceholder?: string;
  vector01?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Depth4Frame1: NextPage<Depth4Frame1Type> = ({
  className = "",
  depth5Frame0,
  alice,
  daysAgo,
  imInFavorOfThisProposalIT,
  vector0,
  noVotesTimePlaceholder,
  vector01,
  propPadding,
}) => {
  const depth4Frame9Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.depth4Frame9, className].join(" ")}
      style={depth4Frame9Style}
    >
      <img
        className={styles.depth5Frame0}
        loading="lazy"
        alt=""
        src={depth5Frame0}
      />
      <div className={styles.depth5Frame1}>
        <div className={styles.depth6Frame0}>
          <div className={styles.depth7Frame0}>
            <b className={styles.alice}>{alice}</b>
          </div>
          <div className={styles.depth7Frame1}>
            <div className={styles.daysAgo}>{daysAgo}</div>
          </div>
        </div>
        <div className={styles.depth6Frame1}>
          <div className={styles.imInFavor}>{imInFavorOfThisProposalIT}</div>
        </div>
        <div className={styles.depth6Frame2}>
          <div className={styles.depth7Frame01}>
            <div className={styles.depth8Frame0}>
              <div className={styles.depth9Frame0}>
                <img
                  className={styles.vector0}
                  loading="lazy"
                  alt=""
                  src={vector0}
                />
                <div className={styles.depth10Frame0} />
              </div>
            </div>
            <div className={styles.depth8Frame1}>
              <div className={styles.noVotesTime}>{noVotesTimePlaceholder}</div>
            </div>
          </div>
          <div className={styles.depth7Frame11}>
            <div className={styles.depth8Frame01}>
              <div className={styles.depth9Frame01}>
                <img
                  className={styles.vector01}
                  loading="lazy"
                  alt=""
                  src={vector01}
                />
                <div className={styles.depth10Frame01} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame1;