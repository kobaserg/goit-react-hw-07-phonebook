import axios from 'axios';

export async function getContacts() {
  try {
    const { data } = await axios.get(
      'https://638e4e0d4190defdb75bee2f.mockapi.io/contacts'
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addContacts(name, phone) {
  try {
    const response = await axios.post(
      'https://638e4e0d4190defdb75bee2f.mockapi.io/contacts',
      {
        name,
        phone,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteContacts(id) {
  try {
    await axios.delete(
      `https://638e4e0d4190defdb75bee2f.mockapi.io/contacts/${id}`
    );
    return;
  } catch (error) {
    console.error(error);
  }
}
