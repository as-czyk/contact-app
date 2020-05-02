import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactFrom from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';

export const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <ContactFrom />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
