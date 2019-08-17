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
  mrAuto,
  mlAuto,
  cardTitle,
  whiteColor,
  infoColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";

const pricingStyle = {
  mrAuto,
  mlAuto,
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + " !important",
    "& small": {
      color: "rgba(" + hexToRgb(whiteColor) + ",0.8)!important"
    }
  },
  textCenter: {
    textAlign: "center"
  },
  pricingSection: {
    padding: "80px 0px"
  },
  textInfo: {
    color: infoColor[0] + " !important"
  }
};

export default pricingStyle;
