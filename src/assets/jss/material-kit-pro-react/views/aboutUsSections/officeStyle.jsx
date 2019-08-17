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
  title,
  description,
  mrAuto,
  mlAuto
} from "assets/jss/material-kit-pro-react.jsx";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

const imgRaised = imagesStyles.imgRaised;
const rounded = imagesStyles.imgRounded;
const imgFluid = imagesStyles.imgFluid;

const servicesStyle = {
  title,
  description,
  mrAuto,
  mlAuto,
  textCenter: {
    textAlign: "center!important"
  },
  office: {
    "& img": {
      margin: "20px 0px"
    }
  },
  imgRaised,
  rounded,
  imgFluid
};

export default servicesStyle;
