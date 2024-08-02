import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import Depth4Frame from "../components/depth4-frame";
import styles from "./best-adresses.module.css";

const BestAdresses: NextPage = () => {
  return (
    <div className={styles.bestAdresses}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Depth2Frame vector0="/vector--01.svg" />
          <div className={styles.depth2Frame1}>
            <div className={styles.depth3Frame0}>
              <div className={styles.depth4Frame0}>
                <div className={styles.depth5Frame0}>
                  <div className={styles.depth6Frame0}>
                    <h1 className={styles.addressesWithBest}>
                      Addresses with Best Voting Scores
                    </h1>
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.seeTheTop}>
                      See the top addresses by voting score
                    </div>
                  </div>
                </div>
              </div>
              <Depth4Frame
                votingPower="Score"
                x17e4f4d2b9e6daa0d5c1d8a3="0x3b1e2d0fbfb7f327c5c6f9b8a8e4d4f2f4e5f6a7"
                prop="9999"
                x17e4f4d2b9e6daa0d5c1d8a31="0x3b1e2d0fbfb7f327c5c6f9b8a8e4d4f2f4e5f6a8"
                prop1="9998"
                x17e4f4d2b9e6daa0d5c1d8a32="0x3b1e2d0fbfb7f327c5c6f9b8a8e4d4f2f4e5f6a9"
                prop2="9997"
                x17e4f4d2b9e6daa0d5c1d8a33="0x3b1e2d0fbfb7f327c5c6f9b8a8e4d4f2f4e5f6b0"
                prop3="9996"
                x17e4f4d2b9e6daa0d5c1d8a34="0x3b1e2d0fbfb7f327c5c6f9b8a8e4d4f2f4e5f6b1"
                prop4="9995"
                x17e4f4d2b9e6daa0d5c1d8a35="0x3b1e2d0fbfb7f327c5c6f9b8a8e4d4f2f4e5f6b2"
                prop5="9994"
                x17e4f4d2b9e6daa0d5c1d8a36="0x3b1e2d0fbfb7f327c5c6f9b8a8e4d4f2f4e5f6b3"
                prop6="9993"
                x17e4f4d2b9e6daa0d5c1d8a37="0x3b1e2d0fbfb7f327c5c6f9b8a8e4d4f2f4e5f6b4"
                prop7="9992"
                x17e4f4d2b9e6daa0d5c1d8a38="0x3b1e2d0fbfb7f327c5c6f9b8a8e4d4f2f4e5f6b5"
                prop8="9991"
                x17e4f4d2b9e6daa0d5c1d8a39="0x3b1e2d0fbfb7f327c5c6f9b8a8e4d4f2f4e5f6b6"
                prop9="9990"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BestAdresses;