import React, { Component } from 'react';

//Components 
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from '../presentational/PhotoContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello World!</h1>
        <Search />
        <Nav />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
