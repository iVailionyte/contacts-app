import React from 'react';
import Contacts from '../Contacts';
import contacts from '../../data/contacts';
import Header from '../Header';

const App = () => (
  <div>
    <Header>Navigation</Header>
    Hello
    <Contacts contacts={contacts} />
  </div>
);

export default App;
