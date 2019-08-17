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
import { blackColor, hexToRgb } from "assets/jss/material-kit-pro-react.jsx";

const cardAvatarStyle = {
  cardAvatar: {
    "&$cardAvatarProfile img,&$cardAvatarTestimonial img": {
      width: "100%",
      height: "auto"
    }
  },
  cardAvatarProfile: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
    boxShadow:
      "0 16px 38px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    "&$cardAvatarPlain": {
      marginTop: "0"
    }
  },
  cardAvatarPlain: {},
  cardAvatarTestimonial: {
    margin: "-50px auto 0",
    maxWidth: "100px",
    maxHeight: "100px",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
    boxShadow:
      "0 16px 38px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    "&$cardAvatarPlain": {
      marginTop: "0"
    }
  },
  cardAvatarTestimonialFooter: {
    marginBottom: "-50px",
    marginTop: "10px"
  }
};

export default cardAvatarStyle;
