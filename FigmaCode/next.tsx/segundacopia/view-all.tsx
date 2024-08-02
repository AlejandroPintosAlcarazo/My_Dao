import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import Depth8Frame1 from "../components/depth8-frame1";
import styles from "./view-all.module.css";

const ViewAll: NextPage = () => {
  return (
    <div className={styles.viewAll}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Depth2Frame vector0="/vector--04.svg" learnCraft="SAUCO" />
          <div className={styles.depth2Frame1}>
            <div className={styles.depth3Frame0}>
              <div className={styles.depth4Frame0}>
                <div className={styles.depth5Frame0}>
                  <h1 className={styles.viewAll1}>View All</h1>
                </div>
              </div>
              <div className={styles.depth4Frame1}>
                <b className={styles.proposals}>Proposals</b>
              </div>
              <div className={styles.depth4Frame2}>
                <div className={styles.depth5Frame01}>
                  <div className={styles.depth6Frame0}>
                    <div className={styles.depth7Frame0}>
                      <b className={styles.all}>All</b>
                    </div>
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.depth7Frame01}>
                      <a className={styles.open}>Open</a>
                    </div>
                  </div>
                  <div className={styles.depth6Frame2}>
                    <div className={styles.depth7Frame02}>
                      <b className={styles.executed}>Executed</b>
                    </div>
                  </div>
                  <div className={styles.depth6Frame3}>
                    <div className={styles.depth7Frame03}>
                      <b className={styles.closed}>Closed</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame3}>
                <div className={styles.depth5Frame02}>
                  <div className={styles.depth6Frame01}>
                    <div className={styles.depth7Frame04}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.depth9Frame0}>
                          <div className={styles.title}>Title</div>
                        </div>
                        <div className={styles.depth9Frame1}>
                          <div className={styles.status}>Status</div>
                        </div>
                        <div className={styles.depth9Frame2}>
                          <div className={styles.created}>Created</div>
                        </div>
                        <div className={styles.depth9Frame3}>
                          <div className={styles.action}>Action</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame1}>
                      <Depth8Frame1
                        increaseTheWeeklyRewardTo="Increase the weekly reward to 2000 DAI"
                        daysAgo="2 days ago"
                      />
                      <Depth8Frame1
                        increaseTheWeeklyRewardTo="Migrate the governance to a new contract"
                        daysAgo="5 days ago"
                        propOverflowX="unset"
                        propFlexWrap="wrap"
                        propRowGap="20px"
                      />
                      <Depth8Frame1
                        increaseTheWeeklyRewardTo="Upgrade the governance interface"
                        daysAgo="8 days ago"
                        propOverflowX="auto"
                        propFlexWrap="unset"
                        propRowGap="unset"
                      />
                      <Depth8Frame1
                        increaseTheWeeklyRewardTo="Add a new member to the DAO"
                        daysAgo="11 days ago"
                        propOverflowX="auto"
                        propFlexWrap="unset"
                        propRowGap="unset"
                      />
                      <Depth8Frame1
                        increaseTheWeeklyRewardTo="Change the quorum threshold to 20%"
                        daysAgo="14 days ago"
                        propOverflowX="auto"
                        propFlexWrap="unset"
                        propRowGap="unset"
                      />
                      <Depth8Frame1
                        increaseTheWeeklyRewardTo="Add a new member to the DAO"
                        daysAgo="17 days ago"
                        propOverflowX="auto"
                        propFlexWrap="unset"
                        propRowGap="unset"
                      />
                      <Depth8Frame1
                        increaseTheWeeklyRewardTo="Change the quorum threshold to 20%"
                        daysAgo="20 days ago"
                        propOverflowX="auto"
                        propFlexWrap="unset"
                        propRowGap="unset"
                      />
                      <Depth8Frame1
                        increaseTheWeeklyRewardTo="Add a new member to the DAO"
                        daysAgo="23 days ago"
                        propOverflowX="auto"
                        propFlexWrap="unset"
                        propRowGap="unset"
                      />
                      <Depth8Frame1
                        increaseTheWeeklyRewardTo="Change the quorum threshold to 20%"
                        daysAgo="26 days ago"
                        propOverflowX="auto"
                        propFlexWrap="unset"
                        propRowGap="unset"
                      />
                      <Depth8Frame1
                        increaseTheWeeklyRewardTo="Add a new member to the DAO"
                        daysAgo="29 days ago"
                        propOverflowX="auto"
                        propFlexWrap="unset"
                        propRowGap="unset"
                      />
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

export default ViewAll;