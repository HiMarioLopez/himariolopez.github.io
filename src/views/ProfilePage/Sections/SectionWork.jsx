import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Refresh from "@material-ui/icons/Refresh";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Badge from "components/Badge/Badge.jsx";

import stylesSectionWork from "assets/jss/material-kit-pro-react/views/sections/sectionMyWorkStyle.jsx";

import project1 from "assets/img/work/project_1.jpeg";
import project2 from "assets/img/work/project_2.jpeg";
import project3 from "assets/img/work/project_3.png";
import project4 from "assets/img/work/project_4.jpeg";

class SectionWork extends React.Component {
  constructor(props) {
    super(props);
    // State of all the cards I use for this section...
    // This could get quit large, I need to find a way
    // better way to do this
    this.state = {
      activeRotate1: "",
      activeRotate2: "",
      activeRotate3: "",
      activeRotate4: ""
    };
  }

  componentDidMount() {
    const { classes } = this.props;

    // This monstrosity is how the cards get rotated; we reset the state on
    // component reload so we see the front of the cards
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
              <h2 className={classes.title}>Work Experience</h2>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6} lg={6}>
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
                          backgroundImage: `url(${project2})`,
                          opacity: .95
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h6 className={classes.cardCategoryWhite}>
                            Baylor University
                          </h6>
                          <h3 className={classes.cardTitleWhite}>
                            Classroom Technology Assistant & Developer
                          </h3>
                          <p className={classes.cardDescriptionWhite}>
                            Jan 2018 - Present
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
                        style={{
                          background: "#202020",
                          opacity: .95
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitleWhite}>
                            What do I do?
                          </h5>
                          <p className={classes.cardDescriptionWhite}>
                            I help people teach more effectively. I also install
                            and troubleshoot hardware around campus. Over 100
                            tickets completed with 100% completion and
                            satisfaction rate. I also build tools for internal
                            use by our library staff!
                            <br />
                            <div style={{ padding: "10px" }}>
                              <Badge color={"info"}>React</Badge>
                              <Badge color={"success"}>NodeJS</Badge>
                              <Badge color={"danger"}>MongoDB</Badge>
                            </div>
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
                              <Refresh /> Go back
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={6}>
                  <div
                    className={`${classes.rotatingCardContainer} ${
                      classes.manualRotate
                      } ${this.state.activeRotate1}`}
                  >
                    <Card className={classes.cardRotate}>
                      <div
                        className={`${classes.front} ${
                          classes.wrapperBackground
                          }`}
                        style={{
                          backgroundImage: `url(${project1})`,
                          opacity: .95
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h6 className={classes.cardCategoryWhite}>
                            ExxonMobil Corporation
                          </h6>
                          <h3 className={classes.cardTitleWhite}>
                            Software Engineering Intern
                          </h3>
                          <p className={classes.cardDescriptionWhite}>
                            May 2018 - Aug 2018
                          </p>
                          <div className={classes.textCenter}>
                            <Button
                              round
                              color="danger"
                              onClick={() =>
                                this.setState({
                                  activeRotate1: classes.activateRotate
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
                        style={{
                          background: "#202020",
                          opacity: .95
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitleWhite}>
                            What did I do?
                          </h5>
                          <p className={classes.cardDescriptionWhite}>
                            Created a productivity platform; Android application
                            (for wearable devices, phones, and tablets), back
                            end database and storage hosted on Microsoft Azure.
                            Presented to the President and CIO!
                            <br />
                            <div style={{ padding: "10px" }}>
                              <Badge color={"success"}>Android</Badge>
                              <Badge color={"warning"}>Kotlin</Badge>
                              <Badge color={"info"}>Azure</Badge>
                            </div>
                          </p>
                          <div className={classes.textCenter}>
                            <Button
                              round
                              color="danger"
                              onClick={() =>
                                this.setState({
                                  activeRotate1: ""
                                })
                              }
                            >
                              <Refresh /> Go back
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={6}>
                  <div
                    className={`${classes.rotatingCardContainer} ${
                      classes.manualRotate
                      } ${this.state.activeRotate3}`}
                  >
                    <Card className={classes.cardRotate}>
                      <div
                        className={`${classes.front} ${
                          classes.wrapperBackground
                          }`}
                        style={{
                          backgroundImage: `url(${project3})`,
                          opacity: .95
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h6 className={classes.cardCategoryWhite}>
                            Best Buy
                          </h6>
                          <h3 className={classes.cardTitleWhite}>
                            Computer & Digital Imaging Sales Consultant
                          </h3>
                          <p className={classes.cardDescriptionWhite}>
                            Jan 2018 - Dec 2017
                          </p>
                          <div className={classes.textCenter}>
                            <Button
                              round
                              color="danger"
                              onClick={() =>
                                this.setState({
                                  activeRotate3: classes.activateRotate
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
                        style={{
                          background: "#202020",
                          opacity: .95
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitleWhite}>
                            What did I do?
                          </h5>
                          <p className={classes.cardDescriptionWhite}>
                            Excelled at selling products and services. Highest
                            sales in our market; over $27,000 USD sold in a
                            week. Inspired customers by showing them what was
                            possible with the latest consumer tech.
                            <br />
                            <div style={{ padding: "10px" }}>
                              <Badge color={"rose"}>Sales</Badge>
                              <Badge color={"gray"}>Client-Facing</Badge>
                              <Badge color={"success"}>Merchandising</Badge>
                            </div>
                          </p>
                          <div className={classes.textCenter}>
                            <Button
                              round
                              color="danger"
                              onClick={() =>
                                this.setState({
                                  activeRotate3: ""
                                })
                              }
                            >
                              <Refresh /> Go back
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={6}>
                  <div
                    className={`${classes.rotatingCardContainer} ${
                      classes.manualRotate
                      } ${this.state.activeRotate4}`}
                  >
                    <Card className={classes.cardRotate}>
                      <div
                        className={`${classes.front} ${
                          classes.wrapperBackground
                          }`}
                        style={{
                          backgroundImage: `url(${project4})`,
                          opacity: .95
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h6 className={classes.cardCategoryWhite}>
                            Baylor University
                          </h6>
                          <h3 className={classes.cardTitleWhite}>
                            Student Fundraising Ambassador
                          </h3>
                          <p className={classes.cardDescriptionWhite}>
                            Aug 2017 - Dec 2017
                          </p>
                          <div className={classes.textCenter}>
                            <Button
                              round
                              color="danger"
                              onClick={() =>
                                this.setState({
                                  activeRotate4: classes.activateRotate
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
                        style={{
                          background: "#202020",
                          opacity: .95
                        }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>
                          <h5 className={classes.cardTitleWhite}>
                            What did I do?
                          </h5>
                          <p className={classes.cardDescriptionWhite}>
                            Raised funds for student scholarship and academic
                            departments around campus. Personally raised over
                            $22,000 USD (highest earner for Fall 2017)!
                            <br />
                            <div style={{ padding: "10px" }}>
                              <Badge color={"success"}>Fundraising</Badge>
                              <Badge color={"primary"}>Telecommunications</Badge>
                              <Badge color={"info"}>Marketing</Badge>
                            </div>
                          </p>
                          <div className={classes.textCenter}>
                            <Button
                              round
                              color="danger"
                              onClick={() =>
                                this.setState({
                                  activeRotate4: ""
                                })
                              }
                            >
                              <Refresh /> Go back
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

export default withStyles(stylesSectionWork)(SectionWork);
