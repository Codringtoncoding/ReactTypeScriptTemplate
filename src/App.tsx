import React from 'react';
import { Home } from './homePage';
import { AllBooks, DisplayAllBooks } from './AllBooks';
import { BooksPage} from './bookpage';
import { MemberPage } from './memberPage';
import { AllMembers, MemberId } from './members';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books/1">Book</Link>
            </li>
            <li>
              <Link to="/books">All books</Link>
            </li>
            <li>
              <Link to="/members/1">Member</Link>
            </li>
            <li>
              <Link to="/members">All members</Link>
            </li>
          </ul>
        </nav>
        <header className="App-header">
        <img src="https://images.unsplash.com/photo-1509291985095-788b32582a81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" className="App-logo" alt="logo" />
      </header>
        <Switch>

          <Route path="/books/:id">
            <BooksPage />
          </Route>
          <Route path="/books">
            <AllBooks /> {<DisplayAllBooks />}
          </Route>
          <Route path="/members/:id">
            <MemberPage /> {<MemberId />}
          </Route>
          <Route path="/members">
            <AllMembers />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <footer>app built by India and Humphrey</footer>
      </div>
    </Router>
  );
}


export default App;
