import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <li className={s.ContactItem}>
        <p className={s.ContactName}>{contact.name}</p>
        <p className={s.ContactNumber}>{contact.number}</p>
        <button
          className={s.ContactItemButton}
          type="button"
          onClick={() => onDeleteContact()}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;