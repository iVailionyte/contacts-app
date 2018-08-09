import React from 'react';
import Contacts from '../../components/Contacts';
import contacts from '../../data/contacts';

const ContactsPage = () => (
  <div>
    <Contacts contacts={contacts} />
  </div>
)

export default ContactsPage;
