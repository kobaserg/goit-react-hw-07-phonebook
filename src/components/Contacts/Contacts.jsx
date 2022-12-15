import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  PhoneBook,
  Label,
  Input,
  FormContact,
  BtnSubmit,
} from './Contacts.styled';
import { addContact, fetchContacts } from '../../redux/phonebookOperation';
import { getStoreContacts } from 'redux/phonebookSlice';

export function Contacts() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contactsStore = useSelector(getStoreContacts);

  const handleChange = event => {
    const nameEvent = event.target.name;

    switch (nameEvent) {
      case 'name':
        setName(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;
      default:
        return;
    }
    setId(nanoid());
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contactIs = contactsStore
      .map(cont => cont.name.includes(name))
      .includes(true);
    if (!contactIs) {
      dispatch(addContact({ name, phone, id }));
      dispatch(fetchContacts());
    } else {
      alert(`${name} is already in contacts`);
    }

    resetForm();
  };

  const resetForm = () => {
    setId('');
    setName('');
    setPhone('');
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <PhoneBook>
        <div>
          <FormContact action="" onSubmit={handleSubmit}>
            <Label>
              Name
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}
              />
            </Label>
            <Label>
              Number
              <Input
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={phone}
                onChange={handleChange}
              />
            </Label>

            <BtnSubmit type="submit">Add contact</BtnSubmit>
          </FormContact>
        </div>
      </PhoneBook>
      <h2>Contacts now</h2>
    </div>
  );
}

Contacts.propTypes = {
  props: PropTypes.object,
};
