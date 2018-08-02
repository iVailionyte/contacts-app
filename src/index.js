import React from 'react';
import { render } from 'react-dom';
import Contacts from './components/Contacts';
import Layout from './components/Layout';
import contacts from './data/contacts';

render(<Layout><Contacts contacts={contacts} /></Layout>, document.getElementById('root'));
