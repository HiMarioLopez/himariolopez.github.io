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
const buttonGroupStyle = {
  buttonGroup: {
    position: "relative",
    margin: "10px 1px",
    display: "inline-block",
    verticalAlign: "middle"
  },
  firstButton: {
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    margin: "0",
    position: "relative",
    float: "left",
    "&:hover": {
      zIndex: "2"
    }
  },
  middleButton: {
    borderRadius: "0",
    margin: "0",
    position: "relative",
    float: "left",
    "&:hover": {
      zIndex: "2"
    }
  },
  lastButton: {
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    margin: "0",
    "&:hover": {
      zIndex: "2"
    }
  }
};

export default buttonGroupStyle;
