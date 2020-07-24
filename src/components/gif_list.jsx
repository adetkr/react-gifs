import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component { // A stateful component needs to constructor(props) { // be promoted into a class

constructor(props) {
  super(props);
  this.state = { clicked: false }; // defines initial state }
}


render() {

  return (

    <div className="gif-list">

      { this.props.gif_list.map(id => {

        return <Gif id={id} key={id} handleClick={this.props.handleSelectedGifChange}/>

      })}


    </div>
  );
}
}

export default GifList;
