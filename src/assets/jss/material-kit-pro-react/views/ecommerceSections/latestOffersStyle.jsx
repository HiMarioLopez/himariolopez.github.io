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
  coloredShadow,
  grayColor,
  dangerColor,
  mlAuto
} from "assets/jss/material-kit-pro-react.jsx";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.jsx";

const styles = {
  cardTitle,
  container,
  ...tooltipsStyle,
  section: {
    ...section,
    padding: "70px 0px"
  },
  coloredShadow,
  cardDescription: {
    color: grayColor[0],
    textAlign: "center"
  },
  mlAuto,
  priceContainer: {
    display: "inline-flex"
  },
  price: {
    fontSize: "18px",
    color: grayColor[22]
  },
  priceOld: {
    fontSize: "16px",
    textDecoration: "line-through"
  },
  priceNew: {
    color: dangerColor[0]
  },
  stats: {
    color: grayColor[0]
  },
  textCenter: {
    textAlign: "center"
  }
};

export default styles;
