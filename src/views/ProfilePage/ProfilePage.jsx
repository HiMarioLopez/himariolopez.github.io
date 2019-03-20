/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// Sections
import AboutMeSection from "./Sections/AboutMeSection";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
// Other libraries
import Particles from 'react-particles-js';
// Images
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

class ProfilePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="white"
          brand="Mario Arturo Lopez Martinez"
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "danger"
          }}
          {...rest}
        />
        <Parallax className={classes.parallax}>
          <Particles
            width={"100vw"}
            height={"100vh"}
            params={{
              "particles": {
                "number": {
                  "value": 100
                },
                "size": {
                  "value": 5
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  }
                }
              }
            }}
          />
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <AboutMeSection />
            <GridContainer>
              <GridItem
                xs={10}
                sm={10}
                md={7}
                className={classes.gridItem}
              >
                <h3 className={classNames(classes.name, classes.title)}>
                  My Work
                </h3>
                <GridContainer className={classes.collections}>
                  <GridItem xs={12} sm={12} md={6}>
                    <Card
                      background
                      style={{
                        backgroundImage:
                          "url(" + mariyaGeorgieva + ")"
                      }}
                    >
                      <a href="#pablo" />
                      <CardBody
                        background
                        className={classes.cardBody}
                      >
                        <Badge
                          color="warning"
                          className={classes.badge}
                        >
                          Spring 2016
                        </Badge>
                        <a href="#pablo">
                          <h2 className={classes.cardTitleWhite}>
                            Stilleto
                          </h2>
                        </a>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Card
                      background
                      style={{
                        backgroundImage: "url(" + clemOnojeghuo + ")"
                      }}
                    >
                      <a href="#pablo" />
                      <CardBody
                        background
                        className={classes.cardBody}
                      >
                        <Badge color="info" className={classes.badge}>
                          Spring 2016
                        </Badge>
                        <a href="#pablo">
                          <h2 className={classes.cardTitleWhite}>
                            High Heels
                          </h2>
                        </a>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Card
                      background
                      style={{
                        backgroundImage: "url(" + oluEletu + ")"
                      }}
                    >
                      <a href="#pablo" />
                      <CardBody
                        background
                        className={classes.cardBody}
                      >
                        <Badge
                          color="danger"
                          className={classes.badge}
                        >
                          Summer 2016
                        </Badge>
                        <a href="#pablo">
                          <h2 className={classes.cardTitleWhite}>
                            Flats
                          </h2>
                        </a>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Card
                      background
                      style={{
                        backgroundImage:
                          "url(" + darrenColeshill + ")"
                      }}
                    >
                      <a href="#pablo" />
                      <CardBody
                        background
                        className={classes.cardBody}
                      >
                        <Badge
                          color="success"
                          className={classes.badge}
                        >
                          Winter 2016
                        </Badge>
                        <a href="#pablo">
                          <h2 className={classes.cardTitleWhite}>
                            Men's Sneakers
                          </h2>
                        </a>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem
                xs={10}
                sm={10}
                md={2}
                className={classes.gridItem}
              >
                <h4 className={classes.title}>Stats</h4>
                <ul className={classes.listUnstyled}>
                  <li>
                    <b>60</b> Products
                  </li>
                  <li>
                    <b>4</b> Collections
                  </li>
                  <li>
                    <b>331</b> Influencers
                  </li>
                  <li>
                    <b>1.2K</b> Likes
                  </li>
                </ul>
                <hr />
                <h4 className={classes.title}>About this work</h4>
                <p className={classes.description}>
                  French luxury footwear and fashion. The footwear has
                  incorporated shiny, red-lacquered soles that have
                  become his signature.
                </p>
                <hr />
                <h4 className={classes.title}>Focus</h4>
                <Badge color="primary">Footwear</Badge>
                <Badge color="rose">Luxury</Badge>
              </GridItem>
            </GridContainer>
            <h3 className={classNames(classes.name, classes.title)}>
              My Work
            </h3>
            <div>
              <GridContainer justify="center">
                <GridItem
                  xs={10}
                  sm={5}
                  className={classes.gridItem}
                >
                  <Card profile plain className={classes.card}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <CardHeader image plain>
                          <a href="#pablo">
                            <img src={avatar} alt="..." />
                          </a>
                          <div
                            className={classes.coloredShadow}
                            style={{
                              backgroundImage: "url(" + avatar + ")",
                              opacity: "1"
                            }}
                          />
                        </CardHeader>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={7}>
                        <CardBody plain>
                          <h4 className={classes.cardTitle}>
                            Gigi Hadid
                          </h4>
                          <Muted>
                            <h6>MODEL</h6>
                          </Muted>
                          <p className={classes.description}>
                            Don't be scared of the truth because we
                            need to restart the human foundation in
                            truth...
                          </p>
                        </CardBody>
                      </GridItem>
                    </GridContainer>
                  </Card>
                </GridItem>
                <GridItem
                  xs={10}
                  sm={5}
                  className={classes.gridItem}
                >
                  <Card profile plain className={classes.card}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <CardHeader image plain>
                          <a href="#pablo">
                            <img src={marc} alt="..." />
                          </a>
                          <div
                            className={classes.coloredShadow}
                            style={{
                              backgroundImage: "url(" + marc + ")",
                              opacity: "1"
                            }}
                          />
                        </CardHeader>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={7}>
                        <CardBody plain>
                          <h4 className={classes.cardTitle}>
                            Marc Jacobs
                          </h4>
                          <Muted>
                            <h6>DESIGNER</h6>
                          </Muted>
                          <p className={classes.description}>
                            Don't be scared of the truth because we
                            need to restart the human foundation in
                            truth...
                          </p>
                        </CardBody>
                      </GridItem>
                    </GridContainer>
                  </Card>
                </GridItem>
                <GridItem
                  xs={10}
                  sm={5}
                  className={classes.gridItem}
                >
                  <Card profile plain className={classes.card}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <CardHeader image plain>
                          <a href="#pablo">
                            <img src={kendall} alt="..." />
                          </a>
                          <div
                            className={classes.coloredShadow}
                            style={{
                              backgroundImage: "url(" + kendall + ")",
                              opacity: "1"
                            }}
                          />
                        </CardHeader>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={7}>
                        <CardBody plain>
                          <h4 className={classes.cardTitle}>
                            Kendall Jenner
                          </h4>
                          <Muted>
                            <h6>MODEL</h6>
                          </Muted>
                          <p className={classes.description}>
                            I love you like Kanye loves Kanye. Don't
                            be scared of the truth.
                          </p>
                        </CardBody>
                      </GridItem>
                    </GridContainer>
                  </Card>
                </GridItem>
                <GridItem
                  xs={10}
                  sm={5}
                  className={classes.gridItem}
                >
                  <Card profile plain className={classes.card}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={5}>
                        <CardHeader image plain>
                          <a href="#pablo">
                            <img src={cardProfile2Square} alt="..." />
                          </a>
                          <div
                            className={classes.coloredShadow}
                            style={{
                              backgroundImage:
                                "url(" + cardProfile2Square + ")",
                              opacity: "1"
                            }}
                          />
                        </CardHeader>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={7}>
                        <CardBody plain>
                          <h4 className={classes.cardTitle}>
                            George West
                          </h4>
                          <Muted>
                            <h6>MODEL/DJ</h6>
                          </Muted>
                          <p className={classes.description}>
                            I love you like Kanye loves Kanye.
                          </p>
                        </CardBody>
                      </GridItem>
                    </GridContainer>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
            <Clearfix />
          </div>
          <Clearfix />
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <div
                      className={classes.block}
                    >
                      Legally authorized to work in the US.
                    </div>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by Mario A Lopez Martinez
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
