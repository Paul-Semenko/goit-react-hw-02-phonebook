import { Component } from "react";
import { v4 as uuid } from "uuid";
import { ContactForm } from "./components/ContactForm/ContactForm";
import ContactList  from './components/ContactList/ContactList';



class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
    
  }
  
  
  formSubmitHandler = (obj) => {
    if (!this.state.contacts.find((el) => el.name === obj.name)) {
      this.setState((prevState) => ({
    
        contacts: [...prevState.contacts, { obj, id: uuid() }],
      }));
    } else {
      alert(`${obj.name} is already in contacts`);
    }
  };




  render() {
    
    return (
      <div>
        
        <ContactForm
          onSubmit={this.formSubmitHandler}
        />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList />
      </div>
    );

  }
}

    
  


export default App