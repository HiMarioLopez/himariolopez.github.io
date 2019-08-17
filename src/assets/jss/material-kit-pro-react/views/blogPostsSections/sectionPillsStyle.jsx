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
  whiteColor,
  hexToRgb,
  cardTitle
} from "assets/jss/material-kit-pro-react.jsx";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.jsx";

const sectionPillsStyle = {
  ...tooltipsStyle,
  section: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "70px 0"
  },
  textCenter: {
    textAlign: "center"
  },
  category: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.7) !important",
    marginTop: "10px"
  },
  cardTitle: {
    ...cardTitle,
    color: whiteColor + "  !important"
  },
  icons: {
    width: "1.1rem",
    height: "1.1rem",
    position: "relative",
    display: "inline-block",
    top: "0",
    marginTop: "-1em",
    marginBottom: "-1em",
    marginRight: "4px",
    verticalAlign: "middle"
  },
  tabSpace: {
    padding: "20px 0 50px"
  }
};

export default sectionPillsStyle;
