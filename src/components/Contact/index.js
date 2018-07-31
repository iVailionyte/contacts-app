import React from 'react';

const Contact = (props) => (
  <div>
    <h1>{props.firstname} {props.lastname}</h1>
    <address>{props.street}<br />{props.zip} {props.city}<br />{props.country}</address>
    <ul>
      <li>{props.phone}</li>
      <li>{props.email}</li>
    </ul>
  </div>
);

export default Contact;
