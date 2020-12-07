import { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
// import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmitHandler={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList contacts={contacts} ondeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
