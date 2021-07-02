import React, { Component } from "react";
import PropsType from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    this.props.onSubmitContact(contact);
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={this.handleChange}
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            onChange={this.handleChange}
            required 
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
ContactForm.PropsType = {
    onSubmit:PropsType.func.isRequired,
}

export default ContactForm;
