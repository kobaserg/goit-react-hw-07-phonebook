import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchContacts } from '../../redux/phonebookOperation';
import { useSelector, useDispatch } from 'react-redux';
import {
  getStoreContacts,
  getStoreFilter,
  getLoading,
} from 'redux/phonebookSlice';
import { Loader } from 'components/Loader/Loader';
import {
  ListContact,
  ItemContact,
  Contact,
  NameCont,
  BtnDelete,
} from './ContactsList.styled';
import { deleteContact } from '../../redux/phonebookOperation';

export const ContactsList = () => {
  const contactsGallery = useSelector(getStoreContacts);
  const filter = useSelector(getStoreFilter);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(deleteContact(id));
  }

  let renderList = [];
  const normolizedFilter = filter.toLowerCase().trim();
  const filterContacts = contactsGallery.filter(cont =>
    cont.name.toLowerCase().includes(normolizedFilter)
  );

  filter.length === 0
    ? (renderList = contactsGallery)
    : (renderList = filterContacts);

  return (
    <>
      {loading && <Loader />}
      <ListContact>
        {renderList.map(cont => {
          return (
            <ItemContact key={cont.id}>
              <Contact>
                &#9742;
                <NameCont>
                  <span>{cont.name}</span>
                  <span>{cont.phone}</span>
                </NameCont>
              </Contact>
              <BtnDelete type="submit" onClick={e => handleDelete(cont.id)}>
                Delete
              </BtnDelete>
            </ItemContact>
          );
        })}
      </ListContact>
    </>
  );
};

ContactsList.propTypes = {
  props: PropTypes.object,
};
