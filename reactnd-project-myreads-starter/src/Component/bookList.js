import React from 'react';
import BookShelf from "./bookShelf";
import * as BooksAPI from "../BooksAPI";

class BookList extends React.Component {

    state = {
        shelf : ''
    }

    handleChange = (e) => {
        this.setState({shelf: e.target.value}, ()=>{
            console.log(this.state.shelf)
        })

    }




    render() {

        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.map(details => details.shelf && details.shelf === 'currentlyReading' && (
                                    <BookShelf
                                        key={details.id}
                                        bookTitle={details.title}
                                        bookAuthor={details.authors}
                                        image={details.imageLinks.thumbnail}
                                        values={details.shelf}
                                        change={this.handleChange}
                                        name={this.props.name && this.props.name === 'currentlyReading'}
                                        updateChange={(e) => this.props.updateShelfHandler(details, this.state.shelf)}
                                    />
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.map(details => details.shelf && details.shelf === 'wantToRead' && (
                                    <BookShelf
                                        key={details.id}
                                        bookTitle={details.title}
                                        bookAuthor={details.authors}
                                        image={details.imageLinks.thumbnail}
                                        values={details.shelf}
                                        change={this.handleChange}
                                        updateChange={(e) => this.props.updateShelfHandler(details, this.state.shelf)}
                                        name={this.props.name && this.props.name === 'wantToRead'}
                                    />
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.map(details => details.shelf && details.shelf === 'read' && (
                                    <BookShelf
                                        key={details.id}
                                        bookTitle={details.title}
                                        bookAuthor={details.authors}
                                        image={details.imageLinks.thumbnail}
                                        values={details.shelf}
                                        change={this.handleChange}
                                        updateChange={(e) => this.props.updateShelfHandler(details, this.state.shelf)}
                                        name={this.props.name && this.props.name === 'read'}
                                    />
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookList;