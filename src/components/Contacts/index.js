import React from 'react';
import Contact from '../Contact';

const contact = {
  firstname: 'Jane',
  lastname: 'Janny',
  street: 'Street',
  zip: '165',
  city: 'Stuttgart',
  country: 'Germany',
  phone: '1414',
  email: 'ahsbsdjd@jskw',
}

const Contacts = () => (
  <div>
    <Contact {...contact} />
  </div>
);

export default Contacts;
