/*eslint-disable*/
import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// external libraries
import Particles from "react-particles-js";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

class ProfileHeader extends React.Component {
  renderParticles = () => {
    if (window.innerWidth > 960) {
      return (
        <Particles
          width="100vw"
          height="500px"
          params={{
            particles: {
              number: {
                value: 50
              },
              size: {
                value: 5
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
      );
    }

    return (
      <Particles
        width="100vw"
        height="50vh"
        params={{
          particles: {
            number: {
              value: 20
            },
            size: {
              value: 5
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
    );
  };

  render() {
    const { classes, ...rest } = this.props;

    return (
      <>
        <Header
          color="transparent"
          brand="Mario Arturo Lopez Martinez"
          links={<HeaderLinks dropdownHoverColor="danger" />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "danger"
          }}
          {...rest}
        />

        <Parallax className={classes.parallax}>
          {this.renderParticles()}
        </Parallax>
      </>
    )
  }
}

ProfileHeader.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ProfileHeader);
