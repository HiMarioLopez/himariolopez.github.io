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
  main,
  whiteColor,
  grayColor,
  mainRaised,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";
import footerStyle from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.jsx";

const presentationStyle = {
  ...footerStyle,
  main: {
    ...main
    /*overflow: "hidden"*/
  },
  mainRaised,
  parallax: {
    height: "90vh",
    overflow: "hidden"
  },
  container: {
    ...container,
    zIndex: 1
  },
  title: {
    ...title,
    color: whiteColor
  },
  brand: {
    color: whiteColor,
    textAlign: "center",
    "& h1": {
      fontSize: "4.2rem",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    }
  },
  proBadge: {
    position: "relative",
    fontSize: "22px",
    textTransform: "uppercase",
    fontWeight: "700",
    right: "-10px",
    padding: "10px 18px",
    top: "-30px",
    background: whiteColor,
    borderRadius: "3px",
    color: grayColor[18],
    lineHeight: "22px",
    boxShadow: "0 5px 5px -2px rgba(" + hexToRgb(grayColor[25]) + ",.4)"
  }
};

export default presentationStyle;
