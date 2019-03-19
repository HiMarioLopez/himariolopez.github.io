import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import typographyStyle from "assets/jss/material-kit-pro-react/components/typographyStyle.jsx";

function Rose({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.roseText}>
      {children}
    </div>
  );
}

Rose.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Rose);
