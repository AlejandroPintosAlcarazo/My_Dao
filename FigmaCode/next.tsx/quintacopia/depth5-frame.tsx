import type { NextPage } from "next";
import styles from "./depth5-frame.module.css";

export type Depth5Frame1Type = {
  className?: string;
  filledStars?: string;
  reviewStarPair?: string;
  reviewStarPair1?: string;
  reviewStarPair2?: string;
  reviewStarPair3?: string;
  greatPiece?: string;
  reviewStars?: string;
  reviewStars1?: string;
};

const Depth5Frame1: NextPage<Depth5Frame1Type> = ({
  className = "",
  filledStars,
  reviewStarPair,
  reviewStarPair1,
  reviewStarPair2,
  reviewStarPair3,
  greatPiece,
  reviewStars,
  reviewStars1,
}) => {
  return (
    <div className={[styles.depth5Frame0, className].join(" ")}>
      <div className={styles.depth6Frame0}>
        <div className={styles.depth7Frame0}>
          <div className={styles.anon}>Anon</div>
        </div>
        <div className={styles.depth7Frame1}>
          <div className={styles.november182023}>November 18, 2023</div>
        </div>
      </div>
      <div className={styles.depth6Frame1}>
        <div className={styles.depth7Frame01}>
          <div className={styles.depth8Frame0}>
            <img className={styles.filledStarsIcon} alt="" src={filledStars} />
            <div className={styles.depth9Frame0} />
          </div>
        </div>
        <div className={styles.depth7Frame11}>
          <div className={styles.depth8Frame01}>
            <img
              className={styles.reviewStarPair}
              alt=""
              src={reviewStarPair}
            />
            <div className={styles.depth9Frame01} />
          </div>
        </div>
        <div className={styles.depth7Frame2}>
          <div className={styles.depth8Frame02}>
            <img
              className={styles.reviewStarPair1}
              alt=""
              src={reviewStarPair1}
            />
            <div className={styles.depth9Frame02} />
          </div>
        </div>
        <div className={styles.depth7Frame3}>
          <div className={styles.depth8Frame03}>
            <img
              className={styles.reviewStarPair2}
              alt=""
              src={reviewStarPair2}
            />
            <div className={styles.depth9Frame03} />
          </div>
        </div>
        <div className={styles.depth7Frame4}>
          <div className={styles.depth8Frame04}>
            <img
              className={styles.reviewStarPair3}
              alt=""
              src={reviewStarPair3}
            />
            <div className={styles.depth9Frame04} />
          </div>
        </div>
      </div>
      <div className={styles.depth6Frame2}>
        <div className={styles.greatPiece}>{greatPiece}</div>
      </div>
      <div className={styles.depth6Frame3}>
        <div className={styles.depth7Frame02}>
          <div className={styles.depth8Frame05}>
            <div className={styles.depth9Frame05}>
              <img
                className={styles.reviewStarsIcon}
                alt=""
                src={reviewStars}
              />
              <div className={styles.depth10Frame0} />
            </div>
          </div>
          <div className={styles.depth8Frame1}>
            <div className={styles.div}>1</div>
          </div>
        </div>
        <div className={styles.depth7Frame12}>
          <div className={styles.depth8Frame06}>
            <div className={styles.depth9Frame06}>
              <img
                className={styles.reviewStarsIcon1}
                alt=""
                src={reviewStars1}
              />
              <div className={styles.depth10Frame01} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame1;