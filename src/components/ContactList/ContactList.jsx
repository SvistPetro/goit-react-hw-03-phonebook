import { Component } from "react";
import css from './ContactList.module.css';

class ContactList extends Component {

    render () {

        const { contacts, onDelete } = this.props;

        return (
            <ul>
                {contacts.map(contact => {
                    return (
                        <li key={contact.id} className={css.list}>
                            <span className={css.name}>{contact.name}:</span>
                            <span className={css.number}>{contact.number}</span>
                            <button className={css.button} onClick={() => onDelete(contact.id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export { ContactList };