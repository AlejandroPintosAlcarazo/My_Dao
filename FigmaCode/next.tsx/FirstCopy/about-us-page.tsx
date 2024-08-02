import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import styles from "./about-us-page.module.css";

const AboutUsPage: NextPage = () => {
  return (
    <div className={styles.aboutUsPage}>
      <main className={styles.depth0Frame0}>
        <Depth2Frame vector0="/vector--02.svg" connectWallet="Connect Wallet" />
        <section className={styles.depth3Frame0Wrapper}>
          <div className={styles.depth3Frame0}>
            <div className={styles.depth6Frame0Wrapper}>
              <div className={styles.depth6Frame0}>
                <h1 className={styles.wereBuildingA}>
                  We're building a decentralized autonomous organization focused
                  on gamified learning.
                </h1>
                <div className={styles.depth7Frame1Wrapper}>
                  <div className={styles.depth7Frame1}>
                    <div className={styles.depth8Frame0}>
                      <div className={styles.depth9Frame0}>
                        <b className={styles.joinOurDiscord}>
                          Join our Discord
                        </b>
                      </div>
                    </div>
                    <div className={styles.depth8Frame1}>
                      <div className={styles.depth9Frame01}>
                        <b className={styles.readOurDocs}>Read our Docs</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.missionVisionHeadings}>
              <div className={styles.missionVisionContent}>
                <h3 className={styles.mission}>Mission</h3>
                <div className={styles.wereOnA}>
                  We're on a mission to enhance the way we learn and grow
                  through gamification, community and decentralization. We
                  believe that the future of learning is decentralized, gamified
                  and community-driven.
                </div>
              </div>
            </div>
            <div className={styles.missionVisionHeadings1}>
              <div className={styles.visionParent}>
                <h3 className={styles.vision}>Vision</h3>
                <div className={styles.ourVisionIs}>
                  Our vision is to empower people to learn and grow in a fun and
                  engaging way, while also rewarding them for their
                  contributions. We want to create a vibrant ecosystem of
                  learners, creators and educators who are all motivated by
                  shared values and incentives.
                </div>
              </div>
            </div>
            <div className={styles.missionVisionHeadings2}>
              <div className={styles.whatIsLearncraftParent}>
                <h3 className={styles.whatIsLearncraft}>What is LearnCraft?</h3>
                <div className={styles.learncraftIsA}>
                  LearnCraft is a decentralized autonomous organization (DAO)
                  focused on gamified learning. We're building a community of
                  learners, creators, and educators who are all motivated by
                  shared values and incentives. Our goal is to enhance the way
                  we learn and grow through gamification, community and
                  decentralization. We believe that the future of learning is
                  decentralized, gamified and community-driven.
                </div>
              </div>
            </div>
            <div className={styles.missionVisionHeadings3}>
              <div className={styles.whoAreWeParent}>
                <h3 className={styles.whoAreWe}>Who are we?</h3>
                <div className={styles.weAreA}>
                  We are a group of builders, learners, and creators who are
                  passionate about the intersection of technology, education and
                  decentralization. We come from diverse backgrounds and have a
                  wide range of skills and experiences. What unites us is our
                  shared vision for the future of learning and our commitment to
                  making it a reality.
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.milestonesWrapper}>
                <h3 className={styles.milestones}>Milestones</h3>
              </div>
              <div className={styles.depth4Frame10}>
                <div className={styles.depth5Frame0}>
                  <div className={styles.depth6Frame01}>
                    <div className={styles.depth7Frame0} />
                    <div className={styles.depth7Frame11} />
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.depth7Frame01}>
                      <div className={styles.decentralizedAutonomousOrgan}>
                        Decentralized Autonomous Organization
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame1}>
                  <div className={styles.depth6Frame02}>
                    <div className={styles.depth7Frame02} />
                    <div className={styles.depth7Frame12} />
                    <div className={styles.depth7Frame2} />
                  </div>
                  <div className={styles.depth6Frame11}>
                    <div className={styles.depth7Frame03}>
                      <div className={styles.launchOfLearning}>
                        Launch of Learning Quests
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame2}>
                  <div className={styles.depth6Frame03}>
                    <div className={styles.depth7Frame04} />
                    <div className={styles.depth7Frame13} />
                    <div className={styles.depth7Frame21} />
                  </div>
                  <div className={styles.depth6Frame12}>
                    <div className={styles.depth7Frame05}>
                      <div className={styles.nftCollectiblesFor}>
                        NFT Collectibles for Top Contributors
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame3}>
                  <div className={styles.depth6Frame04}>
                    <div className={styles.depth7Frame06} />
                    <div className={styles.depth7Frame14} />
                    <div className={styles.depth7Frame22} />
                  </div>
                  <div className={styles.depth6Frame13}>
                    <div className={styles.depth7Frame07}>
                      <div className={styles.help1000People}>
                        Help 1000 people to learn english
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame4}>
                  <div className={styles.depth6Frame05}>
                    <div className={styles.depth7Frame08} />
                    <div className={styles.depth7Frame15} />
                  </div>
                  <div className={styles.depth6Frame14}>
                    <div className={styles.depth7Frame09}>
                      <div className={styles.makeAMvp}>
                        Make a MVP for a Englihs course
                      </div>
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