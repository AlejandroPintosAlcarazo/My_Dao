import type { NextPage } from "next";
import Depth2Frame2 from "../components/depth2-frame2";
import Depth3Frame from "../components/depth3-frame";
import Depth5Frame from "../components/depth5-frame";
import styles from "./galileo-design1.module.css";

const GalileoDesign1: NextPage = () => {
  return (
    <div className={styles.galileoDesign}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Depth2Frame2 />
          <div className={styles.depth2Frame1}>
            <Depth3Frame
              depth7Frame0="/depth-7-frame-01@2x.png"
              vector0="/vector--0-110.svg"
              vector01="/vector--0-24.svg"
              vector02="/vector--0-31.svg"
              vector03="/vector--0-41.svg"
              vector04="/vector--0-51.svg"
              vector05="/vector--0-61.svg"
              vector06="/vector--0-71.svg"
            />
            <div className={styles.depth3Frame1}>
              <div className={styles.depth4Frame0}>
                <div className={styles.depth5Frame0}>
                  <div className={styles.depth6Frame0}>
                    <img
                      className={styles.depth7Frame0}
                      loading="lazy"
                      alt=""
                      src="/depth-7-frame-0-11@2x.png"
                    />
                    <div className={styles.depth7Frame1}>
                      <div className={styles.depth8Frame0}>
                        <a className={styles.nftceo}>NFT.CEO</a>
                      </div>
                      <div className={styles.depth8Frame1}>
                        <div className={styles.acmeInc1000}>
                          Acme Inc. 1000 XP
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.depth7Frame01}>
                      <div className={styles.depth8Frame01}>
                        <b className={styles.editProfile}>Edit Profile</b>
                      </div>
                    </div>
                    <div className={styles.depth7Frame11}>
                      <div className={styles.depth8Frame02}>
                        <b className={styles.customizeProfile}>
                          Customize Profile
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame1}>
                <Depth5Frame placeholders="100" missions="Missions" />
                <Depth5Frame
                  placeholders="200"
                  missions="Voting"
                  propFlex="0.6528"
                  propPadding="11px 58px"
                />
                <Depth5Frame
                  placeholders="300"
                  missions="Guilds"
                  propFlex="0.6528"
                  propPadding="11px 58px"
                />
                <Depth5Frame
                  placeholders="400"
                  missions="Reputation"
                  propFlex="1"
                  propPadding="var(--padding-2xs) 2.812rem var(--padding-2xs) 2.875rem"
                />
                <Depth5Frame
                  placeholders="500"
                  missions="XP"
                  propFlex="0.6389"
                  propPadding="var(--padding-2xs) var(--padding-39xl) var(--padding-2xs) 3.687rem"
                />
              </div>
              <div className={styles.depth4Frame2}>
                <h3 className={styles.achievements}>Achievements</h3>
              </div>
              <div className={styles.depth4Frame3}>
                <div className={styles.achievementsUnlocked}>
                  0 achievements unlocked
                </div>
              </div>
              <div className={styles.depth4Frame4}>
                <h3 className={styles.guilds}>Guilds</h3>
              </div>
              <div className={styles.depth4Frame5}>
                <div className={styles.youAreNot}>
                  You are not a member of any guilds
                </div>
              </div>
              <div className={styles.depth4Frame6}>
                <h3 className={styles.missions}>Missions</h3>
              </div>
              <div className={styles.depth4Frame7}>
                <div className={styles.youHaveNot}>
                  You have not completed any missions
                </div>
              </div>
              <div className={styles.depth4Frame8}>
                <h3 className={styles.voting}>Voting</h3>
              </div>
              <div className={styles.depth4Frame9}>
                <div className={styles.youHaveNot1}>
                  You have not participated in any votes
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GalileoDesign1;