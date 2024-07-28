import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import Depth4Frame2 from "../components/depth4-frame2";
import Depth8Frame from "../components/depth8-frame";
import styles from "./proposals-page.module.css";

const ProposalsPage: NextPage = () => {
  return (
    <div className={styles.proposalsPage}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Depth2Frame vector0="/vector--02.svg" learnCraft="SAUCO" />
          <div className={styles.depth2Frame1}>
            <div className={styles.depth3Frame0}>
              <div className={styles.depth4Frame0}>
                <div className={styles.depth5Frame0}>
                  <h1 className={styles.governanceProposals}>
                    Governance Proposals
                  </h1>
                </div>
              </div>
              <Depth4Frame2
                recentProposals="Recent Proposals"
                viewTheMostRecentProposal="View the most recent proposals for governance."
                vector0="/vector--0-11.svg"
              />
              <Depth4Frame2
                recentProposals="Addresses with Highest Voting Power"
                viewTheMostRecentProposal="View the addresses with the highest voting power."
                vector0="/vector--0-21.svg"
              />
              <Depth4Frame2
                recentProposals="Addresses with Best Voting Scores"
                viewTheMostRecentProposal="View the addresses with the best voting scores."
                vector0="/vector--0-31.svg"
              />
              <div className={styles.depth4Frame2}>
                <div className={styles.depth5Frame01}>
                  <div className={styles.depth6Frame0}>
                    <div className={styles.depth7Frame0}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.depth9Frame0}>
                          <div className={styles.proposalNumber}>
                            Proposal number
                          </div>
                        </div>
                        <div className={styles.depth9Frame1}>
                          <div className={styles.title}>Title</div>
                        </div>
                        <div className={styles.depth9Frame2}>
                          <div className={styles.status}>Status</div>
                        </div>
                        <div className={styles.depth9Frame3}>
                          <div className={styles.startDate}>Start date</div>
                        </div>
                        <div className={styles.depth9Frame4}>
                          <div className={styles.endDate}>End date</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame1}>
                      <Depth8Frame
                        proposalListPlaceholder="#123"
                        proposal123="Proposal 123"
                      />
                      <Depth8Frame
                        proposalListPlaceholder="#124"
                        proposal123="Proposal 124"
                      />
                      <Depth8Frame
                        proposalListPlaceholder="#125"
                        proposal123="Proposal 125"
                      />
                      <Depth8Frame
                        proposalListPlaceholder="#126"
                        proposal123="Proposal 126"
                      />
                      <Depth8Frame
                        proposalListPlaceholder="#127"
                        proposal123="Proposal 127"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame3}>
                <div className={styles.depth5Frame02}>
                  <div className={styles.depth6Frame01}>
                    <div className={styles.depth7Frame01}>
                      <img
                        className={styles.vector0}
                        loading="lazy"
                        alt=""
                        src="/vector--0-41.svg"
                      />
                      <div className={styles.depth8Frame01} />
                    </div>
                  </div>
                </div>
                <div className={styles.depth5Frame1}>
                  <b className={styles.placeholder}>1</b>
                </div>
                <div className={styles.depth5Frame2}>
                  <div className={styles.placeholder1}>2</div>
                </div>
                <div className={styles.depth5Frame3}>
                  <div className={styles.placeholder2}>3</div>
                </div>
                <div className={styles.depth5Frame4}>
                  <div className={styles.placeholder3}>4</div>
                </div>
                <div className={styles.depth5Frame5}>
                  <div className={styles.placeholder4}>5</div>
                </div>
                <div className={styles.depth5Frame6}>
                  <div className={styles.depth6Frame02}>
                    <div className={styles.depth7Frame02}>
                      <img
                        className={styles.vector01}
                        loading="lazy"
                        alt=""
                        src="/vector--0-51.svg"
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

export default ProposalsPage;