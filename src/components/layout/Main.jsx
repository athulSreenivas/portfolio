import React from "react";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "./Header";
import SideBar from "./SideBar";
import ScrollToTop from "./ScrollToTop";

const Main = ({
  children,
  fullPage = false,
  title,
  description = "Athul Sreenivas portfolio website.",
}) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet
      titleTemplate="%s | Athul Sreenivas"
      defaultTitle="Athul Sreenivas"
      defer={false}
    >
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
    </Helmet>
    <div id="wrapper">
      <Header />
      <div id="main">{children}</div>
      {!fullPage && <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Main;
