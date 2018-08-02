import PropTypes from 'prop-types';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

const Layout = (props) => (
  <div>
    <Header>Navigation</Header>
    <Main>
      {props.children}
    </Main>
    <Footer>Copyright information</Footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
