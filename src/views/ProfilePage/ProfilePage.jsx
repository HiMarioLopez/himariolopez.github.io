/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// Sections
import WorkSection from "./Sections/SectionWork";
import AboutMeSection from "./Sections/SectionAboutMe";
import SectionAcademics from "./Sections/SectionAcademics";
// core components
import Footer from "components/Footer/Footer.jsx";
import Header from "components/Header/Header.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
// Other libraries
import Particles from 'react-particles-js';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

configureAnchors({offset: -80, scrollDuration: 500});

class ProfilePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div style={{ backgroundColor: "#202020" }}>
        <Header
          color="transparent"
          brand="Mario Arturo Lopez Martinez"
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "dark"
          }}
          {...rest}
        />
        <Parallax className={classes.parallax}>
          <Particles
            width={"100vw"}
            height={"500px"}
            params={{
              "particles": {
                "number": {
                   "value": 50
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
          <AboutMeSection />
          <ScrollableAnchor id={"academics"}>
            <SectionAcademics />
          </ScrollableAnchor>
          <ScrollableAnchor id={"work"}>
            <WorkSection />
          </ScrollableAnchor>
        </div>
        <Footer
          theme={"dark"}
          content={
            <div>
              <div className={classNames(classes.left, classes.block)}>
                Legally authorized to work in the US.
              </div>
              <div className={classes.right}>
                Copyright &copy; {1900 + new Date().getYear()},
                Mario A Lopez Martinez
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
