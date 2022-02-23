import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "./contacts.styled";
import ContactsItem from "../ContactsItem";
// import { removeContact } from "../../redux";
import { itemSlice } from "../../redux/itemSlice";
const { remove } = itemSlice.actions;
function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.items);
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          name={name}
          key={id}
          id={id}
          number={number}
          // onDeleteContact={() => dispatch(removeContact(id))}
          onDeleteContact={() => dispatch(remove(id))}
        />
      ))}
    </ContactList>
  );
}

export default Contacts;
