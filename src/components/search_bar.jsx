import React, { Component } from 'react';

class SearchBar extends Component { // A stateful component needs to constructor(props) { // be promoted into a class

constructor(props) {
  super(props);
  this.state = { clicked: false }; // defines initial state }
}


render() {

  return (
<input onChange={this.props.handleChange} type="text" />
  );
}
}

export default SearchBar;
