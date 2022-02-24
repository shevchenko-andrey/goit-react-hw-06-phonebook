import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "./contacts.styled";
import ContactsItem from "../ContactsItem";
import { itemSlice } from "../../redux/contactsSlice";
import { getvisibleContacts } from "../../redux/selectors";

const { remove } = itemSlice.actions;
function Contacts() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getvisibleContacts);

  return (
    <ContactList>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactsItem
            name={name}
            key={id}
            id={id}
            number={number}
            onDeleteContact={() => dispatch(remove(id))}
          />
        ))}
    </ContactList>
  );
}

export default Contacts;
