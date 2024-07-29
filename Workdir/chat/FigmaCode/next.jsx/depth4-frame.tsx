import type { NextPage } from "next";
import styles from "./depth4-frame.module.css";

export type Depth4FrameType = {
  className?: string;
  depth6Frame0?: string;
  jen?: string;
  m?: string;
};

const Depth4Frame: NextPage<Depth4FrameType> = ({
  className = "",
  depth6Frame0,
  jen,
  m,
}) => {
  return (
    <div className={[styles.depth4Frame4, className].join(" ")}>
      <div className={styles.depth5Frame0}>
        <img
          className={styles.depth6Frame0}
          loading="lazy"
          alt=""
          src={depth6Frame0}
        />
        <div className={styles.depth6Frame1}>
          <div className={styles.depth7Frame0}>
            <div className={styles.jen}>{jen}</div>
          </div>
          <div className={styles.depth7Frame1}>
            <div className={styles.heyISaw}>
              Hey I saw your question in the chat. I think I can help. Can we
              chat?
            </div>
          </div>
        </div>
      </div>
      <div className={styles.depth5Frame1}>
        <div className={styles.depth6Frame01}>
          <div className={styles.m}>{m}</div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame;
