import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Badge from "components/Badge/Badge.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";

import profileImage from "assets/img/faces/card-profile1-square.jpg";

import sectionBlogInfoStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionBlogInfoStyle.jsx";

function SectionBlogInfo({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.blogTags}>
                Tags:
                <Badge color="primary">Photography</Badge>
                <Badge color="primary">Stories</Badge>
                <Badge color="primary">Castle</Badge>
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Button color="google" round className={classes.buttons}>
                <i className="fab fa-google" /> 232
              </Button>
              <Button color="twitter" round className={classes.buttons}>
                <i className="fab fa-twitter" /> 910
              </Button>
              <Button color="facebook" round className={classes.buttons}>
                <i className="fab fa-facebook-square" /> 872
              </Button>
            </GridItem>
          </GridContainer>
          <hr />
          <Card plain profile className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2}>
                <CardAvatar plain profile>
                  <img src={profileImage} alt="..." />
                </CardAvatar>
              </GridItem>
              <GridItem xs={12} sm={8} md={8}>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  I've been trying to figure out the bed design for the master
                  bedroom at our Hidden Hills compound...I like good music from
                  Youtube.
                </p>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <Button round className={classes.pullRight}>
                  Follow
                </Button>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionBlogInfoStyle)(SectionBlogInfo);
