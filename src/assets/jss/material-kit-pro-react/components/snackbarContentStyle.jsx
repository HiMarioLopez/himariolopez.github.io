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
  defaultFont,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  container,
  blackColor,
  whiteColor,
  grayColor,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";

const snackbarContentStyle = {
  root: {
    ...defaultFont,
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: grayColor[15],
    borderRadius: "0px",
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow:
      "0 12px 20px -10px rgba(" +
      hexToRgb(whiteColor) +
      ", 0.28), 0 4px 20px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 7px 8px -5px rgba(" +
      hexToRgb(whiteColor) +
      ", 0.2)"
  },
  info: {
    backgroundColor: infoColor[3],
    color: whiteColor,
    ...infoBoxShadow
  },
  success: {
    backgroundColor: successColor[3],
    color: whiteColor,
    ...successBoxShadow
  },
  warning: {
    backgroundColor: warningColor[3],
    color: whiteColor,
    ...warningBoxShadow
  },
  danger: {
    backgroundColor: dangerColor[3],
    color: whiteColor,
    ...dangerBoxShadow
  },
  primary: {
    backgroundColor: primaryColor[3],
    color: whiteColor,
    ...primaryBoxShadow
  },
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "20px",
    height: "20px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    float: "left",
    marginRight: "1.071rem"
  },
  container: {
    ...container,
    position: "relative"
  }
};

export default snackbarContentStyle;
