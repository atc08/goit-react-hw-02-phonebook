import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    id: uuidv4(),
    name: '',
    number: '',
  };

  handleInputsChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
      id: uuidv4(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };
  // handleSubmit = e => {
  //   e.preventDefault();

  //   this.props.onSubmitHandler(this.state);

  //   this.reset();
  // };

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    const { name } = this.state.name;
    const { number } = this.state.number;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputsChange}
            placeholder="Enter name"
          ></input>
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputsChange}
            placeholder="123-45-67"
          ></input>
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
