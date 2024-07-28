import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import Depth6Frame2 from "../components/depth6-frame2";
import styles from "./index.module.css";

const GuildsPage: NextPage = () => {
  return (
    <div className={styles.guildsPage}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Depth2Frame vector0="/vector--0.svg" />
          <div className={styles.depth2Frame1}>
            <div className={styles.depth3Frame0}>
              <div className={styles.depth4Frame0}>
                <div className={styles.depth5Frame0}>
                  <h1 className={styles.guilds}>Guilds</h1>
                </div>
              </div>
              <div className={styles.depth4Frame1}>
                <div className={styles.depth5Frame01}>
                  <div className={styles.depth6Frame0}>
                    <div className={styles.depth7Frame0}>
                      <div className={styles.searchGuilds}>Search guilds</div>
                    </div>
                    <div className={styles.depth7Frame1}>
                      <div className={styles.depth8Frame0}>
                        <img
                          className={styles.vector0}
                          alt=""
                          src="/vector--0-1.svg"
                        />
                        <div className={styles.depth9Frame0} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame2}>
                <div className={styles.depth5Frame02}>
                  <Depth6Frame2
                    depth7Frame0="/depth-7-frame-0@2x.png"
                    language="Language"
                    learnGrowAndShareKnowledg="Learn, grow and share knowledge"
                  />
                  <Depth6Frame2
                    depth7Frame0="/depth-7-frame-0-1@2x.png"
                    language="Gaming"
                    learnGrowAndShareKnowledg="Play games and earn rewards"
                    propFlex="1"
                    propMinWidth="10.75rem"
                    propWidth="unset"
                  />
                  <Depth6Frame2
                    depth7Frame0="/depth-7-frame-0-2@2x.png"
                    language="Art"
                    learnGrowAndShareKnowledg="Create, share and collaborate on art"
                    propFlex="1"
                    propMinWidth="10.75rem"
                    propWidth="unset"
                  />
                  <Depth6Frame2
                    depth7Frame0="/depth-7-frame-0-3@2x.png"
                    language="Finance"
                    learnGrowAndShareKnowledg="Discuss and invest in finance"
                    propFlex="1"
                    propMinWidth="10.75rem"
                    propWidth="unset"
                  />
                  <Depth6Frame2
                    depth7Frame0="/depth-7-frame-0-4@2x.png"
                    language="Global"
                    learnGrowAndShareKnowledg="Connect and learn with a global community"
                    propFlex="1"
                    propMinWidth="10.75rem"
                    propWidth="unset"
                  />
                </div>
                <div className={styles.depth5Frame1}>
                  <Depth6Frame2
                    depth7Frame0="/depth-7-frame-0-5@2x.png"
                    language="Technology"
                    learnGrowAndShareKnowledg="Build and learn about technology"
                    propFlex="unset"
                    propMinWidth="unset"
                    propWidth="11rem"
                  />
                </div>
              </div>
              <div className={styles.depth4Frame3}>
                <div className={styles.depth5Frame03}>
                  <div className={styles.depth6Frame01}>
                    <div className={styles.depth7Frame01}>
                      <img
                        className={styles.vector01}
                        loading="lazy"
                        alt=""
                        src="/vector--0-2.svg"
                      />
                      <div className={styles.depth8Frame01} />
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame11}>
                  <b className={styles.b}>1</b>
                </div>
                <div className={styles.depth5Frame2}>
                  <div className={styles.div}>2</div>
                </div>
                <div className={styles.depth5Frame3}>
                  <div className={styles.div1}>3</div>
                </div>
                <div className={styles.depth5Frame4}>
                  <div className={styles.div2}>4</div>
                </div>
                <div className={styles.depth5Frame5}>
                  <div className={styles.div3}>5</div>
                </div>
                <div className={styles.depth5Frame6}>
                  <div className={styles.depth6Frame02}>
                    <div className={styles.depth7Frame02}>
                      <img
                        className={styles.vector02}
                        loading="lazy"
                        alt=""
                        src="/vector--0-3.svg"
                      />
                      <div className={styles.depth8Frame02} />
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

export default GuildsPage;