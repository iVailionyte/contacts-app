import React from 'react';
import Contacts from '../Contacts';
import contacts from '../../data/contacts';

const App = () => (
  <div>
    Hello
    <Contacts contacts={contacts} />
  </div>
);

export default App;
