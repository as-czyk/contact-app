import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import ContactRecuder from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTERS,
} from '../types';

const ContactState = (props) => {
  const initalState = {
    contacts: [
      {
        id: 1,
        name: 'Aron',
        email: 'aron@gmail.com',
        phone: '111-111-111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Tabea',
        email: 'tabea@gmail.com',
        phone: '222-222-222',
        type: 'personal',
      },
      {
        id: 1,
        name: 'Dandy',
        email: 'dandy@gmail.com',
        phone: '333-333-333',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactRecuder, initalState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
