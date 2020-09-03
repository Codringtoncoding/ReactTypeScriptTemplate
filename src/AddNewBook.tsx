import React, { useState, useEffect, ChangeEvent, FormEvent, } from 'react';
import { SearchResults } from './AllBooks'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
// import { setUncaughtExceptionCaptureCallback } from 'process';

// export function SearchByISBN() {
//     const [searchByIsbn, setSearchByIsbn] = useState("")

//     useEffect(() => {
//         fetch(`http://localhost:3001//by-isbn/${isbn}`)
//             .then(response => response.json())
//             .then(json => {
//                 setTitle(json.title)
//                 setAuthor(json.author)
//                 setPublu

//     }, []);
// };

export function AddNewBook() {
    const [title, SetTitle] = useState("")
    const [author, SetAuthor] = useState("")
    const [publisher, setPublisher] = useState("")
    const [coverImage, SetCoverImage] = useState("")
    const [isbn, setSearchByIsbn] = useState("")
    const [datepublished, setDatePublished] = useState("")

    const history = useHistory();
    function submitForm(event: FormEvent) {
        event.preventDefault();
        const data = {
            title: title,
            author: author,
            datepublished: datepublished,
            isbn: isbn,
            publisher: publisher,
            coverimage: coverImage
        }
        fetch("http://localhost:3001/books/new", {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "content-Type": "application/json"
            }
        })
            .then(() => { history.push("/books") })
    }
    const setSearch = (event: FormEvent) => {
        event.preventDefault();
        fetch(`http://localhost:3001/books/by-isbn/${isbn}`)
            .then(response => response.json())
            .then(json => {
                SetTitle(json.title)
                SetAuthor(json.author)
                setDatePublished(json.publishDate)
                setPublisher(json.publisher)
                SetCoverImage(json.coverImageUrl)
                
            })
    }

    return (

        <section>
            <form onSubmit={setSearch}>
                <label htmlFor="isbn">Search By
                        <input type="text" value={isbn} onChange={event => { setSearchByIsbn(event.target.value) }} />

                </label>
                <button>Search</button>
            </form>
            <form onSubmit={submitForm}>
                <label htmlFor="Publisher"> Publisher
                        <input type="text" name="Publisher" value={publisher} onChange={event => setPublisher(event.target.value)} />
                </label>
                <label htmlFor="Title"> Title
                        <input type="text" name="title" value={title} onChange={event => SetTitle(event.target.value)} />
                </label>
                <label htmlFor="Author"> Author
                        <input type="text" name="author" value={author} onChange={event => SetAuthor(event.target.value)} />
                </label>
                <label htmlFor="Cover_Image_url"> Cover Image Url
                        <input type="text" name="cover_image_url" value={coverImage} onChange={event => SetCoverImage(event.target.value)} />
                </label>
                <label>
                    <input type="submit" name="submit" />
                </label>
            </form>
        </section>
    );
};


    //1. create a form the gathers user input about the book.
    //2. send the data from this form to a function that sends the data via post that adds a new book to the api database



