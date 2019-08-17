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
import {
  container,
  title,
  cardTitle,
  main,
  mainRaised,
  mrAuto,
  whiteColor,
  grayColor,
  mlAuto
} from "assets/jss/material-kit-pro-react.jsx";

import buttonGroup from "assets/jss/material-kit-pro-react/buttonGroupStyle.jsx";
import tooltips from "assets/jss/material-kit-pro-react/tooltipsStyle.jsx";

const styles = {
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  cardTitle,
  ...buttonGroup,
  ...tooltips,
  container: {
    ...container,
    zIndex: 1
  },
  title: {
    ...title,
    "&, & + h4": {
      color: whiteColor
    }
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  imgContainer: {
    width: "120px",
    maxHeight: "160px",
    overflow: "hidden",
    display: "block",
    "& img": {
      width: "100%"
    }
  },
  description: {
    maxWidth: "150px"
  },
  tdName: {
    minWidth: "200px",
    fontWeight: "400",
    fontSize: "1.5em"
  },
  tdNameAnchor: {
    color: grayColor[1]
  },
  tdNameSmall: {
    color: grayColor[0],
    fontSize: "0.75em",
    fontWeight: "300"
  },
  tdNumber: {
    textAlign: "right",
    minWidth: "150px",
    fontWeight: "300",
    fontSize: "1.125em !important"
  },
  tdNumberSmall: {
    marginRight: "3px"
  },
  tdNumberAndButtonGroup: {
    lineHeight: "1 !important",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      marginRight: "0"
    }
  },
  customFont: {
    fontSize: "16px !important"
  },
  actionButton: {
    margin: "0px",
    padding: "5px"
  },
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  }
};

export default styles;
