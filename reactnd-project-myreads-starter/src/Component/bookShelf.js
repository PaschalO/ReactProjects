import React from 'react';

class BookShelf extends React.Component {

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${this.props.image}`}}></div>
                            <div className="book-shelf-changer">
                                <select value={this.props.values}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{this.props.bookTitle}</div>
                        <div className="book-authors">{this.props.bookAuthor}</div>
                    </div>
                </li>
            </React.Fragment>
        );
    }
}

export default BookShelf;