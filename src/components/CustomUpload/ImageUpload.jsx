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
// used for making the prop types of this component
import PropTypes from "prop-types";

// core components
import Button from "components/CustomButtons/Button.jsx";

import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage
    };
    this.fileInput = React.createRef();
  }
  handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  };
  handleSubmit = e => {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  };
  handleClick = () => {
    this.fileInput.current.click();
  };
  handleRemove = () => {
    this.setState({
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage
    });
    this.fileInput.current.value = null;
  };
  render() {
    var {
      avatar,
      addButtonProps,
      changeButtonProps,
      removeButtonProps
    } = this.props;
    return (
      <div className="fileinput text-center">
        <input
          type="file"
          onChange={this.handleImageChange}
          ref={this.fileInput}
        />
        <div className={"thumbnail" + (avatar ? " img-circle" : "")}>
          <img src={this.state.imagePreviewUrl} alt="..." />
        </div>
        <div>
          {this.state.file === null ? (
            <Button {...addButtonProps} onClick={() => this.handleClick()}>
              {avatar ? "Add Photo" : "Select image"}
            </Button>
          ) : (
            <span>
              <Button {...changeButtonProps} onClick={() => this.handleClick()}>
                Change
              </Button>
              {avatar ? <br /> : null}
              <Button
                {...removeButtonProps}
                onClick={() => this.handleRemove()}
              >
                <i className="fas fa-times" /> Remove
              </Button>
            </span>
          )}
        </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object
};

export default ImageUpload;
