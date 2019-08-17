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
  section,
  grayColor
} from "assets/jss/material-kit-pro-react.jsx";

const descriptionStyle = {
  container,
  description: {
    color: grayColor[0],
    textAlign: "center"
  },
  section: {
    ...section,
    padding: "70px 0px",
    "& h4$description": {
      fontSize: "1.5em"
    }
  },
  features: {
    textAlign: "center !important",
    paddingTop: "30px",
    paddingBottom: "0px",
    "& p": {
      fontSize: "16px",
      lineHeight: "1.6em"
    }
  }
};

export default descriptionStyle;
