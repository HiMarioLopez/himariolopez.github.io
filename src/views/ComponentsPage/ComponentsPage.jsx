/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
// sections for this page
import SectionBasics from "./Sections/SectionBasics.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import SectionNotifications from "./Sections/SectionNotifications.jsx";
import SectionPreFooter from "./Sections/SectionPreFooter.jsx";
import SectionFooter from "./Sections/SectionFooter.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
import SectionCards from "./Sections/SectionCards.jsx";
import SectionJavascript from "./Sections/SectionJavascript.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";

import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";

class Components extends React.Component {
  componentDidMount() {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0)
      document.getElementById(href).scrollIntoView();
    window.addEventListener("scroll", this.updateView);
    this.updateView();
  }
  componentDidUpdate() {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    document.getElementById(href).scrollIntoView();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateView);
  }
  easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  updateView() {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 +
          document.getElementById("main-panel").offsetTop >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  }
  smoothScroll(target) {
    var targetScroll = document.getElementById(target);
    this.scrollTo(document.documentElement, targetScroll.offsetTop, 900);
  }
  scrollTo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start + document.getElementById("main-panel").offsetTop,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = this.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    }.bind(this);
    animateScroll();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "info"
          }}
        />
        <Parallax
          image={require("assets/img/bg4.jpg")}
          className={classes.parallax}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1>
                    Material Kit React{" "}
                    <span className={classes.proBadge}>PRO</span>
                  </h1>
                  <h3 className={classes.title}>All Components</h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div
          className={classNames(classes.main, classes.mainRaised)}
          id="main-panel"
        >
          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <div
            className={classNames(
              classes.section,
              classes.sectionGray,
              "cd-section"
            )}
            id="footers"
          >
            <SectionPreFooter />
            <SectionFooter />
          </div>
          <SectionTypography />
          <SectionCards />
          <SectionJavascript />
          <SectionCarousel />
        </div>
        <nav id="cd-vertical-nav">
          <ul>
            <li>
              <a
                href="#buttons"
                data-number="1"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("buttons");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Basic Elements</span>
              </a>
            </li>
            <li>
              <a
                href="#navigation"
                data-number="2"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("navigation");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Navigation</span>
              </a>
            </li>
            <li>
              <a
                href="#notifications"
                data-number="3"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("notifications");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Notifications</span>
              </a>
            </li>
            <li>
              <a
                href="#footers"
                data-number="4"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("footers");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Footers</span>
              </a>
            </li>
            <li>
              <a
                href="#typography"
                data-number="5"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("typography");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Typography</span>
              </a>
            </li>
            <li>
              <a
                href="#contentAreas"
                data-number="6"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("contentAreas");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Content Areas</span>
              </a>
            </li>
            <li>
              <a
                href="#cards"
                data-number="7"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("cards");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Cards</span>
              </a>
            </li>
            <li>
              <a
                href="#morphingCards"
                data-number="8"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("morphingCards");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Morphing Cards</span>
              </a>
            </li>
            <li>
              <a
                href="#javascriptComponents"
                data-number="9"
                className=""
                onClick={e => {
                  e.preventDefault();
                  this.smoothScroll("javascriptComponents");
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Javascript</span>
              </a>
            </li>
          </ul>
        </nav>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a href="https://www.creative-tim.com">Creative Tim</a> for a
                better web.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
