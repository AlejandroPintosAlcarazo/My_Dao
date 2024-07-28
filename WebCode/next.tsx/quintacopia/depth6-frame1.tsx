import type { NextPage } from "next";
import styles from "./depth6-frame1.module.css";

export type Depth6Frame1Type = {
  className?: string;
  payInFull?: string;
  emptyValues?: string;
  iconTrio?: string;
  ownTheArtPiece?: string;
  downloadIcons?: string;
  usageIcons?: string;
};

const Depth6Frame1: NextPage<Depth6Frame1Type> = ({
  className = "",
  payInFull,
  emptyValues,
  iconTrio,
  ownTheArtPiece,
  downloadIcons,
  usageIcons,
}) => {
  return (
    <div className={[styles.depth6Frame0, className].join(" ")}>
      <div className={styles.depth7Frame0}>
        <div className={styles.depth8Frame0}>
          <b className={styles.payInFull}>{payInFull}</b>
        </div>
        <div className={styles.depth8Frame1}>
          <div className={styles.depth9Frame0}>
            <div className={styles.emptyValues}>{emptyValues}</div>
          </div>
          <div className={styles.depth9Frame1}>
            <b className={styles.usd}>USD</b>
          </div>
        </div>
      </div>
      <div className={styles.depth7Frame1}>
        <div className={styles.depth8Frame01}>
          <div className={styles.depth9Frame01}>
            <div className={styles.depth10Frame0}>
              <img className={styles.iconTrio} alt="" src={iconTrio} />
              <div className={styles.depth11Frame0} />
            </div>
          </div>
          <div className={styles.ownTheArt}>{ownTheArtPiece}</div>
        </div>
        <div className={styles.depth8Frame11}>
          <div className={styles.depth9Frame02}>
            <div className={styles.depth10Frame01}>
              <img
                className={styles.downloadIcons}
                alt=""
                src={downloadIcons}
              />
              <div className={styles.depth11Frame01} />
            </div>
          </div>
          <div className={styles.downloadFile}>Download file</div>
        </div>
        <div className={styles.depth8Frame2}>
          <div className={styles.depth9Frame03}>
            <div className={styles.depth10Frame02}>
              <img className={styles.usageIcons} alt="" src={usageIcons} />
              <div className={styles.depth11Frame02} />
            </div>
          </div>
          <div className={styles.useForPersonal}>Use for personal use</div>
        </div>
      </div>
    </div>
  );
};

export default Depth6Frame1;