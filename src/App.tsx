import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="App">
        <nav className = "navbar">
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books/:id">singular book</Link>
            </li>
            <li>
              <Link to="/books">list of books</Link>
            </li>
            <li>
              <Link to="/members/:id">member</Link>
            </li>
            <li>
              <Link to="/memmbers">list of members</Link>
            </li>
          </ul>
      </nav>
        <header className="App-header">
          <img src="https://images.unsplash.com/photo-1509291985095-788b32582a81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <footer>app built by India and Humphrey</footer>
      </div>
    </Router>
  );
}

export default App;
