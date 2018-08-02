import React from 'react';
import Contacts from '../Contacts';
import contacts from '../../data/contacts';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

const App = () => (
  <div>
    <Header>Navigation</Header>
    <Main>
      <Contacts contacts={contacts} />
    </Main>
    <Footer>Copyright information</Footer>
  </div>
);

export default App;
