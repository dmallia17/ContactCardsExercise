import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';

var defaultString = "Not Provided.";

// ContactCard component
class ContactCard extends Component {
  render() {
    return <div id={this.props.contactName} className="contactCard">
      <h3>Name: {this.props.contactName}</h3>
      <h3>Mobile: {this.props.mobileNumber}</h3>
      <h3>Work: {this.props.workNumber ? this.props.workNumber: defaultString}</h3>
      <h3>Email: {this.props.email}</h3>
    </div>;
  }
}

// Define ContactCard proptypes
ContactCard.propTypes = {
  contactName : PropTypes.string.isRequired,
  mobileNumber : PropTypes.number.isRequired,
  workNumber : PropTypes.number, 
  email : PropTypes.string.isRequired,
}

class App extends Component {
  render() {
    return <div>
      <h1 id="title">Your Contacts: </h1>
      <div id="contactCardGallery">
        <ContactCard contactName="John Doe" mobileNumber="8675309" email="john@doe.com"/>
        <ContactCard contactName="Jane Doe" mobileNumber="1234567" workNumber="9876543" email="jane@doe.com"/>
        <ContactCard contactName="Jack Doe" mobileNumber="7654321" email="jack@doe.com"/>
      </div>
    </div>;
  }
}

export default App;
