import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { contactsSelector } from "../../redux/contactsSlice";
import { filterSelector } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const filters = useSelector(filterSelector);

  const filteredContacts = contacts.filter((contacts) =>
    contacts.name?.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={s.ContactList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
export default ContactList;