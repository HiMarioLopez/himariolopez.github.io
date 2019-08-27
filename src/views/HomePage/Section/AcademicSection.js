import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

// Core Components
import Card from "components/Card/Card.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

// Library Components
import Image from "react-image-webp";

// Assets
import baylorPng from "assets/img/logos/baylorLogo.png";
import baylorWebp from "assets/img/logos/baylorLogo.webp";
import utsaPng from "assets/img/logos/utsaLogo.png";
import utsaWebp from "assets/img/logos/utsaLogo.webp";

// Style Sheets
import academicStyle from "assets/jss/material-kit-pro-react/views/academicStyle.jsx";

// In-line Styles
const baylorShadowStyle = {
  backgroundImage: `url(${baylorPng})`,
  opacity: "1"
};
const utsaShadowStyle = { backgroundImage: `url(${utsaPng})`, opacity: "1" };
const universityBrandStyle = { paddingBottom: "3vh" };

function AcademicSection({ ...props }) {
  const { classes, ...rest } = props;

  return (
    <div {...rest} className="cd-section">
      <div className={classes.blog}>
        <div className={classes.container}>
          <Grid container justify="center">
            <h2 className={classes.title}>Academics</h2>
          </Grid>

          <GridContainer>
            <GridItem xs={9} className={`${classes.mlAuto} ${classes.mrAuto}`}>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4} style={universityBrandStyle}>
                    <CardHeader image plain>
                      <a
                        href="https://www.baylor.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={baylorPng}
                          webp={baylorWebp}
                          alt="Baylor Logo"
                        />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={baylorShadowStyle}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={baylorShadowStyle}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <h6 className={classes.cardCategory}>
                      Aug 2016 - May 2020
                    </h6>
                    <h3 className={classes.cardTitle}>
                      <a
                        href="https://www.ecs.baylor.edu/computerscience/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        B.S. Computer Science
                      </a>
                    </h3>
                    <p className={classes.author}>
                      <b>Major GPA: 3.30 / 4.00</b>
                    </p>
                    <div>
                      <b>Notable Coursework:</b>
                    </div>
                    <ul>
                      <li>Software Engineering II (Junior Design Project)</li>
                      <li>Operating Systems</li>
                      <li>Systems Programming</li>
                      <li>Software Project Management</li>
                      <li>Database Management Systems</li>
                      <li>Algorithm &amp; Data Structures</li>
                    </ul>
                    <b>Scholarships &amp; Achievements:</b>
                    <ul>
                      <li>Trent & Sue-Lynn Voigt Scholarship</li>
                      <li>ECS Highlight Scholar</li>
                      <li>Willis Family ECS Scholarship</li>
                      <li>
                        Transfer Scholarship (Highest Tier, 3.75+ Transfer GPA)
                      </li>
                      <li>ECS Student Advocate &amp; Representative</li>
                      <li>
                        Presented to the ECS Board &amp; Dean (Spring 2019)
                      </li>
                    </ul>
                    <b>Clubs &amp; Activities:</b>
                    <ul>
                      <li>ECS Student Organization Council, Chair</li>
                      <li>The Wacode Team, Co-Founder &amp; President</li>
                      <li>Computing For Compassion (C4C), President</li>
                      <li>Baylor igniteCS, Project Manager &amp; Founder</li>
                      <li>
                        Hispanic Student Association, Event Staff Coordinator &
                        Member
                      </li>
                      <li>
                        Society of Hispanic Professional Engineers, Member
                      </li>
                      <li>Association for Computing Machinery, Member</li>
                    </ul>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4} style={universityBrandStyle}>
                    <CardHeader image plain>
                      <a
                        href="https://www.utsa.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={utsaPng} webp={utsaWebp} alt="UTSA Logo" />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={utsaShadowStyle}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={utsaShadowStyle}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <h6 className={classes.cardCategory}>
                      Aug 2015 - May 2016 (Transferred)
                    </h6>
                    <h3 className={classes.cardTitle}>
                      <a href="https://business.utsa.edu/">
                        B.B.A. Entrepreneurship
                      </a>
                    </h3>
                    <p className={classes.author}>
                      <b>Cumulative GPA: 3.77 / 4.00</b>
                    </p>
                    <div>
                      <b>Notable Coursework:</b>
                    </div>
                    <ul>
                      <li>Principles of Marketing</li>
                      <li>Fundamentals of Management Information Systems</li>
                      <li>Microeconomics &amp; Macroeconomics</li>
                    </ul>
                    <div>
                      <b>Achievements:</b>
                    </div>
                    <ul>
                      <li>Dean&apos;s List</li>
                    </ul>
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

AcademicSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(academicStyle)(AcademicSection);
