import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

import paginationStyle from "assets/jss/material-kit-pro-react/components/paginationStyle.jsx";

function Pagination({ ...props }) {
  const { classes, pages, color, className } = props;
  const paginationClasses = classNames(classes.pagination, className);
  return (
    <ul className={paginationClasses}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button
                onClick={prop.onClick}
                className={paginationLink}
                disabled={prop.disabled}
              >
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => console.log("you've clicked " + prop.text)}
                className={paginationLink}
                disabled={prop.disabled}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

Pagination.defaultProps = {
  color: "primary"
};

Pagination.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      onClick: PropTypes.func
    })
  ).isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(paginationStyle)(Pagination);
