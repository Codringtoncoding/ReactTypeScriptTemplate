import React, { useState, useEffect, ChangeEvent } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function AllBooks() {
  return (
    <div>
      <h2>All Books</h2>
    </div>
  );
}

interface Book {
  title: string;
  author: string;
}

export function DisplayAllBooks() {
  const [books, setBooks] = useState<Book[]>([])
  const [search, setSearch] = useState("")
  const [mode, setMode] = useState("Loading")
//<> inside will be a type in this case an array of books. use state always puts things in arrays 
  useEffect(() => {
    setMode("loading")
    fetch(`http://localhost:3001/books?search=${search}`)
      .then(response => response.json())
      .then(json => setBooks(json.books))
      .then(() => { setMode('Ready') })
  }, [search]);

  return (
    <div>
      <h2>Book List</h2>
      <label>
        <input type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} />
      </label>
      {mode === 'Ready' && <SearchResults books={books}></SearchResults>}
      {mode === 'loading' && <p>Loading</p>}
    </div>
  );
}

interface BookProps {
  book: Book;
}
const BookListItem = ({ book }: BookProps) => {
  return <li>{book.author}, {book.title}</li>
};

interface SearchResultProps {
  books: Book[];

}

function SearchResults({ books }: SearchResultProps) {
  console.log()
  const bookList = books.map((book) => {
    return <BookListItem book={book}></BookListItem>
  })
  if (books.length === 0) {
    return (
      <p>No Results</p>
    )
  }
  return (
    <section>
      <h2>All Books</h2>
      <ul>
        {bookList}
      </ul>
    </section>
  )
}


