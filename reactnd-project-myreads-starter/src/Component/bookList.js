import React from 'react';
import BookShelf from "./bookShelf";

class BookList extends React.Component {

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
                                        name={this.props.name && this.props.name === 'currentlyReading'}
                                        updateChange={(e) => this.props.updateShelfHandler(details, e.target.value)}
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
                                        updateChange={(e) => this.props.updateShelfHandler(details, e.target.value)}
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
                                        values={details.shelf || 'none'}
                                        updateChange={(e) => this.props.updateShelfHandler(details, e.target.value)}
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