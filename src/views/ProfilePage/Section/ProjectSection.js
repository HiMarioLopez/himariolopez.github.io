import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import examplesStyle from "assets/jss/material-kit-pro-react/views/presentationSections/examplesStyle.jsx";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

import Project_1 from "assets/img/projects/Project_1.png";
import Project_2 from "assets/img/projects/Project_2.png";
import Project_3 from "assets/img/projects/Project_3.png";
import Project_4 from "assets/img/projects/Project_4.png";
import Project_5 from "assets/img/projects/Project_5.png";

const styles = {
  ...examplesStyle,
  ...imagesStyles
};

class SectionExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.section, classes.sectionDark)}>
        <div className={classes.container}>
          <GridItem
            md={8}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <div className={classes.sectionDescription}>
              <h2 className={classes.title}>Projects</h2>
              <h5 className={classes.description}>
                I try to do a bit of coding and volunteer work when possible.
                Below is a short list of some of the things I&apos;ve had the
                opportunity to work on. Feel free to snoop through the code and
                roast me as deemed fit.
              </h5>
            </div>
          </GridItem>
          <GridContainer>
            <GridItem md={4} sm={4} xs={12}>
              <h4 className={classes.title}>This website!</h4>
              <Card className={classes.imgCardExtended}>
                <a
                  href="https://github.com/MarioLopezBaylor/mario-personal-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Project_1}
                    alt="My Site"
                    className={classes.imgCard}
                  />
                </a>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4} xs={12}>
              <h4 className={classes.title}>Baylor CTS Dashboard</h4>
              <Card className={classes.imgCardExtended}>
                <img
                  src={Project_3}
                  alt="Baylor CTS Dashboard"
                  className={classes.imgCard}
                />
              </Card>
              <h4 className={classes.title}>Hacklahoma Project</h4>
              <Card className={classes.imgCardExtended}>
                <a
                  href="https://github.com/shenoisam/hacklahoma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Project_4}
                    alt="Hacklahoma Project"
                    className={classes.imgCard}
                  />
                </a>
              </Card>
              <h4 className={classes.title}>Gryzl Task Manager</h4>
              <Card className={classes.imgCardExtended}>
                <a
                  href="https://github.com/MarioLopezBaylor/GryzlTaskManager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Project_5}
                    alt="Gryzl Task Manager"
                    className={classes.imgCard}
                  />
                </a>
              </Card>
            </GridItem>
            <GridItem md={4} sm={4} xs={12}>
              <h4 className={classes.title}>Wacode Hackathon Site</h4>
              <Card className={classes.imgCardExtended}>
                <a
                  href="https://github.com/MarioLopezBaylor/wacode-site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Project_2}
                    alt="Wacode Hackathon Site"
                    className={classes.imgCard}
                  />
                </a>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionExamples.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SectionExamples);
