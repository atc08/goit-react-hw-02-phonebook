import { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = addedContact => {
    console.log(addedContact);
    // const additionalContact = {
    //   id: uuidv4(),
    //   name: '',
    //   number: '',
    // };

    this.setState(({ contacts }) => ({
      contacts: [addedContact, ...contacts],
    }));
    console.log(this.state.contacts);
    console.log(addedContact);
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    // const { contacts, filter } = this.state;
    const filterContacts = this.getFilteredContact();

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm
          // onSubmitHandler={this.formSubmitHandler}
          onSubmit={this.addContact}
        />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onchangeFilter={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          ondeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
