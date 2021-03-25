import React from 'react'
import './App.css'
import BookList from "./Component/bookList";
import Search from "./Component/search";
import * as BooksAPI from "./BooksAPI";
import  { Route, Link } from 'react-router-dom';

const selectNames = [
  {id: 1, name: 'currentlyReading'},
  {id: 2, name: 'wantToRead'},
  {id: 3, name: 'read'}
];

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  }

  componentDidMount() {
      const self = this;
    BooksAPI.getAll()
        .then((response) => {
          self.setState({books: response});
        })
  }

  updateShelfHandler = (book, shelf) => {
      this.setState(({ books }) => ({
          books: [
                  ...books.filter(({ id }) => id !== book.id),
                  { ...book, shelf: shelf }
              ],
      }));
      BooksAPI.update(book, shelf);
  }

  render() {

    return (
      <div className="app">
        <Route path="/search" render={(props) => (
            <Search
                {...props}
                books={this.state.books}
                name={selectNames.forEach(n => n.name)}
                updateShelfHandler={this.updateShelfHandler}
            />
        )} />
          <div className="list-books">
            <Route exact path="/" render={() => (
                <>
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <BookList
                      books={this.state.books}
                      updateShelfHandler={this.updateShelfHandler}
                      name={selectNames.forEach(n => n.name)}
                  />
                </>
            )} />
            <div className="open-search">
              <Link to='search'><button>Add a book</button></Link>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
