import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = ({
  firstname,
  lastname,
  street,
  zip,
  city,
  country,
  phone,
  email,
}) => (
  <div>
    <h1>
      <Link to="/contacts/contact">
        {firstname}
        {' '}
        {lastname}
      </Link>

    </h1>
    <address>
      {street}
      <br />
      {zip}
      {' '}
      {city}
      <br />
      {country}
    </address>
    {(phone || email) && (
      <ul>
        {phone && (
          <li>{phone}</li>
        )}
        {email && (
          <li>{email}</li>
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
