import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

// @material-ui/icons
import ExpandMore from "@material-ui/icons/ExpandMore";

import accordionStyle from "assets/jss/material-kit-pro-react/components/accordionStyle.jsx";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      single: false
    };
  }

  componentWillMount() {
    // am facut array din numar ca metoda .find sa functioneze indiferent de ce se intampla.
    if (this.state.active.length === undefined) {
      this.setState({
        active: [this.state.active],
        single: true
      });
    }
  }

  handleChange = panel => (event, expanded) => {
    let newArray;

    if (this.state.single) {
      if (this.state.active[0] === panel) {
        newArray = [];
      } else {
        newArray = [panel];
      }
    } else {
      if (this.state.active.indexOf(panel) === -1) {
        newArray = [...this.state.active, panel];
      } else {
        newArray = [...this.state.active];
        newArray.splice(this.state.active.indexOf(panel), 1);
      }
    }
    this.setState({
      active: newArray
    });
  };
  render() {
    const { classes, collapses, activeColor } = this.props;
    return (
      <div className={classes.root}>
        {collapses.map((prop, key) => {
          return (
            <ExpansionPanel
              expanded={
                this.state.active === key ||
                this.state.active.indexOf(key) !== -1
              }
              onChange={this.handleChange(key)}
              key={key}
              classes={{
                root: classes.expansionPanel,
                expanded: classes.expansionPanelExpanded
              }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                classes={{
                  root: `${classes.expansionPanelSummary} ${
                    classes[activeColor + "ExpansionPanelSummary"]
                  }`,
                  expanded: `${classes.expansionPanelSummaryExpaned} ${
                    classes[activeColor + "ExpansionPanelSummaryExpaned"]
                  }`,
                  content: classes.expansionPanelSummaryContent,
                  expandIcon: classes.expansionPanelSummaryExpandIcon
                }}
              >
                <h4 className={classes.title}>{prop.title}</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                {prop.content}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

Accordion.defaultProps = {
  active: -1,
  activeColor: "primary"
};

Accordion.propTypes = {
  classes: PropTypes.object.isRequired,
  // index of the default active collapse
  active: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node
    })
  ).isRequired,
  activeColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ])
};

export default withStyles(accordionStyle)(Accordion);
