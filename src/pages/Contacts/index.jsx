import React from 'react';
import Contacts from '../../components/Contacts';
import contacts from '../../data/contacts';

const ContactsPage = props => (
  <div>
    <Contacts contacts={props.contacts} />
  </div>
);

export default ContactsPage;
