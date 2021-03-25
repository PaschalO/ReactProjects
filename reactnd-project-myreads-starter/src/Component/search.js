import React from 'react';
import BookShelf from "./bookShelf";
import { Link } from 'react-router-dom';
import * as BooksAPI from "../BooksAPI";

class Search extends React.Component {

    /*
    static propTypes = {

    }

     */

    state = {
        query: '',
        searchedBooks: []
    }

    updateQuery = (query) => {
        this.setState({query});

        if (this.state.query.length > 0) {
            BooksAPI.search(query.trim())
                .then((response) => {
                    if (Array.isArray(response)) {
                        this.setState({
                            searchedBooks: response
                        })
                    }

                })

            const filteredResults = this.state.searchedBooks.map(result => {
                const book = this.props.books.find(book => book.id === result.id);
                this.setState(previousState => ({
                        searchedBooks: [
                            ...previousState.searchedBooks,
                            book
                        ]
                    })
                )
            });

        }

        else {
            this.setState({searchedBooks: []})
        }

    }

    render() {
        const books = this.state.searchedBooks.map(book => {
            const imageUrl = book.imageLinks && book.imageLinks.thumbnail;
            return (
                <BookShelf
                    key={book.id}
                    bookTitle={book.title}
                    bookAuthor={book.authors.join(", ")}
                    image={imageUrl}
                    values={book.shelf || 'none'}
                    name={this.props.name}
                    updateChange={(e) => this.props.updateShelfHandler(book, e.target.value)}
                />
            );
        })

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text"
                               placeholder="Search by title or author"
                               value={this.state.query}
                               onChange={(e) => this.updateQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;