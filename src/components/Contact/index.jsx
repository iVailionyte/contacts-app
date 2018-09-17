import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = (props) => (
  <div>
    <h1><Link to="/contacts/contact">{props.firstname} {props.lastname}</Link></h1>
    <address>{props.street}<br />{props.zip} {props.city}<br />{props.country}</address>
    {props.phone || props.email && (
      <ul>
        {props.phone && (
          <li>{props.phone}</li>
        )}
        {props.email && (
          <li>{props.email}</li>
        )}
      </ul>
    )}
  </div>
);

Contact.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  street: PropTypes.string,
  zip: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
};

Contact.defaultProps = {
  firstname: '',
  lastname: '',
  street: '',
  zip: '',
  city: '',
  country: '',
  phone: '',
  email: '',
};

export default Contact;
