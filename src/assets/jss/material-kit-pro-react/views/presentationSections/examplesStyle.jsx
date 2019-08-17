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
  container,
  mlAuto,
  mrAuto,
  title,
  whiteColor,
  description,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";

const examplesStyle = {
  section: {
    ...section,
    padding: "70px 0px"
  },
  sectionDark: {
    ...sectionDark,
    "& $title": {
      color: whiteColor
    },
    "& $description": {
      color: "rgba(" + hexToRgb(whiteColor) + ",0.76)"
    }
  },
  container,
  mlAuto,
  mrAuto,
  sectionDescription: {
    textAlign: "center",
    marginBottom: "90px"
  },
  title: {
    ...title,
    textAlign: "center"
  },
  description,
  imgCardExtended: {
    transition: "all .2s cubic-bezier(0.4,0,0.2,1)",
    "&:hover": {
      transform: "translate3d(0, -10px, 0)"
    }
  }
};

export default examplesStyle;
