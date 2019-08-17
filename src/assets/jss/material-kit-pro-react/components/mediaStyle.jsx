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
  blackColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";

const mediaStyle = {
  media: {
    display: "flex",
    WebkitBoxAlign: "start",
    alignItems: "flex-start",
    "& p": {
      color: grayColor[0],
      fontSize: "1rem",
      lineHeight: "1.6em"
    },
    "& $media $mediaBody": {
      paddingRight: "0px"
    }
  },
  mediaLink: {
    padding: "10px",
    float: "left !important"
  },
  mediaAvatar: {
    margin: "0 auto",
    width: "64px",
    height: "64px",
    overflow: "hidden",
    borderRadius: "50%",
    marginRight: "15px",
    boxShadow:
      "0 6px 10px 0 rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 1px 18px 0 rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 3px 5px -1px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    "& img": {
      width: "100%"
    }
  },
  mediaBody: {
    paddingRight: "10px",
    WebkitBoxFlex: "1",
    flex: "1"
  },
  mediaHeading: {
    ...title,
    marginTop: "10px",
    marginBottom: "10px",
    "& small": {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    }
  },
  mediaFooter: {
    "& button, & a": {
      marginBottom: "20px"
    },
    "&:after": {
      display: "table",
      content: '" "',
      clear: "both"
    }
  }
};

export default mediaStyle;
