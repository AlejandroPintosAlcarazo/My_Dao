import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import Depth6Frame3 from "../components/depth6-frame3";
import styles from "./guilds-button.module.css";

const GuildsButton: NextPage = () => {
  return (
    <div className={styles.guildsButton}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Depth2Frame
            vector0="/vector--03.svg"
            connectWallet="Connect Wallet"
          />
          <div className={styles.depth2Frame1}>
            <div className={styles.depth3Frame0}>
              <div className={styles.depth4Frame0}>
                <div className={styles.depth5Frame0}>
                  <h1 className={styles.academyGuild}>Academy Guild</h1>
                </div>
              </div>
              <div className={styles.depth4Frame1}>
                <div className={styles.depth5Frame01}>
                  <div className={styles.depth6Frame0}>
                    <div className={styles.depth7Frame0}>
                      <div className={styles.depth8Frame0}>
                        <img
                          className={styles.vector0}
                          alt=""
                          src="/vector--0-12.svg"
                        />
                        <div className={styles.depth9Frame0} />
                      </div>
                    </div>
                    <div className={styles.depth7Frame1}>
                      <div className={styles.searchForA}>Search for a Clan</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame2}>
                <b className={styles.languageClans}>Language Clans</b>
              </div>
              <div className={styles.depth4Frame3}>
                <div className={styles.depth5Frame02}>
                  <Depth6Frame3
                    depth7Frame0="/depth-7-frame-01@2x.png"
                    englishClan="English Clan"
                  />
                  <Depth6Frame3
                    depth7Frame0="/depth-7-frame-0-11@2x.png"
                    englishClan="Spanish Clan"
                  />
                  <Depth6Frame3
                    depth7Frame0="/depth-7-frame-0-21@2x.png"
                    englishClan="Chinese Clan"
                  />
                  <Depth6Frame3
                    depth7Frame0="/depth-7-frame-0-31@2x.png"
                    englishClan="French Clan"
                  />
                  <Depth6Frame3
                    depth7Frame0="/depth-7-frame-0-41@2x.png"
                    englishClan="German Clan"
                  />
                </div>
              </div>
              <div className={styles.depth4Frame4}>
                <b className={styles.joinALanguage}>Join a Language Clan</b>
              </div>
              <div className={styles.depth4Frame5}>
                <div className={styles.depth5Frame03}>
                  <div className={styles.depth6Frame01}>
                    <div className={styles.english}>English</div>
                  </div>
                </div>
                <div className={styles.depth5Frame1}>
                  <div className={styles.depth6Frame02}>
                    <div className={styles.spanish}>Spanish</div>
                  </div>
                </div>
                <div className={styles.depth5Frame2}>
                  <div className={styles.depth6Frame03}>
                    <div className={styles.chinese}>Chinese</div>
                  </div>
                </div>
                <div className={styles.depth5Frame3}>
                  <div className={styles.depth6Frame04}>
                    <div className={styles.french}>French</div>
                  </div>
                </div>
                <div className={styles.depth5Frame4}>
                  <div className={styles.depth6Frame05}>
                    <div className={styles.german}>German</div>
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