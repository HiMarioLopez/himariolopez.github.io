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
  sectionDark,
  sectionDescription,
  title,
  whiteColor,
  mlAuto,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";

const cardsStyle = {
  section: {
    ...section,
    padding: "50px 0px"
  },
  sectionDark,
  container,
  sectionDescription,
  title: {
    ...title,
    color: whiteColor,
    marginTop: "30px",
    marginBottom: "25px",
    minHeight: "32px"
  },
  description: {
    color: "rgba(" + hexToRgb(whiteColor) + ",0.76)"
  },
  imageContainer: {
    maxWidth: "1040px",
    marginTop: "-140px",
    position: "relative",
    height: "660px",
    "& img": {
      maxWidth: "1040px",
      width: "auto",
      position: "absolute",
      right: "0px",
      top: "0px"
    }
  },
  mlAuto
};

export default cardsStyle;
