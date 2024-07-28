import type { NextPage } from "next";
import styles from "./depth6-frame.module.css";

export type Depth6FrameType = {
  className?: string;
  vector0?: string;
  vector01?: string;
  vector02?: string;
  vector03?: string;
  vector04?: string;
  vector05?: string;
  vector06?: string;
};

const Depth6Frame: NextPage<Depth6FrameType> = ({
  className = "",
  vector0,
  vector01,
  vector02,
  vector03,
  vector04,
  vector05,
  vector06,
}) => {
  return (
    <div className={[styles.depth6Frame1, className].join(" ")}>
      <div className={styles.depth7Frame0}>
        <div className={styles.depth8Frame0}>
          <div className={styles.depth9Frame0}>
            <img className={styles.vector0} alt="" src={vector0} />
            <div className={styles.depth10Frame0} />
          </div>
        </div>
        <div className={styles.depth8Frame1}>
          <div className={styles.dashboard}>Dashboard</div>
        </div>
      </div>
      <div className={styles.depth7Frame1}>
        <div className={styles.depth8Frame01}>
          <div className={styles.depth9Frame01}>
            <img className={styles.vector01} alt="" src={vector01} />
            <div className={styles.depth10Frame01} />
          </div>
        </div>
        <div className={styles.depth8Frame11}>
          <div className={styles.profile}>Profile</div>
        </div>
      </div>
      <div className={styles.depth7Frame2}>
        <div className={styles.depth8Frame02}>
          <div className={styles.depth9Frame02}>
            <img className={styles.vector02} alt="" src={vector02} />
            <div className={styles.depth10Frame02} />
          </div>
        </div>
        <div className={styles.depth8Frame12}>
          <div className={styles.missions}>Missions</div>
        </div>
      </div>
      <div className={styles.depth7Frame3}>
        <div className={styles.depth8Frame03}>
          <div className={styles.depth9Frame03}>
            <img className={styles.vector03} alt="" src={vector03} />
            <div className={styles.depth10Frame03} />
          </div>
        </div>
        <div className={styles.depth8Frame13}>
          <div className={styles.rewards}>Rewards</div>
        </div>
      </div>
      <div className={styles.depth7Frame4}>
        <div className={styles.depth8Frame04}>
          <div className={styles.depth9Frame04}>
            <img className={styles.vector04} alt="" src={vector04} />
            <div className={styles.depth10Frame04} />
          </div>
        </div>
        <div className={styles.depth8Frame14}>
          <div className={styles.chat}>Chat</div>
        </div>
      </div>
      <div className={styles.depth7Frame5}>
        <div className={styles.depth8Frame05}>
          <div className={styles.depth9Frame05}>
            <img className={styles.vector05} alt="" src={vector05} />
            <div className={styles.depth10Frame05} />
          </div>
        </div>
        <div className={styles.depth8Frame15}>
          <div className={styles.vote}>Vote</div>
        </div>
      </div>
      <div className={styles.depth7Frame6}>
        <div className={styles.depth8Frame06}>
          <div className={styles.depth9Frame06}>
            <img className={styles.vector06} alt="" src={vector06} />
            <div className={styles.depth10Frame06} />
          </div>
        </div>
        <div className={styles.depth8Frame16}>
          <div className={styles.store}>Store</div>
        </div>
      </div>
    </div>
  );
};

export default Depth6Frame;