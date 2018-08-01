import React from 'react';
import Contact from '../Contact';

const Contacts = (props) => (
  <div>
    {props.contacts.map(contact => (
      <Contact key={contact.id} {...contact} />
    ))}
  </div>
);

export default Contacts;
