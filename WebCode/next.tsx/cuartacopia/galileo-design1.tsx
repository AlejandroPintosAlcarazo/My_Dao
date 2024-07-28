import type { NextPage } from "next";
import Depth2Frame1 from "../components/depth2-frame1";
import Depth4Frame from "../components/depth4-frame";
import Depth8Frame from "../components/depth8-frame";
import styles from "./galileo-design1.module.css";

const GalileoDesign1: NextPage = () => {
  return (
    <div className={styles.galileoDesign6}>
      <main className={styles.depth0Frame0}>
        <section className={styles.depth1Frame0}>
          <Depth2Frame1 />
          <div className={styles.depth2Frame1}>
            <div className={styles.depth3Frame0}>
              <div className={styles.depth4Frame0}>
                <div className={styles.depth5Frame0}>
                  <div className={styles.depth6Frame0}>
                    <img
                      className={styles.depth7Frame0}
                      loading="lazy"
                      alt=""
                      src="/depth-7-frame-01@2x.png"
                    />
                    <div className={styles.depth7Frame1}>
                      <div className={styles.depth8Frame0}>
                        <div className={styles.dao}>DAO</div>
                      </div>
                      <div className={styles.depth8Frame1}>
                        <div className={styles.votingInterface}>
                          Voting Interface
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.depth7Frame01}>
                      <div className={styles.depth8Frame01}>
                        <div className={styles.depth9Frame0}>
                          <img
                            className={styles.vector0}
                            loading="lazy"
                            alt=""
                            src="/vector--0-110.svg"
                          />
                          <div className={styles.depth10Frame0} />
                        </div>
                      </div>
                      <div className={styles.depth8Frame11}>
                        <div className={styles.overview}>Overview</div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame11}>
                      <div className={styles.depth8Frame02}>
                        <div className={styles.depth9Frame01}>
                          <img
                            className={styles.vector01}
                            alt=""
                            src="/vector--0-21.svg"
                          />
                          <div className={styles.depth10Frame01} />
                        </div>
                      </div>
                      <div className={styles.depth8Frame12}>
                        <div className={styles.proposals}>Proposals</div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame2}>
                      <div className={styles.depth8Frame03}>
                        <div className={styles.depth9Frame02}>
                          <img
                            className={styles.vector02}
                            loading="lazy"
                            alt=""
                            src="/vector--0-31.svg"
                          />
                          <div className={styles.depth10Frame02} />
                        </div>
                      </div>
                      <div className={styles.depth8Frame13}>
                        <div className={styles.members}>Members</div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame3}>
                      <div className={styles.depth8Frame04}>
                        <div className={styles.depth9Frame03}>
                          <img
                            className={styles.vector03}
                            loading="lazy"
                            alt=""
                            src="/vector--0-41.svg"
                          />
                          <div className={styles.depth10Frame03} />
                        </div>
                      </div>
                      <div className={styles.depth8Frame14}>
                        <div className={styles.docs}>Docs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.depth3Frame1}>
              <div className={styles.depth4Frame01}>
                <div className={styles.depth5Frame01}>
                  <h1 className={styles.votingOverview}>Voting Overview</h1>
                </div>
              </div>
              <div className={styles.depth4Frame1}>
                <b className={styles.allProposals}>All Proposals</b>
              </div>
              <Depth4Frame
                chatIcon="/vector--0-51.svg"
                searchAllChats="Search  for a proposal"
              />
              <div className={styles.depth4Frame3}>
                <div className={styles.depth5Frame02}>
                  <div className={styles.depth6Frame01}>
                    <div className={styles.depth7Frame02}>
                      <div className={styles.depth8Frame05}>
                        <div className={styles.depth9Frame04}>
                          <div className={styles.id}>ID</div>
                        </div>
                        <div className={styles.depth9Frame1}>
                          <div className={styles.title}>Title</div>
                        </div>
                        <div className={styles.depth9Frame2}>
                          <div className={styles.status}>Status</div>
                        </div>
                        <div className={styles.depth9Frame3}>
                          <div className={styles.actions}>Actions</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.depth7Frame12}>
                      <Depth8Frame
                        empty="#001"
                        rebrandingAcme="Rebranding Acme"
                        inProgress="In Progress"
                      />
                      <Depth8Frame
                        empty="#002"
                        rebrandingAcme="New Logo Design"
                        inProgress="Pending"
                      />
                      <Depth8Frame
                        empty="#003"
                        rebrandingAcme="Color Scheme Update"
                        inProgress="Approved"
                      />
                      <Depth8Frame
                        empty="#004"
                        rebrandingAcme="Design Language Revamp"
                        inProgress="Rejected"
                      />
                      <Depth8Frame
                        empty="#005"
                        rebrandingAcme="Community Feedback"
                        inProgress="In Progress"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth4Frame4}>
                <div className={styles.depth5Frame03}>
                  <div className={styles.depth6Frame02}>
                    <div className={styles.depth7Frame03}>
                      <b className={styles.recent}>Recent</b>
                    </div>
                  </div>
                  <div className={styles.depth6Frame11}>
                    <div className={styles.depth7Frame04}>
                      <b className={styles.ongoing}>Ongoing</b>
                    </div>
                  </div>
                  <div className={styles.depth6Frame2}>
                    <div className={styles.depth7Frame05}>
                      <b className={styles.all}>All</b>
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

export default GalileoDesign1;