import {
  whiteColor,
  defaultFont,
  hexToRgb
} from "assets/jss/material-kit-pro-react.jsx";

const customTabsStyle = theme => ({
  cardTitle: {
    ...defaultFont,
    float: "left",
    padding: "10px 10px 10px 0",
    lineHeight: "24px",
    fontSize: "14px",
    color: whiteColor
  },
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important"
  },
  displayNone: {
    display: "none"
  },
  tabsContainer: {
    color: whiteColor,
    display: "flex",
    flexWrap: "wrap"
  },
  tabsContainerRTL: {
    float: "right"
  },
  tabIcon: {
    width: "24px",
    height: "24px",
    marginRight: "4px"
  },
  customTabsRoot: {
    height: "auto",
    minHeight: "unset"
  },
  customTabSelected: {
    backgroundColor: "rgba(" + hexToRgb(whiteColor) + ", 0.2)",
    transition: "background-color .4s"
  },
  customTabRoot: {
    width: "auto",
    minWidth: "70px",
    borderRadius: "3px",
    opacity: "1",
    height: "auto",
    padding: "10px 15px",
    display: "block",
    minHeight: "unset"
  },
  customTabLabelContainer: {
    color: "inherit",
    padding: "1px!important"
  },
  customTabWrapper: {
    width: "auto",
    display: "inline-flex",
    alignItems: "inherit",
    flexDirection: "row",
    justifyContent: "center"
  },
  customTabLabel: {
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "24px"
  }
});

export default customTabsStyle;
