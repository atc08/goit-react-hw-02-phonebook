import React from 'react';
import s from './ContactList.module.css';
// import PropTypes from 'prop-types';

const ContactList = ({ contacts, ondeleteContact }) => {
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.ContactListItem}>
          <p className={s.ContactListItemText}>
            {name}: {number}
          </p>
          <button type="button" onClick={() => ondeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
