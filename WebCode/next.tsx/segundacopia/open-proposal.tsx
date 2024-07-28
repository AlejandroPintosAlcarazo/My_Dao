import type { NextPage } from "next";
import Depth2Frame from "../components/depth2-frame";
import Depth5Frame from "../components/depth5-frame";
import Depth4Frame1 from "../components/depth4-frame1";
import styles from "./open-proposal.module.css";

const OpenProposal: NextPage = () => {
  return (
    <div className={styles.openProposal1}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Depth2Frame vector0="/vector--01.svg" learnCraft="SAUCO" />
          <div className={styles.depth2Frame1}>
            <div className={styles.depth3Frame0}>
              <div className={styles.depth4Frame0}>
                <div className={styles.depth5Frame0}>
                  <div className={styles.depth6Frame0}>
                    <h1 className={styles.communityGrantRound}>
                      Community Grant: Round 4
                    </h1>
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.thisProposalRequests}>
                      This proposal requests $20,000 from the Acme DAO treasury
                      to fund a new community grant round. The funds will be
                      disbursed as grants to support ecosystem development and
                      growth.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame1}>
                <b className={styles.proposalStatus}>Proposal Status</b>
              </div>
              <div className={styles.depth4Frame2}>
                <div className={styles.depth5Frame01}>
                  <div className={styles.depth6Frame01}>
                    <div className={styles.votingProgress}>Voting Progress</div>
                  </div>
                  <div className={styles.depth6Frame11}>
                    <div className={styles.votingProgressValue}>80%</div>
                  </div>
                </div>
                <div className={styles.depth5Frame1}>
                  <div className={styles.depth6Frame02} />
                </div>
              </div>
              <div className={styles.depth4Frame3}>
                <Depth5Frame
                  votingStarts="Voting Starts"
                  june12023="June 1, 2023"
                  votingEnds="Voting Ends"
                  june152023="June 15, 2023"
                />
                <Depth5Frame
                  votingStarts="Quorum Required"
                  june12023="50%"
                  votingEnds="Voting Power"
                  june152023="100%"
                />
                <Depth5Frame
                  votingStarts="Votes"
                  june12023="10000"
                  votingEnds="Voting Options"
                  june152023="Yes, No, Abstain"
                />
              </div>
              <div className={styles.depth4Frame4}>
                <b className={styles.votingResults}>Voting Results</b>
              </div>
              <div className={styles.depth4Frame5}>
                <div className={styles.depth5Frame02}>
                  <div className={styles.depth6Frame03}>
                    <div className={styles.yes}>Yes</div>
                  </div>
                  <div className={styles.depth6Frame12}>
                    <div className={styles.div}>80%</div>
                  </div>
                </div>
                <div className={styles.depth5Frame11}>
                  <div className={styles.depth6Frame04} />
                </div>
              </div>
              <div className={styles.depth4Frame6}>
                <div className={styles.depth5Frame03}>
                  <div className={styles.depth6Frame05}>
                    <div className={styles.no}>No</div>
                  </div>
                  <div className={styles.depth6Frame13}>
                    <div className={styles.div1}>10%</div>
                  </div>
                </div>
                <div className={styles.depth5Frame12}>
                  <div className={styles.depth6Frame06} />
                </div>
              </div>
              <div className={styles.depth4Frame7}>
                <div className={styles.depth5Frame04}>
                  <div className={styles.depth6Frame07}>
                    <div className={styles.abstain}>Abstain</div>
                  </div>
                  <div className={styles.depth6Frame14}>
                    <div className={styles.div2}>10%</div>
                  </div>
                </div>
                <div className={styles.depth5Frame13}>
                  <div className={styles.depth6Frame08} />
                </div>
              </div>
              <div className={styles.depth4Frame8}>
                <b className={styles.comments}>Comments</b>
              </div>
              <Depth4Frame1
                depth5Frame0="/depth-5-frame-0@2x.png"
                alice="Alice"
                daysAgo="2 days ago"
                imInFavorOfThisProposalIT="I'm in favor of this proposal. I think it's important that we continue to support the development of new projects and initiatives in the ecosystem."
                vector0="/vector--0-1.svg"
                noVotesTimePlaceholder="5"
                vector01="/vector--0-2.svg"
              />
              <Depth4Frame1
                depth5Frame0="/depth-5-frame-0-1@2x.png"
                alice="Bob"
                daysAgo="1 day ago"
                imInFavorOfThisProposalIT="I agree with Alice. I think this proposal is well written and makes a good case for why the funds are needed. I'll be voting yes on this one."
                vector0="/vector--0-3.svg"
                noVotesTimePlaceholder="2"
                vector01="/vector--0-4.svg"
                propPadding="var(--padding-base) var(--padding-base) var(--padding-base) 4.25rem"
              />
              <div className={styles.depth4Frame11}>
                <img
                  className={styles.depth5Frame05}
                  loading="lazy"
                  alt=""
                  src="/depth-5-frame-0-2@2x.png"
                />
                <div className={styles.depth5Frame14}>
                  <div className={styles.depth6Frame09}>
                    <div className={styles.depth7Frame0}>
                      <div className={styles.addAPublic}>
                        Add a public comment...
                      </div>
                    </div>
                    <div className={styles.depth7Frame1}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.depth9Frame0}>
                          <div className={styles.depth10Frame0}>
                            <div className={styles.depth11Frame0}>
                              <div className={styles.depth12Frame0}>
                                <img
                                  className={styles.vector0}
                                  alt=""
                                  src="/vector--0-5.svg"
                                />
                                <div className={styles.depth13Frame0} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.depth9Frame1}>
                          <div className={styles.depth10Frame01}>
                            <div className={styles.postComment}>
                              Post Comment
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame12}>
                <b className={styles.vote}>Vote</b>
              </div>
              <div className={styles.depth4Frame13}>
                <div className={styles.depth5Frame06}>
                  <div className={styles.depth6Frame010}>
                    <div className={styles.depth7Frame01}>
                      <div className={styles.votingPower}>Voting Power</div>
                    </div>
                  </div>
                  <div className={styles.depth6Frame15}>
                    <div className={styles.depth7Frame02}>
                      <div className={styles.depth8Frame01} />
                    </div>
                    <div className={styles.depth7Frame11}>
                      <div className={styles.votingPowerValue}>10000</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame14}>
                <div className={styles.depth5Frame07}>
                  <div className={styles.yes1}>Yes</div>
                </div>
                <div className={styles.depth5Frame15}>
                  <div className={styles.no1}>No</div>
                </div>
                <div className={styles.depth5Frame2}>
                  <div className={styles.abstain1}>Abstain</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OpenProposal;
