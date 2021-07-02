import PropsType from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteClick }) => {
    return (
        <ul className={style.contactList}>
            {contacts.map(({ name, number, id }) => {
                return (
                    <li key={id} className={style.contact}>
                        <p>{name}: {number}</p>
                        <button className={style.deleteButton} onClick={() => onDeleteClick(id)}>
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};
ContactList.propTypes = {
    contacts: PropsType.array.isRequired,
    onDeleteClick:PropsType.func.isRequired,
}

export default ContactList