import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputsChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitHandler(this.state);

    this.reset();
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
          ></input>
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleInputsChange}
          ></input>
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
