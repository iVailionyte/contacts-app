import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../Layout';
import ContactsPage from '../../pages/Contacts';
import IndexPage from '../../pages/Index';
import NewPage from '../../pages/New';
import ContactPage from '../../pages/Contacts/Contact';

const Root = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" component={IndexPage} exact />
      <Route path="/contacts" component={ContactsPage} exact />
      <Route path='/contacts/contact' component={ContactPage} />
      <Route path="/new" component={NewPage} />
    </Layout>
  </BrowserRouter>
);

export default Root;
