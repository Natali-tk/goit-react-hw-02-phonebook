import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
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
    this.props.onSubmitContact(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.lable}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={this.handleChange}
            required
          />
        </label>

        <label className={s.lable}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            onChange={this.handleChange}
            required 
          />
        </label>

        <button type="submit" className={s.submitBtn}>Add contact</button>
      </form>
    );
  }
}
ContactForm.PropsType = {
    onSubmit:PropTypes.func.isRequired,
}

export default ContactForm;
