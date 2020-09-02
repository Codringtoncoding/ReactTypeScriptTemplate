import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export function BooksPage() {
    return (
      <div>
        <h2>Singluar Book</h2>
      </div>
    );
  }

 export function BookId() {
  let { id } = useParams();
  return (
      <div>
          <h3>The current Book Id is: {id}</h3>
      </div>
  );
}