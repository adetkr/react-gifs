import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component { // A stateful component needs to constructor(props) { // be promoted into a class

constructor(props) {
  super(props);
  this.state = { selected_gif: "xT5LMzIK1AdZJ4cYW4", gif_list: [] }; // defines initial state }

}

handleSelectedGifChange = (id) => {
this.setState({ selected_gif: id });

}

handleChange = (event) => {
console.log(event.target.value);

        fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target.value}&api_key=tCKxs87GC4druAYhAbzzM6KzgdtQXTnk&limit=10`)
        .then(res =>  res.json())
        .then((json) => {
          this.setState({ gif_list: json.data.map(gif => {
         return gif['id']
      }) })
        })
        .catch(console.log);

}

render() {

  return (
    <div>
    <div className="left-scene">
          <div className="form-control form-search">
            <SearchBar handleChange={this.handleChange} />
          </div>

          <div className="selected-gif">
                <div className="gif">
                <Gif id={this.state.selected_gif} />

                </div>
          </div>
    </div>
    <div className="right-scene">

      <GifList gif_list={this.state.gif_list} handleSelectedGifChange={this.handleSelectedGifChange}/>

    </div>
    </div>
  );
}
}

export default App;
