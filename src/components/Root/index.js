import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../Layout';
import ContactsPage from '../../pages/Contacts';
import IndexPage from '../../pages/Index';

const Root = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" component={IndexPage}/>
      <Route path="/contacts" component={ContactsPage} />
    </Layout>
  </BrowserRouter>
);

export default Root;
