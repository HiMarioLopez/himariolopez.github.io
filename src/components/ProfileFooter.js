import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// materialui components
import withStyles from "@material-ui/core/styles/withStyles";
import Footer from "components/Footer/Footer.jsx";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

class ProfileFooter extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Footer
          theme="dark"
          content={
            <div>
              <GridContainer>
                <GridItem>
                  <div className={classes.block}>
                    Legally authorized to work in the U.S. without restriction.
                  </div>
                </GridItem>
                <GridItem>
                  Copyright &copy; {1900 + new Date().getYear()}, Mario Arturo
                  Lopez Martinez
                </GridItem>
              </GridContainer>
            </div>
          }
        />
      </>
    );
  }
}

ProfileFooter.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ProfileFooter);
