import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../Layout';
import ContactsPage from '../../pages/Contacts';
import IndexPage from '../../pages/Index';
import NewPage from '../../pages/New';
import ContactPage from '../../pages/Contacts/Contact';
import EditPage from '../../pages/Contacts/Contact/Edit';
import contacts from '../../data/contacts';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts,
    };

    this.addContact = this.addContact.bind(this);
  }

  addContact(newContact) {
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  }

  updateContact() {

  }

  deleteContact() {

  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" component={IndexPage} exact />
          <Route path="/contacts" component={() => <ContactsPage contacts={this.state.contacts} />} exact />
          <Route path="/contacts/:contactId" component={(props) => <ContactPage contacts={this.state.contacts} {...props} />} exact />
          <Route path="/contacts/:contactId/edit" component={(props) => <EditPage contacts={this.state.contacts} {...props} />} />
          <Route path="/new" component={() => <NewPage addContact={this.addContact} />} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Root;
