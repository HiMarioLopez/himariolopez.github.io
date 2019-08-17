/*!

=========================================================
* Material Kit PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import badgeStyle from "assets/jss/material-kit-pro-react/components/badgeStyle.jsx";

function Badge({ ...props }) {
  const { classes, color, children, className } = props;
  const badgeClasses = classNames({
    [classes.badge]: true,
    [classes[color]]: true,
    [className]: className !== undefined
  });
  return <span className={badgeClasses}>{children}</span>;
}

Badge.defaultProps = {
  color: "gray"
};

Badge.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  className: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(badgeStyle)(Badge);
