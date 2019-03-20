/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import mario from "assets/img/mario_profile.jpeg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

class AboutMeSection extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={10} sm={10} md={8}>
            <div className={classes.profile}>
              {/* @TODO Your professional head-shot */}
              <img
                src={mario}
                alt="Mario Profile"
                className={imageClasses} />
              <div className={classes.name}>
                {/* @TODO Your name */}
                <h3 className={classes.title}>
                  Mario Arturo Lopez Martinez
                </h3>
                {/* @TODO Add your [desired] position(s) */}
                <h6>Software Engineer</h6>
                <h6>Emerging Technologist</h6>
                <h6>Software Project Manager</h6>
                {/* @TODO LinkedIn profile link */}
                <Button
                  justIcon
                  simple
                  href={"https://www.linkedin.com/in/mariolopezarturo/"}
                  target={"_blank"}
                  color="linkedin"
                  className={classes.margin5}
                >
                  <i className={"fab fa-linkedin"} />
                </Button>
                {/* @TODO GitHub profile link */}
                <Button
                  justIcon
                  simple
                  href={"https://github.com/MarioLopezBaylor"}
                  target={"_blank"}
                  color="github"
                  className={classes.margin5}
                >
                  <i className={"fab fa-github"} />
                </Button>
                {/* @TODO Facebook profile link */}
                <Button
                  justIcon
                  simple
                  href={"https://www.facebook.com/Mario.Lopez.Arturo"}
                  target={"_blank"}
                  color="facebook"
                  className={classes.margin5}
                >
                  <i className={"fab fa-facebook"} />
                </Button>
                {/* @TODO Twitter profile link */}
                <Button
                  justIcon
                  simple
                  href={"https://twitter.com/mariolopez_dev"}
                  target={"_blank"}
                  color="twitter"
                  className={classes.margin5}
                >
                  <i className={"fab fa-twitter"} />
                </Button>
              </div>
            </div>
          </GridItem>
          <GridItem xs={10} sm={10} md={8}>
            <div
              className={
                classNames(classes.description, classes.textCenter)
              }
            >
              {/* @TODO Short description of yourself/objective statement. */}
              <p>
                I am a software engineer from Rioverde, San Luis Potosí,
                Mexico who is currently working towards a B.S. in Computer
                Science at Baylor University. My experience spans from
                busing tables at local bars and restaurants, selling
                computers by the hundreds, fundraising thousands of dollars
                for student scholarships at my university, researching new
                and emerging technologies and how they can impact the energy
                industry for the better, and developing software solutions
                being used by workers around the world.{" "}
              </p>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(AboutMeSection);
