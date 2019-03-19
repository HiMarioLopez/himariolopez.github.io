import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import styles from "assets/jss/material-kit-pro-react/components/customFileInputStyle.jsx";

class CustomFileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileNames: "",
      files: null
    };
  }
  onFocus = e => {
    this.refs.hiddenFile.click(e);
  };
  handleSubmit = e => {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  };
  addFile = e => {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
      if (this.props.multiple && i !== e.target.files.length - 1) {
        fileNames = fileNames + ", ";
      }
    }
    this.setState({
      fileNames: fileNames,
      files: files
    });
  };
  render() {
    const {
      classes,
      id,
      endButton,
      startButton,
      inputProps,
      formControlProps,
      multiple
    } = this.props;
    if (inputProps && inputProps.type && inputProps.type === "file") {
      inputProps.type = "text";
    }
    let buttonStart;
    let buttonEnd;
    if (startButton) {
      buttonStart = (
        <Button {...startButton.buttonProps} onClick={this.onFocus}>
          {startButton.icon !== undefined ? startButton.icon : null}
          {startButton.text !== undefined ? startButton.text : null}
        </Button>
      );
    }
    if (endButton) {
      buttonEnd = (
        <Button {...endButton.buttonProps} onClick={this.onFocus}>
          {endButton.icon !== undefined ? endButton.icon : null}
          {endButton.text !== undefined ? endButton.text : null}
        </Button>
      );
    }
    return (
      <div className={classes.inputFileWrapper}>
        <input
          type="file"
          className={classes.inputFile}
          multiple={multiple}
          ref="hiddenFile"
          onChange={this.addFile}
        />
        <CustomInput
          id={id}
          formControlProps={{
            ...formControlProps
          }}
          inputProps={{
            ...inputProps,
            onFocus: this.onFocus,
            value: this.state.fileNames,
            endAdornment: buttonEnd,
            startAdornment: buttonStart
          }}
        />
      </div>
    );
  }
}

CustomFileInput.defaultProps = {
  multiple: false
};

CustomFileInput.propTypes = {
  id: PropTypes.string,
  endButton: PropTypes.object,
  startButton: PropTypes.object,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  multiple: PropTypes.bool
};

export default withStyles(styles)(CustomFileInput);
