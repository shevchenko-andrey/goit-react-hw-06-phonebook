import { Toaster } from "react-hot-toast";
import { useState } from "react";

import { GlobalStyle } from "../Base/BaseStyle";

import ContactForm from "./Form";
import Section from "./Section";
import Contacts from "./Contacts";
import Filter from "./Filter";

// const STORAGE_CONTACTS_KEY = "contacts";

const App = () => {
  const [filter, setFilter] = useState("");

  const changeFilter = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  // const normalizedFilter = filter.toLowerCase();
  // const visibleContacts = contacts.filter(({ name }) => {
  //   return name.toLowerCase().includes(normalizedFilter);
  // });

  return (
    <>
      <GlobalStyle />
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <Contacts />
      </Section>
      <Toaster />
    </>
  );
};

export default App;
