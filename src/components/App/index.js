import React from 'react';
import Contacts from '../Contacts';

const contacts = [
  {
    firstname: 'Jane',
    lastname: 'Janny',
    street: 'Street',
    zip: '165',
    city: 'Stuttgart',
    country: 'Germany',
    phone: '1414',
    email: 'ahsbsdjd@jskw',
  },
  {
    firstname: 'John',
    lastname: 'Janny',
    street: 'Street',
    zip: '165',
    city: 'Stuttgart',
    country: 'Germany',
    phone: '1414',
    email: 'ahsbsdjd@jskw',
  },
  {
    firstname: 'John',
    lastname: 'Janny',
    street: 'Street',
    zip: '165',
    city: 'Stuttgart',
    country: 'Germany',
    phone: '1414',
    email: 'ahsbsdjd@jskw',
  },
];

const App = () => (
  <div>
    Hello
    <Contacts contacts={contacts} />
  </div>
);

export default App;
