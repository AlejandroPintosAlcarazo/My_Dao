import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import Depth4Frame from "../components/depth4-frame";
import styles from "./index.module.css";

const VottingPowerButton: NextPage = () => {
  return (
    <div className={styles.vottingPowerButton}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Depth2Frame vector0="/vector--0.svg" />
          <div className={styles.depth2Frame1}>
            <div className={styles.depth3Frame0}>
              <div className={styles.depth4Frame0}>
                <div className={styles.depth5Frame0}>
                  <div className={styles.depth6Frame0}>
                    <h1 className={styles.addressesWithHighest}>
                      Addresses with Highest Voting Power
                    </h1>
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.viewTheVoting}>
                      View the voting power of the top addresses in the DAO
                    </div>
                  </div>
                </div>
              </div>
              <Depth4Frame
                votingPower="Voting Power"
                x17e4f4d2b9e6daa0d5c1d8a3="0x17e4f4d2b9e6daa0d5c1d8a3c8f5f3e1b2a0e6b8"
                prop="3,200,000"
                x17e4f4d2b9e6daa0d5c1d8a31="0x17e4f4d2b9e6daa0d5c1d8a3c8f5f3e1b2a0e6b8"
                prop1="3,000,000"
                x17e4f4d2b9e6daa0d5c1d8a32="0x17e4f4d2b9e6daa0d5c1d8a3c8f5f3e1b2a0e6b8"
                prop2="2,500,000"
                x17e4f4d2b9e6daa0d5c1d8a33="0x17e4f4d2b9e6daa0d5c1d8a3c8f5f3e1b2a0e6b8"
                prop3="2,000,000"
                x17e4f4d2b9e6daa0d5c1d8a34="0x17e4f4d2b9e6daa0d5c1d8a3c8f5f3e1b2a0e6b8"
                prop4="1,800,000"
                x17e4f4d2b9e6daa0d5c1d8a35="0x17e4f4d2b9e6daa0d5c1d8a3c8f5f3e1b2a0e6b8"
                prop5="1,600,000"
                x17e4f4d2b9e6daa0d5c1d8a36="0x17e4f4d2b9e6daa0d5c1d8a3c8f5f3e1b2a0e6b8"
                prop6="1,400,000"
                x17e4f4d2b9e6daa0d5c1d8a37="0x17e4f4d2b9e6daa0d5c1d8a3c8f5f3e1b2a0e6b8"
                prop7="1,200,000"
                x17e4f4d2b9e6daa0d5c1d8a38="0x17e4f4d2b9e6daa0d5c1d8a3c8f5f3e1b2a0e6b8"
                prop8="1,000,000"
                x17e4f4d2b9e6daa0d5c1d8a39="0x17e4f4d2b9e6daa0d5c1d8a3c8f5f3e1b2a0e6b8"
                prop9="800,000"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VottingPowerButton;