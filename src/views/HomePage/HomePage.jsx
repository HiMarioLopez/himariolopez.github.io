/*eslint-disable*/
import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// nodejs library that concatenates classes
import classNames from "classnames";

import ProfileFooter from "components/ProfileFooter";
import ProfileHeader from "components/ProfileHeader";
import AboutMeSection from "./Section/AboutMeSection";
import AcademicSection from "./Section/AcademicSection";
import WorkSection from "./Section/WorkSection";
import ProjectSection from "./Section/ProjectSection";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import homePageStyle from "assets/jss/material-kit-pro-react/views/homePageStyle.jsx";

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.bodyBackground}>
        <ProfileHeader />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <AboutMeSection />
          <WorkSection />
          <AcademicSection />
          <ProjectSection />
        </div>
        <ProfileFooter />
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(homePageStyle)(HomePage);
