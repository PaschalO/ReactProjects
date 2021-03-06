import React from 'react'
import './App.css'
import BookList from "./Component/bookList";
import Search from "./Component/search";
import * as BooksAPI from "./BooksAPI";
import  { Route, Link } from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */

        /*
        currentlyReading: [
          {
            id: '1',
            title: 'To Kill a Mockingbird',
            authors: ['Harper Lee'],
            imageLinks:
                {thumbnail: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"},
            shelf: 'currentlyReading'
          },
          {
            id: '2',
            title: 'Ender\'s Game',
            authors: ['Orson Scott Card'],
            imageLinks:
                {thumbnail: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'},
            shelf: 'currentlyReading'
          }
        ],

        wantToRead: [
          {
            id: '3',
            title: '1776',
            authors: ['David McCullough'],
            imageLinks:
                {thumbnail: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'},
            shelf: 'wantToRead'
          },
          {
            id: '4',
            title: 'Harry Potter and the Sorcerer\'s Stone',
            authors: ['J.K. Rowling'],
            imageLinks:
                {thumbnail: 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api'},
            shelf: 'wantToRead'
          }
        ],

        read: [
          {
            id: '5',
            title: 'The Hobbit',
            authors: ['J.R.R. Tolkien'],
            imageLinks:
                {thumbnail: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api'},
            shelf: 'read'
          },
          {
            id: '6',
            title: 'Oh, the Places You\'ll Go',
            authors: ['Seuss'],
            imageLinks:
                {thumbnail: 'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api'},
            shelf: 'read'
          },
          {
            id: '7',
            title: 'The Adventures of Tom Sawyer',
            authors: ['Mark Twain'],
            imageLinks:
                {thumbnail: 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'},
            shelf: 'read'
          }
        ],

         */

        showSearchPage: false,
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((response) => {
                this.setState({book: response});
            })
    }

    mergeDisplay = () => {
        const currentlyReading = this.state.book && this.state.book.filter(b => b.shelf === 'currentlyReading');
        const wantToRead = this.state.book && this.state.book.filter(b => b.shelf === 'wantToRead');
        const read = this.state.book && this.state.book.filter(b => b.shelf === 'read');

        this.setState({
            currentlyReading: [...this.state.currentlyReading, ...currentlyReading],
            wantToRead: [...this.state.wantToRead, ...wantToRead],
            read: [...this.state.read, ...read]
        }, () => {
            console.log(this.state.currentlyReading)
        });
    }

    updateShelfHandler = (book, shelf) => {
        // this will remove the book
        this.setState((previousState) => ({
            book: previousState.book.filter(b => b.id !== book.id)
        }))

        BooksAPI.update(book, shelf);

        //adding the updated book
        this.setState((previousState) => ({
            book: previousState.book.map(b => {
                if (b.id === previousState.id && b.shelf !== shelf) {
                    return {...b, shelf}
                }
            })
        }), ()=> {
            this.mergeDisplay();
        })
    }
    I
    render() {

        return (
            <div className="app">
                <Route exact path="/search" render={() => (
                    <Search
                        book={this.state.book}
                    />
                )} />
                <div className="list-books">
                    <Route path="/" render={() => (
                        <>
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <BookList
                                current_reading={this.state.currentlyReading}
                                want_to_read={this.state.wantToRead}
                                read={this.state.read}
                                updateShelfHandler={this.updateShelfHandler}
                            />
                        </>
                    )} />

                    <div className="open-search">
                        <Link to='/search'><button>Add a book</button></Link>
                    </div>
                    <button onClick={this.mergeDisplay}>Merge</button>
                </div>
            </div>
        )
    }
}

export default BooksApp
