import React, {Component} from "react";
import PropTypes from 'prop-types';


export  default class ContactList extends Component{
   
    render() {
    return (
      <ul>
        {this.props.contacts.map((el) => (
          <li key={el.id}>
            {el.name}: {el.number}
            
          </li>
        ))}
      </ul>
    );
  }
     
}



ContactList.propTypes = {
    contacts: PropTypes.array,
    
}
