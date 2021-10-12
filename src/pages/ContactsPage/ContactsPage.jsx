import PhoneBookForm from "../../components/PhoneBookForm/PhoneBookForm";
import PhoneBookList from "../../components/PhoneBookList/PhoneBookList";
import Container from "../../components/Container/Container";
import Filter from "../../components/Filter/Filter";
import Section from "../../components/Section/Section";
import React, { useEffect } from "react";
import { RiContactsFill, RiUserAddFill } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import { ContainerContacts, ContainerAdd } from '../../components/Container/Container.styles';
// import { TitleH2 } from "./ContactsPage.styled";
// import { TitleH1 } from "./ContactsPage.styled";

const ContactsPage = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phone Book">
        <Container>
            <ContainerAdd>
                    <h1>
                        <RiUserAddFill /> Add Contact
                    </h1>
                    <PhoneBookForm />
                </ContainerAdd>

                <ContainerContacts>
                    <h2>
                        <RiContactsFill />
                        Contacts
                    </h2>
                    <Filter />
                    {contacts.length > 0 && <PhoneBookList />}
                </ContainerContacts>
            </Container>
      </Section>
    </>
  );
};

export default ContactsPage;