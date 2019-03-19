import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import Notifications from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Assignment from "@material-ui/icons/Assignment";
import Mail from "@material-ui/icons/Mail";
import Face from "@material-ui/icons/Face";
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import AttachFile from "@material-ui/icons/AttachFile";
import Layers from "@material-ui/icons/Layers";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Instruction from "components/Instruction/Instruction.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomFileInput from "components/CustomFileInput/CustomFileInput.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";

import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";

import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class SectionJavascript extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      noticeModal: false,
      smallModal: false,
      loginModal: false,
      signupModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false,
      checked: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div
        className={`${classes.section} cd-section`}
        id="javascriptComponents"
      >
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Javascript components</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.title}>
                <h3>Modal</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6} lg={4}>
                  <Button
                    block
                    round
                    onClick={() => this.handleClickOpen("classicModal")}
                  >
                    <LibraryBooks />
                    Classic
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.modalRoot,
                      paper: classes.modal
                    }}
                    open={this.state.classicModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("classicModal")}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <Button
                        simple
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        onClick={() => this.handleClose("classicModal")}
                      >
                        {" "}
                        <Close className={classes.modalClose} />
                      </Button>
                      <h4 className={classes.modalTitle}>Modal title</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it is an
                        almost unorthographic life One day however a small line
                        of blind text by the name of Lorem Ipsum decided to
                        leave for the far World of Grammar.
                      </p>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button link>Nice Button</Button>
                      <Button
                        onClick={() => this.handleClose("classicModal")}
                        color="danger"
                        simple
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={4}>
                  {/* BUTTON NOTICE MODAL */}
                  <Button
                    block
                    round
                    onClick={() => this.handleClickOpen("noticeModal")}
                  >
                    <Icon>info_outline</Icon> Notice
                  </Button>
                  {/* NOTICE MODAL START */}
                  <Dialog
                    classes={{
                      root: classes.modalRoot,
                      paper: classes.modal
                    }}
                    open={this.state.noticeModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("noticeModal")}
                    aria-labelledby="notice-modal-slide-title"
                    aria-describedby="notice-modal-slide-description"
                  >
                    <DialogTitle
                      id="notice-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <Button
                        simple
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        onClick={() => this.handleClose("noticeModal")}
                      >
                        {" "}
                        <Close className={classes.modalClose} />
                      </Button>
                      <h4 className={classes.modalTitle}>
                        How Do You Become an Affiliate?
                      </h4>
                    </DialogTitle>
                    <DialogContent
                      id="notice-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <Instruction
                        title="1. Register"
                        text={
                          <span>
                            The first step is to create an account at{" "}
                            <a href="https://www.creative-tim.com/">
                              Creative Tim
                            </a>
                            . You can choose a social network or go for the
                            classic version, whatever works best for you.
                          </span>
                        }
                        image={dg1}
                        className={classes.instructionNoticeModal}
                        imageClassName={classes.imageNoticeModal}
                      />
                      <Instruction
                        title="2. Apply"
                        text={
                          <span>
                            The first step is to create an account at{" "}
                            <a href="https://www.creative-tim.com/">
                              Creative Tim
                            </a>
                            . You can choose a social network or go for the
                            classic version, whatever works best for you.
                          </span>
                        }
                        image={dg2}
                        className={classes.instructionNoticeModal}
                        imageClassName={classes.imageNoticeModal}
                      />
                      <p>
                        If you have more questions, don't hesitate to contact us
                        or send us a tweet @creativetim. We're here to help!
                      </p>
                    </DialogContent>
                    <DialogActions
                      className={
                        classes.modalFooter + " " + classes.modalFooterCenter
                      }
                    >
                      <Button
                        onClick={() => this.handleClose("noticeModal")}
                        color="info"
                        round
                      >
                        Sounds Good
                      </Button>
                    </DialogActions>
                  </Dialog>
                  {/* NOTICE MODAL END */}
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={4}>
                  {/* BUTTON SMALL MODAL */}
                  <Button
                    block
                    round
                    onClick={() => this.handleClickOpen("smallModal")}
                  >
                    <Notifications /> Small Alert
                  </Button>
                  {/* SMALL MODAL START */}
                  <Dialog
                    classes={{
                      root: classes.modalRoot,
                      paper: classes.modal + " " + classes.modalSmall
                    }}
                    open={this.state.smallModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("noticeModal")}
                    aria-labelledby="small-modal-slide-title"
                    aria-describedby="small-modal-slide-description"
                  >
                    <DialogTitle
                      id="small-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <Button
                        simple
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        onClick={() => this.handleClose("smallModal")}
                      >
                        {" "}
                        <Close className={classes.modalClose} />
                      </Button>
                    </DialogTitle>
                    <DialogContent
                      id="small-modal-slide-description"
                      className={
                        classes.modalBody + " " + classes.modalSmallBody
                      }
                    >
                      <h5>Are you sure you want to do this?</h5>
                    </DialogContent>
                    <DialogActions
                      className={
                        classes.modalFooter + " " + classes.modalFooterCenter
                      }
                    >
                      <Button
                        onClick={() => this.handleClose("smallModal")}
                        link
                        className={classes.modalSmallFooterFirstButton}
                      >
                        Never Mind
                      </Button>
                      <Button
                        onClick={() => this.handleClose("smallModal")}
                        color="success"
                        simple
                        className={
                          classes.modalSmallFooterFirstButton +
                          " " +
                          classes.modalSmallFooterSecondButton
                        }
                      >
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                  {/* SMALL MODAL END */}
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  {/* BUTTON LOGIN MODAL */}
                  <Button
                    block
                    round
                    onClick={() => this.handleClickOpen("loginModal")}
                  >
                    <AccountCircle /> Login
                  </Button>
                  {/* LOGIN MODAL START */}
                  <Dialog
                    classes={{
                      root: classes.modalRoot,
                      paper: classes.modal + " " + classes.modalLogin
                    }}
                    open={this.state.loginModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("loginModal")}
                    aria-labelledby="login-modal-slide-title"
                    aria-describedby="login-modal-slide-description"
                  >
                    <Card plain className={classes.modalLoginCard}>
                      <DialogTitle
                        id="login-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                      >
                        <CardHeader
                          plain
                          color="primary"
                          className={`${classes.textCenter} ${
                            classes.cardLoginHeader
                          }`}
                        >
                          <Button
                            simple
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            onClick={() => this.handleClose("loginModal")}
                          >
                            {" "}
                            <Close className={classes.modalClose} />
                          </Button>
                          <h5 className={classes.cardTitleWhite}>Log in</h5>
                          <div className={classes.socialLine}>
                            <Button
                              justIcon
                              link
                              className={classes.socialLineButton}
                            >
                              <i className="fab fa-facebook-square" />
                            </Button>
                            <Button
                              justIcon
                              link
                              className={classes.socialLineButton}
                            >
                              <i className="fab fa-twitter" />
                            </Button>
                            <Button
                              justIcon
                              link
                              className={classes.socialLineButton}
                            >
                              <i className="fab fa-google-plus-g" />
                            </Button>
                          </div>
                        </CardHeader>
                      </DialogTitle>
                      <DialogContent
                        id="login-modal-slide-description"
                        className={classes.modalBody}
                      >
                        <form>
                          <p
                            className={`${classes.description} ${
                              classes.textCenter
                            }`}
                          >
                            Or Be Classical
                          </p>
                          <CardBody className={classes.cardLoginBody}>
                            <CustomInput
                              id="login-modal-first"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Face className={classes.icon} />
                                  </InputAdornment>
                                ),
                                placeholder: "First Name..."
                              }}
                            />
                            <CustomInput
                              id="login-modal-email"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Mail className={classes.icon} />
                                  </InputAdornment>
                                ),
                                placeholder: "Email..."
                              }}
                            />
                            <CustomInput
                              id="login-modal-pass"
                              formControlProps={{
                                fullWidth: true
                              }}
                              inputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Icon className={classes.icon}>
                                      lock_outline
                                    </Icon>
                                  </InputAdornment>
                                ),
                                placeholder: "Password..."
                              }}
                            />
                          </CardBody>
                        </form>
                      </DialogContent>
                      <DialogActions
                        className={`${classes.modalFooter} ${
                          classes.justifyContentCenter
                        }`}
                      >
                        <Button color="primary" simple size="lg">
                          Get started
                        </Button>
                      </DialogActions>
                    </Card>
                  </Dialog>
                  {/* LOGIN MODAL END */}
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  {/* BUTTON SIGNUP MODAL */}
                  <Button
                    block
                    round
                    onClick={() => this.handleClickOpen("signupModal")}
                  >
                    <Assignment /> Signup
                  </Button>
                  {/* SIGNUP MODAL START */}
                  <Dialog
                    classes={{
                      root: classes.modalRoot,
                      paper: classes.modal + " " + classes.modalSignup
                    }}
                    open={this.state.signupModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("signupModal")}
                    aria-labelledby="signup-modal-slide-title"
                    aria-describedby="signup-modal-slide-description"
                  >
                    <Card plain className={classes.modalSignupCard}>
                      <DialogTitle
                        id="signup-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                      >
                        <Button
                          simple
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          onClick={() => this.handleClose("signupModal")}
                        >
                          {" "}
                          <Close className={classes.modalClose} />
                        </Button>
                        <h3
                          className={`${classes.cardTitle} ${
                            classes.modalTitle
                          }`}
                        >
                          Register
                        </h3>
                      </DialogTitle>
                      <DialogContent
                        id="signup-modal-slide-description"
                        className={classes.modalBody}
                      >
                        <GridContainer>
                          <GridItem
                            xs={12}
                            sm={5}
                            md={5}
                            className={classes.mlAuto}
                          >
                            <InfoArea
                              className={classes.infoArea}
                              title="Marketing"
                              description={
                                <p>
                                  We've created the marketing campaign of the
                                  website. It was a very interesting
                                  collaboration.
                                </p>
                              }
                              icon={Timeline}
                              iconColor="rose"
                            />
                            <InfoArea
                              className={classes.infoArea}
                              title="Fully Coded in HTML5"
                              description={
                                <p>
                                  We've developed the website with HTML5 and
                                  CSS3. The client has access to the code using
                                  GitHub.
                                </p>
                              }
                              icon={Code}
                              iconColor="primary"
                            />
                            <InfoArea
                              className={classes.infoArea}
                              title="Built Audience"
                              description={
                                <p>
                                  There is also a Fully Customizable CMS Admin
                                  Dashboard for this product.
                                </p>
                              }
                              icon={Group}
                              iconColor="info"
                            />
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={5}
                            md={5}
                            className={classes.mrAuto}
                          >
                            <div className={classes.textCenter}>
                              <Button justIcon round color="twitter">
                                <i className="fab fa-twitter" />
                              </Button>
                              {` `}
                              <Button justIcon round color="dribbble">
                                <i className="fab fa-dribbble" />
                              </Button>
                              {` `}
                              <Button justIcon round color="facebook">
                                <i className="fab fa-facebook-f" />
                              </Button>
                              {` `}
                              <h4 className={classes.socialTitle}>
                                or be classical
                              </h4>
                            </div>
                            <form className={classes.form}>
                              <CustomInput
                                formControlProps={{
                                  fullWidth: true,
                                  className: classes.customFormControlClasses
                                }}
                                inputProps={{
                                  startAdornment: (
                                    <InputAdornment
                                      position="start"
                                      className={classes.inputAdornment}
                                    >
                                      <Face
                                        className={classes.inputAdornmentIcon}
                                      />
                                    </InputAdornment>
                                  ),
                                  placeholder: "First Name..."
                                }}
                              />
                              <CustomInput
                                formControlProps={{
                                  fullWidth: true,
                                  className: classes.customFormControlClasses
                                }}
                                inputProps={{
                                  startAdornment: (
                                    <InputAdornment
                                      position="start"
                                      className={classes.inputAdornment}
                                    >
                                      <Email
                                        className={classes.inputAdornmentIcon}
                                      />
                                    </InputAdornment>
                                  ),
                                  placeholder: "Email..."
                                }}
                              />
                              <CustomInput
                                formControlProps={{
                                  fullWidth: true,
                                  className: classes.customFormControlClasses
                                }}
                                inputProps={{
                                  startAdornment: (
                                    <InputAdornment
                                      position="start"
                                      className={classes.inputAdornment}
                                    >
                                      <Icon
                                        className={classes.inputAdornmentIcon}
                                      >
                                        lock_outline
                                      </Icon>
                                    </InputAdornment>
                                  ),
                                  placeholder: "Password..."
                                }}
                              />
                              <FormControlLabel
                                classes={{
                                  label: classes.label
                                }}
                                control={
                                  <Checkbox
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(1)}
                                    checkedIcon={
                                      <Check className={classes.checkedIcon} />
                                    }
                                    icon={
                                      <Check
                                        className={classes.uncheckedIcon}
                                      />
                                    }
                                    classes={{
                                      checked: classes.checked,
                                      root: classes.checkRoot
                                    }}
                                  />
                                }
                                label={
                                  <span>
                                    I agree to the{" "}
                                    <a href="#pablo">terms and conditions</a>.
                                  </span>
                                }
                              />
                              <div className={classes.textCenter}>
                                <Button round color="primary">
                                  Get started
                                </Button>
                              </div>
                            </form>
                          </GridItem>
                        </GridContainer>
                      </DialogContent>
                    </Card>
                  </Dialog>
                  {/* SIGNUP MODAL END */}
                </GridItem>
              </GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.title}>
                  <h3>Datetime Picker</h3>
                </div>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <InputLabel className={classes.label}>
                      Datetime Picker
                    </InputLabel>
                    <br />
                    <FormControl fullWidth>
                      <Datetime
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                      />
                    </FormControl>
                    <InputLabel className={classes.label}>
                      Date Picker
                    </InputLabel>
                    <br />
                    <FormControl fullWidth>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Date Picker Here" }}
                      />
                    </FormControl>
                    <InputLabel className={classes.label}>
                      Time Picker
                    </InputLabel>
                    <br />
                    <FormControl fullWidth>
                      <Datetime
                        dateFormat={false}
                        inputProps={{ placeholder: "Time Picker Here" }}
                      />
                    </FormControl>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <div className={classes.title}>
                <h3>Popovers</h3>
              </div>
              <Button
                buttonRef={node => {
                  this.anchorElLeft = node;
                }}
                onClick={() => this.handleClickButton("openLeft")}
              >
                On left
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openLeft}
                anchorEl={this.anchorElLeft}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openLeft")}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "left"
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "right"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on left</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElTop = node;
                }}
                onClick={() => this.handleClickButton("openTop")}
              >
                On top
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openTop}
                anchorEl={this.anchorElTop}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openTop")}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on top</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElBottom = node;
                }}
                onClick={() => this.handleClickButton("openBottom")}
              >
                On bottom
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openBottom}
                anchorEl={this.anchorElBottom}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openBottom")}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on bottom</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <Button
                buttonRef={node => {
                  this.anchorElRight = node;
                }}
                onClick={() => this.handleClickButton("openRight")}
              >
                On right
              </Button>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openRight}
                anchorEl={this.anchorElRight}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openRight")}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "left"
                }}
              >
                <h3 className={classes.popoverHeader}>Popover on right</h3>
                <div className={classes.popoverBody}>
                  Here will be some very useful information about his popover.
                </div>
              </Popover>
              <br />
              <br />
              <div className={classes.title}>
                <h3>Tooltips</h3>
              </div>
              <Tooltip
                id="tooltip-left"
                title="Tooltip on left"
                placement="left"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On left</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Tooltip on top"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On top</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-bottom"
                title="Tooltip on bottom"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On bottom</Button>
              </Tooltip>
              <Tooltip
                id="tooltip-right"
                title="Tooltip on right"
                placement="right"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button>On right</Button>
              </Tooltip>
            </GridItem>
          </GridContainer>
          <div id="collapse">
            <div className={classes.title}>
              <h3>Collapse</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={8} md={8}>
                <Accordion
                  active={0}
                  activeColor="rose"
                  collapses={[
                    {
                      title: "Collapsible group Item #1",
                      content:
                        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                    },
                    {
                      title: "Collapsible group Item #2",
                      content:
                        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                    },
                    {
                      title: "Collapsible group Item #3",
                      content:
                        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.space50} />
          <div id="file-uploader">
            <div className={classes.title}>
              <h3>File Uploader</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={5} md={5}>
                <h4>Regular Image</h4>
                <ImageUpload
                  addButtonProps={{ round: true }}
                  changeButtonProps={{ round: true }}
                  removeButtonProps={{ round: true, color: "danger" }}
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <h4>Avatar</h4>
                <ImageUpload
                  avatar
                  addButtonProps={{ round: true }}
                  changeButtonProps={{ round: true }}
                  removeButtonProps={{ round: true, color: "danger" }}
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <h4>Simple Material Input</h4>
                <CustomFileInput
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: "Simple chooser..."
                  }}
                />
                <CustomFileInput
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: "Single File..."
                  }}
                  endButton={{
                    buttonProps: {
                      round: true,
                      color: "primary",
                      justIcon: true,
                      fileButton: true
                    },
                    icon: <AttachFile />
                  }}
                />
                <CustomFileInput
                  multiple
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: "Multiple File..."
                  }}
                  endButton={{
                    buttonProps: {
                      round: true,
                      color: "info",
                      justIcon: true,
                      fileButton: true
                    },
                    icon: <Layers />
                  }}
                />
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.title}>
            <h3>Carousel</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(javascriptStyles)(SectionJavascript);
