import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Subject from "@material-ui/icons/Subject";
import Delete from "@material-ui/icons/Delete";
import Refresh from "@material-ui/icons/Refresh";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import styles from "assets/jss/material-kit-pro-react/views/sections/sectionMyWorkStyle.jsx";

import project1 from "assets/img/work/project_1.jpeg";

class SectionMyWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRotate1: "",
      activeRotate2: ""
    };
  }
  componentDidMount() {
    const { classes } = this.props;
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div {...rest} className="cd-section" id="cards">
        <div style={{ paddingBottom: "50px" }}>
          <div id="morphingCards" className="cd-section">
            <div className={classes.container}>
              <div className={classes.title}>
                <h2>My Work</h2>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6} lg={4}>
                  <div
                    className={`${classes.rotatingCardContainer} ${
                      classes.manualRotate
                      } ${this.state.activeRotate2}`}
                  >
                    <Card className={classes.cardRotate}>
                      <div
                        className={`${classes.front} ${
                          classes.wrapperBackground
                          }`}
                        style={{
                          backgroundImage: `url(${project1})`,
                          opacity: .8
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h6 className={classes.cardCategoryWhite}>
                            ExxonMobil Corporation
                          </h6>
                          <h3 className={classes.cardTitleWhite}>
                            Emerging Technologist
                            <br />
                            Software Engineering Intern
                          </h3>
                          <p className={classes.cardDescriptionWhite}>
                            May 2018 - Present
                          </p>
                          <div className={classes.textCenter}>
                            <Button
                              round
                              color="danger"
                              onClick={() =>
                                this.setState({
                                  activeRotate2: classes.activateRotate
                                })
                              }
                            >
                              <Refresh /> Learn More
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                      <div
                        className={`${classes.back} ${
                          classes.wrapperWarning
                          }`}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitleWhite}>
                            What did I do?
                          </h5>
                          <p className={classes.cardDescriptionWhite}>
                            Created a productivity platform comprised of an Android application (optimized for use on
                            the RealWear HMT-1 wearable helmet tablet, phones, and standard tablets), back end database
                            and storage solutions hosted on multiple Azure micro-services, and a website
                            <br />
                            Tech Stack: Kotlin for the Android app, Node.js and Azure Mobile Apps Services for the
                            back-end, and a bit of HTML/CSS for our front-end.
                          </p>
                          <div className={classes.textCenter}>
                            <Button
                              round
                              color="danger"
                              onClick={() =>
                                this.setState({
                                  activeRotate2: ""
                                })
                              }
                            >
                              <Refresh /> Back...
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SectionMyWork);
