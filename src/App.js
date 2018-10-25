import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Comments from './components/Comments';
import Posts from './components/Posts';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/comments" component={Comments} />
          <Route path="/posts" component={Posts} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
