import type { NextPage } from "next";
import Depth2Frame2 from "../components/depth2-frame2";
import Depth6Frame from "../components/depth6-frame";
import styles from "./galileo-design2.module.css";

const GalileoDesign2: NextPage = () => {
  return (
    <div className={styles.galileoDesign5}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Depth2Frame2 />
          <div className={styles.depth2Frame1}>
            <div className={styles.depth3Frame0}>
              <div className={styles.depth4Frame0}>
                <div className={styles.depth5Frame0}>
                  <div className={styles.depth6Frame0}>
                    <img
                      className={styles.depth7Frame0}
                      loading="lazy"
                      alt=""
                      src="/depth-7-frame-02@2x.png"
                    />
                    <div className={styles.depth7Frame1}>
                      <a className={styles.acmeInc}>Acme Inc</a>
                    </div>
                  </div>
                  <Depth6Frame
                    vector0="/vector--0-111.svg"
                    vector01="/vector--0-22.svg"
                    vector02="/vector--0-32.svg"
                    vector03="/vector--0-42.svg"
                    vector04="/vector--0-52.svg"
                    vector05="/vector--0-61.svg"
                    vector06="/vector--0-71.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.depth3Frame1}>
              <div className={styles.depth4Frame01}>
                <div className={styles.depth5Frame01}>
                  <a className={styles.proposals}>Proposals</a>
                </div>
                <div className={styles.depth5Frame1}>
                  <div className={styles.div}>/</div>
                </div>
                <div className={styles.depth5Frame2}>
                  <a className={styles.viewProposal}>View proposal</a>
                </div>
              </div>
              <div className={styles.depth4Frame1}>
                <div className={styles.depth5Frame02}>
                  <h1 className={styles.rebrandingAcme}>Rebranding Acme</h1>
                </div>
              </div>
              <div className={styles.depth4Frame2}>
                <b className={styles.summary}>Summary</b>
              </div>
              <div className={styles.depth4Frame3}>
                <div className={styles.weProposeTo}>
                  We propose to rebrand Acme. This includes a new logo, color
                  scheme, and design language. The current brand is outdated and
                  does not reflect our values or mission. We need a fresh,
                  modern identity that resonates with our community and aligns
                  with our long-term vision. A strong brand is essential for
                  building trust, driving growth, and attracting top talent.
                  It's time to level up our brand and position Acme for success
                  in the digital age.
                </div>
              </div>
              <div className={styles.depth4Frame4}>
                <b className={styles.options}>Options</b>
              </div>
              <div className={styles.depth4Frame5}>
                <div className={styles.depth5Frame03}>
                  <div className={styles.approve}>Approve</div>
                </div>
                <div className={styles.depth5Frame11}>
                  <div className={styles.reject}>Reject</div>
                </div>
              </div>
              <div className={styles.depth4Frame6}>
                <div className={styles.depth5Frame04}>
                  <div className={styles.depth6Frame01}>
                    <div className={styles.depth7Frame01}>
                      <b className={styles.cancel}>Cancel</b>
                    </div>
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.depth7Frame02}>
                      <b className={styles.vote}>Vote</b>
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

export default GalileoDesign2;