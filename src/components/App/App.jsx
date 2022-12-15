import { useEffect } from 'react';
import { Contacts } from '../Contacts/Contacts';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { View } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/phonebookOperation';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <View>
      <Contacts />
      <Filter />
      <ContactsList />
    </View>
  );
}
