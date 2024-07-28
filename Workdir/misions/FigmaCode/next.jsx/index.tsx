import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import Depth4Frame from "../components/depth4-frame";
import styles from "./index.module.css";

const MissionsButton: NextPage = () => {
  return (
    <div className={styles.missionsButton}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Depth2Frame vector0="/vector--0.svg" />
          <div className={styles.depth2Frame1}>
            <div className={styles.depth3Frame0}>
              <div className={styles.depth4Frame0}>
                <div className={styles.depth5Frame0}>
                  <div className={styles.depth6Frame0}>
                    <h1 className={styles.missions}>Missions</h1>
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.embarkOnLearning}>
                      Embark on learning missions to improve your English skills
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame1}>
                <b className={styles.currentMission}>Current Mission</b>
              </div>
              <div className={styles.depth4Frame2}>
                <div className={styles.depth5Frame01}>
                  <img
                    className={styles.depth6Frame01}
                    loading="lazy"
                    alt=""
                    src="/depth-6-frame-0@2x.png"
                  />
                  <div className={styles.depth6Frame11}>
                    <div className={styles.depth7Frame0}>
                      <div className={styles.div}>4/7</div>
                    </div>
                    <div className={styles.depth7Frame1}>
                      <b className={styles.week1Introduction}>
                        Week 1: Introduction
                      </b>
                    </div>
                    <div className={styles.depth7Frame2}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.learnHowTo}>
                          Learn how to introduce yourself in English
                        </div>
                      </div>
                      <div className={styles.depth8Frame1}>
                        <div className={styles.depth9Frame0}>
                          <div className={styles.continue}>Continue</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame3}>
                <b className={styles.upcomingMissions}>Upcoming Missions</b>
              </div>
              <Depth4Frame
                week2DailyLife="Week 2: Daily Life"
                learnHowToDescribeYourDai="Learn how to describe your daily life in English"
                depth6Frame1="/depth-6-frame-1@2x.png"
              />
              <Depth4Frame
                week2DailyLife="Week 3: Hobbies"
                learnHowToDescribeYourDai="Learn how to talk about your hobbies in English"
                depth6Frame1="/depth-6-frame-1-1@2x.png"
              />
              <Depth4Frame
                week2DailyLife="Week 4: Future Plans"
                learnHowToDescribeYourDai="Learn how to discuss your future plans in English"
                depth6Frame1="/depth-6-frame-1-2@2x.png"
              />
              <Depth4Frame
                week2DailyLife="Week 5: Travel"
                learnHowToDescribeYourDai="Learn how to describe your travel experiences in English"
                depth6Frame1="/depth-6-frame-1-3@2x.png"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MissionsButton;
