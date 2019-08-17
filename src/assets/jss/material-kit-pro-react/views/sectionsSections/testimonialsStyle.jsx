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
  sectionDark,
  section,
  mlAuto,
  mrAuto,
  title,
  description,
  cardTitle,
  blackColor,
  whiteColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";

const testimonialsSection = {
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  cardTitle,
  sectionDark: {
    ...sectionDark,
    "& $cardDescription": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)"
    },
    "& $cardTitle": {
      color: whiteColor
    },
    backgroundSize: "550% 450%"
  },
  cardDescription: {
    ...description
  },
  cardCategory: {
    ...description
  },
  sectionImage: {
    ...sectionDark,
    ...section,
    position: "relative",
    "& $container": {
      zIndex: "2",
      position: "relative"
    },
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.7)"
    },
    "& $title": {
      color: whiteColor
    },
    "& $description": {
      color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)"
    }
  },
  testimonials: {
    padding: "80px 0",
    "& $cardDescription": {
      fontStyle: "italic"
    }
  },
  textCenter: {
    textAlign: "center"
  },
  icon: {
    marginTop: "30px",
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "40px",
      lineHeight: "40px"
    },
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  card1: {
    "& $cardDescription": {
      marginBottom: "50px",
      fontStyle: "italic"
    }
  },
  starIcons: {
    width: "24px",
    height: "24px"
  },
  testimonial2: {
    "& .slick-dots": {
      display: "none !important"
    }
  },
  card2: {
    maxWidth: "650px",
    margin: "60px auto",
    "& $cardDescription": {
      fontStyle: "italic"
    }
  }
};

export default testimonialsSection;
