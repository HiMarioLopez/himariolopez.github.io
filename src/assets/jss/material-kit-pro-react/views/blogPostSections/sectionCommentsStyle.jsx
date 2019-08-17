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
import { grayColor, title } from "assets/jss/material-kit-pro-react.jsx";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.jsx";

const sectionCommentsStyle = {
  ...tooltipsStyle,
  section: {
    backgroundposition: "50%",
    backgroundSize: "cover",
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "30px",
    textAlign: "center"
  },
  footerButtons: {
    float: "right"
  },
  footerIcons: {
    width: "1.1rem",
    height: "1.1rem",
    position: "relative",
    display: "inline-block",
    top: "0",
    marginTop: "-1em",
    marginBottom: "-1em",
    marginRight: "3px",
    verticalAlign: "middle"
  },
  color555: {
    "&,& *": {
      color: grayColor[15] + " !important"
    }
  }
};

export default sectionCommentsStyle;
