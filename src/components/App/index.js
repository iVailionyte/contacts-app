import React from 'react';
import uuidv4 from 'uuid/v4';
import Contacts from '../Contacts';

const contacts = [
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
