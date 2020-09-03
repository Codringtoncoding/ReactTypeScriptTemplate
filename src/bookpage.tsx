import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export function BooksPage() {
  let { id } = useParams();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    fetch(`http://localhost:3001/books/${id}`)
      .then(response => response.json())
      .then(json => setBook(json.book))
  }, []);

  return (
    <section>
      <h2>Singluar Book</h2>
      <h3>The current Book Id is: {id}</h3>
      <h2>{book?.title}</h2>
      <h3>{book?.author}</h3>
      <img src = {book?.cover_image_url}/>
    </section>

  );
}

interface Book {
  id: string
  title: string
  author: string
  cover_image_url: string
}


//askmike about the question mark.

