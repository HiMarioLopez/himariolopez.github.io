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
  container,
  cardTitle,
  grayColor,
  roseColor,
  coloredShadow
} from "assets/jss/material-kit-pro-react.jsx";

const styles = {
  cardTitle,
  container,
  section: {
    ...section,
    padding: "70px 0px"
  },
  coloredShadow,
  cardDescription: {
    color: grayColor[0]
  },
  cardCategory: {
    marginTop: "10px"
  },
  textRose: {
    color: roseColor[0] + " !important"
  }
};

export default styles;
