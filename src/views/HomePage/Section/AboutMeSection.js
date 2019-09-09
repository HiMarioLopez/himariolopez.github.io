/*eslint-disable*/
import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Danger from "components/Typography/Danger.jsx";

import profile from "assets/img/profile-min.jpeg";

import homePageStyle from "assets/jss/material-kit-pro-react/views/homePageStyle.jsx";

function AboutMeSection({ ...props }) {
  const { classes, ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.profile}>
            <div>
              <img src={profile} alt="Profile" className={imageClasses} />
            </div>
            <div className={classes.name}>
              <h3 className={classes.title}>Mario Arturo Lopez Martinez</h3>
              <h6>Product Management | Software Engineering | IT Consulting</h6>
              <Button
                justIcon
                simple
                color="danger"
                href="mailto:mario@malopez.dev"
                className={classes.margin5}
              >
                <i className={classes.socials + " fa fa-envelope"} />
              </Button>
              <Button
                justIcon
                simple
                color="linkedin"
                href="https://www.linkedin.com/in/mariolopezarturo/"
                target="_blank"
                className={classes.margin5}
              >
                <i className={classes.socials + " fab fa-linkedin"} />
              </Button>
              <Button
                justIcon
                simple
                color="github"
                href="https://github.com/MarioLopezBaylor"
                target="_blank"
                className={classes.margin5}
              >
                <i className={classes.socials + " fab fa-github"} />
              </Button>
            </div>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={11} sm={11} md={6}>
          <div className={classes.textCenter}>
            <p>
              I am an aspiring Product Manager from Rioverde, San Luis Potosí,
              Mexico who is currently working towards a{" "}
              <a
                style={{ color: "#cc2127" }}
                href="https://www.ecs.baylor.edu/index.php?id=960857"
                target="_blank"
              >
                B.S. in Computer Science at Baylor University
              </a>
              . Outside of the academic schoolyear, I am usually based out of
              Houston, Texas.
            </p>
            <hr />
            <p>
              I hold work experience in hospitality, technology sales,
              fundraising, product design, project management, IT consulting,
              and software development.
            </p>
            <p>
              In my free time I enjoy meeting new people, listening to tons of
              music (Anything from Jazz to EDM to Classical), building web
              applications, and listening to&nbsp;
              <a
                style={{ color: "#cc2127" }}
                href="https://www.npr.org/podcasts/510313/how-i-built-this"
                target="_blank"
              >
                How I Built This
              </a>
              &nbsp;or the&nbsp;
              <a
                style={{ color: "#cc2127" }}
                href="https://www.npr.org/programs/ted-radio-hour/"
                target="_blank"
              >
                TED Radio Hour.&nbsp;
              </a>
              The rest of my time is devoted to helping provide free IT
              consulting to non-profits in my community.
            </p>
            <hr />
            <p>
              My only goals in life are to meet amazing people, build cool
              things, and learn as much as I can along the way. Thank you for
              visiting. I hope you find what you were looking for!
            </p>
            <p>
              <a
                style={{ color: "#cc2127" }}
                href="mailto:mario@malopez.dev"
                target="_blank"
              >
                Please reach out to me if you have any questions. 🤠
              </a>
            </p>
          </div>
        </GridItem>
      </GridContainer>
      <Clearfix />
    </div>
  );
}

AboutMeSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(homePageStyle)(AboutMeSection);
