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
import customSelectStyle from "assets/jss/material-kit-pro-react/customSelectStyle.jsx";

const contactStyle = {
  title,
  mrAuto,
  mlAuto,
  ...customSelectStyle,
  description: {
    ...description,
    marginBottom: "70px"
  },
  textCenter: {
    textAlign: "center!important"
  },
  selectUnderlineRoot: {
    "& > div": {
      marginTop: "13px"
    }
  },
  aboutUs: {
    padding: "80px 0px"
  }
};

export default contactStyle;
