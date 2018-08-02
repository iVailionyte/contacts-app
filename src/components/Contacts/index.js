import PropTypes from 'prop-types';
import React from 'react';
import Contact from '../Contact';

const Contacts = (props) => (
  <div>
    {props.contacts.map(contact => (
      <Contact key={contact.id} {...contact} />
    ))}
  </div>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
};

Contacts.defaultProps = {
  contacts: [],
};

export default Contacts;
