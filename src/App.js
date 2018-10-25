import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Comments from './components/Comments';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/comments" component={Comments} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
