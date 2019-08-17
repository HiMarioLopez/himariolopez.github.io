import {
  container,
  title,
  cardTitle,
  coloredShadow,
  description,
  mlAuto,
  mrAuto,
  grayColor
} from "assets/jss/material-kit-pro-react.jsx";

const academicStyle = {
  container,
  title,
  coloredShadow,
  cardTitle,
  mlAuto,
  mrAuto,
  description,
  blog: {
    paddingTop: "50px"
  },
  cardCategory: {
    marginBottom: "0",
    marginTop: "10px",
    "& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "8px",
      lineHeight: "0"
    }
  },
  description1: {
    ...description,
    lineHeight: "1.313rem"
  },
  author: {
    "& a": {
      color: grayColor[1],
      textDecoration: "none"
    }
  }
};

export default academicStyle;
