import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../../components/Contact';

const ContactPage = (props) => {
  const contact = props.contacts.find(contact => contact.id === props.match.params.contactId);
  return (
    <div>
      <Contact {...contact} />
      <Link to={`/contacts/${contact.id}/edit`}>Edit</Link>
    </div>
  )
};

ContactPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      contactId: PropTypes.string,
    })
  })
};

ContactPage.defaultProps = {
  match: {
    params: {
      contactId: '',
    }
  }
}

export default ContactPage;
