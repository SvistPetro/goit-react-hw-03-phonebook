import { Component } from "react";
import { Form } from 'components/Form/Form';
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";

export class App extends Component {

  state = {
    contacts: [],
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

  componentDidMount (){
    const contacts = localStorage.getItem('contacts');
    const parcedContacts = JSON.parse(contacts);

    if (parcedContacts) {
      this.setState({contacts: parcedContacts});
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
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
