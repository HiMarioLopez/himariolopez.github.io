import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import customTabsStyle from "assets/jss/material-kit-pro-react/components/customTabsStyle.jsx";

class CustomTabs extends React.Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const {
      classes,
      headerColor,
      title,
      tabs,
      rtlActive,
      plainTabs,
    } = this.props;
    const cardTitle = classNames({
      [classes.cardTitle]: true,
      [classes.cardTitleRTL]: rtlActive,
    });
    const tabsContainer = classNames({
      [classes.tabsContainer]: true,
      [classes.tabsContainerRTL]: rtlActive,
    });
    return (
      <Card plain={plainTabs}>
        <CardHeader color={headerColor} plain={plainTabs}>
          {title !== undefined ? (
            <div className={cardTitle}>{"title"}</div>
          ) : null}
          <Tabs
            classes={{
              root: classes.customTabsRoot,
              flexContainer: tabsContainer,
              indicator: classes.displayNone,
            }}
            value={this.state.value}
            onChange={this.handleChange}
            textColor="inherit"
          >
            {tabs.map((prop, key) => {
              var icon = {};
              if (prop.tabIcon !== undefined) {
                icon = {
                  icon: <prop.tabIcon className={classes.tabIcon} />,
                };
              } else {
                icon = {};
              }
              return (
                <Tab
                  key={key}
                  classes={{
                    root: classes.customTabRoot,
                    selected: classes.customTabSelected,
                    wrapper: classes.customTabWrapper,
                  }}
                  {...icon}
                  label={prop.tabName}
                />
              );
            })}
          </Tabs>
        </CardHeader>
        <CardBody>
          {tabs.map((prop, key) => {
            if (key === this.state.value) {
              return <div key={key}>{prop.tabContent}</div>;
            }
            return null;
          })}
        </CardBody>
      </Card>
    );
  }
}

CustomTabs.defaultProps = {
  headerColor: "purple",
};

CustomTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired,
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
};

export default withStyles(customTabsStyle)(CustomTabs);
