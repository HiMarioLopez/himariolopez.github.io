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
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";

import instructionStyle from "assets/jss/material-kit-pro-react/components/instructionStyle.jsx";

function Instruction({ ...props }) {
  const {
    classes,
    title,
    text,
    image,
    className,
    imageClassName,
    imageAlt
  } = props;
  const instructionClasses = cx({
    [classes.instruction]: true,
    [className]: className !== undefined
  });
  const pictureClasses = cx({
    [classes.picture]: true,
    [imageClassName]: imageClassName !== undefined
  });
  return (
    <div className={instructionClasses}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <strong>{title}</strong>
          <p>{text}</p>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <div className={pictureClasses}>
            <img src={image} alt={imageAlt} className={classes.image} />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Instruction.defaultProps = {
  imageAlt: "..."
};

Instruction.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
  imageClassName: PropTypes.string
};

export default withStyles(instructionStyle)(Instruction);
