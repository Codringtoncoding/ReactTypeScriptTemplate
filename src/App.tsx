import React from 'react';
import { Home } from './homePage';
import { AllBooks, DisplayAllBooks } from './AllBooks';
import { AddNewBook } from './AddNewBook';
import { BooksPage } from './bookpage';
import { MemberPage } from './memberPage';
import { AllMembers } from './members';
import { AddNewMember } from './AddNewMember';
import './App.scss';
import './NavBar.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <header className="App-header">
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
        <img src="https://images.unsplash.com/photo-1509291985095-788b32582a81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route path="/books/add-books">
          <AddNewBook />
        </Route>
        <Route path="/books/:id">
          <BooksPage />
        </Route>

        <Route path="/books">
          <AllBooks /> {<DisplayAllBooks />}
        </Route>
        <Route path="/members/add-member">
          <AddNewMember />
        </Route>

        <Route path="/members/:id">
          <MemberPage />
        </Route>
        <Route path="/members">
          <AllMembers />
        </Route>



        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <footer>app built by India and Humphrey</footer>
    </Router>
  );
}


export default App;
