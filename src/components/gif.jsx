import React, { Component } from 'react';

class Gif extends Component { // A stateful component needs to constructor(props) { // be promoted into a class

constructor(props) {
  super(props);

}

shouldComponentUpdate(nextProps, nextState) {
    this.props.id !== nextProps.id
}


render() {

  return (

    <img className="gif" src={`https://media2.giphy.com/media/${this.props.id}/giphy/200.gif`} onClick={()=>this.props.handleClick(this.props.id)}/>

  );
}
}

export default Gif;
