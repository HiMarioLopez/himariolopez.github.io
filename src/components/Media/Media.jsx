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
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components

import mediaStyle from "assets/jss/material-kit-pro-react/components/mediaStyle.jsx";

function Media({ ...props }) {
  const {
    classes,
    avatarLink,
    avatar,
    avatarAlt,
    title,
    body,
    footer,
    innerMedias,
    ...rest
  } = props;
  return (
    <div {...rest} className={classes.media}>
      <a href={avatarLink} className={classes.mediaLink}>
        <div className={classes.mediaAvatar}>
          <img src={avatar} alt={avatarAlt} />
        </div>
      </a>
      <div className={classes.mediaBody}>
        {title !== undefined ? (
          <h4 className={classes.mediaHeading}>{title}</h4>
        ) : null}
        {body}
        <div className={classes.mediaFooter}>{footer}</div>
        {innerMedias !== undefined
          ? innerMedias.map(prop => {
              return prop;
            })
          : null}
      </div>
    </div>
  );
}

Media.defaultProps = {
  avatarLink: "#pablo",
  avatarAlt: "..."
};

Media.propTypes = {
  classes: PropTypes.object,
  avatarLink: PropTypes.string,
  avatar: PropTypes.string,
  avatarAlt: PropTypes.string,
  title: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  innerMedias: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(mediaStyle)(Media);
