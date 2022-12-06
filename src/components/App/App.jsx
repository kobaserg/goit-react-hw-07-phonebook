import { Contacts } from '../Contacts/Contacts';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { View } from './App.styled';

export function App() {
  return (
    <View>
      <Contacts />
      <Filter />
      <ContactsList />
    </View>
  );
}
