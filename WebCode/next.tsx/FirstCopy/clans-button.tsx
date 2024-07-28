import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import Depth4Frame from "../components/depth4-frame";
import styles from "./clans-buttom.module.css";

const ClansButtom: NextPage = () => {
  return (
    <div className={styles.clansButtom}>
      <main className={styles.depth0Frame0}>
        <Depth2Frame vector0="/vector--04.svg" connectWallet="Connect Wallet" />
        <section className={styles.depth3Frame0Wrapper}>
          <div className={styles.depth3Frame0}>
            <div className={styles.depth6Frame0Wrapper}>
              <div className={styles.depth6Frame0}>
                <div className={styles.missionRanksParent}>
                  <h1 className={styles.missionRanks}>Mission Ranks</h1>
                  <div className={styles.progressThroughThe}>
                    Progress through the ranks by completing missions and
                    earning experience
                  </div>
                </div>
                <div className={styles.depth7Frame1Wrapper}>
                  <div className={styles.depth7Frame1}>
                    <div className={styles.depth8Frame0}>
                      <div className={styles.depth9Frame0}>
                        <div className={styles.depth10Frame0}>
                          <img
                            className={styles.vector0}
                            alt=""
                            src="/vector--0-13.svg"
                          />
                          <div className={styles.depth11Frame0} />
                        </div>
                      </div>
                      <div className={styles.depth9Frame1}>
                        <div className={styles.searchForA}>
                          Search for a mission
                        </div>
                      </div>
                      <div className={styles.depth9Frame2}>
                        <div className={styles.depth10Frame01}>
                          <div className={styles.depth11Frame01}>
                            <b className={styles.submit}>Submit</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ranks}>
              <Depth4Frame
                rankSMaster="Rank S: Master"
                xP="2,000 XP"
                youHaveMasteredTheArtOfLe="You have mastered the art of learning. You are now a mentor and guide to others."
                depth6Frame1="/depth-6-frame-1@2x.png"
              />
              <Depth4Frame
                rankSMaster="Rank A: Expert"
                xP="1,500 XP"
                youHaveMasteredTheArtOfLe="You have demonstrated mastery in multiple areas and are a leader in the community."
                depth6Frame1="/depth-6-frame-1-1@2x.png"
              />
            </div>
            <Depth4Frame
              rankSMaster="Rank B: Professional"
              xP="1,000 XP"
              youHaveMasteredTheArtOfLe="You have proven your skills and are ready to take on more challenging missions."
              depth6Frame1="/depth-6-frame-1-2@2x.png"
            />
            <div className={styles.apprenticeRanks}>
              <Depth4Frame
                rankSMaster="Rank C: Apprentice"
                xP="500 XP"
                youHaveMasteredTheArtOfLe="You have started your journey and are learning the basics. Keep going!"
                depth6Frame1="/depth-6-frame-1-3@2x.png"
              />
              <Depth4Frame
                rankSMaster="Rank D: Novice"
                xP="200 XP"
                youHaveMasteredTheArtOfLe="You are new to the community and have a lot to learn. That's okay! Everyone starts here."
                depth6Frame1="/depth-6-frame-1-4@2x.png"
              />
              <Depth4Frame
                rankSMaster="Rank E: Newcomer"
                xP="100 XP"
                youHaveMasteredTheArtOfLe="You are just getting started. Welcome to the community!"
                depth6Frame1="/depth-6-frame-1-5@2x.png"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};