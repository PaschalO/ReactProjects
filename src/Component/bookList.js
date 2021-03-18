import React from 'react';
import BookShelf from "./bookShelf";

class BookList extends React.Component {

    state = {
        current_reading_value: 'currentlyReading',
        want_to_read_value: 'wantToRead',
        read_value: 'read',
        current_reading: [
            {
                category: 1,
                bookTitle: 'To Kill a Mockingbird',
                bookAuthor: 'Harper Lee',
                image: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
            },
            {
                category: 1,
                bookTitle: 'Ender\'s Game',
                bookAuthor: 'Orson Scott Card',
                image: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
            }
        ],

        want_to_read: [
            {
                category: 2,
                bookTitle: '1776',
                bookAuthor: 'David McCullough',
                image: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")'
            },
            {
                category: 2,
                bookTitle: 'Harry Potter and the Sorcerer\'s Stone',
                bookAuthor: 'J.K. Rowling',
                image: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")'
            }
        ],

        read: [
            {
                category: 3,
                bookTitle: 'The Hobbit',
                bookAuthor: 'J.R.R. Tolkien',
                image: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")'
            },
            {
                category: 3,
                bookTitle: 'Oh, the Places You\'ll Go',
                bookAuthor: 'Seuss',
                image: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")'
            },
            {
                category: 3,
                bookTitle: 'The Adventures of Tom Sawyer',
                bookAuthor: 'Mark Twain',
                image: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")'
            }
        ],
    }

    changeHandler = (details) => {
        // check if the book exist in any of the shelves i.e currently reading, want to read & read
        // get the array for each element and do the comparison in the above
        // get the value of the selected. If it is the same do nothing. If not, change it, remove it from that array
        // and add it to the new array

    }

    render() {
        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.current_reading.map(details => (
                                    <BookShelf
                                        key={details.bookTitle}
                                        bookTitle={details.bookTitle}
                                        bookAuthor={details.bookAuthor}
                                        image={details.image}
                                        values={this.state.current_reading_value}
                                        category={details.category}
                                    />
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.want_to_read.map(details => (
                                    <BookShelf
                                        key={details.bookTitle}
                                        bookTitle={details.bookTitle}
                                        bookAuthor={details.bookAuthor}
                                        image={details.image}
                                        values={this.state.want_to_read_value}
                                        category={details.category}
                                    />
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.read.map(details => (
                                    <BookShelf
                                        key={details.bookTitle}
                                        bookTitle={details.bookTitle}
                                        bookAuthor={details.bookAuthor}
                                        image={details.image}
                                        values={this.state.read_value}
                                        category={details.category}
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