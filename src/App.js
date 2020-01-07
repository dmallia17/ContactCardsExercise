import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';

// ContactCard component
class ContactCard extends Component {
  render() {
    return <div id={this.props.contactName}>
      <h3>Name: {this.props.contactName}</h3>
      <h3>Mobile: {this.props.mobileNumber}</h3>
      <h3>Work: {this.props.workNumber}</h3>
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
    return <ContactCard contactName="John Doe" mobileNumber="8675309" email="john@doe.com"/>
  }
}

export default App;
