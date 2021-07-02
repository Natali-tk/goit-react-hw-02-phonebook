import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

class App extends Component{
  state = {
  contacts: [
    ],
  // filter: ''
  }
  submitContact = (data) => {
    const { contacts } = this.state;

    const addContact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    if (contacts.find(contact => contact.name === addContact.name)) {
      alert(`${addContact.name} is already in contacts!`);
      return;
    }
    this.setState({
      contacts: [...contacts, addContact],
    });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(i => i.id !== id),
    }));
  };
  
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitContact={this.submitContact} />
        <h2>Contacts </h2>
        {/* <Filter  /> */}
        <ContactList contacts={this.contacts} onDeleteClick={this.deleteContact}/>
      </div>
    );
  }
}
export default App;
