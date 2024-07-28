import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import Depth6Frame1 from "../components/depth6-frame1";
import Depth6Frame from "../components/depth6-frame";
import styles from "./index.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <main className={styles.depth0Frame0}>
        <Depth2Frame vector0="/vector--0.svg" />
        <section className={styles.depth3Frame0Wrapper}>
          <div className={styles.depth3Frame0}>
            <div className={styles.depth6Frame0Wrapper}>
              <div className={styles.depth6Frame0}>
                <div className={styles.welcomeMessage}>
                  <h1 className={styles.welcomeToSauco}>
                    Welcome to SAUCO DAO
                  </h1>
                  <div className={styles.alearnEarnAnd}>
                    ALearn, Earn, and Thrive: A Gamified DAO for Lifelong
                    Achievement
                  </div>
                </div>
                <div className={styles.depth7Frame1Wrapper}>
                  <div className={styles.depth7Frame1}>
                    <div className={styles.depth8Frame0}>
                      <div className={styles.depth9Frame0}>
                        <div className={styles.depth10Frame0}>
                          <img
                            className={styles.vector0}
                            loading="lazy"
                            alt=""
                            src="/vector--0-1.svg"
                          />
                          <div className={styles.depth11Frame0} />
                        </div>
                      </div>
                      <div className={styles.depth9Frame1}>
                        <div className={styles.enterYourEmail}>
                          Enter your email address
                        </div>
                      </div>
                      <div className={styles.depth9Frame2}>
                        <div className={styles.depth10Frame01}>
                          <div className={styles.depth11Frame01}>
                            <b className={styles.getEarlyAccess}>
                              Get early access
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.guildsWrapper}>
                <h3 className={styles.guilds}>Guilds</h3>
              </div>
              <div className={styles.depth4Frame2}>
                <div className={styles.depth5Frame0}>
                  <Depth6Frame1
                    depth8Frame0="/depth-8-frame-0@2x.png"
                    language="Language"
                  />
                  <Depth6Frame1
                    depth8Frame0="/depth-8-frame-0-1@2x.png"
                    language="Gaming"
                  />
                  <Depth6Frame1
                    depth8Frame0="/depth-8-frame-0-2@2x.png"
                    language="Art"
                  />
                  <Depth6Frame1
                    depth8Frame0="/depth-8-frame-0-3@2x.png"
                    language="Finance"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.howItWorksWrapper}>
                <h3 className={styles.howItWorks}>How it works</h3>
              </div>
              <div className={styles.depth4Frame4Parent}>
                <div className={styles.depth4Frame4}>
                  <div className={styles.depth5Frame01}>
                    <Depth6Frame
                      stepIconPair="/vector--0-2.svg"
                      step1="Step 1"
                      joinAGuildAndStartLearnin="Join a guild and start learning English"
                    />
                    <Depth6Frame
                      stepIconPair="/vector--0-3.svg"
                      step1="Step 2"
                      joinAGuildAndStartLearnin="Get XP for completing quests and challenges"
                    />
                  </div>
                </div>
                <div className={styles.depth4Frame5}>
                  <div className={styles.depth5Frame02}>
                    <div className={styles.depth6Frame01}>
                      <a className={styles.learnMore}>Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;