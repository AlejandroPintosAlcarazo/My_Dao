import type { NextPage } from "next";
import styles from "./depth2-frame.module.css";

export type Depth2FrameType = {
  className?: string;
};

const Depth2Frame: NextPage<Depth2FrameType> = ({ className = "" }) => {
  return (
    <header className={[styles.depth2Frame0, className].join(" ")}>
      <div className={styles.depth3Frame0}>
        <div className={styles.depth4Frame0}>
          <div className={styles.depth5Frame0}>
            <img className={styles.vector0} alt="" src="/vector--0.svg" />
            <img className={styles.vector1} alt="" src="/vector--1.svg" />
            <div className={styles.depth6Frame0} />
            <div className={styles.depth6Frame1} />
          </div>
        </div>
        <div className={styles.depth4Frame1}>
          <a className={styles.guild}>Guild</a>
        </div>
      </div>
      <div className={styles.depth3Frame1}>
        <div className={styles.depth4Frame01}>
          <div className={styles.depth5Frame01}>
            <div className={styles.depth6Frame01}>
              <div className={styles.depth7Frame0}>
                <img
                  className={styles.vector01}
                  alt=""
                  src="/vector--0-1.svg"
                />
                <div className={styles.depth8Frame0} />
              </div>
            </div>
            <div className={styles.depth6Frame11}>
              <a className={styles.search}>Search</a>
            </div>
          </div>
        </div>
        <div className={styles.depth4Frame11}>
          <div className={styles.depth5Frame02}>
            <div className={styles.depth6Frame02}>
              <img className={styles.vector02} alt="" src="/vector--0-2.svg" />
              <div className={styles.depth7Frame01} />
            </div>
          </div>
        </div>
        <img
          className={styles.depth4Frame2}
          loading="lazy"
          alt=""
          src="/depth-4-frame-2@2x.png"
        />
      </div>
    </header>
  );
};

export default Depth2Frame;