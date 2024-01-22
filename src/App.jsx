import { Component } from "react";
import { Form } from 'components/Form/Form';
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";

export class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    filter: ''
  }

  handleAddContact = formData => {

    const duplicate = this.state.contacts.some(contact => contact.name.toLowerCase() === formData.name.toLowerCase());
    
    if(duplicate) {
      alert(`${formData.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {return {contacts: [...prevState.contacts, formData]}});
  }

  handleDeleteContact = (contactId) => {
    this.setState({contacts: this.state.contacts.filter(contact => contact.id !== contactId)});
  }

  handleChangeFilter = (event) => {
    this.setState({filter: event.target.value});
  }

  render() {

    const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.trim().toLowerCase()));

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleAddContact}/>

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChangeFilter}/>
        <ContactList contacts={filteredContacts} onDelete={this.handleDeleteContact}/>
      </div>
    );
  }
}
