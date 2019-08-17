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
  section,
  sectionDark,
  cardTitle,
  container,
  blackColor,
  whiteColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";

const sectionImageStyle = {
  container: {
    ...container,
    position: "relative",
    zIndex: "2"
  },
  section: {
    ...section,
    ...sectionDark,
    padding: "80px 0",
    position: "relative",
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.7)"
    }
  },
  cardTitle: {
    ...cardTitle,
    color: whiteColor + "  !important"
  },
  description: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)"
  },
  textLeft: {
    textAlign: "left"
  }
};

export default sectionImageStyle;
