import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import academicsSection from "assets/jss/material-kit-pro-react/views/sections/sectionAcademicsStyle.jsx";

import baylor from "assets/img/logos/baylorLogo.webp";
import utsa from "assets/img/logos/utsaLogo.webp";

function SectionAcademics({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div
      {...rest}
      className="cd-section"
      style={{ marginBottom: "-50px" }}
    >
      <div className={classes.blog}>
        <div className={classes.container}>
          <h2 className={classes.title}>Academics</h2>
          <hr />
          <GridContainer>
            <GridItem
              xs={9}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={4}
                    md={4}
                    style={{ paddingBottom: "3vh" }}
                  >
                    <CardHeader image plain>
                      <a href="https://www.baylor.edu/" target={"_blank"}>
                        <img src={baylor} alt="Baylor Logo" />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${baylor})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${baylor})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Danger>
                      <h6 className={classes.cardCategory}>Aug 2016 - May 2020</h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <a
                        href="https://www.ecs.baylor.edu/computerscience/"
                        target={"_blank"}
                      >
                        B.S. Computer Science
                      </a>
                    </h3>
                    <p className={classes.author}>
                      <b>Major GPA: 3.30 / 4.00</b>
                    </p>
                    <p>
                      <div>
                        <b>Notable Coursework:</b>
                      </div>
                      <ul>
                        <li>
                          Software Engineering II (Junior Design Project):
                          Strong focus on design patterns and best practice,
                          project consisted of full-stack web-app built using
                          ReactJS, Spring Boot, and ElasticSearch.
                        </li>
                        <li>
                          Operating Systems & Systems Programming: UNIX and C
                          programming, BASH scripting, memory management,
                          threading and synchronization, processor scheduling, and
                          implementing parts of a traditional operating system.
                        </li>
                        <li>
                          Software Project Management
                        </li>
                        <li>
                          Database Management Systems
                        </li>
                        <li>
                          Algorithm & Data Structures
                        </li>
                      </ul>
                      <div style={{ paddingTop: "1vh" }}>
                        <b>Scholarships & Achievements:</b>
                      </div>
                      <div>
                        • ECS Highlight Scholar
                        <br />
                        • Willis Family ECS Scholarship
                        <br />
                        • Transfer Scholarship (Highest Tier, 3.75+ Transfer GPA)
                        <br />
                        • ECS Student Advocate & Representative
                      </div>
                      <div style={{ paddingTop: "1vh" }}>
                        <b>Clubs & Activities:</b>
                      </div>
                      <div>
                        • The Wacode Team, Co-Founder & President
                        <br />
                        • Computing For Compassion (C4C), President
                        <br />
                        • Baylor igniteCS, Project Manager & Founder
                        <br />
                        • Hispanic Student Association, Event Staff Coordinator & Member
                        <br />
                        • Society of Hispanic Professional Engineers, Member
                        <br />
                        • Association for Computing Machinery, Member
                      </div>
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={4}
                    md={4}
                    style={{ paddingBottom: "3vh" }}
                  >
                    <CardHeader image plain>
                      <a href="https://www.utsa.edu/" target={"_blank"}>
                        <img src={utsa} alt="UTSA Logo" />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${utsa})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${utsa})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Danger>
                      <h6 className={classes.cardCategory}>Aug 2015 - May 2016 (Transferred)</h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <a href="https://business.utsa.edu/">
                        B.B.A. Entrepreneurship
                      </a>
                    </h3>
                    <p className={classes.author}>
                      <b>Cumulative GPA: 3.77 / 4.00</b>
                    </p>
                    <p>
                      <div>
                        <b>Notable Coursework:</b>
                      </div>
                      <div>
                        • Principles of Marketing
                        <br />
                        • Management Information Systems Fundamentals
                        <br />
                        • Microeconomics & Macroeconomics
                      </div>
                      <div>
                        <b>Achievements:</b>
                      </div>
                      <div>
                        • Dean's List
                      </div>
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(academicsSection)(SectionAcademics);
