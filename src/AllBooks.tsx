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
  id: number
  title: string;
  author: string;
}

export function DisplayAllBooks() {
  const [books, setBooks] = useState<Book[]>([])
  const [search, setSearch] = useState("")
  const [mode, setMode] = useState("Loading")
  let   [page, SetPage] = useState(2)
//<> inside will be a type in this case an array of books. use state always puts things in arrays 
  useEffect(() => {
    setMode("loading")
    fetch(`http://localhost:3001/books?search=${search}`)
      .then(response => response.json())
      .then(json => setBooks(json.books))
      .then(() => { setMode('Ready') })
  }, [search]);

  function LoadMoreBooks() {
    fetch(`http://localhost:3001/books?page=${page}&search=${search}`)
      .then(response => response.json())
      .then(json => setBooks(books.concat(json.books)))
      .then(() => { SetPage (page +1)})
  
  }

  return (
    
    <div>
      <h2>Book List</h2>

      <Link to="/books/add-books">Add Books</Link>
      <label>
        <input type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} />
      </label>
      {mode === 'Ready' && <SearchResults books={books}></SearchResults>}
      {mode === 'loading' && <p>Loading</p>}
     <button onClick = {LoadMoreBooks} >Load more books</button>
    </div>
  );
}

interface BookProps {
  book: Book;
}
const BookListItem = ({ book }: BookProps) => {
  return <li><Link to={`/books/${book.id}`}>{book.author}, {book.title}"</Link></li>
};

interface SearchResultProps {
  books: Book[];

}

export function SearchResults({ books }: SearchResultProps) {
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


