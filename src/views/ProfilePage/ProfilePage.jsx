/*eslint-disable*/
import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";
import ProfileFooter from "components/ProfileFooter";
import ProfileHeader from "components/ProfileHeader";
import AboutMeSection from "./Section/AboutMeSection";
import AcademicSection from "./Section/AcademicSection";
import WorkSection from "./Section/WorkSection";
import ProjectSection from "./Section/ProjectSection";

class ProfilePage extends React.Component {
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

ProfilePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ProfilePage);
