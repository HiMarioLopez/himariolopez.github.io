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
  title,
  whiteColor,
  section
} from "assets/jss/material-kit-pro-react.jsx";

const notificationsStyles = {
  section: {
    backgroundColor: whiteColor,
    display: "block",
    width: "100%",
    position: "relative",
    padding: "70px 0",
    ...section
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  container
};

export default notificationsStyles;
