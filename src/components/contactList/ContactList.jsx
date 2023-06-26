import PropTypes from 'prop-types';
import { ListOfContact, ContactItem } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts); // отримання переліку контактів із state

  return (
    <ListOfContact>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          {/* <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button> */}
        </ContactItem>
      ))}
    </ListOfContact>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
