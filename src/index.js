import React from 'react';
import { render } from 'react-dom';
import Layout from './components/Layout';
import ContactsPage from './pages/Contacts';

render(<Layout><ContactsPage /></Layout>, document.getElementById('root'));
