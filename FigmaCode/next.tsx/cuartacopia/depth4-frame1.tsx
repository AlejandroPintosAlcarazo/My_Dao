import type { NextPage } from "next";
import styles from "./depth4-frame1.module.css";

export type Depth4FrameType = {
  className?: string;
  chatIcon?: string;
  searchAllChats?: string;
};

const Depth4Frame: NextPage<Depth4FrameType> = ({
  className = "",
  chatIcon,
  searchAllChats,
}) => {
  return (
    <div className={[styles.depth4Frame1, className].join(" ")}>
      <div className={styles.depth5Frame0}>
        <div className={styles.depth6Frame0}>
          <div className={styles.depth7Frame0}>
            <div className={styles.depth8Frame0}>
              <img className={styles.chatIcon} alt="" src={chatIcon} />
              <div className={styles.depth9Frame0} />
            </div>
          </div>
          <div className={styles.depth7Frame1}>
            <div className={styles.searchAllChats}>{searchAllChats}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame;