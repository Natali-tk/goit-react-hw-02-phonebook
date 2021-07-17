import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitContact = ({ name, number }) => {
    const addContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.state.contacts.find(
      contact => contact.name.toLowerCase() === addContact.name.toLowerCase(),
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [addContact, ...contacts],
        }));
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  changeFilterInput = e => {
    this.setState({ filter: e.target.value });
  };
  onFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitContact={this.submitContact} />
        <h2>Contacts </h2>
        <Filter value={filter} changeFilterInput={this.changeFilterInput} />
        <ContactList
          contacts={this.onFilteredContacts()}
          onDeleteClick={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
