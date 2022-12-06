import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/phonebookSlice';
import {
  PhoneBook,
  Label,
  Input,
  FormContact,
  BtnSubmit,
} from './Contacts.styled';

export function Contacts() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const handleChange = event => {
    const nameEvent = event.target.name;

    switch (nameEvent) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
    setId(nanoid());
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ id, name, number }));
    resetForm();
  };

  const resetForm = () => {
    setId('');
    setName('');
    setNumber('');
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
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
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
