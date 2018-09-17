import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../Layout';
import ContactsPage from '../../pages/Contacts';
import IndexPage from '../../pages/Index';
import NewPage from '../../pages/New';
import ContactPage from '../../pages/Contacts/Contact';
import EditPage from '../../pages/Contacts/Contact/Edit';

const Root = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" component={IndexPage} exact />
      <Route path="/contacts" component={ContactsPage} exact />
      <Route path="/contacts/contact" component={ContactPage} exact />
      <Route path="/contacts/contact/edit" component={EditPage} />
      <Route path="/new" component={NewPage} />
    </Layout>
  </BrowserRouter>
);

export default Root;
